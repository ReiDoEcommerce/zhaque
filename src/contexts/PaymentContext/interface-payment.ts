export interface Payment {
  userId?: number;
  addressId?: number;
  shippingId?: Shipping;
  cartGuid?: string;
  creditCard?: {
    number: string;
    holder_name: string;
    exp_month: number;
    exp_year: number;
    cvv: string;
  };
  paymentType?: number;
  amount?: number;
  couponCode?: Coupon;
}

export interface IPayment {
  payment: Payment;
}

export interface Shipping {
  id: string;
  value: number;
  label: string;
}

export interface Coupon {
  nome: string;
  valor: number;
  couponType: "Desconto" | "Porcentagem";
}

export interface IPaymentAction {
  type:
    | "AddShippingId"
    | "RemoveShippingId"
    | "AddFrey"
    | "GetPayment"
    | "AddShippingAddressId"
    | "RemoveShippingAddressId"
    | "AddCouponCode"
    | "RemoveCouponCode"
  payload: Payment | string | number | Shipping | Coupon;
}
