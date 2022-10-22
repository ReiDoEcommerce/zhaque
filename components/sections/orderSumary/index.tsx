import * as S from "./styles";
import Link from "next/link";
import { ButtonComponent } from "components/data/components";
import { Address } from "src/services/profile";

import { Form, FormHandles } from "components/inputs/core";
import { useCallback, useEffect, useRef, useState } from "react";
import { GetListShipping } from "src/services/shipping";
import { usePayment } from "src/contexts/PaymentContext";
import { useCart } from "src/contexts/CartContext";

import { CouponComponent } from "./coupon";
import { ToMoney } from "src/utils/numberToCurrency";

interface OrderSumaryComponentProps {
  addressSelected?: Address | null;
  continueToPayment: boolean;
  setContinueToPayment: React.Dispatch<boolean>;
}

export function OrderSumaryComponent({
  addressSelected,
  continueToPayment,
  setContinueToPayment,
}: OrderSumaryComponentProps) {
  const { state } = useCart();
  const { dispatch, paymentInformations, statePayment } = usePayment();
  const formRef = useRef<FormHandles>(null);

  function handleSubmit() {}

  const validateShippingAndAddress = useCallback(() => {
    if (addressSelected) {
      (async () => {
        const guid = localStorage.getItem("guid");

        if (guid) {
          const shippingResponse: any = await GetListShipping(
            addressSelected.zipCode,
            JSON.parse(guid)
          );

          const shippingResponseToOptions = shippingResponse?.map(
            (shipping) => {
              return {
                label: shipping.name + ", +" + ToMoney(shipping.price),
                value: shipping.code,
              };
            }
          );

          dispatch({
            type: "AddShippingAddressId",
            payload: addressSelected.id,
          });

          dispatch({
            type: "AddShippingId",
            payload: {
              id: shippingResponseToOptions[0].value,
              value: shippingResponse[0].price,
              label: shippingResponseToOptions[0].label,
            },
          });
        }
      })();
    } else {
      dispatch({
        type: "RemoveShippingAddressId",
        payload: {},
      });

      dispatch({
        type: "RemoveShippingId",
        payload: {},
      });
    }
  }, [addressSelected, state.items]);

  useEffect(() => {
    validateShippingAndAddress();
  }, [addressSelected, state.items]);

  return (
    <S.OrderSumaryComponent>
      <Form method="post" ref={formRef} onSubmit={handleSubmit}>
        <h3 className="title-2-bold">Resumo da compra</h3>

        <div className="section-order top-order">
          <div className="subtotal">
            <h4 className="paragraph-1-regular">Subtotal</h4>
            <span className="paragraph-2-regular">
              {paymentInformations.numberItemsInCart} items
            </span>
          </div>

          <span className="paragraph-1-regular total">{paymentInformations.total}</span>
        </div>

        {statePayment.payment.couponCode && (
          <div className="section-order shipping-price">
            <h4 className="paragraph-2-regular">
              Cupom selecionado:{" "}
              <span>{statePayment.payment.couponCode.nome}</span>
            </h4>

            <p className="paragraph-1-regular">
              {statePayment.payment.couponCode.couponType === "Desconto" &&
                "R$"}
              {Math.floor(statePayment.payment.couponCode.valor * 10) / 10}
              {statePayment.payment.couponCode.couponType === "Porcentagem" &&
                "%"}
            </p>
          </div>
        )}

        {addressSelected && (
          <div className="section-order shipping-price">
            <h4 className="paragraph-2-regular">
              Frete para <span>{addressSelected.zipCode}</span>
            </h4>

            <p className="paragraph-1-regular">
              {statePayment.payment.shippingId?.label}
            </p>
          </div>
        )}

        <div className="actions">
          <div className="action section-order">
            <CouponComponent formRef={formRef} />
          </div>
        </div>

        <div className="bottom-order">
          <div className="subtotal">
            <h4 className="paragraph-1-regular">Total:</h4>
          </div>

          <span className="title-3-bold total bottom">
            {paymentInformations.totalPayment}
          </span>
        </div>

        {!continueToPayment && (
          <>
            <ButtonComponent
              text="Comprar"
              type="submit"
              disabled={paymentInformations.numberItemsInCart === "0" || !!!addressSelected}
              onClick={() => setContinueToPayment(true)}
            />

            <Link href="/produtos">
              <a
                href="replace"
                className="continue-shopping paragraph-2-regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <g>
                    <g>
                      <path d="M3.828 7H16v2H3.828l5.364 5.364-1.414 1.414L0 8 7.778.222l1.414 1.414z" />
                    </g>
                  </g>
                </svg>
                Continue comprando
              </a>
            </Link>
          </>
        )}
      </Form>
    </S.OrderSumaryComponent>
  );
}
