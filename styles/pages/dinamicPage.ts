import styled from "styled-components";

export const DinamicPage = styled.section`
  padding: 70px 0;

  ul + * {
    margin-top: 10px;
  }

  h2 {
    color: var(--primary-color);
    line-height: 1;
    margin-bottom: 50px;
  }

  .content {
    background-color: #fff;
    padding: 50px 90px 50px 40px;
    border-radius: 10px;
    box-shadow: 0 3px 50px rgba(0, 0, 0, 0.1);

    p {
      font-size: 16px;
      font-weight: 300;

      strong {
        color: var(--primary-color);
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 7px;
        display: flex;
      }
    }

    h4 {
      font-size: 16px;
    }

    p + p strong {
      margin-top: 18px;
    }
  }

  .top {
    margin-bottom: 20px;
  }

  .form-atendimento {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 40px;

    .box-left {
      max-width: 500px;
      width: 100%;
    }

    .box-right {
      max-width: 700px;
      width: 100%;
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 50px 0;

    h2 {
      font-size: 50px;
    }

    .content {
      padding: 40px 80px 45px 40px;
    }

    .form-atendimento {
      .box-right {
        max-width: 615px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 45px 0;

    h2 {
      font-size: 45px;
      margin-bottom: 30px;
    }

    .content {
      padding: 30px 55px 35px 35px;
    }

    .form-atendimento {
      p,
      h4 {
        font-size: 15px;
      }

      .box-left {
        max-width: 385px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .content {
      p {
        font-size: 14px;

        strong {
          font-size: 22.5px;
        }
      }

      h4 {
        font-size: 14px;
      }
    }

    h2 {
      font-size: 40px;
      margin-bottom: 25px;
    }

    .form-atendimento {
      .box-left {
        max-width: 370px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 40px 0;

    ul + * {
      margin-top: 5px;
    }

    h2 {
      font-size: 37px;
      margin-bottom: 25px;
    }

    .content {
      padding: 25px 30px;

      p {
        font-size: 14px;

        strong {
          font-size: 21px;
        }
      }
    }

    p + * {
      margin-top: 5px;
    }

    .top {
      margin-bottom: 15px;
    }

    .form-atendimento {
      flex-direction: column;
      align-items: center;
      gap: 30px;

      .box-left {
        max-width: 500px;
        p {
          text-align: center;
          max-width: 380px;
          margin: 0 auto;

          strong {
            justify-content: center;
          }
        }
      }

      .box-right {
        max-width: 500px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    ul {
      max-width: 100%;
    }

    h2 {
      font-size: 32px;
      margin-bottom: 20px;
    }

    .content {
      padding: 20px 25px;

      p {
        font-size: 13.5px;

        strong {
          font-size: 20px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 27px !important;
      margin-bottom: 15px;
    }

    .content {
      padding: 20px 20px;

      p {
        font-size: 13px;

        strong {
          font-size: 19px;
        }
      }

      p + * {
        margin-top: 2px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    h2 {
      font-size: 22px !important;
      margin-bottom: 10px;
    }

    .content {
      padding: 20px;

      p {
        font-size: 12px;

        strong {
          font-size: 16px;
        }
      }
    }

    .top {
      margin-bottom: 10px;
    }


    .form-atendimento {
      gap: 20px;

      .box-left {
        h4 {
          font-size: 13px;
        }
      }
    }
  }

  @media only screen and (max-width: 400px) {
    h2 {
      font-size: 20px !important;
    }

    .content {
      padding: 15px;
    }

    .form-atendimento {
      .box-left {
        p {
          font-size: 11px;
        }

        h4 {
          font-size: 9.5px;
        }
      }
    }
  }
`;
