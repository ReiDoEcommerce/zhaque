import Head from "next/head";
import React, { useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";

import { useRouter } from "next/router";

import {
  GetProducts,
  GetCategories,
  ProductListItem,
  CategoriesList,
  ProductProps,
} from "src/services/shop/get";

import createRouterBuild from "src/utils/router-build";
import Paginate, { IPagination } from "src/utils/pagination";

import { Layout } from "components/layout";
import {
  Container,
  FilterBy,
  SortBy,
  PaginationComponent,
} from "components/data/components";
import { CardProductComponent } from "components/data/card-product";

import * as S from "styles/pages/shop";

interface ShopPageProps {
  products: ProductProps;
  categories: CategoriesList[];
}

export default function ShopPage({ products, categories }: ShopPageProps) {
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
  }, [products, router.query]);

  const options = [
    { label: "ORDENAR POR", value: "ORDENAR POR" },
    { label: "A-Z", value: "A-Z" },
    { label: "Z-A", value: "Z-A" },
    { label: "Maior preço", value: "HigherValue" },
    { label: "Menor preço", value: "LowerValue" },
  ];

  const categorieSelected = categories.find(categorie => categorie.url === router.query.category);

  return (
    <S.Shop filterMobile={filterMobile}>
      <Head>
        <title>{categorieSelected ? categorieSelected.pageTitle : "produtos"}</title>
        <meta name="description" content={categorieSelected ? categorieSelected.metaDescription : "Livros mikrokosmos"} />
      </Head>

      <Layout>
        <div className="shop-content">
          <Container>
            <div
              className={`bg-filter-shop ${filterMobile && "active"}`}
              onClick={() => setFilterMobile(true)}
            ></div>

            <div className={`filter ${filterMobile && "active"}`}>
              <FilterBy
                listFilters={categories}
                router={router}
                routerBuild={routerBuild}
                setFilterMobile={setFilterMobile}
              />

              <SortBy
                router={router}
                options={options}
                routerBuild={routerBuild}
                setFilterMobile={setFilterMobile}
              />
            </div>
          </Container>

          <Container>
            <div className="filter-mobile-control">
              <button
                type="button"
                className="paragraph-1-regular-graphie"
                onClick={() => setFilterMobile(true)}
              >
                FILTER BY
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M3.853 54.87C10.47 40.9 24.54 32 40 32H472C487.5 32 501.5 40.9 508.1 54.87C514.8 68.84 512.7 85.37 502.1 97.33L320 320.9V448C320 460.1 313.2 471.2 302.3 476.6C291.5 482 278.5 480.9 268.8 473.6L204.8 425.6C196.7 419.6 192 410.1 192 400V320.9L9.042 97.33C-.745 85.37-2.765 68.84 3.854 54.87L3.853 54.87z" />
                </svg>
              </button>

              <div className="selected-filter">
                {router.query?.category && (
                  <span className="paragraph-1-regular-graphie">
                    {router.query?.category}
                  </span>
                )}

                {router.query?.currentfilter && (
                  <span className="paragraph-1-regular-graphie">
                    {router.query?.currentfilter}
                  </span>
                )}
              </div>
            </div>
          </Container>

          <Container>
            <div className="product-content">
              <div className="list">
                {products.products.map((product: ProductListItem) => {
                  return (
                    <CardProductComponent
                      key={product.id + product.titulo}
                      card={product}
                    />
                  );
                })}
              </div>

              {products.products.length === 0 && (
                <h2 className="title-4-bold-cinzel">No results found</h2>
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
  const responseCategories = await GetCategories();

  if (!responseProducts || !responseCategories) {
    return {
      notFound: true,
      props: null,
    };
  }

  return {
    props: {
      categories: responseCategories,
      products: responseProducts,
    },
  };
};
