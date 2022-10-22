import Head from "next/head";
import { GetServerSideProps } from "next";

import nookies from "nookies";

import { Layout } from "components/layout";
import SignInComponent from "components/sections/login/signIn";

import * as S from "styles/pages/login";
import { Container } from "components/data/components";

export default function LoginPage() {
  return (
    <Layout isBackgroundColor>
      <Head>
        <title>Entrar</title>
      </Head>

      <S.Login isMaxWidth>
        <Container>
          <SignInComponent />
        </Container>
      </S.Login>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "auth.token": token } = nookies.get(ctx);

  if (token) {
    return {
      redirect: { destination: "/perfil" },
      props: {},
    };
  }

  return {
    props: {
      auth: true,
    },
  };
};
