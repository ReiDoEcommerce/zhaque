import { RefObject, useState } from "react";

import { api } from "src/services/api";

import { FormHandles, InputComponent } from "components/inputs/core";
import { usePayment } from "src/contexts/PaymentContext";
import { ButtonComponent } from "components/data/button";
import { Coupon } from "src/contexts/PaymentContext/interface-payment";

interface CouponComponentProps {
  formRef: RefObject<FormHandles>;
}

export function CouponComponent({ formRef }: CouponComponentProps) {
  const [loading, setLoading] = useState(false);

  const { dispatch, statePayment } = usePayment();

  async function SetCouponDescount() {
    setLoading(true);

    const couponCode = formRef.current?.getFieldValue("promoCode");


    if (!couponCode || couponCode.length === 0) {
      formRef.current?.setFieldError(
        "promoCode",
        "Por favor, insira um cupom."
      );

      setLoading(false);

      return;
    }

    const { data } = await api.post<Coupon[]>("/coupon/list", {
      code: couponCode,
    });

    if (data.length === 0) {
      formRef.current?.setFieldError(
        "promoCode",
        "Não conseguimos encontrar o cupom: " + couponCode.toUpperCase()
      );

      formRef.current?.clearField("promoCode");

      setLoading(false);

      return;
    }

    dispatch({
      type: "AddCouponCode",
      payload: data[0],
    });

    formRef.current?.setFieldError("promoCode", "");
    setLoading(false);
  }

  async function RemoveCoupongDescount() {
    formRef.current?.clearField("promoCode");
    formRef.current?.setFieldError("promoCode", "");

    dispatch({
      type: "RemoveCouponCode",
      payload: {},
    });
  }

  

  return (
    <div className="form-input">
      <InputComponent
        id="promoCode"
        type="text"
        name="promoCode"
        placeholder="Código promocional"
        readOnly={!!statePayment.payment.couponCode}
        defaultValue={statePayment.payment.couponCode?.nome}
        maxLength={23}
      />

      {!statePayment.payment.couponCode ? (
        <ButtonComponent
          type="button"
          text="Aplicar"
          loading={loading}
          onClick={SetCouponDescount}
        />
      ) : (
        <ButtonComponent
          type="button"
          text=""
          svg={{
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><g><g></g><g><path  d="M13 2v2H7V2zm-2 13h2V9h-2zm-4 0h2V9H7zm9 3H4V6h12zM15 1a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H0v2h2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6h2V4h-5z"></path></g></g></g></svg>',
            size: 17,
          }}
          onClick={RemoveCoupongDescount}
        />
      )}
    </div>
  );
}
