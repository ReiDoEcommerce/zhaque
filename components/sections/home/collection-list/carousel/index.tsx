import { useState, useCallback } from "react";

import { ProductComponent } from "./product";
import { CarouselProducts } from "./carouselCollecion";
import { Container } from "components/data/components";

import { IProductState, GetProductsCarousel } from "./IProduct";

import * as S from "./styles";

interface CarouselComponentProps {
  collection: GetProductsCarousel[];
}

export function CarouselComponent({ collection }: CarouselComponentProps) {
  
  const [productState, setProductItems] = useState<IProductState>({
    items: [],
    isLoading: false,
  });

  let carouselConfigs = {
    numberItens: 5,
    centerItem: 34,
    marginCarousel: 10,
  };

  const handleItem = useCallback(
    (e) => {
      setProductItems((oldState) => ({ ...oldState, isLoading: true }));

      const idItem = e?.classList[1];

      const products = collection?.find((item) => {
        return item.id === Number(idItem);
      })?.itens;

      setProductItems(() => ({ items: products, isLoading: false }));
    },
    [collection]
  );

  if (!collection) {
    return <div></div>;
  }

  return (
    <S.Carousel>
      <div className="content">
        <CarouselProducts
          items={collection}
          handleItem={handleItem}
          numberItens={carouselConfigs.numberItens}
          centerItem={carouselConfigs.centerItem}
          marginCarousel={carouselConfigs.marginCarousel}
        />

        <Container>
          <ProductComponent productState={productState} />
        </Container>
      </div>
    </S.Carousel>
  );
}

