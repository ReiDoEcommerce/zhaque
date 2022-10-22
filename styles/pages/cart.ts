import styled from "styled-components";

export const CartPage = styled.section`
  padding: 54px 0 120px;

  h2,
  h3 {
    color: var(--primary-color);
    margin-bottom: 23px;

    svg {
      fill: var(--secundary-color);
    }
  }

  h2 {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .no-items {
    color: #000;
  }

  .container {
    display: flex;
    align-items: flex-start;
    gap: 30px;
  }

  .payment-area,
  .cart-itens {
    max-width: calc(100% - 460px);
    width: 100%;
  }

  .cart-itens {
    .cart-item {
      border-radius: 10px;
      border-bottom: unset;
      padding: 14px 40px 14px 20px;
    }

    > div + * {
      margin-top: 35px;
    }
  }

  .show-cart-mobile {
    display: none;
  }

  .cart-address {
    > div {
      padding: 30px 30px;
    }

    h3 {
      text-transform: unset;
      color: var(--primary-color);
      font-size: 22px;
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 48px 0 105px;

    .cart-address {
      > div {
        padding: 25px 19px;
      }

      i {
        width: 21px;
        height: 21px;
      }

      h3 {
        font-size: 19px;
        gap: 7px;
      }
    }

    h2 {
      margin-bottom: 20px;
    }

    h3 {
      margin-bottom: 17px;
    }

    .container {
      gap: 27px;
    }

    .cart-itens {
      max-width: calc(100% - 450px);

      .cart-item {
        padding: 13px 19px;
      }

      > div + * {
        margin-top: 30px;
      }
    }

    .actions {
      p {
        font-size: 14px;
      }

      form {
        select,
        input {
          font-size: 18px;
        }

        button {
          max-width: 105px;
        }
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 44px 0 95px;

    h2 {
      margin-bottom: 17px;
    }

    .cart-address {
      > div {
        padding: 25px 18px;
      }

      h3 {
        font-size: 17px;
      }
    }

    .container {
      gap: 24px;
    }

    .cart-itens {
      max-width: calc(100% - 409px);

      .cart-item {
        padding: 12px 18px;
      }

      > div + * {
        margin-top: 25px;
      }
    }

    .payment-area {
      max-width: calc(100% - 385px);
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 40px 0 85px;

    h2 {
      margin-bottom: 15px;
    }

    .payment-area {
      max-width: calc(100% - 360px);
    }

    .container {
      gap: 21px;
    }

    .cart-address {
      > div {
        padding: 25px 17px;
      }

      i {
        width: 19px;
        height: 19px;
      }

      h3 {
        font-size: 16px;
        gap: 5px;
      }
    }

    .cart-itens {
      max-width: calc(100% - 381px);

      .cart-item {
        padding: 11px 17px;
      }

      > div + * {
        margin-top: 20px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 45px 0 55px;

    .payment-area {
      max-width: 100%;
      width: 100%;
    }

    .container {
      max-width: 600px;
    }

    .show-cart-mobile {
      display: block;
    }

    h2,
    h3 {
      margin-bottom: 13px;
    }

    h3 {
      font-size: 18px;
    }

    .container {
      gap: 18px;
      flex-direction: column;
    }

    .cart-itens {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0;

      > div + * {
        margin-top: 15px;
      }

      .cart-item {
        padding: 10px 16px;
      }

      .cart-item:last-child {
        margin-bottom: 0;
      }
    }

    .hide-cart-mobile {
      display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 30px 0;

    .container {
      max-width: 500px;
    }

    h2,
    h3 {
      margin-bottom: 13px;
    }

    h2 {
      svg {
        width: 25px;
      }
    }

    .container {
      gap: 15px;
    }

    .cart-itens {
      .cart-item {
        padding: 9px 15px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 23px 0;

    [class*="paragraph-2"] {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 445px) {
    .container {
      gap: 10px;
    }

    .cart-itens {
      > div + * {
        margin-top: 10px;
      }

      .cart-item {
        padding: 7px 10px;
      }
    }
  }
`;

export const Payment = styled.div`
   .container {
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }

  .method-payment {
    max-width: 890px;
    width: 100%;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    margin-bottom: 23px;

    h2 {
      color: #000;
      margin-bottom: 0;
    }

    button {
      color: var(--secundary-color);
      fill: var(--secundary-color);
      display: flex;
      gap: 8px;
      margin-right: 5px;
      border: 0;
      background-color: transparent;
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      flex-direction: column;
      gap: 25px;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      max-width: 600px;
    }

    .top {
      margin-bottom: 13px;

      h2 {
        font-size: 16.5px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .container {
      gap: 20px;
    }

    .top {
      flex-direction: column-reverse;
      align-items: flex-start;
      gap: 10px;
      
      button {
        padding: 0;
      }
    }
  }
`;
