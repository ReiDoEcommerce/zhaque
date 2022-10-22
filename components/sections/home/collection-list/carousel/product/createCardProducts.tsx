import { SwiperSlide } from 'swiper/react'

import { IProductItem } from "../IProduct";
import { CardProductComponent } from "../../../../../data/card-product";

export function CreateCardProducts(products: IProductItem[]): JSX.Element[] | undefined {
  const numberItemsInCarousel = parseInt((products.length / 8).toString()) + 1;

  let itemCarousel: IProductItem[] = [];
  let allItemsCarousel: IProductItem[][] = [];
  let lastItemsCarousel: IProductItem[] = [];
  let count = 0;

  products.forEach((item, index) => {
    index++;
    if (Number.isInteger(index / 8) && index !== 0) {
      itemCarousel.push(item);
      allItemsCarousel.push(itemCarousel);
      count = 0;
      itemCarousel = [];
    } else {
      count += 1;
      itemCarousel.push(item);

      if (index > (numberItemsInCarousel - 1) * 8) {
        lastItemsCarousel.push(item);
        if (index === products.length) {
          allItemsCarousel.push(lastItemsCarousel);
        }
      }
    }
  });

  if (allItemsCarousel.length === numberItemsInCarousel) {
    return allItemsCarousel.map((itemCarousel) => {
      return (
        <SwiperSlide key={`item-swiper-${itemCarousel[0].id}`} className="item">
          <div className="container-cards">
            {itemCarousel.map((item) => {
              return (
                <CardProductComponent
                  key={`card-product-${item.id}`}
                  card={item}
                />
              );
            })}
          </div>
        </SwiperSlide>
      );
    });
  }
}
