import {
  useReducer,
  createContext,
  ReactNode,
  useEffect,
  Dispatch,
  useContext,
  useState,
  SetStateAction,
} from "react";

import { ICart, ICartAction, ICartItem } from "./intefaces/cart";
import { useRouter } from "next/router";

import { api } from "src/services/api";

interface ProvidersProps {
  children: ReactNode;
}

const initialState: ICart = {
  items: [],
};

const CartContext = createContext<
  | {
      state: ICart;
      dispatch: Dispatch<ICartAction>;
      CheckCart: () => Promise<void>;
      CreateCart(item: ICartItem | undefined, quantity: number | undefined): Promise<void>;
      AddCart(guid: string, item: ICartItem, quantity: number | undefined): Promise<void>;
      RemoveCart: (guid: string | undefined) => Promise<void>;
      PlusCart: (item: ICartItem, quantity: number | undefined) => Promise<void>;
      MinusCart: (item: ICartItem) => Promise<void>;
      AddQuantity(item: ICartItem, quantity: number | undefined): Promise<void>;
      SubtractQuantity: (item: ICartItem) => void;
      ResetCart: () => void;
      setCartLoading: Dispatch<SetStateAction<boolean>>;
      AddProductInCart: (product: ICartItem, quantity: number | undefined) => Promise<void>
      cartLoading: boolean;
      error: string;
    }
  | undefined
>(undefined);

function ReducerCart(state: ICart, action: ICartAction): ICart {
  const payload = action.payload;

  switch (action.type) {
    case "NewItem":
      const newItem = action.payload as ICartItem;

      const findExistingItemInCart = state.items.find(
        (item) => item.id === newItem.id
      );

      if (findExistingItemInCart) {
        return state;
      }

      const newListCart: ICartItem[] = [payload as ICartItem, ...state.items];

      return {
        items: newListCart,
      };
    case "UpdateItem":
      const newListUpdate: ICartItem[] = state.items.map((item) => {
        if (item.id === (payload as ICartItem).id) {
          return payload as ICartItem;
        }

        return item;
      });

      return {
        items: newListUpdate,
      };
    case "DeleteItem":
      const newCartList = state.items.filter(
        (user: ICartItem) => user.id !== payload
      );

      return {
        items: newCartList,
      };
    case "GeItems":
      return {
        items: payload as ICartItem[],
      };
    case "CleanCart":
      localStorage.removeItem("guid");

      return {
        items: [],
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CartProvider({ children }: ProvidersProps) {
  const [error, setError] = useState("");
  const [cartLoading, setCartLoading] = useState(false);
  const [state, dispatch] = useReducer(ReducerCart, initialState);

  const router = useRouter();

  async function CheckCart() {
    setCartLoading(true);
    setError("");

    const guidCart = localStorage.getItem("guid");

    if (guidCart) {
      const itensApi: any = await api.post("cart/check", {
        guid: JSON.parse(guidCart),
      });

      if (itensApi?.response?.data?.error) {
        ResetCart();
        setCartLoading(false);
        return;
      }

      const newCart = itensApi?.data?.itemsCart?.length > 0 ? itensApi.data.itemsCart : [];

      localStorage.setItem("guid", JSON.stringify(itensApi.data.cartGuid));

      dispatch({
        payload: newCart,
        type: "GeItems",
      });

      setCartLoading(false);
    } else {
      await CreateCart(undefined, 0);

      dispatch({
        payload: [],
        type: "GeItems",
      });

      setCartLoading(false);
    }
  }

  async function CreateGuid() {
    setError("");

    const { data } = await api.post("cart/create");

    return data.guid;
  }

  async function CreateCart(item: ICartItem | undefined, quantity: number | undefined) {
    setError("");

    try {
      if (!item) {
        const createdGuid = await CreateGuid();

        localStorage.setItem("guid", JSON.stringify(createdGuid));

        return;
      }

      const guidAlredyExist = localStorage.getItem("guid");

      if (guidAlredyExist) {
        const guidParsed = JSON.parse(guidAlredyExist);

        return await AddCart(guidParsed, item, quantity);
      }
      const createdGuid = await CreateGuid();

      localStorage.setItem("guid", JSON.stringify(createdGuid));

      return await AddCart(createdGuid, item, quantity);
    } catch (e) {
      CheckCart();
      throw e;
    }
  }

  async function AddCart(guid: string, item: ICartItem, quantity: number | undefined) {
    setError("");

    try {
      const response: any = await api.post("/cart/add", {
        guid,
        id: item.id,
        isVariation: item.isVariation,
        quantity,
      });

      if (response?.response?.data?.error) {
        throw response;
      }

      await CheckCart();
    } catch (e) {
      CheckCart();
      throw e;
    }
  }

  async function RemoveCart(guid: string | undefined) {
    setError("");

    try {
      const response: any = await api.post("cart/remove", { guid: guid || "" });

      if (response?.response?.data?.error) {
        throw response;
      }

      await CheckCart();
    } catch (e) {
      CheckCart();
      throw e;
    }
  }

  async function PlusCart(item: ICartItem, quantity: number | undefined) {
    setError("");

    console.log(item)

    try {
      const response: any = await api.post("cart/plus", { guid: item.guid, quantity });

      if (response?.response?.data?.error) {
        throw response;
      }

      await CheckCart();
    } catch (e) {
      CheckCart();
      throw e;
    }
  }

  async function MinusCart(item: ICartItem) {
    setError("");

    try {
      const response: any = await api.post("/cart/minus", { guid: item.guid });

      if (response?.response?.data?.error) {
        throw response;
      }

      await CheckCart();
    } catch (e) {
      CheckCart();
      throw e;
    }
  }

  function SubtractQuantity(item: ICartItem) {
    if (cartLoading) {
      return;
    }

    setCartLoading(true);

    const newQuantity = item.quantity - 1;

    if (newQuantity === 0) {
      setCartLoading(false);
      return;
    }

    MinusCart(item);

    setCartLoading(false);
  }

  async function AddQuantity(item: ICartItem, quantity: number | undefined) {
    if (cartLoading) {
      return;
    }

    setCartLoading(true);

    const guidToLocalStorage = localStorage.getItem("guid");

    if(guidToLocalStorage) {
      await PlusCart(item, quantity);
    
      setCartLoading(false);

      return;
    }

    await AddProductInCart(item, quantity)

    setCartLoading(false);
  }

  function ResetCart() {
    localStorage.removeItem("guid");

    dispatch({
      payload: [],
      type: "GeItems",
    });

    setError(
      "Desculpe houve um erro ao processar os dados do seu carrinho, por favor tente adicionar os itens novamente."
    );
  }

  async function AddProductInCart(product: ICartItem, quantity: number | undefined) {
    const item = {
      id: product.id,
      titulo: product.titulo,
      preco: product.precoPromo?.toString() || product.preco.toString(),
      precoPromo: product.precoPromo?.toString(),
      isPromotion: product.isPromotion,
      imagem: product.imagem,
      quantity: 1,
      isVariation: false,
      url: product.url,
      sku: product.sku,
    };

    setCartLoading(true);

    const guidToLocalStorage = localStorage.getItem("guid");

    if (state.items.length === 0 && !guidToLocalStorage) {

      await CreateCart(item, quantity);

      setCartLoading(false);
      return;
    }

    if (guidToLocalStorage) {
      const parsedGuid = JSON.parse(guidToLocalStorage);

      const itemExist = state.items.find((state) => item.id === state.id);

      if (itemExist) {
        setCartLoading(false);
        return;
      }

      await AddCart(parsedGuid, item, quantity);

      setCartLoading(false);

      return
    }
  }

  useEffect(() => {
    (async () => {
      if (process.browser) {
        await CheckCart();
      }
    })();
  }, [router]);

  return (
    <CartContext.Provider
      value={{
        state,
        error,
        dispatch,
        AddCart,
        CreateCart,
        cartLoading,
        setCartLoading,
        AddQuantity,
        SubtractQuantity,
        CheckCart,
        ResetCart,
        PlusCart,
        MinusCart,
        RemoveCart,
        AddProductInCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useUCart() must be used within a CartProvider");
  }
  return context;
}

export { CartProvider, useCart };
