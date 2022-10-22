import {
  useReducer,
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";

import { ReducerPayment } from "./payment-services";
import { IPayment, IPaymentAction } from "./interface-payment";
import { useCart } from "../CartContext";
import { ToMoney } from "src/utils/numberToCurrency";

interface ProvidersProps {
  children: ReactNode;
}

const initialState: IPayment = {
  payment: {},
};

const PaymentContext = createContext<
  | {
      statePayment: IPayment;
      dispatch: Dispatch<IPaymentAction>;
      paymentLoading: boolean;
      setPaymentLoading: Dispatch<SetStateAction<boolean>>;
      paymentInformations: {
        total: string;
        numberItemsInCart: string;
        totalPayment: string;
        continueToCheckout: boolean;
      };
    }
  | undefined
>(undefined);

function PaymentProvider({ children }: ProvidersProps) {
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [statePayment, dispatch] = useReducer(ReducerPayment, initialState);

  const { state } = useCart();

  const total = useCallback(() => {
    const totalItens = parseFloat(
      String(state.items.reduce((value, item) => (value += item.quantity), 0))
    );

    if (totalItens === 0) {
      return {
        total: "R$ 0",
        numberItemsInCart: "0",
        totalPayment: "R$ 0",
        continueToCheckout: false,
      };
    }

    const totalBruto = state.items.reduce(
      (value, item) => (value += Number(item.preco) * item.quantity),
      0
    );

    const coupon = statePayment.payment.couponCode;

    const subTotalWithCoupon = coupon
      ? coupon.couponType === "Desconto"
        ? totalBruto - coupon.valor
        : totalBruto - totalBruto * (coupon.valor / 100)
      : totalBruto;

    const numberItemsInCart = String(
      parseFloat(
        String(state.items.reduce((value, item) => (value += item.quantity), 0))
      )
    );

    const totalPayment = ToMoney(
      (subTotalWithCoupon || totalBruto) +
        (statePayment.payment.shippingId
          ? statePayment.payment.shippingId.value
          : 0)
    );

    return {
      total: String(ToMoney(totalBruto)),
      numberItemsInCart,
      totalPayment,
      continueToCheckout: false,
    };
  }, [
    state.items,
    statePayment.payment.shippingId,
    statePayment.payment.couponCode,
  ]);

  const paymentInformations = total();

  return (
    <PaymentContext.Provider
      value={{
        statePayment,
        dispatch,
        paymentLoading,
        setPaymentLoading,
        paymentInformations,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}

function usePayment() {
  const context = useContext(PaymentContext);

  if (context === undefined) {
    throw new Error("usePayment() must be used within a PaymentProvider");
  }
  return context;
}

export { PaymentProvider, usePayment };
