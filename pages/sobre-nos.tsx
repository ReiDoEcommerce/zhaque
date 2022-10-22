import Head from "next/head";
import { GetServerSideProps } from "next";

import { api } from "src/services/api";
import { PageInformationProps } from "src/interfaces/pageInformations";


import { Layout } from "components/layout";
import { Container } from "components/data/container";
import { PartnersComponent } from "components/sections/home/partners";

import * as S from "../styles/pages/about";

interface InformationPageProps {
  information: PageInformationProps;
}

export default function AboutPage({ information }: InformationPageProps) {
  return (
    <Layout>
      <Head>
        <title>{information.head.pageTitle}</title>
        <meta name="description" content={information.head.metaDescription} />
      </Head>

      <S.AboutPage>
        <Container>
          <div className="text-image">
            <div className="text">
              <h2 className="title-1-bold uppercase">
                {information.item.titulo}
              </h2>

              <p
                className="paragraph-1-regular"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>

            <div className="image-sobre">
              <img src="/images/page-sobre.png" />
            </div>

            {/* {information.item.image && (
              <div className="image">
                <NextImage
                  layout="fill"
                  src={information.item.image}
                  isBaseUrl
                />
              </div>
            )} */}
          </div>
        </Container>

        <PartnersComponent />
      </S.AboutPage>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const informationsPage = await api.get<PageInformationProps>(
    "pages/sobre-nos"
  );

  return {
    props: {
      information: informationsPage.data,
    },
  };
};
