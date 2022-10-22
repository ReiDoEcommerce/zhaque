import Head from "next/head";

import { Layout } from "components/layout";
import { Container } from "components/data/components";
import CreateAccountComponent from "components/sections/login/createAccount";

import * as S from "styles/pages/login";

export default function CreateAccountPage() {
  return (
    <Layout isBackgroundColor>
      <Head>
        <title>Criar conta</title>
      </Head>

      <S.Login isMaxWidth>
        <Container>
          <CreateAccountComponent />
        </Container>
      </S.Login>
    </Layout>
  );
}
