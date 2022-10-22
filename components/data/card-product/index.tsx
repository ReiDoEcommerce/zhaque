import Link from "next/link";

import { useFavorite } from "src/contexts/Favorite";
import { ProductListItem } from "src/services/shop/get";

import { CurrencyText, NextImage } from "components/data/components";

import { CardProduct } from "./styles";

export interface CardProps {
  card: ProductListItem;
}

export function CardProductComponent({ card }: CardProps) {
  const { favorites, AddFavorite, DeleteFavorite } = useFavorite();

  return (
    <CardProduct className="card-list">
      {card.isPreVenda && (
        <div className="bt-tag">
          <Link href={"/"} passHref>
            <a href="replaced" className="link-2-medium">
              Pré-venda
            </a>
          </Link>
        </div>
      )}

      <Link
        passHref
        href={{
          pathname: "/produto/[sku]/[url]",
          query: {
            sku: card.sku ? card.sku : "default",
            url: card.url ? card.url : "default",
          },
        }}
      >
        <a href="replaced" className="text-image">
          <div className="image">
            <NextImage layout="fill" src={card.imagem} isBaseUrl />
          </div>

          <div className="text">
            <h3 className="title-3-bold">{card.titulo}</h3>
          </div>
        </a>
      </Link>

      <div className="absolute-image">
        <div className="items">
          <button
            type="button"
            className="favorite-action"
            onClick={
              favorites.find((favoriteItem) => favoriteItem.id === card.id)
                ? () => DeleteFavorite(card)
                : () => AddFavorite(card)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="28"
              viewBox="0 0 33 28"
              fill={
                favorites.find((favoriteItem) => favoriteItem.id === card.id)
                  ? "var(--tertiary-color)"
                  : "#fff"
              }
            >
              <g>
                <g>
                  <g>
                    <path d="M10.413 2.167c2.23.58 3.968 2.25 4.894 4.703.427 1.13 1.541 1.13 1.968 0C19.567.8 26.838.255 29.706 5.938c2.481 4.916-.709 10.737-9.465 17.274-1.137.848-3.66 2.576-3.895 2.666-.055.021-.67-.347-1.512-.904-6.5-4.304-10.97-8.95-12.315-12.799C.579 6.621 5.166.805 10.413 2.167M7.853.065C2.259.829-1.257 6.938.604 12.663c1.482 4.56 6.97 10.166 14.58 14.894 1.209.75 1.281.726 4.49-1.495C31.246 18.05 35.122 10.277 30.755 3.838c-3.409-5.026-10.748-5.061-14.085-.067-.419.627-.339.627-.757 0-1.71-2.564-5.078-4.114-8.06-3.706" />
                  </g>
                </g>
              </g>
            </svg>
          </button>

          <CurrencyText text={card.preco} />

          <Link
            passHref
            href={{
              pathname: "/produto/[sku]/[url]",
              query: {
                sku: card.sku ? card.sku : "default",
                url: card.url ? card.url : "default",
              },
            }}
          >
            <a href="replaced" className="bt transp details-link link-1-medium">
              Ver detalhes
            </a>
          </Link>

          {/* <button
            className="bt white link-1-medium"
            onClick={async () => {
              const item= {
                  id: card.id,
                  titulo: card.titulo,
                  preco: card.preco?.toString(),
                  imagem: card.imagem,
                  quantity: 1,
                  isVariation: card.is,
                  url: card.url,
                  sku: card.sku,
              }
              
              setCartLoading(true);
  
              OpenCart()
              
              if (state.items.length === 0) {
                const newItem = await CreateCart(item);
  
                await dispatch({
                  type: "NewItem",
                  payload: newItem ? newItem : item,
                });
  
                setCartLoading(false);
                return;
              }
  
              const guidToLocalStorage = localStorage.getItem("guid");
  
              if (guidToLocalStorage) {
                const parsedGuid = JSON.parse(guidToLocalStorage);
  
                const newItem = await AddCart(parsedGuid, item);
  
                await dispatch({
                  type: "NewItem",
                  payload: newItem ? newItem : item,
                });
  
                setCartLoading(false);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="25"
              viewBox="0 0 27 25"
            >
              <g>
                <g>
                  <path d="M24.88 14.624l2.217-9.75A1.125 1.125 0 0 0 26 3.5H7.588l-.43-2.1A1.125 1.125 0 0 0 6.056.5H1.25C.629.5.125 1.004.125 1.625v.75C.125 2.996.629 3.5 1.25 3.5h3.276l3.293 16.099A2.623 2.623 0 0 0 9.125 24.5a2.625 2.625 0 0 0 1.836-4.5h9.828a2.625 2.625 0 1 0 2.981-.488l.258-1.138A1.125 1.125 0 0 0 22.931 17H10.35l-.307-1.5h13.742c.525 0 .98-.363 1.097-.876z" />
                </g>
              </g>
            </svg>
            Compra rapida
          </button> */}
        </div>
      </div>
    </CardProduct>
  );
}
