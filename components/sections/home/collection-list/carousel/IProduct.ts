export interface IProductItem {
  id: number;
  imagem: string;
  titulo: string;
  preco: number;
  sku: string;
  url: string;
}

export interface IProductState {
  items: IProductItem[] | undefined;
  isLoading: boolean;
}

export interface GetProductsCarousel {
  id: number;
  imagem: string;
  itens: IProductItem[];
  titulo: string;
}