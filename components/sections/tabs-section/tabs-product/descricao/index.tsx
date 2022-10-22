import { Product } from "src/services/shop/get";
import * as S from "../styles";

interface DescricaoProps {
  products: Product;
}
export function DescricaoComponent({ products }: DescricaoProps) {
  return (
    <S.TabContent>
      <div className="content paragraph-1-regular">
        <div
          dangerouslySetInnerHTML={{
            __html: products.descricao ? products.descricao : "<span className='paragraph-1-medium'>Este produto não possuí descrição</span>",
          }}
        ></div>
      </div>
    </S.TabContent>
  );
}
