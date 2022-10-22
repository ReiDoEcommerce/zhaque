import Head from "next/head";
import { GetServerSideProps } from "next";

import nookies from "nookies";
import { useFavorite } from "src/contexts/Favorite";

import { Layout } from "components/layout";
import { Container } from "components/data/components";
import { CardProductComponent } from "components/data/card-product";

import * as S from "styles/pages/shop";

export default function FavoritesPage() {
  const { favorites } = useFavorite();

  return (
    <S.Shop>
      <Head>
        <title>Favoritos</title>
      </Head>
      
      <Layout isBackgroundColor>
        <div className="shop-content">
          <Container>
            <div className="product-content">
              <h2 className="title-1-bold" style={{ marginBottom: "2vw" }}>
                Favoritos:
              </h2>

              <div className="list">
                {favorites?.map((product) => (
                  <CardProductComponent key={product.id} card={product} />
                ))}
              </div>

              {(!favorites || favorites.length === 0) && (
                <h2 className="title-2-bold">
                  Nenhum item adicionado aos favoritos.
                </h2>
              )}
            </div>
          </Container>
        </div>
      </Layout>
    </S.Shop>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "auth.token": token } = nookies.get(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/autenticacao?callbackurl=/perfil/favoritos/",
      },
      props: {},
    };
  }

  return {
    props: {},
  };
};
