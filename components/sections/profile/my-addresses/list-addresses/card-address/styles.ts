import styled from "styled-components";

interface CardAddressStyle {
  $loading: boolean;
}

export const CardAddress = styled.div<CardAddressStyle>`
  border-radius: 10px;
  background-color: rgba(51, 33, 84, 10%);
  padding: 22px;
  margin-bottom: 30px;
  position: relative;
  animation: ${(props) =>
    props.$loading && "deleteCard forwards 0.7s ease-out 1"};

  @keyframes deleteCard {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      width: 0;
      min-width: 0;
      transform: scale(0);
      opacity: 0;
      padding: 0;
      margin: 0;
      height: 0;
    }
  }

  .loader-delete {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.7);

    svg {
      stroke: var(--theme-color-extra-light) !important;

      circle {
        stroke: var(--theme-color-extra-light) !important;
      }
    }
  }

  .top-address {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background-color: transparent;
      border: 0;

      svg {
        fill: var(--primary-color);
        height: 15px;
        width: auto;
        transition: 0.3s;
      }
    }

    button:hover {
      svg {
        fill: var(--secundary-color);
      }
    }
  }

  address {
    max-width: 300px;
    margin: 0;
  }

  .select-this-address {
    text-align: right;
    margin-top: 10px;
    margin-bottom: -10px;

    button {
      display: inline-block;
      border: 0;
      background-color: transparent;
      color: var(--primary-color);
    }

    button:hover {
      color: var(--secundary-color);
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 18px 19px;
    margin-bottom: 27px;
  }

  @media only screen and (max-width: 1400px) {
    padding: 15px 17px;
    margin-bottom: 24px;
  }

  @media only screen and (max-width: 1200px) {
    padding: 13px 17px;
    border-radius: 8px;
    margin-bottom: 21px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 10px 15px;
    border-radius: 5px;
    margin-bottom: 19px;

    .top-address {
      button {
        svg {
          height: 13px;
        }
      }
    }

    .select-this-address {
      margin-top: 3px;
    }
  }
`;
