import styled from "styled-components";

export const Cart = styled.div`
  cursor: pointer;

  .number-itens {
    position: absolute;
    top: -7px;
    right: -14px;
    background-color: var(--yellow);
    border-radius: 100%;
    width: 18px;
    height: 18px;
    background-color: var(--secundary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #fff;
    font-weight: 700;
    line-height: 7px;
  }

  img,
  svg {
    max-width: 32px;
    width: 100%;
    object-fit: contain;
  }

  @media only screen and (max-width: 1024px) {
    img,
    svg {
      max-width: 30px;
    }
  }

  @media only screen and (max-width: 900px) {
    img,
    svg {
      max-width: 27px;
    }

    .number-itens {
      width: 15px;
      height: 15px;
      font-size: 10px;
      right: -12px;
    }
  }

  @media only screen and (max-width: 500px) {
    img,
    svg {
      max-width: 24px;
    }

    .number-itens {
      top: -5px;
    }
  }

  @media only screen and (max-width: 400px) {
    img,
    svg {
      max-width: 23px;
    }

    .number-itens {
      top: -5px;
    }
  }
`;
interface LateralCartStyleProps {
  open?: boolean;
}

export const LateralCart = styled.div<LateralCartStyleProps>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  transform: translateX(100%);
  display: flex;
  z-index: 5;
  transition: 0.3s;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  .overlay {
    width: calc(100% - 500px);
    height: inherit;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
  }

  .content-cart {
    height: inherit;
    width: 500px;
    background-color: #fff;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: -12px 0px 22px -15px rgba(0, 0, 0, 0.3);

    .close {
      border: 0;
      background-color: unset;
      cursor: pointer;
      color: var(--primary-color-dark);
      transition: 0.3s;
    }

    .close:hover {
      color: var(--yellow);
    }

    .close + * {
      margin-top: 3vh;
    }

    h3 {
      color: var(--primary-color-dark);
    }

    .informacoes-produto {
      span {
        color: var(--primary-color-dark);
        font-size: 20px;
      }
    }

    .top-content-cart + * {
      margin-top: 5vh;
    }

    .cart-container {
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: auto;
      margin-bottom: 76px;
      padding-right: 20px;
    }

    .cart-container::-webkit-scrollbar {
      width: 4px;
    }

    .cart-container::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    .cart-container::-webkit-scrollbar-thumb {
      background: var(--base-color);
    }

    .cart-container::-webkit-scrollbar-thumb:hover {
      background: var(--theme-color-light);
    }

    .cart-infos-bottom {
      .total {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
        color: var(--primary-color);

        span {
          margin: 0;
          color: var(--secundary-color);
          font-size: 20px;
        }
      }
    }
  }

  @media only screen and (max-width: 650px) {
    .content-cart {
      padding-bottom: 85px;
    }
  }

  @media only screen and (max-height: 600px) {
    .content-cart {
      .top-content-cart + * {
        margin-top: 10px;
      }

      .cart-container {
        margin-bottom: 30px;
        padding-right: 15px;
      }
      .cart-infos-bottom {
        .total {
          margin-bottom: 12px;
          gap: 6px;

          span {
            font-size: 17px;
          }
        }
      }
    }

    .price {
      span {
        font-size: 14px;
      }
    }

    .quantity {
      > span {
        width: 22px;
        height: 22px;
      }

      span {
        font-size: 12px;
      }
    }
  }
`;
