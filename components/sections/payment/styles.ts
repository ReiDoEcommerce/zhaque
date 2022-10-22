import styled from "styled-components";

export const PaymentComponent = styled.section`
  .payment-container {
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .payment-tabs {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 240px;
    width: 100%;

    .button-tab {
      width: 100%;
      height: 100px;
      padding-left: 40px;
      border: unset !important;
      border-radius: 20px 0 0 20px;
      text-align: left;
      background-color: #fff;
      color: #42129f;
      opacity: 0.5;
    }

    button.active {
      opacity: 1;
      box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.1);
    }
  }

  .payment-element {
    max-width: 660px;
    width: 100%;
    margin-left: -5px;
  }

  @media only screen and (max-width: 1600px) {
    .payment-tabs {
      max-width: 195px;

      .button-tab {
        height: 90px;
        padding-left: 30px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .payment-tabs {
      max-width: 175px;

      .button-tab {
        height: 80px;
        padding-left: 25px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .payment-tabs {
      max-width: 150px;

      .button-tab {
        height: 70px;
        padding-left: 20px;
        border-radius: 15px 0 0 15px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .payment-tabs {
      max-width: 100%;
      gap: 10px;

      .button-tab {
        border-radius: 10px;
      }
    }

    .payment-element {
      max-width: 100%;
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 500px) {
    .payment-tabs {
      .button-tab {
        height: 60px;
      }
    }

    button {
      height: 40px;
    }
  }
`;
