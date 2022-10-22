import styled from "styled-components";

interface DetailOrderStyleProps {
  isComplete?: boolean;
}

export const DetailOrder = styled.div<DetailOrderStyleProps>`
  margin-bottom: 30px;
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;

  .red {
    color: red;
  }

  .green {
    color: green;
  }

  .orange {
    color: orange;
  }

  .top-order {
    display: grid;
    grid-template-columns: ${(props) =>
    props.isComplete
      ? "repeat(5, 1fr)"
      : "0.95fr 0.95fr 0.95fr 0.95fr 1.2fr"};
    gap: 20px;
  }

  .divisor + * {
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #707070;
  }

  .midle-order {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 30px;
  }

  h3 {
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  h3 + * {
    margin-bottom: 20px;
  }

  address {
    margin: 0;
  }

  address {
    margin: 0;
  }

  .purple {
    color: var(--theme-color-light);
  }

  .shipping-table {
    display: flex;
    flex-direction: column;

    .shipping-item {
      display: flex;
      gap: 20px;
      margin-bottom: 0;
    }

    .shipping-item + .shipping-item {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        transform: translateY(-100%);
        left: 15px;
        height: 20px;
        width: 2px;
        background-color: var(--yellow);
      }
    }
  }

  .product-order {
    .product-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .product-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .product-row + .product-row {
      margin-top: 20px;
    }

    .product-title {
      text-transform: uppercase;
    }

    .product-informations {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 20px;

      .box-left {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 25px;

        .image {
          height: 120px;
          width: 120px;

          img {
            object-fit: contain !important;
          }
        }
      }

      .box-right {
        margin-left: 50px;

        .data-sorteio {
          margin-bottom: 20px;
        }

        h4 {
          margin-bottom: 0;
        }
      }
    }
  }

  .need-help {
    display: flex;
    justify-content: flex-end;
    gap: 20px;

    > div {
      width: 200px;
    }

    .button-payment {
      background-color: var(--primary-color);
    }
  }

  .pink {
    color: var(--secundary-color);
    font-weight: 700;
    font-size: 20px;
  }

  .boleto {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
  }

  .data-sorteio {
    max-width: 265px;
    width: 100%;
    border-radius: 10px;
    border: 2px solid #00c755;
    padding: 18px;
    text-align: center;

    h3 {
      margin-bottom: 0;
    }

    > * {
      color: var(--primary-color);
    }
  }

  .more-details {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 40px;

    a {
        min-width: 265px;
        text-transform: uppercase;
     }
  }

  .list-numbers {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 8px;

    span {
      padding: 0 8px;
      min-width: 70px;
      height: 32px;
      border-radius: 10px;
      border: 1px solid #707070;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 1600px) {
    margin-bottom: 25px;

    .product-order {
      .product-informations {
        .box-left {
          .image {
            height: 115px;
            width: 115px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    margin-bottom: 20px;

    .product-order {
      .product-informations {
        .box-left {
          gap: 20px;

          .image {
            height: 110px;
            width: 110px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .currency {
      i {
        width: 17px;
        height: 17px;
        margin-right: 5px;
      }
    }

    .product-order {
      .product-informations {
        .box-left {
          gap: 15px;

          .image {
            height: 105px;
            width: 105px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    a {
      font-size: 15px;
    }

    .top-my-orders {
      grid-template-columns: repeat(4, 1fr);
    }

    .currency {
      i {
        width: 15px;
        height: 15px;
      }
    }

    .product-order {
      .product-informations {
        .box-left {
          .image {
            height: 100px;
            width: 100px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 900px) {
    padding: 30px 20px 25px;
    margin-bottom: 15px;

    .hide-mobile {
      display: none;
    }

    .show-mobile {
      display: block !important;
    }

    h3 {
      margin-bottom: 5px;
    }

    a {
      max-width: 300px;
      margin: 0 auto;
    }

    .top-my-orders + * {
      border-bottom: unset;
      margin-bottom: unset;
      padding-bottom: unset;
    }

    .divisor + * {
      margin-top: 20px;
      padding-top: 20px;
      margin-bottom: unset;
      padding-bottom: unset;
    }
  }

  @media only screen and (max-width:  768px) {
    padding: 23px 20px 18px;
    margin-bottom: 12px;

    h3 {
      margin-bottom: 0;
    }

    a {
      height: 37px;
    }

    .top-my-orders +*{
      margin-top: 17px;
      padding-top: 17px;
    }
  }

  @media only screen and (max-width:600px) {
    h3 +* {
      margin-bottom: 0;
    }

    .top-my-orders {
      grid-template-columns: repeat(1,  1fr);
      gap: 6px;

      .box-order {
        display: flex;
        justify-content: space-between;
      }
    }

    .divisor + * {
      margin-top: 18px;
      padding-top: 13px;
    }

    a {
      max-width: 70%;
      height: 32px;
      font-size: 13px;
    }
  }

  .midle-order {
    display: flex;
    flex-direction: column;
    grid-template-columns: unset;
    gap: 7px;
  }

  @media only screen and (max-width: 600px) {
    border-radius: 5px;

    .currency {
      i {
        width: 13px;
        height: 13px;
        margin-right: 5px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 15px 12px;

    h3 {
      font-size: 12px;
    }


    .product-order {
      .product-informations {
        flex-direction: column;
        gap: 12px;

        .box-right {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 100%;
          width: 100%;

          h4 {
            margin-bottom: 0;
          }
        }
      }
    }

    .need-help {
      justify-content: center;

      button {
        border-radius: 5px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .product-order {
      .product-informations {
        .box-left {
          .image {
            height: 80px;
            width: 80px;
          }
        }
      }
    }
  }
`;
