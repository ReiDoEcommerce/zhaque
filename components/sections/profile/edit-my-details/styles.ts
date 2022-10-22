import styled from "styled-components";

export const EditMyDetails = styled.div`
  > form {
    padding-top: 20px;

    input {
      background-color: #eae8ed;
      color: var(--theme-color);
      height: 46px;
    }

    input::placeholder {
      color: var(--theme-color);
    }

    button {
      height: 58px;
      font-size: 17px;
      max-width: 265px;
      margin: 30px 0 0 auto;
    }
  }

  .send-sucess {
    text-align: center;

    svg {
      width: 34px;
      height: auto;
      fill: var(--secundary-color);
      margin-bottom: 5px;
    }

    p {
      color: var(--primary-color);
      margin-bottom: 15px;
    }
  }

  @media only screen and (max-width: 1600px) {
    form {
      button {
        height: 54px;
        max-width: 250px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    form {
      button {
        height: 50px;
        max-width: 225px;
        font-size: 16px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    form {
      button {
        height: 46px;
        max-width: 200px;
        font-size: 15.5px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    form {
      button {
        height: 42px;
        max-width: 185px;
        font-size: 15px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    form {
      button {
        height: 38px;
        font-size: 14.5px;
        max-width: 170px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    > form {
      button {
        height: 34px;
        font-size: 15px;
        max-width: 180px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    > form {
      button {
        margin: 18px 0 0 auto;
        height: 32px;
        font-size: 12.5px;
        max-width: 135px;
        border-radius: 7px;
      }
    }
  }
`;
