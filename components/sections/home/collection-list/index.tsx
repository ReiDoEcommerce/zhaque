import { CarouselComponent } from "./carousel";
import { Container, NextImage } from "components/data/components";
import { GetProductsCarousel } from "components/sections/home/collection-list/carousel/IProduct";

import * as S from "./styles";
import Link from "next/link";

interface CollectionProps {
  collection: GetProductsCarousel[];
}

export function CollectionComponent({ collection }: CollectionProps) {
  return (
    <S.Collection>
      <Container>
        <div className="top-collection">
          <h2 className="title-3-bold-graphie">Collection list</h2>
        </div>
      </Container>

      <div className="carousel-collection">
        <CarouselComponent collection={collection} />
      </div>

      <Container>
        <div className="mobile-carousel">
          {collection.map((item) => {
            //TODO Mudar url para categoria
            return (
              <Link key={item.id + item.titulo} href={`/shop/?category${item.titulo}`} passHref>
                <a href="replaced" className="box-mobile-collection">
                  <div className="image">
                    <NextImage isBaseUrl layout="fill" src={item.imagem} />
                  </div>

                  <div className="text">
                    <h3 className="paragraph-1-bold-cinzel">{item.titulo}</h3>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </Container>
    </S.Collection>
  );
}
