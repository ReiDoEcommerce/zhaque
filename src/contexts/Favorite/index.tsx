import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product, ProductListItem } from "src/services/shop/get";

interface FavoriteContextType {
  favorites:  ProductListItem[];
  setFavorites: Dispatch<SetStateAction<ProductListItem[]>>;
  DeleteFavorite(card: ProductListItem): void;
  AddFavorite(card: ProductListItem): void;
}

const FavoriteContext = createContext({} as FavoriteContextType);

function FavoriteProvider({ children }: any) {
  const [favorites, setFavorites] = useState<ProductListItem[]>([]);

  function DeleteFavorite(card: ProductListItem) {
    if (favorites.length > 0) {
      setFavorites((oldState) => {
        const listFavoritesDeleted = oldState.filter(
          (favoriteItem) => favoriteItem.id !== card.id
        );

        localStorage.setItem(
          "favoriteProducts",
          JSON.stringify(listFavoritesDeleted)
        );

        return listFavoritesDeleted;
      });
    }
  }

  function AddFavorite(card: ProductListItem) {
    setFavorites((oldState) => {
      const createNewFavoriteList = [...oldState, card];

      localStorage.setItem(
        "favoriteProducts",
        JSON.stringify(createNewFavoriteList)
      );

      return createNewFavoriteList;
    });
  }

  useEffect(() => {
    if (process.browser) {
      const getFavoritesList = localStorage.getItem("favoriteProducts");

      setFavorites(JSON.parse(getFavoritesList ? getFavoritesList : "[]"));
    }
  }, [])

  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites, DeleteFavorite, AddFavorite}}>
      {children}
    </FavoriteContext.Provider>
  );
}

function useFavorite() {
  const context = useContext(FavoriteContext);

  if (context === undefined) {
    throw new Error("useFavorite() must be used within a FavoriteProvider");
  }
  return context;
}

export { FavoriteProvider, useFavorite };
