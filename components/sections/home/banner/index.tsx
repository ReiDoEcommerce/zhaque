import { NextImage } from "components/data/NextImage";
import { baseImage } from "src/services/api";
import { Swiper, SwiperSlide } from "swiper/react";

import * as S from "./styles";

export interface Banner {
  id: number;
  imagem: string;
  imagemAlt: string;
  imagemMobile: string;
  url: string;
}

interface BannerProps {
  listBanners: Banner[];
}

export function BannerComponent({ listBanners }: BannerProps) {
  if (!listBanners) {
    return <></>;
  }

  return (
    <S.Banner>
      <Swiper
        slidesPerView={1}
        loop
        pagination={{
          clickable: true,
        }}
      >
        {listBanners.map((banner) => {
          return (
            <SwiperSlide key={"banner" + banner.id}>
              <div className="md-hidden">
                <NextImage src={banner.imagemMobile} isBaseUrl layout="fill" />
              </div>

              <div className="md-block">
                <NextImage src={banner.imagem} isBaseUrl layout="fill" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </S.Banner>
  );
}
