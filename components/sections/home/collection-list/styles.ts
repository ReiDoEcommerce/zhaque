import styled from "styled-components";

export const Collection = styled.section`
  .top-collection {
    margin-bottom: 40px;

    h2 {
      color: #fff;
      margin-bottom: 0;
    }
  }

   .mobile-carousel {
    display: none;
  }

  @media only screen and (max-width: 1600px) {
    .top-collection {
      margin-bottom: 38px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .top-collection {
      margin-bottom: 36px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .top-collection {
      margin-bottom: 34px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .top-collection {
      margin-bottom: 32px;
      text-align: center;
    }

    .carousel-collection {
      display: none;
    }

    .mobile-carousel {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      padding-bottom: 45px;

      .box-mobile-collection {
        width: 100%;
        box-shadow: 0 3px 50px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        background-color: #7731ff;
        padding: 5px 5px 8px;

        .image {
          aspect-ratio: 96/90;
          width: 100%;
          border-radius: 5px;
          overflow: hidden;
          margin-bottom: 6px;
        }

        .text {
          color: #fff;
          text-align: center;
          padding: 0 10px;

          h3 {
            margin: 0;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .top-collection {
      margin-bottom: 25px;
    }

    .mobile-carousel {
      gap: 8px;

      .box-mobile-collection {
        padding: 4px 4px 7px;

        .image {
          margin-bottom: 5px;
        }

        .text {
          padding: 0 8px;
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .mobile-carousel {
      gap: 7px;
      grid-template-columns: repeat(2, 1fr);

      .box-mobile-collection {
        padding: 6px 6px 10px;

        .image {
          margin-bottom: 5px;

          * {
            aspect-ratio: inherit;
          }
        }

        .text {
          padding: 0 7px;

          h3 {
            font-size: 13px;
          }
        }
      }
    }
  }
`;
