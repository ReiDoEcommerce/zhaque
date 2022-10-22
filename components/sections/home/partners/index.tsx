import { Container } from "components/data/components";
import { NextImage } from "components/data/NextImage";

import * as S from "./styles";

export function PartnersComponent() {
  return (
    <S.Partners>
      <Container>
        <h2 className="title-2-bold">
          Editoras Parceiras
        </h2>

        <div className="partners">
          <a href="" target="_blank" className="image">
            <NextImage layout="fill" src="/images/partners/partner-1.png" />
          </a>

          <a href="" target="_blank" className="image">
            <NextImage layout="fill" src="/images/partners/partner-4.png" />
          </a>

          <a href="" target="_blank" className="image">
            <NextImage layout="fill" src="/images/partners/partner-5.png" />
          </a>
        </div>
      </Container>
    </S.Partners>
  );
}
