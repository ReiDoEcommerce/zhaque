import styled from "styled-components";

interface CurrencyStyleProps {
  isPromotion?: boolean;
  isCart?:boolean
}

export const Currency = styled.span<CurrencyStyleProps>`
  display: flex;
  align-items: center;
  color:${(props) => (props.isCart ? "#000" : "#fff")};
`;
