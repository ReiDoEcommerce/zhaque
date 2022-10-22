import { Product } from "src/services/shop/get";
import { useCart } from "src/contexts/CartContext";
import { ToMoney } from "src/utils/numberToCurrency";
import { ICartItem } from "src/contexts/CartContext/intefaces/cart";

import { LoaderCircle } from "components/data/loader-circle";

import * as S from "./styles"

interface QuantityProps {
    product: Product;
}

export function Quantity({ product }: QuantityProps) {
    const { state, SubtractQuantity, AddQuantity, cartLoading, AddProductInCart } = useCart();

    const thisItemInCart = state.items.find((item) => {
        return item.id === product.id
    });

    const thisProduct: ICartItem = {
        id: product.id,
        titulo: product.titulo,
        preco: product.precoPromo?.toString() || product.preco.toString(),
        precoPromo: product.precoPromo?.toString(),
        isPromotion: product.isPromotion,
        imagem: product.imagem,
        quantity: 1,
        isVariation: false,
        url: product.url,
        sku: product.sku,
    };

    return (
        <>
            <S.Quantity>
                {cartLoading && <div className="loader">
                    <LoaderCircle size={50} color="var(--primary-color"/>
                </div>}

                <h5 className="paragraph-1-bold">Adicione números da sorte</h5>

                <div className="numbers-list">
                    {[1, 2, 5, 10, 50, 100].map((item) => {
                        return <button key={"qtd" + item} type="button" className="paragraph-1-bold" onClick={() => AddQuantity(thisItemInCart || thisProduct, item)}>
                            + {item}
                        </button>
                    })}
                </div>

                <div className="quantity-total">
                    <h5 className="paragraph-1-bold">Quantidade total:</h5>

                    <div className="quantity">
                        <button
                            type="button"
                            className="paragraph-1-bold"
                            onClick={() => SubtractQuantity(thisItemInCart || thisProduct)}
                            disabled={thisItemInCart ? thisItemInCart.quantity === 1 : true}
                            aria-label="minus button item cart"
                        >
                            -
                        </button>

                        <span>
                            <span className="title-2-bold">{thisItemInCart?.quantity || 0}</span>
                        </span>

                        <button
                            type="button"
                            onClick={() => AddQuantity(thisItemInCart || thisProduct, 1)}
                            className="paragraph-1-bold"
                            aria-label="plus button item cart"
                        >
                            +
                        </button>
                    </div>
                </div>
            </S.Quantity>

            <div className="actions">
                <button type="button" className="add-to-cart paragraph-1-bold" onClick={() => AddProductInCart(thisProduct, 1)} disabled={cartLoading}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28"> <g> <g><g> <path fill="#fff" d="M12.757 24.447a.896.896 0 0 0-.458-.118c-.5 0-.87.37-.87.87 0 .501.37.871.87.871.885 0 1.204-1.131.458-1.623zM29.78 5.677c.002-.061-2.141-.077-10.513-.077-5.784 0-10.516.02-10.517.046-.001.026.552 2.546 1.229 5.6l1.23 5.554 7.709-.016 7.709-.015 1.576-5.507c.866-3.029 1.576-5.542 1.577-5.584zm-3.833 18.77c.272.179.412.436.412.753s-.14.574-.412.753c-.377.248-.944.11-1.211-.295-.248-.377-.11-.944.295-1.211a.896.896 0 0 1 .458-.117c.17 0 .35.046.458.117M.578.117C.01.494.01 1.374.579 1.749c.168.11.336.118 2.76.118h2.583L7.587 9.38c1.926 8.686 1.738 7.592 1.343 7.824-1.697.999-1.745 3.624-.086 4.725.585.389.92.47 1.956.475l.908.005-.325.115C8.399 23.585 9.138 28 12.299 28s3.9-4.415.916-5.476c-.32-.114-.247-.115 5.68-.115 5.926 0 6 .001 5.679.115C21.59 23.585 22.329 28 25.49 28c3.166 0 3.9-4.414.91-5.478l-.319-.113.81-.005c.887-.006 1.043-.056 1.281-.418.158-.24.16-.798.002-1.036-.275-.418.511-.383-9.186-.417l-8.774-.031-.217-.136c-.59-.367-.582-1.232.012-1.557.195-.106.668-.112 8.956-.128l8.751-.017.258-.232.257-.232 1.896-6.641c2.007-7.028 2.013-7.055 1.756-7.433-.288-.424.664-.393-12.048-.393H8.32l-.033-.14-.338-1.509C7.583.45 7.58.442 7.28.194L7.044 0H3.9C.926 0 .747.007.58.118" /></g></g></g></svg>
                        Adicionar ao carrinho
                    </span>

                    <span>{thisItemInCart && (ToMoney(thisItemInCart.quantity * Number(product.preco)))}</span>
                </button>
            </div>
        </>
    )
}