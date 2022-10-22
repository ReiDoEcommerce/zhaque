import { useEffect, useState, Fragment } from "react";

import { PixComponent } from "./pix";
// import { BoletoComponent } from "./boleto";
import { CreditCardComponent } from "./creditCard";

import * as S from "./styles";

const usedPaymentMethods = [
  {
    id: 1,
    title: "Pix",
    component: <PixComponent />,
  },
  {
    id: 2,
    title: "Cartão de crédito",
    component: <CreditCardComponent />,
  },
  // {
  //   id: 3,
  //   title: "Boleto",
  //   component: <BoletoComponent />,
  // },
];

export function PaymentComponent() {
  const [payment, setPayment] = useState<JSX.Element>(
    usedPaymentMethods[0].component
  );
  const [size, setSize] = useState<{ height: number; width: number } | null>(
    null
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  if (!size) {
    return <></>;
  }

  return (
    <S.PaymentComponent>
      <div className="payment-container">
        <div className="payment-tabs">
          {usedPaymentMethods.map((method) => (
            <Fragment key={method.title + method.id}>
              <button className={`button-tab ${method.component === payment && "active"}`}
                type="button"
                onClick={() => setPayment(method.component)}
              >
                <span className="paragraph-1-bold-graphie">{method.title}</span>
              </button>

              {size.width <= 1024 && payment === method.component && (
                <div className="payment-element">{payment}</div>
              )}
            </Fragment>
          ))}
        </div>

        {payment && size.width > 1024 && (
          <div className="payment-element">{payment}</div>
        )}
      </div>
    </S.PaymentComponent>
  );
}
