import { useCart } from "src/contexts/CartContext";
import { usePayment } from "src/contexts/PaymentContext";
import { CloseCart, OpenCart } from "src/utils/cartActions";

import { CartItemComponent } from "./cart-item";
import {
  CurrencyText,
  ButtonComponent,
  NotificationComponent,
  LoaderCircle,
} from "components/data/components";

import * as S from "./styles";


export function CartComponent() {
  const { state: { items }, cartLoading, error } = useCart();
  const { paymentInformations } = usePayment();

  return (
    <NotificationComponent
      title={""}
      message={""}
      notificationPosition={{
        bottom: true,
        top: true,
        right: true,
        triangle: "lateral",
      }}
    >
      <S.LateralCart id="lateralCart">
        <div className="overlay" onClick={CloseCart}></div>

        <div className="content-cart">
          <div className="top-content-cart">
            <button
              type="button"
              className="close title-2-bold"
              onClick={CloseCart}
            >
              X
            </button>

            <h3 className="title-2-bold-cinzel">Meu carrinho</h3>
          </div>

          {error && (
            <p className="erro-background">{error}</p>
          )}

          <div className="cart-container">
            {items.length > 0 &&
              items.map((item) => (
                <CartItemComponent key={item.id} item={item} />
              ))}

            {items.length === 0 &&
              !cartLoading &&
              !error && (
                <h3 className="title-6-bold-cinzel">Nada por aqui ;(</h3>
              )}

            {items.length === 0 && cartLoading && (
              <LoaderCircle color="var(--secundary-color)" size={100} />
            )}
          </div>

          {items.length > 0 ? (
            <div className="cart-infos-bottom">
              <p className="total title-3-bold">
                Total:
                <CurrencyText text={paymentInformations.total} noCurrencySimbol />
              </p>

              <ButtonComponent
                disabled={cartLoading}
                loading={cartLoading}
                text="FINALIZAR COMPRA"
                href="/carrinho"
              />
            </div>
          ) : (
            <ButtonComponent text="COMPRAR" href="/produtos" />
          )}
        </div>
      </S.LateralCart>

      <S.Cart className="cart" onClick={OpenCart}>
        <div className="number-itens">
          {items.length > 9 ? (
            <>
              9<sup>+</sup>
            </>
          ) : (
            items.length
          )}
        </div>

        <img src="/images/icon-carrinho-header.png" alt="Icone Carrinho" />
      </S.Cart>
    </NotificationComponent>
  );
}
