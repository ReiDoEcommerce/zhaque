import Head from "next/head";
import { useRouter } from "next/router";

import { Layout } from "components/layout";
import { ButtonComponent } from "components/data/components";

import * as S from "styles/pages/contact";
import Link from "next/link";
import { ToMoney } from "src/utils/numberToCurrency";
import { PixComponent } from "components/data/pix";

export default function ContactSucessPage() {
  const { query } = useRouter();

  return (
    <Layout>
      <Head>
        <title>Pedido realizado</title>
      </Head>

      <S.Sucess>
        <h2 className="title-2-bold-graphie">Pedido efetuado com sucesso.</h2>

        <p className="paragraph-3-bold-graphie">
          Obrigado {query.name} por comprar conosco.
        </p>

        {query.boleto && query.boletoPDF && (
          <>
            <ButtonComponent
              href={query.boletoPDF as string}
              target="_blanck"
              text="Clique aqui para baixar o seu boleto."
            />
          </>
        )}

        {query.pixImage && query.pixURL && query.pixValor && (
          <PixComponent pixImage={query.pixImage as string} pixURL={query.pixURL as string} pixValor={query.pixValor as string} />
        )}

        <Link href="/perfil/minhas-ordens" passHref>
          <a href="produtos" className="link-boleto paragraph-1-bold">
            Ir para os meus pedidos.
          </a>
        </Link>
      </S.Sucess>
    </Layout>
  );
}
