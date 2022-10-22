import styled from "styled-components";

export const ChangePassword = styled.div`
  .buttonOpenModal {
    background-color: #fff;
    justify-content: space-between;
    display: flex;
    padding: 23px 40px;

    width: 100%;

    button {
      height: 58px;
      font-size: 16px;
      width: 192px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      color: var(--secundary-color);
      border: 1px solid var(--secundary-color);
      text-transform: uppercase;
    }
  }

  .password {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .send-sucess {
    justify-content: center;
    text-align: center;
    padding-top: 10px;

    p {
      text-transform: uppercase;
      align-items: center;
      text-transform: unset;
      justify-content: center;
      flex-direction: column;
      max-width: 80%;
      margin: 0 auto 10px;

      span {
        max-width: 90%;
        text-align: center;
      }
    }

    svg {
      width: 34px;
      height: auto;
      fill: var(--secundary-color);
      margin-bottom: 5px;
    }
  }

  .modal {
    h3,
    p {
      color: var(--theme-color);
      display: flex;
    }

    h3 + * {
      margin-top: 8px;
    }

    input {
      background-color: #eae8ed;
      height: 44px;
      font-size: 16px;
      color: var(--theme-color);
    }

    input::placeholder {
      color: var(--theme-color);
    }

    .button-submit {
      button {
        height: 40px;
        font-size: 17px;
        max-width: 200px;
        margin: 0 auto;
      }
    }
  }

  @media only screen and (max-width: 1600px) {
    .buttonOpenModal {
      padding: 20px 32px;

      button {
        height: 54px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .buttonOpenModal {
      padding: 25px;

      button {
        height: 50px;
        font-size: 16px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .buttonOpenModal {
      padding: 25px 20px;

      button {
        height: 46px;
        font-size: 15.5px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .buttonOpenModal {
      padding: 25px 19px;

      button {
        height: 42px;
        font-size: 15px;
        max-width: 175px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .buttonOpenModal {
      padding: 15px;
      max-width: 100%;

      button {
        height: 38px;
        font-size: 14.5px;
        max-width: 170px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .buttonOpenModal {
      button {
        height: 34px;
        font-size: 15px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .buttonOpenModal {
      padding: 11px;

      button {
        height: 32px;
        font-size: 12.5px;
        max-width: 135px;
        border-radius: 7px;
      }
    }

    .password {
      gap: 12px;

      h4 {
        font-size: 13.5px;
      }
    }
  }
`;
