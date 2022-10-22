import { GetServerSideProps } from "next";

import { api } from "src/services/api";

import { Layout } from "components/layout";
import { BannerComponent } from "components/sections/home/components";
import BannerStripComponent from "components/sections/BannerStrip";
import { MiniBannersComponent } from "components/sections/home/MiniBanners";
import { DestaquesProdutosComponent } from "components/sections/home/DestaquesProdutos";

import { GetProducts, ProductProps } from "src/services/shop/get";

//interfaces
import { Banner } from "components/sections/home/banner";

interface HomeProps {
  products: ProductProps;
  banners: Banner[];
}

export default function HomePage({ banners, products }: HomeProps) {

  const listacomdois = [
    {
      id: 1,
      imagem: "/images/mini-banner-1.jpg",
      url: "",
    },
    {
      id: 2,
      imagem: "/images/mini-banner-2.jpg",
      url: "",
    },
  ]

  const listaprodutos1 = [
    {
      id: 1,
      categoriaTitle: "1",
      categoriaUrl: "1",
      descricao: "1",
      idFile: 2,
      imagem: "/images/produto-1.jpg",
      isPromotion: false,
      metaDescription: "1",
      metaImage: "1",
      pageTitle: "1",
      preco: 2,
      precoPromo: 3,
      subTitulo: "1",
      tags: "1",
      titulo: "1",
      url: "1",
      sku: "1",
      isPreVenda: false,
    },
    {
      id: 2,
      categoriaTitle: "1",
      categoriaUrl: "1",
      descricao: "1",
      idFile: 2,
      imagem: "/images/produto-2.jpg",
      isPromotion: false,
      metaDescription: "1",
      metaImage: "1",
      pageTitle: "1",
      preco: 2,
      precoPromo: 3,
      subTitulo: "1",
      tags: "1",
      titulo: "1",
      url: "1",
      sku: "1",
      isPreVenda: false,
    },
    {
      id: 3,
      categoriaTitle: "1",
      categoriaUrl: "1",
      descricao: "1",
      idFile: 2,
      imagem: "/images/produto-3.jpg",
      isPromotion: false,
      metaDescription: "1",
      metaImage: "1",
      pageTitle: "1",
      preco: 2,
      precoPromo: 3,
      subTitulo: "1",
      tags: "1",
      titulo: "1",
      url: "1",
      sku: "1",
      isPreVenda: false,
    },

    {
      id: 4,
      categoriaTitle: "1",
      categoriaUrl: "1",
      descricao: "1",
      idFile: 2,
      imagem: "/images/produto-4.jpg",
      isPromotion: false,
      metaDescription: "1",
      metaImage: "1",
      pageTitle: "1",
      preco: 2,
      precoPromo: 3,
      subTitulo: "1",
      tags: "1",
      titulo: "1",
      url: "1",
      sku: "1",
      isPreVenda: false,
    },
  ]



  const listacomtres = [
    {
      id: 1,
      imagem: "/images/mini-banner-1.jpg",
      url: "",
    },
    {
      id: 2,
      imagem: "/images/mini-banner-2.jpg",
      url: "",
    },
    {
      id: 3,
      imagem: "/images/mini-banner-1.jpg",
      url: "",
    },
  ]

  const listaprodutos2 = [
    {
      id: 1,
      categoriaTitle: "1",
      categoriaUrl: "1",
      descricao: "1",
      idFile: 2,
      imagem: "/images/produto-1.jpg",
      isPromotion: false,
      metaDescription: "1",
      metaImage: "1",
      pageTitle: "1",
      preco: 2,
      precoPromo: 3,
      subTitulo: "1",
      tags: "1",
      titulo: "1",
      url: "1",
      sku: "1",
      isPreVenda: false,
    },
    {
      id: 2,
      categoriaTitle: "1",
      categoriaUrl: "1",
      descricao: "1",
      idFile: 2,
      imagem: "/images/produto-2.jpg",
      isPromotion: false,
      metaDescription: "1",
      metaImage: "1",
      pageTitle: "1",
      preco: 2,
      precoPromo: 3,
      subTitulo: "1",
      tags: "1",
      titulo: "1",
      url: "1",
      sku: "1",
      isPreVenda: false,
    },
    {
      id: 3,
      categoriaTitle: "1",
      categoriaUrl: "1",
      descricao: "1",
      idFile: 2,
      imagem: "/images/produto-3.jpg",
      isPromotion: false,
      metaDescription: "1",
      metaImage: "1",
      pageTitle: "1",
      preco: 2,
      precoPromo: 3,
      subTitulo: "1",
      tags: "1",
      titulo: "1",
      url: "1",
      sku: "1",
      isPreVenda: false,
    },

    {
      id: 4,
      categoriaTitle: "1",
      categoriaUrl: "1",
      descricao: "1",
      idFile: 2,
      imagem: "/images/produto-4.jpg",
      isPromotion: false,
      metaDescription: "1",
      metaImage: "1",
      pageTitle: "1",
      preco: 2,
      precoPromo: 3,
      subTitulo: "1",
      tags: "1",
      titulo: "1",
      url: "1",
      sku: "1",
      isPreVenda: false,
    },
    {
      id: 5,
      categoriaTitle: "1",
      categoriaUrl: "1",
      descricao: "1",
      idFile: 2,
      imagem: "/images/produto-1.jpg",
      isPromotion: false,
      metaDescription: "1",
      metaImage: "1",
      pageTitle: "1",
      preco: 2,
      precoPromo: 3,
      subTitulo: "1",
      tags: "1",
      titulo: "1",
      url: "1",
      sku: "1",
      isPreVenda: false,
    },
    {
      id: 6,
      categoriaTitle: "1",
      categoriaUrl: "1",
      descricao: "1",
      idFile: 2,
      imagem: "/images/produto-2.jpg",
      isPromotion: false,
      metaDescription: "1",
      metaImage: "1",
      pageTitle: "1",
      preco: 2,
      precoPromo: 3,
      subTitulo: "1",
      tags: "1",
      titulo: "1",
      url: "1",
      sku: "1",
      isPreVenda: false,
    },
    {
      id: 7,
      categoriaTitle: "1",
      categoriaUrl: "1",
      descricao: "1",
      idFile: 2,
      imagem: "/images/produto-3.jpg",
      isPromotion: false,
      metaDescription: "1",
      metaImage: "1",
      pageTitle: "1",
      preco: 2,
      precoPromo: 3,
      subTitulo: "1",
      tags: "1",
      titulo: "1",
      url: "1",
      sku: "1",
      isPreVenda: false,
    },

    {
      id: 8,
      categoriaTitle: "1",
      categoriaUrl: "1",
      descricao: "1",
      idFile: 2,
      imagem: "/images/produto-4.jpg",
      isPromotion: false,
      metaDescription: "1",
      metaImage: "1",
      pageTitle: "1",
      preco: 2,
      precoPromo: 3,
      subTitulo: "1",
      tags: "1",
      titulo: "1",
      url: "1",
      sku: "1",
      isPreVenda: false,
    },
  ]

  return (
    <Layout>
      <BannerComponent listBanners={banners} />

      <BannerStripComponent />

      <MiniBannersComponent listBanners={listacomdois} />

      <DestaquesProdutosComponent
        title="Destaques"
        listProducts={listaprodutos1}
      />

      <MiniBannersComponent listBanners={listacomtres} />


      <DestaquesProdutosComponent
        title="Destaques"
        listProducts={listaprodutos2}
      />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const banners = await api.get<Banner[]>(`/component/banners/GetAll`);
  const responseProducts = await GetProducts(ctx);

  if (!banners || !responseProducts) {
    return {
      props: {
        banner: [],
        products: []
      },
    };
  }

  return {
    props: {
      banners: banners.data,
      products: responseProducts,
    },
  };
};
