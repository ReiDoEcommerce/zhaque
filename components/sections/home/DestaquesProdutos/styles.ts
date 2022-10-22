import styled from "styled-components";

export const DestaquesProdutos = styled.section`
  h2 {
    color: var(--primary-color);
    text-align: center;
    margin-bottom: 32px;
  }

  h2 {
    padding-top: 35px;
  }

  .swiper-produtos {
    padding-bottom: 35px;
  }

  .grid-produtos {
    padding: 35px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 45px;
    column-gap: 30px;
  }

  .hide-mobile {
    display: grid;
  }

  .show-mobile {
    display: none;
  }

  @media only screen and (max-width: 1600px) {
    h2 {
      margin-bottom: 27px;
      padding-top: 30px;
    }

    .swiper-produtos {
      padding-bottom: 30px;
    }

    .grid-produtos {
      column-gap: 25px;
      padding: 30px 0;
    }
  }

  @media only screen and (max-width: 1400px) {
    h2 {
      margin-bottom: 22px;
      padding-top: 25px;
    }

    .swiper-produtos {
      padding-bottom: 25px;
    }

    .grid-produtos {
      column-gap: 20px;
      padding: 25px 0;
    }
  }

  @media only screen and (max-width: 1200px) {
    h2 {
      margin-bottom: 18px;
      font-size: 30px;
      padding-top: 20px;
    }

    .swiper-produtos {
      padding-bottom: 20px;
    }

    .grid-produtos {
      column-gap: 20px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 15px 0;
    
    h2 {
      font-size: 26px;
      margin-bottom: 15px;
      padding-top: 15px;
    }

    .swiper-produtos {
      padding-bottom: 15px;
    }
  }

  @media only screen and (max-width: 900px) {
    .show-mobile {
      display: block !important;
    }

    .hide-mobile {
      display: none;
    }

    h2 {
      margin-bottom: 12px;
      font-size: 25px;
    }
  }

  @media only screen and (max-width: 768px) {
    .swiper-produtos {
      padding-bottom: 10px;
    }

    h2 {
      font-size: 23px;
      margin-bottom: 10px;
      padding-top: 10px;
    }

    .grid-produtos {
      grid-template-columns: repeat(3, 1fr);
      row-gap: 15px;
      column-gap: 20px;
      padding: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 20px;
      margin-bottom: 8px;
    }

    .grid-produtos {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 13px;
      column-gap: 15px;
    }
  }

  @media only screen and (max-width: 400px) {
    h2 {
      font-size: 17px;
      padding-top: 3px;
      margin-bottom: 7px;
    }
  }
`;
