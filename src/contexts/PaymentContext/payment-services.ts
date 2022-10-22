import {
  IPayment,
  IPaymentAction,
  Coupon,
  Shipping,
} from "./interface-payment";

function ReducerPayment(state: IPayment, action: IPaymentAction): IPayment {
  const payload = action.payload;

  switch (action.type) {
    case "AddShippingId":
      return {
        payment: {
          ...state.payment,
          shippingId: payload as Shipping,
        },
      };
    case "RemoveShippingId":
      return {
        payment: {
          ...state.payment,
          shippingId: undefined,
        },
      };
    case "AddCouponCode":
      return {
        payment: {
          ...state.payment,
          couponCode: payload as Coupon,
        },
      };
    case "RemoveCouponCode":
      return {
        payment: {
          ...state.payment,
          couponCode: undefined,
        },
      };
    case "AddShippingAddressId":
      return {
        payment: {
          ...state.payment,
          addressId: payload as number,
        },
      };

    case "RemoveShippingAddressId":
      return {
        payment: {
          ...state.payment,
          addressId: undefined,
        },
      };
    case "GetPayment":
      return state;

    default: {
      throw new Error(`Unhandled action Payment type: ${action.type}`);
    }
  }
}

export { ReducerPayment };
