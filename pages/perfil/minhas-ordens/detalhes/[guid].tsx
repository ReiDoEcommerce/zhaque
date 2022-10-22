import Head from "next/head";
import { GetServerSideProps } from "next";

import nookies from "nookies";
import { api } from "src/services/api";
import { Order } from "src/interfaces/order";

import { Layout } from "components/layout";
import { Container, DetailOrder } from "components/data/components";
import Link from "next/link";
import { LayoutBox } from "components/sections/profile/core";
import * as S from "styles/pages/profile";

interface DetailOrderPage {
  orderDetail: Order;
}

export default function DetailOrderPage({ orderDetail }: DetailOrderPage) {
  return (
    <Layout isBackgroundColor>
      <Head>
        <title>Pedido</title>
      </Head>

      <S.Profile>
        <div className="container-my-order">
          <Container>
            <div className="profile-area-content my-ordens">
              <Link href="/perfil/minhas-ordens" passHref>
                <a href="replaced" className="back-link">
                  <svg
                    version="1.1"
                    width="256"
                    height="256"
                    viewBox="0 0 256 256"
                    xmlSpace="preserve"
                  >
                    <defs></defs>
                    <g transform="translate(128 128) scale(0.72 0.72)">
                      <g
                        style={{
                          stroke: "none",
                          strokeWidth: 0,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "none",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"
                      >
                        <path
                          d="M 65.75 90 c 0.896 0 1.792 -0.342 2.475 -1.025 c 1.367 -1.366 1.367 -3.583 0 -4.949 L 29.2 45 L 68.225 5.975 c 1.367 -1.367 1.367 -3.583 0 -4.95 c -1.367 -1.366 -3.583 -1.366 -4.95 0 l -41.5 41.5 c -1.367 1.366 -1.367 3.583 0 4.949 l 41.5 41.5 C 63.958 89.658 64.854 90 65.75 90 z"
                          style={{
                            stroke: `none`,
                            strokeWidth: 1,
                            strokeDasharray: `none`,
                            strokeLinecap: `butt`,
                            strokeLinejoin: `miter`,
                            strokeMiterlimit: 10,
                            fill: `currentColor`,
                            fillRule: `nonzero`,
                            opacity: 1,
                          }}
                          transform=" matrix(1 0 0 1 0 0) "
                          strokeLinecap="round"
                        />
                      </g>
                    </g>
                  </svg>
                  Voltar para pedidos
                </a>
              </Link>

              <LayoutBox
                title={{
                  text: "Detalhe do pedido",
                  icon: {
                    image: "/profile/icon-carrinho-profile.webp",
                    isround: true,
                  },
                  size: 5,
                }}
                isDefault
              >
                <DetailOrder order={orderDetail} isComplete />
              </LayoutBox>
            </div>
          </Container>
        </div>
      </S.Profile>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "auth.token": token } = nookies.get(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/autenticacao?callbackurl=perfil/minhas-ordens",
      },
      props: {},
    };
  }

  api.defaults.headers["Authorization"] = `Bearer ${token}`;
  const route = ctx.resolvedUrl.split("/");

  const guid = route[5] ? route[5].split("=")[1] : route[4];

  const { data } = await api.post<Order>(`/orders/detail`, { guid });

  if (!data) {
    return {
      props: {
        orderDetail: {},
      },
      notFound: true,
    };
  }

  return {
    props: {
      orderDetail: data,
    },
  };
};
