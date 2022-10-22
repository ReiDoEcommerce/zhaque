import styled from "styled-components";

export const ShopDetail = styled.main`
  padding: 65px 0 100px;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .box-product {
    width: 100%;
    border-radius: 15px;
    display: flex;
    justify-content: center;

    .image {
      margin-right: 3.28vw;
      max-width: 690px;
      width: 100%;

      .main {
        aspect-ratio: 386/578;
        max-width: 386px;
        margin: 0 auto;
        width: 100%;
        position: relative;
        overflow: hidden;

        .swiper {
          aspect-ratio: inherit;

          .swiper-wrapper {
            aspect-ratio: inherit;
            .swiper-slide {
              aspect-ratio: inherit;
              img,
              video {
                aspect-ratio: inherit;
                overflow: hidden;
                object-fit: contain;
                width: 100%;
                background-color: #000;
              }
            }
          }
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #fff;
          border-radius: 100%;
          border: 1px solid #fff;
          width: 50px;
          height: 50px;

          &::after {
            font-size: 18px;
            position: absolute;
            top: 50%;
            transform: translateY(-48%);
            margin: 0 auto;
            display: flow-root;
            width: fit-content;
          }
        }

        .swiper-button-prev {
          &::after {
            left: 0;
            right: 3px;
          }
        }

        .swiper-button-next {
          &::after {
            left: 3px;
            right: 0;
          }
        }
      }

      .all-images-carousel-detail {
        width: 100%;
        margin-top: 20px;

        .video-product-thumb {
          width: 100%;
          position: relative;
          cursor: pointer;

          .layer-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2;
            background-color: rgba(0, 0, 0, 0.2);
            transition: 0.3s;

            svg {
              height: 20px;
              width: auto;
              fill: #fff;
              opacity: 0.8;
            }
          }

          .layer-video:hover {
            transition: 0.3s;
            background-color: rgba(0, 0, 0, 0.4);

            svg {
              opacity: 1;
            }
          }
        }

        img,
        video {
          cursor: pointer;
          aspect-ratio: 1.7;
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
          object-fit: cover;
          background-color: #000;
          object-position: center center;
          display: block;
          max-height: 160px;
          height: 100%;
          display: flex;
        }
      }
    }

    .text {
      max-width: 560px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 15px;

      .launch {
        color: var(--secundary-color);
        margin-bottom: 28px;
      }

      h4 {
        color: var(--primary-color);
        margin-bottom: 30px;
      }

      h2 {
        color: var(--secundary-color);
      }

      h2 + * {
        margin-top: 30px;
      }

      .cod {
        display: flex;
        margin-bottom: 5px;
      }

      .review {
        display: flex;
        align-items: center;
      }

      .foo {
        svg {
          color: #ccc;
        }
      }

      .select {
        max-width: 350px;
        padding-right: 40px;
        display: block;
        margin-bottom: 50px;
      }

      .currency {
        font-size: 56px;
        color: var(--theme-color);
        font-weight: bold;

        i {
          width: 26px;
          height: 26px;
        }
      }

      .add-to-cart {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          height: 58px;
          background-color: var(--primary-color);
          color: #fff;
          border: 0;
          border-radius: 10px;

          span {
            display: flex;
            align-items: center;
            gap: 10px;
            text-transform: uppercase;
          }

          &:hover {
            background-color: var(--secundary-color);
          }
        }
    }

    .rating {
      margin-bottom: 4px;
      margin-left: 10px;
      display: flex;
      gap: 7px;

      svg {
        width: 15px;
        margin-bottom: 2px;
        fill: #7a7a7a;
      }
    }

    .information {
      display: flex;
      flex-direction: column;
      gap: 21px;
    }

    .box-information {
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }

    .box-information.flex {
      display: flex;
      align-items: center;
      gap: 7px;

      .disponibilidade {
        color: #00c755;
      }

      a {
        margin-top: 4px;
      }

      svg {
        width: 21px;
      }
    }

    h4 {
      color: var(--yellow);
    }

    h2 {
      color: var(--theme-color);
      margin-bottom: 0;
    }
  }


  .tabs-descricao {
    margin-top: 80px;
  }

  .tabs-descricao + * {
    margin-top: 100px;
  }

  .prices {
    display: flex;
    align-items: center;
    color: var(--primary-color);

    > * + * {
      margin-left: 15px;
    }
  }

  .hide-on-mobile {
    display: block;
  }

  .show-on-mobile {
    display: none;
  }

  /* .prazo {
    position: relative;
    display: inline-flex !important;
    width: fit-content;

    .prazo-absolute {
      display: none;
      position: absolute;
      bottom: 0;
      transform: translateY(100%);
      right: 0;
      background-color: rgba(0, 0, 0, 0.8);
      padding: 5px;
      color: #fff;
      border-radius: 4px;

      p {
        margin: 0;
      }
    }

    svg:hover + .prazo-absolute {
      display: block;
    }
  } */

  @media only screen and (max-width: 1600px) {
    padding: 55px 0 0;

    .box-product {
      .image {
        max-width: 520px;

        .main {
          max-width: 355px;

          #nav-left {
            left: 9px;
          }

          #nav-right {
            right: 9px;
          }

          #nav-left,
          #nav-right {
            img {
              width: 46px;
            }
          }

          .swiper-button-next,
          .swiper-button-prev {
            width: 45px;
            height: 45px;

            &::after {
              font-size: 16px;
            }
          }
        }

        .all-images-carousel-detail {
          margin-top: 20px;
        }
      }

      .text {
        max-width: 520px;

        .launch {
          margin-bottom: 23px;
        }

        h2 + * {
          margin-top: 27px;
        }

        .select {
          max-width: 320px;
          padding-right: 30px;
          margin-bottom: 25px;
        }

        .currency {
          font-size: 49px;
        }

        .actions {
          gap: 25px;
        }
      }
    }

    .tabs-descricao {
      margin-top: 70px;
    }

    .tabs-descricao + * {
      margin-top: 80px;
    }

    .information {
      gap: 18px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 50px 0 0;

    .box-product {
      .image {
        margin-right: 3.4vw;
        max-width: 490px;

        .main {
          max-width: 310px;

          #nav-left {
            left: 8px;
          }

          #nav-right {
            right: 8px;
          }

          #nav-left,
          #nav-right {
            img {
              width: 42px;
            }
          }

          .swiper-button-next,
          .swiper-button-prev {
            width: 40px;
            height: 40px;

            &::after {
              font-size: 15px;
            }
          }
        }

        .all-images-carousel-detail {
          margin-top: 15px;
        }
      }

      .text {
        max-width: 470px;

        .launch {
          margin-bottom: 10px;
        }

        h2 + * {
          margin-top: 24px;
        }

        .select {
          max-width: 290px;
          margin-bottom: 20px;
        }

        .currency {
          font-size: 42px;
        }

        .actions {
          gap: 22px;
        }
      }

      .box-information.flex {
        svg {
          max-width: 16px;
        }
      }

      .information {
        gap: 15px;
      }
    }

    .tabs-descricao {
      margin-top: 60px;
    }

    .tabs-descricao + * {
      margin-top: 60px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 40px 0 0;

    .box-product {
      .image {
        max-width: 500px;

        .main {
          max-width: 295px;

          .swiper-button-next,
          .swiper-button-prev {
            width: 36px;
            height: 36px;

            &::after {
              font-size: 14px;
            }
          }
        }
      }

      .text {
        .launch {
          margin-bottom: 5px;
        }

        h2 + * {
          margin-top: 17px;
        }

        .cod {
          margin-bottom: 3px;
        }

        .currency {
          font-size: 39px;
        }

        .actions {
          gap: 17px;
        }
      }

      .information {
        gap: 12px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 40px 0 0;

    .swiper-produtos {
      margin-bottom: 35px;
    }

    .detail-shop {
      display: none;
    }

    .box-product {
      .image {
        max-width: 325px;
        margin-right: 35px;

        .main {
          max-width: 250px;

          #nav-left,
          #nav-right {
            img {
              width: 38px;
            }
          }

          .swiper-button-next,
          .swiper-button-prev {
            width: 32px;
            height: 32px;

            &::after {
              font-size: 13px;
            }
          }
        }
      }

      .filled-icons,
      .empty-icons {
        svg {
          height: 24px;
          width: auto;
        }
      }

      .text {
        justify-content: flex-start;
        gap: 10px;

        h2 + * {
          margin-top: 12px;
        }

        .cod {
          font-size: 12px;
        }

        .select {
          max-width: 280px;
          margin-bottom: 15px;
          height: 48px;
          padding: 0 35px 0 14px;
        }

        .currency {
          font-size: 30px;
        }

        .actions {
          gap: 12px;
        }
      }

      .rating {
        font-size: 14px;

        svg {
          width: 12px;
        }
      }

      .information {
        gap: 9px;
      }
    }

    .tabs-descricao {
      margin-top: 50px;
    }

    .tabs-descricao + * {
      margin-top: 50px;
    }
  }

  @media only screen and (max-width: 900px) {
    padding: 25px 0 0;
    .top {
      justify-content: center;
      margin-bottom: 10px;
    }

    .container {
      max-width: 800px;
    }

    .hide-on-mobile {
      display: none !important;
    }

    .show-on-mobile {
      display: block !important;
    }

    .box-product {
      flex-direction: column;
      max-width: 530px;
      width: 100%;
      margin: 0 auto;
      background-color: #fff;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      padding: 15px 20px 30px;

      .title {
        margin-bottom: 15px;
      }

      .launch {
        text-align: center;

        span {
          font-size: 12px;
          color: var(--secundary-color);

          br {
            display: none;
          }
        }
      }

      h2 {
        font-size: 23px;
        text-align: center;
        color: var(--primary-color);
      }

      .image {
        margin-right: 0;
        max-width: 100%;

        .main {
          #nav-left,
          #nav-right {
            img {
              width: 32px;
            }
          }
        }

        .all-images-carousel-detail {
          margin-top: 7px;
        }
      }

      .actions {
        a,
        button {
          border-radius: 5px;
        }
      }

      .top-detail {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0;
      }

      .filled-icons svg,
      .empty-icons svg {
        height: 17px;
        width: auto;
      }

      .rating {
        margin-left: 6px;
        margin-bottom: 5px;
      }

      .text {
        max-width: 90%;
        margin: 0 auto;

        .cod {
          margin-top: 0;
        }

        .review + span + * {
          margin-top: 3px;
        }

        .currency {
          font-size: 30px;
        }

        .select {
          max-width: 225px;
          margin-bottom: 10px;
          height: 34px;
          padding: 0 10px;
          font-size: 11px;
        }

        .actions {
          gap: 10px;
          margin-top: 7px;

          button,
          a {
            height: 34px;
          }

          [class*="link-1"] {
            font-size: 15px;
          }
        }
      }
    }

    .tabs-descricao {
      margin-top: 35px;
    }

    .tabs-descricao + * {
      margin-top: 35px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 20px 0 0;

    .top {
      margin-bottom: 10px;

      ul {
        li:first-child {
          display: none;
        }
      }
    }

    .box-product {
      .actions {
        a,
        button {
          font-size: 12px;

          svg {
            max-width: 18px;
          }
        }
      }

      .image {
        .main {
          .swiper-button-next,
          .swiper-button-prev {
            width: 29px;
            height: 29px;

            &::after {
              font-size: 11px;
            }
          }
        }
      }
    }

    .swiper-produtos {
      margin-bottom: 25px;
    }
  }

  @media only screen and (max-width: 500px) {
    .top {
      margin-bottom: 7px;
      padding: 0 15px;
    }

    .swiper-produtos {
      margin-bottom: 15px;
    }

    .box-product {
      padding: 14px 15px 20px;

      .text {
        max-width: 95%;
        margin: 0 auto;

        .select {
          padding-top: 3px;
          max-width: 350px;
        }
      }

      .image {
        .main {
          .swiper-button-next,
          .swiper-button-prev {
            width: 26px;
            height: 26px;

            &::after {
              font-size: 10px;
            }
          }
        }
      }

      h4 {
        line-height: 1.3;
      }

      .actions {
        flex-direction: column;
      }
    }

    .box-product,
    .box-content {
      max-width: 100%;
      border-radius: 0;
    }

    .container:not(#review .container) {
      padding: 0;
    }

    .container {
      max-width: 100%;
    }

    .tabs-descricao {
      margin-top: 25px;
    }

    .tabs-descricao + * {
      margin-top: 25px;
    }
  }

  @media only screen and (max-width: 420px) {
    .top {
      padding: 0 10px;
    }

    .box-product {
      padding: 14px 10px 20px;

      .text {
        .actions {
          a,
          button {
            height: 30px;
          }

          [class*="link-2"] {
            font-size: 12px;
          }
        }

        .select {
          margin-bottom: 7px;
        }

        .currency {
          font-size: 21px;
        }
      }

      .image {
        .main {
          #nav-left,
          #nav-right {
            img {
              width: 27px;
            }
          }
        }
      }

      .box-information.flex {
        svg {
          max-width: 14px;
        }
      }
    }
  }
`;
