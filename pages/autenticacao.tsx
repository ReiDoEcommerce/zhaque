import Head from "next/head";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

import nookies from "nookies";
import { Layout } from "components/layout";
import { Container } from "components/data/components";
import SignInComponent from "components/sections/login/signIn";
import CreateAccountComponent from "components/sections/login/createAccount";

import * as S from "styles/pages/login";

export default function AuthenticationPage({ isGray }) {
  const [tabControl, setTabControl] = useState({
    login: true,
    createAccount: false,
  });

  const [size, setSize] = useState<{ height: number; width: number } | null>(
    null
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  if (!size) {
    return <></>;
  }

  function changeTab(element: string) {
    if (element === "login") {
      setTabControl({
        login: !tabControl.login,
        createAccount: false,
      });
      return;
    }

    setTabControl({
      login: false,
      createAccount: !tabControl.createAccount,
    });
  }

  return (
    <Layout isBackgroundColor>
      <Head>
        <title>Autenticação</title>
      </Head>
      
      <S.Login>
        <Container>
          {size.width > 1024 && (
            <div className="create-account">
              <div className="tab-account">
                <button
                  className={`button-tab ${tabControl.login && "active"}`}
                  type="button"
                  onClick={() => changeTab("login")}
                >
                  <span className="ball">
                    <div></div>
                  </span>

                  <div className="text">
                    <span className="paragraph-1-bold">Login</span>
                    <span className="paragraph-2-light">
                      Entre com seu email e senha
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  className={`button-tab ${
                    tabControl.createAccount && "active"
                  }`}
                  onClick={() => changeTab("createAccount")}
                >
                  <span className="ball">
                    <div></div>
                  </span>

                  <div className="text">
                    <span className="paragraph-1-bold">Criar uma conta</span>
                    <span className="paragraph-2-light">
                      Não possui uma conta ainda?
                    </span>
                  </div>
                </button>
              </div>

              <div className={`tab-content ${tabControl.login && "active"}`}>
                <SignInComponent />
              </div>

              <div
                className={`tab-content  ${
                  tabControl.createAccount && "active"
                }`}
              >
                <CreateAccountComponent />
              </div>
            </div>
          )}

          {size.width <= 1024 && (
            <div className="create-account">
              <button
                className={`button-tab ${tabControl.login && "active"}`}
                type="button"
                onClick={() => changeTab("login")}
              >
                <span className="ball">
                  <div></div>
                </span>

                <div className="text">
                  <span className="paragraph-2-bold">Login</span>

                  <span className="paragraph-2-light">
                    Entre com seu email e senha
                  </span>
                </div>
              </button>

              <div className={`tab-content ${tabControl.login && "active"}`}>
                <SignInComponent />
              </div>

              <button
                type="button"
                className={`button-tab ${tabControl.createAccount && "active"}`}
                onClick={() => changeTab("createAccount")}
              >
                <span className="ball">
                  <div></div>
                </span>

                <div className="text">
                  <span className="paragraph-2-bold">Criar uma conta</span>
                  <span className="paragraph-2-light">
                    Não possui uma conta ainda?
                  </span>
                </div>
              </button>
              <div
                className={`tab-content  ${
                  tabControl.createAccount && "active"
                }`}
              >
                <CreateAccountComponent />
              </div>
            </div>
          )}
        </Container>
      </S.Login>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "auth.token": token } = nookies.get(ctx);

  return {
    props: {
      auth: true,
    },
  };
};
