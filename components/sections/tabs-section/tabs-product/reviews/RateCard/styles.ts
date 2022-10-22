import styled from "styled-components";

const paragraphLineHeight = 28;
const lines = 7;

export const RateCardStyle = styled.div`
  color: #000;
  display: flex;
  height: fit-content;

  .box-left {
    padding-right: 30px;
    margin-right: 30px;
    border-right: 1px solid #000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: fit-content;
    gap: 35px;

    strong {
      margin-bottom: 0;
    }
  }

  .top-rating {
    strong + * {
      margin-top: 5px;
    }
  }

  h4 {
    margin-bottom: 0;
    margin-top: 5px;
  }

  h4 + * {
    margin-top: 10px;
  }

  p + * {
    margin-top: 4px;
  }

  strong + * {
    margin-top: 12px;
  }

  p {
    height: fit-content;
    line-height: ${paragraphLineHeight}px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    margin-bottom: 15px;
    opacity: 0.9;
  }

  strong {
    display: flex;
    align-items: center;
    margin-bottom: 0;
    gap: 7px;

    .image {
      max-width: 45px;

      span {
        border-radius: 100%;

        img {
          width: 100%;
          object-fit: contain;
        }
      }
    }
  }

  .products-rate {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    overflow: hidden;

    img {
      border-radius: 10px;
      border: 1px solid var(--theme-color-light);
      max-width: 85px;
      aspect-ratio: 85/90;
      object-fit: cover;
      object-position: center center;
    }
  }

  .foo {
    margin-bottom: 5px;

    svg {
      width: 28px;
      height: auto;
    }
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
    padding: 26px 20px 30px;
  }

  @media only screen and (max-width: 1200px) {
    padding: 22px 17px 25px;

    .products-rate {
      gap: 10px;
      flex-wrap: wrap;
    }
  }

  @media only screen and (max-width: 1024px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 18px 15px 20px;
  }

  @media only screen and (max-width: 900px) {
    [class*="paragraph-1"] {
      font-size: 15px;
    }

    strong {
      order: -1;
      margin-bottom: 10px;

      .image {
        max-width: 40px;
      }
    }

    strong + * {
      margin-top: 0;
    }

    .foo {
      svg {
        max-width: 23px;
      }
    }

    h3 {
      margin-bottom: 0;
    }

    p {
      order: 1;
      height: auto;
      line-height: 20px;
      -webkit-line-clamp: unset;
    }

    p + * {
      margin-top: 0;
    }

    p::-webkit-scrollbar-track {
      background-color: black; /* color of the tracking area */
    }

    h4 {
      order: 1;
    }

    .products-rate {
      order: 1;
    }
  }

  @media only screen and (max-width: 1024px) {
    .box-left {
      flex-direction: row;
      border-right: unset;
      border-bottom: 1px solid #000;
      padding-right: 0;
      margin-right: 0;
      padding-bottom: 15px;
      margin-bottom: 15px;

      .top-rating {
        order: 2;
      }

      .bottom {
        order: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h3 {
          margin-bottom: 8px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .foo {
      svg {
        max-width: 21px;
      }
    }

    p {
      line-height: 18px;
    }

    .box-left {
      padding-bottom: 13px;
      margin-bottom: 13px;
    }
  }

  @media only screen and (max-width: 650px) {
    [class*="paragraph-1"] {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 0;

    .box-left {
      padding-bottom: 10px;
      margin-bottom: 10px;
    }

    .foo {
      margin-bottom: 2px;
      svg {
        max-width: 19px;
      }
    }

    h3 {
      font-size: 10px;
    }

    h4 {
      font-size: 13px !important;
    }

    .products-rate {
      img {
        max-width: 70px;
      }
    }

    p {
      line-height: 16px;
    }
  }

  @media only screen and (max-width: 400px) {
    strong {
      font-size: 13px !important;
      span {
        max-width: 35px;
      }
    }
  }
`;
