import Head from "next/head";
import { useState } from "react";
import { GetServerSideProps } from "next";

import nookies from "nookies";

import { Address } from "src/services/profile";
import { useCart } from "src/contexts/CartContext";

import { Layout } from "components/layout";
import { Container } from "components/data/components";
import { LayoutBox } from "components/sections/profile/layout-box";
import { SelectAddress } from "components/sections/cart/selectAddress";
import { OrderSumaryComponent } from "components/sections/orderSumary";
import { CartItemComponent } from "components/layout/header/cart/cart-item";

import * as S from "styles/pages/cart";
import { PaymentComponent } from "components/sections/payment";

export default function CartPage() {
  const [continuePayment, setContinueToPayment] = useState(false);
  const [addressSelected, setAddressSelected] = useState<Address | null>(null);

  const { state, error } = useCart();

  return (
    <Layout isBackgroundColor>
      <Head>
        <title>Carrinho</title>
      </Head>

      <S.CartPage>
        <Container>
         
          <div
            className="cart-itens"
            style={{
              display: continuePayment ? "none" : "block",
            }}
          >
             {error && (
            <p className="erro-background" style={{marginBottom: "10px"}}>{error}</p>
          )}

            <div>
              <h2 className="title-2-bold-graphie">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="28"
                  viewBox="0 0 33 28"
                >
                  <g>
                    <g>
                      <path d="M13.23 24.447a.896.896 0 0 0-.457-.118c-.501 0-.87.37-.87.87 0 .501.369.871.87.871.884 0 1.203-1.131.457-1.623zm17.025-18.77c.002-.061-2.141-.077-10.514-.077-5.783 0-10.516.02-10.517.046 0 .026.552 2.546 1.23 5.6l1.23 5.554 7.708-.016 7.71-.015 1.575-5.507c.867-3.029 1.577-5.542 1.578-5.584zm-3.833 18.77c.271.179.412.436.412.753s-.14.574-.412.753c-.377.248-.944.11-1.211-.295-.249-.377-.11-.944.295-1.211a.896.896 0 0 1 .458-.118c.17 0 .35.047.458.118M1.052.117c-.568.376-.568 1.256 0 1.631.167.11.336.118 2.76.118h2.583L8.06 9.38c1.926 8.686 1.738 7.592 1.343 7.824-1.697.999-1.745 3.624-.086 4.725.585.389.92.47 1.955.475l.908.005-.325.116C8.873 23.585 9.611 28 12.773 28c3.16 0 3.9-4.415.916-5.475-.321-.115-.248-.116 5.68-.116 5.926 0 6 .001 5.678.116-2.983 1.06-2.245 5.475.917 5.475 3.165 0 3.899-4.414.91-5.478l-.32-.113.81-.005c.887-.006 1.044-.056 1.282-.417.158-.24.16-.799.002-1.037-.276-.418.51-.383-9.187-.417l-8.773-.031-.218-.136c-.589-.367-.582-1.232.013-1.557.194-.106.667-.112 8.956-.128l8.751-.017.257-.232.257-.232 1.897-6.641c2.007-7.028 2.013-7.055 1.756-7.433-.289-.424.664-.393-12.048-.393H8.793l-.033-.14c-.019-.077-.17-.756-.339-1.509C8.057.45 8.054.442 7.754.194L7.518 0H4.374C1.399 0 1.22.007 1.052.118" />
                    </g>
                  </g>
                </svg>

                <span>Carrinho</span>
              </h2>

              {state.items.length > 0 ? (
                state.items.map((item) => {
                  return (
                    <CartItemComponent key={item.id} item={item} increase />
                  );
                })
              ) : (
                <p className="title-4-bold-cinzel no-items">
                  Nenhum item até o momento.
                </p>
              )}
            </div>

            {state.items.length > 0 && (
              <div className="cart-address">
                <LayoutBox
                  title={{
                    text: "Selecione um endereço",
                    icon: {
                      image: "profile/icone-endereco.png",
                      height: 24,
                    },
                    size: 7,
                  }}
                  titleInside
                >
                  <SelectAddress
                    addressSelected={addressSelected}
                    setAddressSelected={setAddressSelected}
                  />
                </LayoutBox>
              </div>
            )}
          </div>

          {continuePayment && (
            <section className="payment-area">
              <S.Payment>
                <div className="method-payment">
                  <div className="top">
                    <h2 className="title-2-bold-graphie">
                      3. Escolha o meio de pagamento
                    </h2>

                    <button
                      type="button"
                      className="link-2-regular-graphie button-back"
                      onClick={() => setContinueToPayment(false)}
                    >
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                        >
                          <g>
                            <g>
                              <g />
                              <g>
                                <path d="M2.871 5.25H12v1.5H2.871l4.023 4.023-1.06 1.06L0 6 5.833.166l1.061 1.061z" />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </i>
                      Voltar
                    </button>
                  </div>

                  <PaymentComponent />
                </div>
              </S.Payment>
            </section>
          )}

          <OrderSumaryComponent
            addressSelected={addressSelected}
            continueToPayment={continuePayment}
            setContinueToPayment={setContinueToPayment}
          />
        </Container>
      </S.CartPage>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "auth.token": token } = nookies.get(ctx);

  if (!token) {
    return {
      redirect: { destination: "/autenticacao?callbackurl=carrinho" },
      props: {},
    };
  }

  return {
    props: {
      auth: true,
    },
  };
};
