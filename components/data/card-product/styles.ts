import styled from "styled-components";

export const CardProduct = styled.div`
  max-width: 330px;
  width: 100%;
  position: relative;

  .favorite-action {
    background-color: transparent;
    border: 0;
  }

  .bt-tag {
    position: absolute;
    top: 20px;
    right: 0;
    background-color: var(--secundary-color);
    padding: 0 22px;
    height: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    transition: 0.3s;

    a {
      color: #fff;
    }
  }

  .bt-tag:hover {
    background-color: #ae1e52;
  }

  .bt {
    max-width: 235px;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    transition: 0.1s;
  }

  .bt.white {
    background-color: #fff;
    color: #000;
    fill: var(--secundary-color);
    gap: 8px;
  }

  .bt.white:hover {
    background-color: var(--secundary-color);
    color: #fff;
    fill: #fff;
  }

  .bt.transp {
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
  }

  .bt.transp:hover {
    background-color: var(--tertiary-color);
    border: unset;
  }

  span + * {
    margin-top: 24px;
  }

  .bt.transp + * {
    margin-top: 20px;
  }

  button {
    border: unset;
  }

  .image {
    aspect-ratio: 330/480;
    width: 100%;

    img {
      aspect-ratio: inherit;
      max-width: 100%;
      object-fit: cover;
      object-position: center center;
      border-radius: 10px;
    }
  }

  .text-image {
    color: #000;
    border-radius: 10px;
    text-align: center;

    h3 {
      max-width: 90%;
      margin: 0 auto;
      overflow: hidden; // Removendo barra de rolagem
      text-overflow: ellipsis; // Adicionando "..." ao final
      display: -webkit-box;
      -webkit-line-clamp: 3; // Quantidade de linhas
      -webkit-box-orient: vertical;
    }

    .image + * {
      margin-top: 12px;
    }
  }

  .absolute-image {
    position: absolute;
    top: 0;
    left: 0;
    aspect-ratio: 330/480;
    opacity: 0;
    transition: 0.2s;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 56px;
    border-radius: 10px;
  }

  .items {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
  }

  &:hover {
    .absolute-image {
      opacity: 1;
    }
  }

  .currency {
    color: #fff;
    margin: 10px 0;
  }

  @media only screen and (max-width: 1600px) {
    .bt {
      height: 52px;
    }

    .bt.transp + * {
      margin-top: 13px;
    }

    .absolute-image {
      padding-bottom: 47px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .bt-tag {
      padding: 0 19px;

      a {
        font-size: 14px;
      }
    }

    .bt {
      max-width: 185px;
      height: 44px;
      font-size: 14px;

      svg {
        max-width: 20px;
      }
    }

    .absolute-image {
      padding-bottom: 40px;
    }

    span + * {
      margin-top: 16px;
    }

    .bt.transp + * {
      margin-top: 13px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .bt-tag {
      padding: 0 15px;
      height: 33px;

      a {
        font-size: 13.5px;
      }
    }

    .text-image {
      .image + * {
        margin-top: 9px;
      }
    }

    .bt {
      max-width: 170px;
      height: 40px;
      font-size: 13px;
    }

    span + * {
      margin-top: 10px;
    }

    .bt.transp + * {
      margin-top: 10px;
    }
  }

  @media only screen and (max-width: 1024px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    .favorite-action {
      position: absolute;
      top: 4px;
      right: 3px;

      svg {
        width: 24px;
        height: auto;
      }
    }

    .bt {
      max-width: 70%;
      height: 50px;
      margin: 5px auto 0;
    }

    .text-image {
      
      .image {
        position: relative;
        overflow: hidden;
        border-radius: inherit;

        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgb(0,0,0);
background: linear-gradient(180deg, rgba(0,0,0,0.4962359943977591) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 78%, rgba(0,0,0,0.5018382352941176) 100%);
        }
      }

      img {
        width: 100%;
      }

      h3 {
        height: 48px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
      }

      .image + * {
        margin-top: 7px;
      }
    }

    .absolute-image {
      position: unset;
      aspect-ratio: unset;
      opacity: 1;
      background: unset;
      padding: 0;

      .details-link {
        display: none;
      }

      span {
        color: var(--secundary-color);
        font-size: 20px;
      }
    }

    .bt.white {
      background-color: var(--secundary-color);
      fill: #fff;
      color: #fff;
    }

    .price {
      span {
        color: var(--secundary-color);
        justify-content: center;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .bt-tag {
      padding: 0 10px;
      height: 28px;

      a {
        font-size: 11.5px;
      }
    }

    .text-image {
      h3 {
        font-size: 14.5px;
        height: 42px;
      }
    }

    .bt {
      height: 40px;
      max-width: 75%;
      margin: 2px auto 0;
    }
  }

  @media only screen and (max-width: 768px) {
    .text-image {
      h3 {
        font-size: 13px;
      }
    }

    .show-mobile {
      margin-top: 0;
    }

    .bt {
      height: 35px;
      max-width: 80%;
      font-size: 12px;
      margin-top: 3px;

      svg {
        max-width: 17px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .text-image {
      h3 {
        font-size: 12px;
        max-width: 100%;
      }
    }

    .bt-tag {
      height: 23px;
      padding: 0 8px;
      top: 15px;

      a {
        font-size: 10px;
      }
    }
  }

  @media only screen and (max-width: 550px) {
    .bt {
      height: 32px;
      max-width: 85%;
      font-size: 11px;
      margin-top: 2px;

      svg {
        max-width: 15px;
      }
    }

    .image {
      img {
        border-radius: 5px;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .text-image {
      h3 {
        font-size: 13px;
        max-width: 95%;
        height: 38px;
      }
    }

    .bt-tag {
      height: 24px;
      padding: 2px 10px 0;
      top: 14px;

      a {
        font-size: 11px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .text-image {
      h3 {
        font-size: 11px;
        height: 33px;
      }
    }

    .bt {
      height: 30px;
      max-width: 85%;
      font-size: 10px;
      margin-top: 2px;

      svg {
        max-width: 13px;
      }
    }

    .bt-tag {
      height: 20px;
      padding: 1px 6px 0 7px;

      a {
        font-size: 9.5px;
      }
    }

    .absolute-image {
      margin-top: 4px;

      span {
        font-size: 15px;
      }
    }
  }
`;
