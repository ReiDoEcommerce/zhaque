import { Container } from "components/data/container";

import Link from "next/link";
import * as S from "./styles";

export function FooterComponent() {
  return (
    <S.Footer>
      <Container>
        <div className="top-links">
          <div className="show-1024">
            <img src="/images/logo.png" alt="Logo" />
          </div>

          <div className="links">
            <h3 className="paragraph-1-bold">Mapa do Site</h3>

            <Link href={"/sobre-nos"} passHref>
              <a href="replaced" className="paragraph-1-regular link">
                Sobre nós
              </a>
            </Link>

            <Link href={"/atendimento-ao-cliente"} passHref>
              <a href="replaced" className="paragraph-1-regular link">
                Contato
              </a>
            </Link>
          </div>

          <div className="links">
            <h3 className="paragraph-1-bold">Institucional</h3>

            <Link href={"/termos-de-uso"} passHref>
              <a href="replaced" className="paragraph-1-regular link">
                Regras Gerais
              </a>
            </Link>

            <Link href={"/ajuda"} passHref>
              <a href="replaced" className="paragraph-1-regular link">
                Ajuda
              </a>
            </Link>

            <Link href={"/sobre-nos"} passHref>
              <a href="replaced" className="paragraph-1-regular link">
                Empresa
              </a>
            </Link>
          </div>

          <div className="links help">
            <h3 className="paragraph-1-bold">Ajuda</h3>

            <Link href={"/como-comprar"} passHref>
              <a href="replaced" className="paragraph-1-regular link">
                Como Comprar?
              </a>
            </Link>

            <Link href={"/formas-de-pagamento"} passHref>
              <a href="replaced" className="paragraph-1-regular link">
                Formas de Pagamento
              </a>
            </Link>

            <Link href={"/politica-e-privacidade"} passHref>
              <a href="replaced" className="paragraph-1-regular link">
                Privacidade e Segurança
              </a>
            </Link>

            <Link href={"/atendimento-ao-cliente"} passHref>
              <a href="replaced" className="paragraph-1-regular link">
                Atendimento ao Cliente
              </a>
            </Link>

            <Link href={"/perfil/minhas-ordens"} passHref>
              <a href="replaced" className="paragraph-1-regular link">
                Meus Pedidos
              </a>
            </Link>
          </div>

          <div className="links atendimento">
            <h3 className="paragraph-1-bold">Central de Atendimento</h3>

            <Link href={"tel:43999006777"} passHref>
              <a href="replaced" className="paragraph-1-regular link">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <g>
                      <g>
                        <path d="M15.419.77l-3.25-.75a.755.755 0 0 0-.86.434l-1.5 3.5a.748.748 0 0 0 .216.875l1.894 1.55a11.581 11.581 0 0 1-5.538 5.537l-1.55-1.894a.75.75 0 0 0-.875-.215l-3.5 1.5a.759.759 0 0 0-.437.862l.75 3.25A.75.75 0 0 0 1.5 16C9.503 16 16 9.516 16 1.5a.75.75 0 0 0-.581-.73z" />
                      </g>
                    </g>
                  </svg>
                </i>
                Dúvidas, ligue <br />
                (43) 99900-6777
              </a>
            </Link>

            <Link href={"mailto:zhaquesuporte@hotmail.com"} passHref>
              <a href="replaced" className="paragraph-1-regular link">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                  >
                    <g>
                      <g>
                        <path d="M14.286 3.238L8 7.428l-6.286-4.19V1.714L8 5.904l6.286-4.19zM14.476 0H1.524C.686 0 0 .686 0 1.524v9.524c0 .838.686 1.523 1.524 1.523h12.952c.838 0 1.524-.685 1.524-1.523V1.524C16 .686 15.314 0 14.476 0z" />
                      </g>
                    </g>
                  </svg>
                </i>
                Envie um e-mail <br /> zhaquesuporte@hotmail.com
              </a>
            </Link>

            <span className="paragraph-1-regular link time">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <g>
                    <g>
                      <path d="M9.842 11.294L6.997 9.226a.39.39 0 0 1-.158-.313v-5.43c0-.212.174-.386.387-.386h.637c.213 0 .387.174.387.387V8.34l2.455 1.798c.174.126.21.368.084.542l-.405.53a.39.39 0 0 1-.542.084zM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" />
                    </g>
                  </g>
                </svg>
              </i>

              Horário de atendimento: 8h às 18h
            </span>
          </div>

          <div className="links link-show-1024">
            <h3 className="paragraph-1-bold">Mapa do site</h3>

            <Link href={"/sobre-nos"} passHref>
              <a href="replaced" className="paragraph-1-regular link">
                Sobre nós
              </a>
            </Link>

            <Link href={"/atendimento-ao-cliente"} passHref>
              <a href="replaced" className="paragraph-1-regular link">
                Contato
              </a>
            </Link>

            <Link href={"/formas-de-pagamento"} passHref>
              <a href="replaced" className="paragraph-1-regular link">
                Formas de Pagamento
              </a>
            </Link>

            <Link href={"/atendimento-ao-cliente"} passHref>
              <a href="replaced" className="paragraph-1-regular link">
                Atendimento ao Cliente
              </a>
            </Link>

            <Link href={"/politica-e-privacidade"} passHref>
              <a href="replaced" className="paragraph-1-regular link">
                Privacidade e Segurança
              </a>
            </Link>

            {/* <div className="link">
              <p>
                <strong>CNPJ:</strong> 41.544.345/0001-93
              </p>

              <p className="paragraph-1-regular">
                <strong>Razão social:</strong> Julia Santos Moreira
              </p>
            </div>

            <span className="paragraph-1-regular link time">
              Horário de atendimento das 09:00 às 17h00
            </span> */}
          </div>

          {/* <div className="links redes">
            <h3 className="paragraph-1-bold">Redes sociais</h3>

            <div className="redes">
              <Link
                href={""}
                passHref
              >
                <a target="blank" href="replaced">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <g>
                        <g>
                          <path d="M20 10c0-5.524-4.476-10-10-10S0 4.476 0 10c0 4.991 3.657 9.128 8.438 9.879v-6.988h-2.54V10h2.54V7.797c0-2.506 1.491-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.242 0-1.63.77-1.63 1.561V10h2.774l-.444 2.89h-2.33v6.989C16.343 19.129 20 14.991 20 10z" />
                        </g>
                      </g>
                    </svg>
                  </i>
                </a>
              </Link>

              <Link
                href={""}
                passHref
              >
                <a target="blank" href="replaced">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <g>
                        <g>
                          <path d="M7 10a3 3 0 1 0 6 0 3 3 0 0 0-6 0zm8.25-4a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM15 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0zM5.878.06C4.812.11 4.088.277 3.45.525a4.897 4.897 0 0 0-1.772 1.153A4.88 4.88 0 0 0 .525 3.45C.277 4.088.11 4.812.06 5.878.01 6.944 0 7.283 0 10c0 2.717.013 3.056.06 4.122.05 1.065.217 1.791.465 2.428.251.667.645 1.272 1.153 1.772a4.89 4.89 0 0 0 1.772 1.153c.638.247 1.363.415 2.428.465 1.066.05 1.405.06 4.122.06 2.717 0 3.056-.013 4.122-.06 1.065-.05 1.791-.218 2.428-.465a4.915 4.915 0 0 0 1.772-1.153c.51-.5.903-1.104 1.153-1.772.247-.638.415-1.363.465-2.428.05-1.066.06-1.405.06-4.122 0-2.717-.013-3.056-.06-4.122-.05-1.065-.218-1.791-.465-2.428a4.908 4.908 0 0 0-1.153-1.772A4.876 4.876 0 0 0 16.55.525C15.912.277 15.187.11 14.122.06 13.056.01 12.717 0 10 0 7.283 0 6.944.013 5.878.06z" />
                        </g>
                      </g>
                    </svg>
                  </i>
                </a>
              </Link>


              <Link
                href={""}
                passHref
              >
                <a target="blank" href="replaced">
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><g><path d="M17.156 17.143h-2.964V12.5c0-1.107-.023-2.531-1.54-2.531-1.545 0-1.782 1.205-1.782 2.45v4.724H7.906V7.598h2.844v1.304h.04c.397-.75 1.366-1.54 2.808-1.54 3 0 3.558 1.977 3.558 4.549zM4.562 6.295a1.72 1.72 0 0 1 0-3.438c.947 0 1.719.772 1.719 1.719 0 .95-.768 1.719-1.719 1.719zM3.08 17.143V7.598h2.969v9.545zM18.571 0H1.424C.638 0 0 .647 0 1.442v17.116C0 19.353.638 20 1.424 20H18.57c.786 0 1.429-.647 1.429-1.442V1.442C20 .647 19.357 0 18.57 0z" /></g></g></svg>
                  </i>
                </a>
              </Link>

              <Link href={""} passHref>
                <a target="blank" href="replaced">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="17"
                      viewBox="0 0 21 17"
                    >
                      <g>
                        <g>
                          <path d="M20.383 1.968a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 19.82.312c-.82.488-1.72.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814A11.874 11.874 0 0 1 1.419.77a4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.73 1.86 3.48a4.168 4.168 0 0 1-1.894-.522v.052a4.185 4.185 0 0 0 3.354 4.1 4.21 4.21 0 0 1-1.89.073 4.185 4.185 0 0 0 3.908 2.905A8.394 8.394 0 0 1 0 14.694a11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                        </g>
                      </g>
                    </svg>
                  </i>
                </a>
              </Link>
            </div>
          </div> */}
        </div>

        <div className="payment-footer">
          <div className="box-left">
            <h3 className="paragraph-1-bold">Formas de pagamento</h3>

            <img
              src="/images/icon-footer-pagarme.png"
              alt="Icone forma de pagamento"
            />
          </div>
        </div>
      </Container>
    </S.Footer>
  );
}
