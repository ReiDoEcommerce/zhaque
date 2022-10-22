import * as S from './styles'

export interface CurrencyProps {
  text?: string | number;
  isPromotion?: boolean;
  isCart?:boolean
  noCurrencySimbol?: boolean;
}


export function CurrencyText({ text, isPromotion, noCurrencySimbol }: CurrencyProps) {

  if(!text) {
    return <></>
  }

  return (
    <S.Currency isPromotion={isPromotion} className="title-price-bold currency">
     {!noCurrencySimbol && "R$"}<span>{String(text)}</span>
    </S.Currency>
  );
}
