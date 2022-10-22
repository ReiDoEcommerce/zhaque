import styled from "styled-components";

export const BannerStrip = styled.section`
  padding: 60px 0 35px;

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .box-banner {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .image {
    height: 60px;
    max-width: 82px;

    img {
      height: inherit;
      width: 100%;
      object-fit: contain;
    }
  }

  h3 {
    color: var(--secundary-color);
  }

  span {
    color: var(--primary-color);
    display: block;
  }

  @media only screen and (max-width: 1600px) {
    padding:60px 0 30px;

    .image {
      height: 55px;
      max-width: 70px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 50px 0 25px;

    h3 {
      font-size: 17.5px;
    }

    span {
      font-size: 14px;
    }

    .image {
      height: 48px;
      max-width: 64px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 35px 0 20px;

    h3 {
      font-size: 16.5px;
    }

    span {
      font-size: 13.5px;
    }

    .image {
      height: 43px;
      max-width: 54px;
    }
  }

  @media only screen and (max-width: 1024px) {
    h3 {
      font-size: 14.5px;
    }

    span {
      font-size: 12.5px;
    }

    .image {
      height: 35px;
      max-width: 46px;
    }
  }

  @media only screen and (max-width:900px) {
    padding: 20px 0 15px;

    .box-banner {
      flex-direction: column;
      text-align: center;
    }

    .box-banner{
      gap: 5px;
    }
  }

  @media only screen and (max-width:768px) {
    h3 {
      font-size: 13px;
    }

    span {
      font-size: 11.5px;
    }
  }

  @media only screen and (max-width:600px) {
    display: none;

    .image {
      max-width: 44px;
    } 
  }
`;

