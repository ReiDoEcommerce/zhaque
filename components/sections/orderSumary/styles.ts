import styled from "styled-components";

export const OrderSumaryComponent = styled.section`
  border-radius: 20px;
  background-color: #fff;
  max-width: 430px;
  width: 100%;
  padding: 21px 30px 20px 40px;

  h3 {
    color: #000;
  }

  .top-order,
  .bottom-order {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000;

    h4 {
      margin-bottom: 0;
    }

    .subtotal,
    .shipping,
    .discount {
      display: flex;
      align-items: center;
      gap: 12px;

      span {
        opacity: 0.5;
      }
    }

    .total {
      display: flex;
      gap: 10px;
    }

    .discount-percentage {
      color: var(--secundary-color);
    }

    .total {
      margin-bottom: 0;
    }

    .total.bottom {
      color: var(--secundary-color);
    }
  }

  .bottom-order {
    margin-bottom: 30px;
  }

  .section-order {
    padding-bottom: 23px;
    margin-bottom: 23px;
    border-bottom: 1px solid #000;
  }

  .shipping-price {
    display: flex;
    justify-content: space-between;

    h4 {
      span {
        opacity: 0.5;
      }
    }
  }

  button {
    margin-bottom: 15px;
  }

  .continue-shopping {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    gap: 7px;

    svg {
      fill: currentColor;
      max-width: 12px;
    }
  }

  .continue-shopping:hover {
    color: var(--secundary-color);
  }

  .form-input {
    display: flex;
    gap: 5px;
    /* margin-top: 10px;
    border-top: 1px solid #000;
    padding-top: 12px; */

    > div:first-child {
      margin-bottom: 0 !important;
      width: calc(100% - 100px - 5px);
    }

    > div:last-child {
      width: 100px;
    }


    input,
    button {
      margin-bottom: 0;
      border-radius: 7px;
      height: 35px;
    }

    input {
      color: var(--primary-color);
      border: 1px solid var(--primary-color);
      font-size: 15px;
    }

    input::placeholder {
      color: #ccc;
      opacity: 0.8;
    }

    button {
      border: unset;
      background-color: var(--secundary-color);
      border: 1px solid var(--secundary-color);
      color: #fff;
      width: 100%;
      transition: 0.5s;
      font-size: 13px;
    }

    button:hover {
      background-color: var(--hover-secundary-dark);
    }
  }

  .title-shipping {
    display: flex;
    border: 1px solid var(--primary-color);
    height: 50px;
    border-radius: 10px;
    padding-left: 20px;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    color: #e2e2e2;
    cursor: not-allowed;
    margin-bottom: 15px;
  }

 

  @media only screen and (max-width: 1600px) {
    border-radius: 19px;
    max-width: 417px;
    padding: 25px 27px 27px;

    .section-order {
      padding-bottom: 20px;
      margin-bottom: 20px;
    }

    .bottom-order {
      margin-bottom: 25px;
    }

    .form-input {
      input,
      button {
        font-size: 13px;
      }
    }

    .title-shipping {
      height: 45px;
    }
  }

  @media only screen and (max-width: 1400px) {
    border-radius: 18px;
    max-width: 385px;
    padding: 17px 20px;

    h3 {
      font-size: 23px;
    }

    .top-order {
      .subtotal {
        gap: 9px;
      }
    }

    .section-order {
      padding-bottom: 17px;
      margin-bottom: 17px;
    }

    .bottom-order {
      margin-bottom: 21px;
    }
  }

  @media only screen and (max-width: 1200px) {
    border-radius: 16px;
    max-width: 360px;
    padding: 15px 20px;

    .top-order {
      .subtotal {
        gap: 6px;
      }
    }

    .section-order {
      padding-bottom: 15px;
      margin-bottom: 15px;
    }
  }

  @media only screen and (max-width: 1024px) {
    border-radius: 14px;
    max-width: 100%;
    padding: 18px;

    .section-order {
      padding-bottom: 13px;
      margin-bottom: 13px;
    }

    .title-shipping {
      height: 40px;

      h4,p {
        font-size: 12px;
      }
    }

    .form-input {
      >div:first-child {
        width: calc(100% - 90px);
      }

      >div:last-child {
        width: 90px;
      }

      input,button {
        font-size: 12px;
        height: 34px;
        border-radius: 5px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    border-radius: 12px;
    padding: 16px;

    .border-ordem {
      margin-bottom: 17px;
    }
  }
`;
