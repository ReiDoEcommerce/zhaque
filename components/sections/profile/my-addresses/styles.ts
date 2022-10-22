import styled from "styled-components";

export const MyAddresses = styled.section`
  .button-new-address {
    button {
      height: 58px;
      font-size: 17px;
      max-width: 265px;
      margin: 0 0 0 auto;
    }
  }

  @media only screen and (max-width: 1600px) {
    .button-new-address {
      button {
        height: 54px;
        max-width: 250px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .button-new-address {
      button {
        height: 50px;
        max-width: 225px;
        font-size: 16px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .button-new-address {
      button {
        height: 46px;
        max-width: 200px;
        font-size: 15.5px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .button-new-address {
      button {
        height: 42px;
        max-width: 185px;
        font-size: 15px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .button-new-address {
      button {
        height: 38px;
        font-size: 14.5px;
        max-width: 170px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .button-new-address {
      button {
        height: 34px;
        font-size: 15px;
        max-width: 180px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .button-new-address {
      button {
        height: 32px;
        font-size: 12.5px;
        max-width: 135px;
        border-radius: 7px;
      }
    }
  }
`;
