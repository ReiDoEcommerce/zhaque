import styled from "styled-components";

export const CredCardComponent = styled.section`
  background-color: #fff;
  padding: 30px 40px 20px 30px;
  border-radius: 0 20px 20px 20px;
  width: 100%;
  min-height: calc(100% + 30px);

  input {
    background-color: rgba(51, 33, 84, 0.1);
    color: rgb(51, 33, 84);
  }

  input::placeholder {
    color: rgb(51, 33, 84, 0.3);
  }

  label {
    margin-bottom: 0;
    color: var(--theme-color);
  }

  label + * {
    margin-top: 3px;
  }

  .card-data {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    justify-self: flex-start;
    align-items: flex-start;
    gap: 30px;

    > div {
      margin-bottom: 0;

      > div {
        > div {
          margin-bottom: 0;
        }
      }
    }

    .date {
      max-width: 180px;
    }

    .date-input {
      max-width: 180px;
      display: flex;
      background-color: rgba(51, 33, 84, 0.1);
      border-radius: 10px;
      align-items: center;
      color: rgb(180 172 191);

      .select-cart {
        margin-bottom: 0;
      }

      select {
        font-weight: 700;
        font-family: inherit;
        cursor: pointer;
        width: 80px;
        display: flex;
        justify-content: center;
      }
    }
  }

  .card-data + * {
    margin-top: 20px;
  }

  .label-validate {
    margin-bottom: 6px;
    color: var(--theme-color);
  }

  .security-input {
    max-width: 200px;

    /* a {
        margin-left: -40px;
        margin-top: 42px;
        max-height: 28px;
    } */
  }

  .input-content.security {
    display: flex;
    align-items: center;
    gap: 13px;

    .image {
      margin-top: 10px;
      max-width: 37px;

      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }

  .button-tab {
    max-width: 200px;
    margin-left: auto;
    margin-top: 10px;
  }

  @media only screen and (max-width: 1600px) {
    padding: 25px 35px 15px 30px;

    .card-data + * {
      margin-top: 18px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 25px 35px 15px 30px;

    .card-data + * {
      margin-top: 17px;
    }

    .card-data {
      gap: 25px;

      .date-input {
        max-width: 150px;
      }
    }

    .security-input {
      max-width: 180px;
    }

    .card-data {
      .date-input {
        select {
          width: 65px;
        }
      }
    }

    .button-tab {
      max-width: 180px;
      margin-top: 6px;
      height: 44px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 15px 25px 10px 25px;
    border-radius: 0 15px 15px 15px;

    .card-data {
      gap: 20px;

      .date-input {
        max-width: 135px;
      }
    }
  }

  .input-content.security {
    .image {
      max-width: 35px;
    }
  }

  @media only screen and (max-width: 1024px) {
    border-radius: 10px;

    .input-content.security {
      .image {
        max-width: 33px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 15px 20px 5px;

    .card-data {
      gap: 10px;
      flex-direction: column-reverse;

      .date-input {
        max-width: 90px;
      }
    }

    .security-input {
      max-width: 100%;
      width: 100%;
    }

    .input-content.security {
      .image {
        margin-top: 12px;
        max-width: 25px;
      }
    }

    label + * {
      margin-top: 0;
    }
  }

  @media only screen and (max-width: 400px) {
    padding: 10px 15px 5px;
  }
`;
