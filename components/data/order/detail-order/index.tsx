import { Order } from "src/interfaces/order";
import { ToMoney } from "src/utils/numberToCurrency";

import { PixComponent } from "components/data/pix";
import { NextImage } from "components/data/NextImage";
import { ButtonComponent } from "components/data/button";

import * as S from "./styles";

interface OrderDetailProps {
  order: Order;
  isComplete?: boolean;
}

export function DetailOrder({ order, isComplete }: OrderDetailProps) {
  const orderAprovado = "Pagamento aprovado";
  const orderAguardando = "Aguardando pagamento";
  const orderCancelado = "Pedido cancelado";
  const orderConfirmado = "Pagamento confirmado";
  const paymentMethodTeste = "pix";

  function Status(word: string) {
    return order?.orderStatus?.includes(word);
  }

  return (
    <S.DetailOrder isComplete={isComplete}>
      <div className="top-order top-my-orders divisor">
        {order?.orderNumber && (
          <div className="box-order">
            <h3 className="paragraph-1-bold">Número do pedido</h3>

            <span className="paragraph-2-regular">{order.orderNumber}</span>
          </div>
        )}

        {(order?.orderStatus ||
          orderAprovado ||
          orderAguardando ||
          orderCancelado) && (
            <div className="box-order">
              <h3 className="paragraph-1-bold">Status</h3>

              <span className="paragraph-2-regular">
                <span className="green">
                  {Status("confirmado") && orderConfirmado}
                </span>

                <span className="green">
                  {Status("aprovado") && orderAprovado}
                </span>

                <span className="orange">
                  {Status("Aguardando") && orderAguardando}
                </span>
                <span className="red">
                  {Status("cancelado") && orderCancelado}
                </span>
              </span>
            </div>
          )}

        {order?.dateCreated && (
          <div className="box-order">
            <h3 className="paragraph-1-bold">Data</h3>

            <span className="paragraph-2-regular">{order.dateCreated}</span>
          </div>
        )}

        {(order?.paymentMethod || paymentMethodTeste) && (
          <div className="box-order">
            <h3 className="paragraph-1-bold">Valor</h3>

            <span className="paragraph-2-regular">
              R$ {ToMoney(order?.totalValue)}
            </span>
          </div>
        )}
      </div>

      <div className="divisor">
        <div className="more-details">
          {!isComplete && (
            <div>
              <ButtonComponent
                href={`/perfil/minhas-ordens/detalhes/${order.guid}`}
                text="Mais detalhes"
              />
            </div>
          )}
        </div>
      </div>

      {isComplete && (
        <>
          <div className="midle-order divisor">
            {order?.cityAddress && (
              <div className="box-order">
                <h3 className="paragraph-1-bold">endereço</h3>

                <address className="paragraph-2-regular">
                  {order.streetAddress && (
                    <>
                      {order.streetAddress}
                      <br />
                    </>
                  )}
                  {order.plusAddress && (
                    <>
                      {order.plusAddress}
                      <br />
                    </>
                  )}
                  CEP{" "}
                  {order.zipCode && (
                    <>
                      {order.zipCode}
                      <br />
                    </>
                  )}
                  {order.stateAddress && order.stateAddress},
                  {order.cityAddress && order.cityAddress}
                  {order.countryAddress && order.countryAddress}
                </address>
              </div>
            )}
          </div>

          <div className="shipping-table divisor">
            <h3 className="paragraph-1-bold">status do pedido</h3>

            {order?.orderDetailLogs?.map(({ dateCreated, titulo }) => {
              return (
                <div className="shipping-item">
                  <span className="paragraph-1-bold">{titulo}</span>

                  <span className="paragraph-2-regular">{dateCreated}</span>
                </div>
              );
            })}
          </div>

          <div className="product-order divisor">
            <div className="box-order">
              <h3 className="paragraph-1-bold">Produto</h3>

              {order?.orderDetailItems?.map(
                ({ imagem, quantidade, titulo, valorTotal, numerosSorteio, dataSorteio }, index) => {
                  return (
                    <div
                      className="product-informations divisor"
                      key={titulo + valorTotal + quantidade + "item" + index}
                    >
                      <div className="box-left">
                        <div className="image">
                          <NextImage src={imagem} isBaseUrl layout="fill" />
                        </div>

                        <div className="text">
                          <h4 className="paragraph-1-bold">{titulo}</h4>
                          <span className="paragraph-2-medium">
                            Quantidade {quantidade}
                          </span>
                          {
                            numerosSorteio.length > 0 && <>
                              <h3 className="paragraph-1-bold">números da sorte:</h3>

                              <div className="more-details">
                                <div className="list-numbers">
                                  {
                                    numerosSorteio.split(";").map(item => <span className="paragraph-1-bold">{item}</span>)
                                  }
                                </div>
                              </div>
                            </>
                          }
                        </div>
                      </div>

                      <div className="box-right">
                        <div className="box-order data-sorteio">
                          <h3 className="paragraph-1-bold">data do sorteio:</h3>

                          <span className="title-1-bold">
                            {dataSorteio}
                          </span>
                        </div>

                        <h4 className="paragraph-1-bold">Total</h4>

                        <span className="pink">{ToMoney(valorTotal)}</span>
                      </div>
                    </div>
                  );
                }
              )}

              {order?.subtotalValue && (
                <div className="product-row">
                  <span className="product-title paragraph-1-bold">
                    Subtotal
                  </span>

                  <span className="pink">{ToMoney(order.subtotalValue)}</span>
                </div>
              )}

              <div className="product-row">
                <span className="product-title paragraph-1-bold">Taxa Adm Gateway Pagamento:</span>

                <span className="pink">
                  {ToMoney(0.99)}
                </span>
              </div>
            </div>
          </div>

          <div className="product-order divisor">
            <div className="box-order">
              <div className="product-container">
                {order?.totalValue && (
                  <div className="product-row">
                    <span className="product-title paragraph-1-bold">
                      Valor total
                    </span>

                    <span className="pink">{ToMoney(order.totalValue)}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {(order.qrCode && order.qrCodeUrl && order.totalValue && !Status("confirmado")) && (
            <PixComponent
              pixImage={order.qrCodeUrl as string}
              pixURL={order.qrCode as string}
              pixValor={String(order.totalValue)}
            />
          )}

          <div className="need-help">
            {(order.boletoPDF && !Status("confirmado")) && (
              <ButtonComponent
                href={order.boletoPDF}
                text="Baixar meu BOLETO"
                className="button-payment link-2-bold"
              />
            )}

            <ButtonComponent
              href="/atendimento-ao-cliente/"
              text="Precisa de ajuda?"
            />
          </div>
        </>
      )}
    </S.DetailOrder>
  );
}
