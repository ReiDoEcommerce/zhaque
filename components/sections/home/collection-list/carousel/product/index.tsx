import { Swiper } from "swiper/react";

import { CardProductComponent } from "../../../../../data/card-product";
import { CreateCardProducts } from "./createCardProducts";
import { LoaderComponent } from "components/data/components";

import { IProductState } from "../IProduct";

import * as S from "./styles";


interface IProductProps {
  productState: IProductState;
}

export function ProductComponent({ productState }: IProductProps) {
  const { isLoading, items } = productState;

  if (isLoading) {
    return (
      <S.Product>
        <LoaderComponent />
      </S.Product>
    );
  }

  if (!items) {
    return (
      <S.Product>
        <p className="error title-1-bold-cinzel">Nenhum item disponível</p>
      </S.Product>
    );
  }

  if (items.length > 8) {
    return (
      <S.Product>
        <Swiper
          slidesPerView={1}
          navigation={{
            nextEl: `#nav-right`,
            prevEl: `#nav-left`,
          }}
        >
          {CreateCardProducts(items)}
        </Swiper>

        <div className="nav">
          <div id="nav-left">
            <img src="/images/nav-left.svg" loading="lazy" alt="navigation carousel left"/>
          </div>

          <div id="nav-right">
            <img src="/images/nav-right.svg" loading="lazy" alt="navigation carousel right"/>
          </div>
        </div>
      </S.Product>
    );
  }


  return (
    <S.Product>
      <div className="container-cards">
        {items.map((item) => {
          return (
            <CardProductComponent key={`card-product-${item.id}`} card={item} />
          );
        })}
      </div>
    </S.Product>
  );
}
