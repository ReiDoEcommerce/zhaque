import styled from "styled-components";

interface ShopStyleProps {
  filterMobile?: boolean;
}

export const Shop = styled.main<ShopStyleProps>`
  .shop-content {
    padding: 65px 0;
    z-index: 2;
    position: relative;

    select {
      background-image: url("/images/arrow-select-black.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-size: 13px 8px;
      outline: none;
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      -ms-appearance: none; /* get rid of default appearance for IE8, 9 and 10*/
    }

    select::placeholder {
      color: var(--secundary-color);
    }

    .container {
      display: flex;
    }

    .filter {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 60px;
    }

    .filter-mobile-control {
      display: none;
      margin-bottom: 20px;

      button {
        color: #fff;
        display: flex;
        align-items: center;
        gap: 10px;
        background-color: unset;
        border: 0;

        svg {
          fill: #fff;
          height: 17px;
          width: auto;
        }
      }

      .selected-filter {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-top: 15px;

        span {
          color: #fff;
          text-transform: lowercase;
          height: 30px;
          padding: 0 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          border-radius: 50px;
          color: var(--base-color);
        }
      }
    }

    .product-content {
      width: 100%;
    }

    * + .product-content {
      margin-left: 30px;
    }

    .text-filter {
      max-width: 545px;
      text-align: center;
      margin-bottom: 30px;
      padding-left: 20px;
    }

    h1,
    h2,
    .description {
      color: var(--primary-color);
      margin-bottom: 0;
    }

    .title-search {
      margin-top: unset;
    }

    .title-search + * {
      margin-top: 35px;
    }

    h2 {
      margin-top: 40px;
    }

    .description + * {
      margin-top: 35px;
    }

    .list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
      row-gap: 50px;
    }
  }

  @media only screen and (max-width: 1600px) {
    .shop-content {
      padding: 55px 0;

      .filter {
        margin-bottom: 45px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .shop-content {
      padding: 50px 0;

      .filter {
        margin-bottom: 40px;
      }

      .list {
        gap: 25px;
        row-gap: 40px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .shop-content {
      padding: 45px 0;

      .filter {
        margin-bottom: 37px;
      }

      .list {
        gap: 20px;
        row-gap: 35px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .shop-content {
      padding: 35px 0;

      .list {
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
        row-gap: 35px;
      }

      .filter {
        margin-bottom: 35px;
      }

      .title-search + * {
        margin-top: 30px;
      }
    }

    .container {
      max-width: 840px;
    }

    .text-image {
      h3 {
        height: auto;
      }
    }

    .text-image + * {
      margin-top: 15px;
    }
  }

  @media only screen and (max-width: 768px) {
    .shop-content {
      padding: 25px 0;

      .list {
        grid-template-columns: repeat(2, 1fr);
      }

      .filter {
        margin-bottom: 25px;
      }

      .title-search + * {
        margin-top: 20px;
      }
    }

    .container {
      max-width: 520px;
    }
  }

  @media only screen and (max-width: 500px) {
    .shop-content {
      padding: 20px 0 30px;

      .list {
        gap: 25px 10px;
      }
    }

    .filter {
      gap: 40px;

      > div {
        max-width: 140px;

        select {
          font-size: 12px;
        }
      }
    }

    filter:nth-child(2) {
      max-width: 140px;
      font-size: 12px;

      select {
        font-size: 12px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
  }
`;
