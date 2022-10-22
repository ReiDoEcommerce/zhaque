import Head from "next/head";

import { Layout } from "components/layout";
import { Container } from "components/data/container";

import * as S from "styles/pages/notfound";

export default function Page404() {
  return (
    <Layout>
      <Head>
        <title>Página não encontrada</title>
      </Head>
      
      <S.NotFound>
        <Container>
          <p className="title-1-bold-cinzel">Página não encontrada ;(</p>
        </Container>
      </S.NotFound>
    </Layout>
  );
}
