import { Container } from "components/data/container";
import * as S from "./styles";

export default function BannerStripComponent() {
  return (
    <S.BannerStrip>
      <Container>
          <div className="box-banner">
            <div className="image">
              <img
                src="/images/icon-banner-frete.png"
                alt="Icon banner tarja"
              />
            </div>

            <div className="text">
              <h3 className="title-3-bold">Frete para todo o Brasil</h3>
              <span className="paragraph-1-medium">
                Frete fixo para todo o Brasil
              </span>
            </div>
          </div>

          <div className="box-banner">
            <div className="image">
              <img
                src="/images/icon-banner-atendimento.png"
                alt="Icon banner tarja"
              />
            </div>

            <div className="text">
              <h3 className="title-3-bold">Atendimento de Segunda a Sexta</h3>
              <span className="paragraph-1-medium">
                Via E-mail, Twitter e WhatsApp
              </span>
            </div>
          </div>

          <div className="box-banner">
            <div className="image">
              <img src="/images/icon-banner-card.png" alt="Icon banner tarja" />
            </div>

            <div className="text">
              <h3 className="title-3-bold">Pagamento Seguro</h3>
              <span className="paragraph-1-medium">Boleto, Cartão e Pix</span>
            </div>
          </div>
      </Container>
    </S.BannerStrip>
  );
}
