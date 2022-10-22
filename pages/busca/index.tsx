import Head from "next/head";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { GetProducts } from "src/services/shop/get";
import createRouterBuild from "src/utils/router-build";
import Paginate, { IPagination } from "src/utils/pagination";

import { Layout } from "components/layout";
import {
  PaginationComponent,
  Container,
  SortBy,
} from "components/data/components";
import { CardProductComponent } from "components/data/card-product";

import * as S from "styles/pages/shop";
import { GetServerSideProps } from "next";

export default function SearchPage({ products }: any) {
  const router = useRouter(),
    routerBuild = createRouterBuild(router),
    [pagination, setPagination] = useState<IPagination | null>(null),
    [filterMobile, setFilterMobile] = useState(false);

  useEffect(() => {
    if (products) {
      setPagination(
        Paginate({
          totalItems: products.pageTotal,
          currentPage:
            Number(router.query.page) <= 0 || !router.query.page
              ? 1
              : Number(router.query.page),
          pageSize: products.pageSize,
          hasNextPage: products.hasNextPage,
          hasPreviousPage: products.hasPreviousPage,
        })
      );
    }
  }, [products.data, router.query]);

  const options = [
    { label: "A-Z", value: "A-Z" },
    { label: "Z-A", value: "Z-A" },
    { label: "Maior preço", value: "HigherValue" },
    { label: "Menor preço", value: "LowerValue" },
  ];

  return (
    <S.Shop>
      <Head>
        <title>Resultados</title>
        <meta
          name="description"
          content="resultados da sua busca em nosso site"
        />
      </Head>
      
      <Layout isBackgroundColor>
        <div className="shop-content">
          {/* <Container>
            <div
              className={`bg-filter-shop ${filterMobile && "active"}`}
              onClick={() => setFilterMobile(false)}
            ></div>

            <div className={`filter ${filterMobile && "active"}`}>
              <SortBy
                options={options}
                router={router}
                routerBuild={routerBuild}
                setFilterMobile={setFilterMobile}
              />
            </div>
          </Container> */}

          <Container>
            <div className="product-content">
              <h2 className="title-1-bold" style={{ marginBottom: "2vw" }}>
                Procurar por: {router.query.search}
              </h2>

              <div className="list">
                {products.products.map((product) => {
                  return (
                    <CardProductComponent key={product.id} card={product} />
                  );
                })}
              </div>

              {products.products.length === 0 && (
                <h2 className="title-2-bold">
                  Nenhum resultado encontrado com esses termos.
                </h2>
              )}

              {pagination && (
                <PaginationComponent
                  pages={pagination.pages}
                  currentPage={pagination.page}
                  hasNextPage={pagination.hasNextPage}
                  hasPreviousPage={pagination.hasPreviousPage}
                  onSelect={(page) => {
                    return routerBuild.updateRouteParam(
                      "page",
                      page.toString()
                    );
                  }}
                />
              )}
            </div>
          </Container>
        </div>
      </Layout>
    </S.Shop>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const responseProducts = await GetProducts(ctx);

  return {
    props: {
      products: responseProducts,
    },
  };
};
