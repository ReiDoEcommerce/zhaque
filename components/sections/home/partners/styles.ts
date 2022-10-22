import styled from "styled-components";

export const Partners = styled.section`
  margin-top: 50px;
  padding: 75px 0 80px;
  background-color: var(--secundary-color);

  h2 {
    text-align: center;
    color: #fff;
    margin-bottom: 32px;
  }

  .partners {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 110px;
    max-width: 100%;
    width: 100%;
    margin: 0 auto;

    .image {
      display: flex;
      align-items: center;

      img {
        aspect-ratio: 200/120;
        object-fit: contain !important;
      }
    }

    .image:hover {
      transition: 0.3s;
      transform: scale(0.95);
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 65px 0 70px;
    margin-top: 42px;

    h2 {
      margin-bottom: 28px;
    }

    .partners {
      row-gap: 56px;
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 55px 0 60px;
    margin-top: 34px;

    h2 {
      margin-bottom: 22px;
    }

    .partners {
      gap: 90px;
      row-gap: 52px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 40px 0 45px;

    h2 {
      margin-bottom: 15px;
      font-size: 22px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 30px 0 35px;
    margin-top: 30px;

    h2 {
      margin-bottom: 10px;
      font-size: 21px;
    }

    .partners {
      max-width: 500px;
      gap: 60px;
      row-gap: 30px;

      .image {
        width: 100px;
        max-height: 100px;
        img {
          aspect-ratio: unset;
          width: 100% !important;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    margin-top: 20px;

    h2 {
      font-size: 20px;
    }

    .partners {
      gap: 55px;
      row-gap: 20px;

      .image {
        width: 90px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 20px 0 25px;

    h2 {
      font-size: 19px;
    }

    .partners {
      max-width: 400px;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 15px 0 20px;

    h2 {
      font-size: 16px;
    }
    .partners {
      gap: 15px 40px;

      .image {
        width: 60px;
        max-height: 60px;
      }
    }
  }
`;
