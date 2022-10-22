import Head from "next/head";
import { GetServerSideProps } from "next";

import { api } from "src/services/api";

import { Layout } from "components/layout";
import { Container } from "components/data/container";
import { BreadCrumbComponent } from "components/data/breadcrumb";
import { PageInformationProps } from "src/interfaces/pageInformations";

import * as S from "styles/pages/dinamicPage";

const BreadCrumbList = [
  {
    label: "Pagína incicial",
    url: "/",
  },
  {
    label: "Termos de uso",
    url: "/termos",
  },
];

interface InformationPageProps {
  information: PageInformationProps;
}

export default function TermsPage({ information }: InformationPageProps) {
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

          {information && (
            <>
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
            </>
          )}
        </Container>
      </S.DinamicPage>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const informationsPage = await api.get<PageInformationProps>(
    "pages/termos-de-uso"
  );

  return {
    props: {
      information: informationsPage.data || null,
    },
  };
};
