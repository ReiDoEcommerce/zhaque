import Head from "next/head";

import { BreadCrumbComponent } from "components/data/breadcrumb";
import { Container } from "components/data/container";
import { Layout } from "components/layout";
import { GetServerSideProps } from "next";
import { PageInformationProps } from "src/interfaces/pageInformations";
import { api } from "src/services/api";

import * as S from "styles/pages/dinamicPage";

const BreadCrumbList = [
  {
    label: "Página inícial",
    url: "/",
  },
  {
    label: "Políticas e privacidade",
    url: "",
  },
];

interface InformationPageProps {
  information: PageInformationProps;
}

export default function PolicyPage({ information }: InformationPageProps) {
  return (
    <Layout>
      <Head>
        <title>{information.head.pageTitle}</title>
        <meta name="description" content={information.head.metaDescription} />
      </Head>

      <S.DinamicPage>
        <Container>
          <div className="top">
            <BreadCrumbComponent list={BreadCrumbList} />
          </div>

          <div className="content">
            <p>
              <strong>{information.item.titulo}</strong>
            </p>

            <div
              dangerouslySetInnerHTML={{
                __html: information.item.descricao,
              }}
            ></div>
          </div>
        </Container>
      </S.DinamicPage>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const informationsPage = await api.get<PageInformationProps>(
    "pages/politica-e-privacidade"
  );

  return {
    props: {
      information: informationsPage.data,
    },
  };
};
