import styled from "styled-components";

interface CartItemStyle {
  increase?: boolean;
}

export const CartItem = styled.div<CartItemStyle>`
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: addItem forwards 0.5s ease-out 1;

  @keyframes addItem {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      width: 100%;
      transform: scale(1);
      opacity: 1;
    }
  }

  .box-left-cart-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    max-width: calc(100% - 140px - 20px);
  }

  .image {
    width: ${(props) => (props.increase ? "93px" : "65px")};
    height: ${(props) => (props.increase ? "86px" : "65px")};
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.2s;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0, 0.6) 94%);
      opacity: 0;
    }
  }

  .image:hover {
    &::after {
      opacity: 1;
    }
  }

  .text {
    max-width: calc(100% - 65px - 15px);
  }

  h4 {
    color: var(--primary-color);
    margin-bottom: ${(props) => (props.increase ? "10px" : "0")};
  }

  .price {
    span {
      color: var(--primary-color-dark);
      font-size: 13.5px;
    }
  }

  .delete {
    display: flex;
    opacity: 0.5;
    transition: 0.3s;
    background-color: transparent;
    border: 0;
    padding: 0;
  }

  .delete:hover {
    opacity: 1;
  }

  .cart-infos {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .quantity {
    display: flex;
    align-items: center;
    gap: 12px;

    button {
      background-color: transparent;
      border: 0;
      color: var(--primary-color);
      transition: 0.3s;
    }

    button:disabled {
      opacity: 0.2;
    }

    button:hover {
      color: var(--secundary-color);
    }

    button:disabled:hover {
      color: var(--primary-color);
    }

    > span {
      width: 30px;
      height: 30px;
      border: 1px solid #332154;
      display: block;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-color);

      span {
        line-height: 14px;
        display: flex;
        height: 11px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .image {
      width: 130px;
      height: 100px;
      border-radius: 7px;
      overflow: hidden;
    }

    .text {
      max-width: calc(100% - 130px - 20px);
      width: 100%;

      h4 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* number of lines to show */
        -webkit-box-orient: vertical;
      }

      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    .cart-infos {
      gap: 9px;
    }

    .quantity {
      gap: 6px;

      > span {
        width: 25px;
        height: 25px;
        span {
          line-height: 13px;
        }
      }
    }

    .box-left-cart-item {
      gap: 20px;
      max-width: 100%;
      width: 100%;
    }
  }

  @media only screen and (max-width: 450px) {
    .image {
      width: 110px;
      height: 85px;
    }

    .text {
      max-width: calc(100% - 110px - 13px);
    }

    .box-left-cart-item {
      gap: 13px;
    }
  }

  @media only screen and (max-width: 400px) {
    .image {
      width: 95px;
      height: 85px;
      border-radius: 5px;
    }

    .box-left-cart-item {
      gap: 10px;
    }

    .text > div {
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    }

    .cart-infos {
      gap: 9px;
      justify-content: flex-end;
      width: 100%;
    }

    .quantity {
      gap: 4px;
    }
  }
`;
