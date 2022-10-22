
import React, { useRef, useState } from "react";

import Head from "next/head";
import { GetServerSideProps } from "next";

import { Rating } from "react-simple-star-rating";

import {
  GetProduct,
  ProductDetail,
} from "src/services/shop/get";

import {
  Container,
  CurrencyText,
  BreadCrumbComponent,
} from "components/data/components";
import { Layout } from "components/layout";
import BannerStripComponent from "components/sections/BannerStrip";
import { Quantity } from "components/sections/product-detail/quantity";
import { ProductShowCase } from "components/sections/shop-detail/carousel";

import * as S from "styles/pages/shop-detail";

interface DetailProductPageProps {
  data: ProductDetail;
}

export default function DetailProductPage({
  data: { imagens, product, reviews },
}: DetailProductPageProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const carouselMain = useRef() as any;
  const carouselList = useRef() as any;

  const mediaReviews = () => {
    if (reviews.length === 0) {
      return 0;
    }

    let soma = 0;

    for (let i in reviews) {
      soma += reviews[i].rate;
    }

    return soma / reviews.length;
  };

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
                <h4 className="title-3-regular">
                  Esta rifa será sorteada no dia <br />
                  <strong>08/10/2022 às 22h00</strong>
                </h4>

                <h2 className="title-2-bold hide-on-mobile">
                  {product.titulo}
                </h2>

                <span className="cod link-1-regular">
                  (CÓD: {product.sku}){" "}
                </span>

                <div className="review link-1-regular">
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
                </div>

                <div className="prices">
                  <CurrencyText
                    isPromotion={product.isPromotion}
                    text={product.preco.toString()}
                  />

                  {product.precoPromo && product.isPromotion && (
                    <CurrencyText
                      isPromotion={product.isPromotion}
                      text={product.precoPromo.toString()}
                    />
                  )}
                </div>
              </div>

              <Quantity product={product} />
            </div>
          </div>
        </Container>

        <BannerStripComponent />
      
      </S.ShopDetail>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await GetProduct(ctx);

  if (response === undefined) {
    return {
      notFound: true,
      props: {},
    };
  }

  return {
    props: {
      data: response,
    },
  };
};
