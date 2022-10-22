import Link from "next/link";
import {
  CurrencyText,
  LoaderCircle,
  NextImage,
} from "components/data/components";

import { CloseCart } from "src/utils/cartActions";
import { useCart } from "src/contexts/CartContext";
import { ICartItem } from "src/contexts/CartContext/intefaces/cart";

import * as S from "./styles";
import { ToMoney } from "src/utils/numberToCurrency";

interface CartItemProps {
  item: ICartItem;
  increase?: boolean;
}

export function CartItemComponent({ item, increase }: CartItemProps) {
  const { SubtractQuantity, AddQuantity, RemoveCart, cartLoading } = useCart();

  return (
    <S.CartItem increase={increase} className="cart-item">
      <div className="box-left-cart-item">
        <Link
          href={{
            pathname: "/produto/[sku]/[url]",
            query: {
              url: item.url,
              sku: item.sku,
            },
          }}
          passHref
        >
          <a href="replaced" onClick={CloseCart} className="image">
            <NextImage
              isBaseImageGallery={item.isVariation}
              isBaseUrl={!item.isVariation}
              src={"/" + item.imagem}
              layout="fill"
            />
          </a>
        </Link>

        <div className="text">
          <h4 className={`paragraph-${increase ? "1" : "2"}-bold`}>
            {item.titulo}
          </h4>
          <div>
            <div className="price">
                <span className="title-price-bold currency">
                  {item.quantity} x {ToMoney(Number(item.preco))} = {ToMoney(Number(item.preco) * item.quantity)}
                </span>
            </div>

            <div className="cart-infos show-mobile">
              <div className="quantity">
                <button
                  type="button"
                  className="paragraph-1-bold"
                  onClick={() => SubtractQuantity(item)}
                  disabled={item.quantity === 1}
                  aria-label="minus button item cart"
                >
                  -
                </button>

                <span>
                  <span className="paragraph-3-bold">{item.quantity}</span>
                </span>

                <button
                  type="button"
                  onClick={() => AddQuantity(item, 1)}
                  className="paragraph-1-bold"
                  aria-label="plus button item cart"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                className="delete"
                aria-label="remove button item cart"
                onClick={async () => {
                  if (!cartLoading) {
                    await RemoveCart(item.guid);
                  }
                }}
              >
                {cartLoading ? (
                  <LoaderCircle color="var(--secundary-color)" size={20} />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <g>
                      <g>
                        <g />
                        <g>
                          <path
                            fill="#332154"
                            d="M13 2v2H7V2zm-2 13h2V9h-2zm-4 0h2V9H7zm9 3H4V6h12zM15 1a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H0v2h2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6h2V4h-5z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-infos hide-mobile">
        <div className="quantity">
          <button
            type="button"
            className="paragraph-1-bold"
            onClick={() => SubtractQuantity(item)}
            disabled={item.quantity === 1}
            aria-label="minus button item cart"
          >
            -
          </button>

          <span>
            <span className="paragraph-3-bold">{item.quantity}</span>
          </span>

          <button
            type="button"
            onClick={() => AddQuantity(item, 1)}
            className="paragraph-1-bold"
            aria-label="plus button item cart"
          >
            +
          </button>
        </div>

        <button
          type="button"
          className="delete"
          aria-label="remove button item cart"
          onClick={async () => {
            if (!cartLoading) {
              await RemoveCart(item.guid);
            }
          }}
          disabled={cartLoading}
        >
          {cartLoading ? (
            <LoaderCircle color="var(--secundary-color)" size={20} />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <g>
                <g>
                  <g />
                  <g>
                    <path
                      fill="#332154"
                      d="M13 2v2H7V2zm-2 13h2V9h-2zm-4 0h2V9H7zm9 3H4V6h12zM15 1a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H0v2h2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6h2V4h-5z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          )}
        </button>
      </div>
    </S.CartItem>
  );
}
