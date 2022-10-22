import { Dispatch } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { baseImage, baseImageGallery} from "src/services/api";
import { Imagem, Product } from "src/services/shop/get";

interface ProductShowCaseProps {
  thumbsSwiper: any;
  product: Product;
  imagens: Imagem[];
  setThumbsSwiper: Dispatch<any>;
  carouselMainRef: any;
  carouselListRef: any;
}

export function ProductShowCase({
  thumbsSwiper,
  product,
  imagens,
  setThumbsSwiper,
  carouselMainRef,
  carouselListRef,
}: ProductShowCaseProps) {
  return (
    <>
      <div className="main">
        <Swiper
          thumbs={{ swiper: thumbsSwiper }}
          slidesPerView={1}
          onInit={(core) => {
            carouselMainRef.current = core.el;
          }}
          navigation={true}
        >
          <SwiperSlide>
            <img src={baseImage + product.imagem} loading="lazy" />
          </SwiperSlide>

          {imagens.map((imagem) => (
            <SwiperSlide key={`swiper-image-slider-${imagem.id}`}>
              <img
                src={baseImageGallery + `/${product.idFile}/` + imagem.fileData}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="all-images-carousel-detail">
        <Swiper
          onInit={(core) => {
            carouselListRef.current = core.el;
          }}
          onSwiper={setThumbsSwiper}
          freeMode={true}
          watchSlidesProgress={true}
          slidesPerView={3}
          breakpoints={{
            0: {
              spaceBetween: 6,
            },
            900: {
              spaceBetween: 10,
            },
            1024: {
              spaceBetween: 15,
            },
            1400: {
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <img src={baseImage + product.imagem} loading="lazy" />
          </SwiperSlide>

          {imagens.map((imagem) => (
            <SwiperSlide key={`swiper-image-slider-${imagem.id}`}>
              <img
                src={baseImageGallery + `/${product.idFile}/` + imagem.fileData}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
