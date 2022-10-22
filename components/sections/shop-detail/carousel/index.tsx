import { Dispatch, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { NextImage } from "components/data/components";
import { baseImage, baseImageGallery, baseVideo } from "src/services/api";
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
          {product.video && (
            <SwiperSlide>
              <video controls>
                <source src={baseVideo + product.video} />
              </video>
            </SwiperSlide>
          )}

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
          {product.video && (
            <SwiperSlide>
              <div className="video-product-thumb">
                <div className="layer-video">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"/></svg>
                </div>
                
                <video>
                  <source src={baseVideo + product.video} />
                </video>
              </div>
            </SwiperSlide>
          )}

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
