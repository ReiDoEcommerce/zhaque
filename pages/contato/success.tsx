import Head from "next/head";
import { useRouter } from "next/router";

import { Layout } from "components/layout";
import { ButtonComponent } from "components/data/components";

import * as S from "styles/pages/contact";

export default function ContactSucessPage() {
  const { query } = useRouter();
  return (
    <Layout isBackgroundColor>
      <Head>
        <title>Contato enviado</title>
        <meta name="description" content="Contado enviado com sucesso"/>
      </Head>

      <S.Sucess>
        <div className="box-sucess">
          <h2 className="title-3-bold-graphie">Contato enviado!</h2>
          <p className="paragraph-1-bold-graphie">
            Obrigado {query.name} pelo contato!
          </p>
          <ButtonComponent text="Voltar" href="/" />
        </div>
      </S.Sucess>
    </Layout>
  );
}
