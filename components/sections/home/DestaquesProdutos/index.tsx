import { CardProductComponent } from "components/data/card-product";
import { Container } from "components/data/container";
import { DetailsComponent } from "components/data/details";
import React from "react";
import { ProductListItem } from "src/services/shop/get";
import { Swiper, SwiperSlide } from "swiper/react";
import * as S from "./styles";

interface DestaquesProdutosComponentProps {
  listProducts: ProductListItem[];
  title?: string;
  isCarousel?: boolean;
}

export function DestaquesProdutosComponent({
  listProducts,
  title,
  isCarousel,
}: DestaquesProdutosComponentProps) {

  return (
    <S.DestaquesProdutos>
      <Container>
        {title && <h2 className="title-1-bold">{title}</h2>}

        {isCarousel && (
          <Swiper
            slidesPerView={4}
            pagination={false}
            className={"swiper-produtos"}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1200: {
                spaceBetween: 25,
              },
              1400: {
                spaceBetween: 30,
              },
            }}
          >
            {listProducts.map((card) => {
              return (
                <React.Fragment key={card.id + card.sku}>
                  <SwiperSlide>
                    <CardProductComponent card={card} />
                  </SwiperSlide>
                </React.Fragment>
              );
            })}
          </Swiper>
        )}

        {!isCarousel && (
          <div className="grid-produtos">
            {listProducts?.map((card) => {
              return (
                <CardProductComponent
                  key={card.id + card.titulo + card.sku}
                  card={card}
                />
              );
            })}
          </div>
        )}
      </Container>
    </S.DestaquesProdutos>
  );
}
