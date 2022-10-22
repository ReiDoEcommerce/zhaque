import { Container } from "components/data/container";
import * as S from "./styles";

interface MiniBanner {
  id: number;
  imagem: string;
  url: string;
}

interface MiniBannerProps {
  listBanners: MiniBanner[];
}

export function MiniBannersComponent({
  listBanners,
}: MiniBannerProps) {
  return (
    <S.MiniBanners isColumnInMobile={listBanners.length >= 3} >
      <Container>
        {listBanners.map((banner) => {
          return (
            <a key={"miniBanner" + banner.imagem + banner.id} href={banner.url}>
              <img src={banner.imagem} alt="" />
            </a>
          );
        })}
      </Container>
    </S.MiniBanners>
  );
}
