import styled from "styled-components";

export const AboutPage = styled.section`
  .text-image {
    padding-top: 80px;
    display: flex;
    justify-content: space-between;
    gap: 40px;
    padding-bottom: 50px;
  }

  .text {
    max-width: 600px;

    h2 {
      color: var(--primary-color);
    }

    h2 + * {
      margin-top: 20px;
    }

    p {
      line-height: 24px;
    }

    p + * {
      margin-top: 18px;
    }
  }

  .image-sobre {
    aspect-ratio: 690/314;
    max-width: 690px;
    border-radius: 20px;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  @media only screen and (max-width: 1600px) {
    .text-image {
      padding: 65px 0 40px;
    }

    .text {
      max-width: 550px;
      p {
        line-height: 22px;
      }

      p + * {
        margin-top: 15px;
      }

      h2 + * {
        margin-top: 12px;
      }
    }

    .image-sobre {
      max-width: 660px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .text-image {
      padding: 50px 0 30px;
      align-items: center;
    }

    .text {
      max-width: 475px;

      h2 + * {
        margin-top: 9px;
      }

      p {
        line-height: 21px;
      }

      p + * {
        margin-top: 13px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .text-image {
      padding: 40px 0 25px;
    }

    .text {
      max-width: 405px;

      p {
        line-height: 20px;
      }

      p + * {
        margin-top: 11px;
      }

      h2 + * {
        margin-top: 7px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .text-image {
      padding: 30px 0 20px;
      flex-direction: column-reverse;
      max-width: 630px;
      margin: 0 auto;
      gap: 15px;
    }

    .text {
      max-width: 580px;
      text-align: center;

      p {
        line-height: 19px;
      }

      p + * {
        margin-top: 9px;
      }

      h2 + * {
        margin-top: 4px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .text-image {
      max-width: 500px;
      padding: 25px 0 15px;
    }

    .text {
      max-width: 90%;

      p {
        line-height: 18px;
      }

      h2 + * {
        margin-top: 4px;
      }
    }
  }

  @media only screen and (max-width: 570px) {
    .text-image {
      max-width: 450px;
      gap: 11px;
    }

    .text {
      p {
        font-size: 12px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .text {
      p {
        line-height: 17px;
      }

      h2 + * {
        margin-top: 0;
      }
    }
  }
`;
