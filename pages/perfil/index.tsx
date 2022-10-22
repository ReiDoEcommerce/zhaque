import Head from "next/head";
import { GetServerSideProps } from "next";

import nookies from "nookies";

import { Layout } from "components/layout";
import { Container, DetailOrder } from "components/data/components";
import {
  LayoutBox,
  UserInformations,
  TabNavigationComponent,
} from "components/sections/profile/core";

import * as S from "styles/pages/profile";
import { api } from "src/services/api";
import { Order } from "src/interfaces/order";
import { useEffect } from "react";

interface ProfileProps {
  myLastOrder: Order;
}

const tabProfile = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29"><g><g><path fill="#fff" d="M12.68 24.947a.896.896 0 0 0-.457-.118c-.501 0-.87.37-.87.87 0 .501.37.871.87.871.885 0 1.204-1.131.458-1.623zm17.025-18.77c.002-.061-2.141-.077-10.513-.077-5.784 0-10.517.02-10.517.046-.001.026.552 2.546 1.228 5.6l1.23 5.554 7.71-.016 7.709-.015 1.575-5.507c.867-3.029 1.577-5.542 1.578-5.584zm-3.833 18.77c.271.179.412.436.412.753s-.14.574-.412.753c-.377.248-.944.11-1.211-.295-.248-.377-.11-.944.295-1.211a.896.896 0 0 1 .458-.117c.17 0 .35.046.458.117M.502.617c-.568.376-.568 1.256 0 1.631.168.11.336.118 2.76.118h2.583L7.511 9.88c1.926 8.686 1.738 7.592 1.343 7.824-1.697.999-1.745 3.624-.086 4.725.585.389.92.47 1.956.475l.908.005-.326.115c-2.983 1.061-2.244 5.476.917 5.476 3.161 0 3.9-4.415.916-5.476-.321-.114-.248-.115 5.68-.115 5.926 0 6 .001 5.679.115-2.984 1.061-2.245 5.476.916 5.476 3.166 0 3.9-4.414.91-5.478l-.319-.113.809-.005c.887-.006 1.044-.056 1.282-.418.158-.24.16-.798.002-1.036-.276-.418.511-.383-9.186-.417l-8.774-.031-.217-.136c-.59-.367-.583-1.232.012-1.557.194-.106.667-.112 8.956-.128l8.751-.017.257-.232.258-.232 1.896-6.641c2.007-7.028 2.013-7.055 1.756-7.433-.288-.424.664-.393-12.048-.393H8.243l-.033-.14-.339-1.509C7.507.95 7.505.942 7.204.694L6.968.5H3.824C.85.5.671.507.503.618"/></g></g></svg>',
    name: "Meus pedidos",
    url: "/perfil/minhas-ordens",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26"><g><g><path fill="#fff" d="M16.822 13.284a.83.83 0 0 0 .468 1.535c.513-.001.81-.302.81-.82 0-.667-.73-1.076-1.278-.715zm-3.279 0a.83.83 0 0 0 .467 1.535c.513-.001.811-.302.811-.82 0-.667-.73-1.076-1.278-.715zm5.023-7.37c6.424.756 9.774 7.332 6.344 12.455-.335.5-.414.658-.414.827 0 .166 1.03 3.558 1.132 3.73.014.024-.786-.364-1.78-.862-2.07-1.037-1.899-.999-2.806-.637-6.06 2.412-12.637-1.454-12.637-7.428 0-5 4.685-8.728 10.16-8.084zM11.49 2.6c1.25.066 2.819.55 3.964 1.222.658.388.653.37.127.446-3.929.571-7.311 3.3-8.464 6.827-.716 2.192-.562 4.781.406 6.826.281.593.308.582-.556.233-.912-.368-.74-.407-2.803.627l-1.797.9.104-.312c1.198-3.618 1.176-3.454.584-4.342-3.245-4.863-.389-11.02 5.699-12.284.541-.112 1.689-.216 2.05-.184.09.008.399.026.686.041zm8.61 10.685a.83.83 0 0 0 .468 1.535c.513-.001.81-.302.81-.82 0-.667-.73-1.076-1.277-.715M9.05.966C5.435 1.494 2.335 3.684.892 6.73c-1.36 2.87-1.153 6.32.537 8.955l.286.446-.798 2.506c-.952 2.992-.967 3.106-.435 3.457.396.26.491.226 3.205-1.155l2.472-1.258.52.192c.629.233 1.381.433 2.07.55l.514.089.5.451c3.056 2.76 7.303 3.616 11.293 2.274l.797-.268 2.468 1.254c2.709 1.376 2.805 1.41 3.2 1.15.53-.35.517-.46-.435-3.452l-.798-2.509.256-.397c1.476-2.289 1.863-5.327 1.008-7.912-1.164-3.517-4.35-6.131-8.295-6.807l-.511-.088-.582-.52C15.758 1.532 12.28.494 9.05.965"/></g></g></svg>',
    name: "Contato",
    url: "/atendimento-ao-cliente",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27"><g><g><path fill="#fff" d="M14.862 22.818l-.283.263-.579.525-.579-.525-.283-.263c-3.392-3.116-6.326-5.808-8.258-8.211C2.995 12.27 2.16 10.36 2.16 8.4c0-1.541.566-2.955 1.596-3.991C4.779 3.373 6.179 2.808 7.7 2.808c1.757 0 3.5.82 4.651 2.187L14 6.954l1.649-1.959C16.8 3.622 18.543 2.808 20.3 2.808c1.521 0 2.921.565 3.951 1.602 1.03 1.036 1.595 2.456 1.595 3.99 0 1.953-.841 3.871-2.72 6.207-1.938 2.403-4.865 5.095-8.264 8.211zM20.3.654c-2.45 0-4.759 1.124-6.3 2.955C12.459 1.778 10.15.654 7.7.654 3.359.654 0 4.033 0 8.4c0 5.35 4.759 9.645 11.967 16.268L14 26.5l2.033-1.83C23.24 18.045 28 13.751 28 8.4 28 4.034 24.641.655 20.3.655z"/></g></g></svg>',
    name: "Favoritos",
    url: "/perfil/favoritos",
  },
];

export default function ProfilePage({ myLastOrder }: ProfileProps) {
  return (
    <Layout isBackgroundColor>
      <Head>
        <title>Perfil</title>
      </Head>

      <S.Profile>
        <Container>
          <div className="top-profile">
            <UserInformations />

            <TabNavigationComponent tabs={tabProfile} />
          </div>

          {myLastOrder && (
            <div className="profile-area-content">
              <LayoutBox
                title={{
                  text: "Seu último pedido",
                  icon: {
                    image: "/profile/icon-carrinho-profile.webp",
                    isround: true,
                  },
                  size: 3,
                }}
                isDefault
              >
                <DetailOrder
                  key={myLastOrder.orderNumber}
                  order={myLastOrder}
                  isComplete
                />
              </LayoutBox>
            </div>
          )}
        </Container>
      </S.Profile>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "auth.token": token } = nookies.get(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/autenticacao?callbackurl=perfil/",
      },
      props: {},
    };
  }

  api.defaults.headers["Authorization"] = `Bearer ${token}`;

  const responseList = await api.get<Order[]>("/orders/list");

  if (!responseList.data) {
    return {
      props: {
        myLastOrder: null,
      },
    };
  }
  const { data } = await api.post<Order>(`/orders/detail`, {
    guid: responseList.data[0]?.guid,
  });

  if (!data) {
    return {
      props: {
        myLastOrder: null,
      },
    };
  }

  return {
    props: {
      myLastOrder: data,
    },
  };
};
