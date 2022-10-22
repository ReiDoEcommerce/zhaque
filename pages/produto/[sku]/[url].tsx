
import React, { useRef, useState } from "react";

import Head from "next/head";
import { GetServerSideProps } from "next";

import { Rating } from "react-simple-star-rating";

import {
  GetProduct,
  GetProducts,
  ProductDetail,
  ProductListItem,
  ProductProps,
} from "src/services/shop/get";

import {
  Container,
  CurrencyText,
  BreadCrumbComponent,
} from "components/data/components";
import { Layout } from "components/layout";
import { ToMoney } from "src/utils/numberToCurrency";
import BannerStripComponent from "components/sections/BannerStrip";
import { Quantity } from "components/sections/product-detail/quantity";
import { ProductShowCase } from "components/sections/shop-detail/carousel";

import * as S from "styles/pages/shop-detail";
import { DestaquesProdutosComponent } from "components/sections/home/DestaquesProdutos";

interface DetailProductPageProps {
  data: ProductDetail;
  products: ProductListItem[];
}

export default function DetailProductPage({
  data: { imagens, product }, products
}: DetailProductPageProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const carouselMain = useRef() as any;
  const carouselList = useRef() as any;

  // const mediaReviews = () => {
  //   if (reviews.length === 0) {
  //     return 0;
  //   }

  //   let soma = 0;

  //   for (let i in reviews) {
  //     soma += reviews[i].rate;
  //   }

  //   return soma / reviews.length;
  // };

  const breadCrumbList = [
    {
      label: "Página Inicial",
      url: "/",
    },
    {
      label: product ? product.categoriaTitle : "/",
      url: `/produtos/?category=${product.categoriaUrl}`,
    },
    {
      label: product.titulo,
      url: "",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>{product.pageTitle}</title>
        <meta name="description" content={product.metaDescription} />
      </Head>

      <S.ShopDetail>
        <Container>
          <div className="top">
            <BreadCrumbComponent list={breadCrumbList} />
          </div>

          <div className="box-product">
            <div className="title">
              <h2 className="title-3-bold show-on-mobile">
                {product.titulo}
              </h2>
            </div>

            <div className="image">
              <ProductShowCase
                setThumbsSwiper={setThumbsSwiper}
                thumbsSwiper={thumbsSwiper}
                product={product}
                imagens={imagens}
                carouselMainRef={carouselMain}
                carouselListRef={carouselList}
              />
            </div>

            <div className="text">
              <div className="top-detail">
                <h2 className="title-1-bold hide-on-mobile">
                  {product.titulo}
                </h2>

                <h4 className="title-3-regular">
                  <strong>{product.subTitulo}</strong>
                  <br />
                  Esta rifa será sorteada
                </h4>

                <span className="cod link-1-regular">
                  (CÓD: {product.sku}){" "}
                </span>

                {/* <div className="review link-1-regular">
                  <Rating
                    ratingValue={20 * mediaReviews()}
                    size={31}
                    transition
                    fillColor="orange"
                    emptyColor="black"
                    className="foo"
                    readonly
                    allowHalfIcon
                  />

                  <div className="rating">
                    <span>{reviews?.length}</span>
                  </div>
                </div> */}

                <div className="prices">
                  <div className="title-price-bold currency">
                    <span>{ToMoney(product.preco)}</span>
                  </div>

                  {product.precoPromo && product.isPromotion && (
                    <CurrencyText
                      isPromotion={product.isPromotion}
                      text={product.precoPromo.toString()}
                    />
                  )}
                </div>
              </div>

              {product.IsOffline ? <p className="title-2-bold">Venda finalizada.</p> : <Quantity product={product} />}
            </div>
          </div>
        </Container>

        <BannerStripComponent />

        <DestaquesProdutosComponent
          title="Itens relacionados"
          listProducts={products}
        />
      </S.ShopDetail>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await GetProduct(ctx);
  const responseProducts = await GetProducts(ctx, true);

  if (response === undefined) {
    return {
      notFound: true,
      props: {},
    };
  }

  const produtoExisteEmDestaque = responseProducts?.products.find((item) => item.id === response.product.id) ? responseProducts.products.filter((item) => item.id !== response.product.id) : responseProducts;

  console.log(produtoExisteEmDestaque)

  return {
    props: {
      data: response,
      products: produtoExisteEmDestaque
    },
  };
};
