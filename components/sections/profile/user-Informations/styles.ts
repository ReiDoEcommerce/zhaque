import styled from "styled-components";

export const UserInformations = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  .text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000;
    width: 100%;

    h3 + * {
      margin-top: 2px;
    }

    .email {
      display: inline-flex;
      align-items: center;
      margin-bottom: 0;
      gap: 10px;
    }

    svg {
      fill: var(--secundary-color);
      transition: 0.3s;
    }

    button {
      background-color: transparent;
      cursor: pointer;
      border: 0;
    }

    .settings:hover {
      svg {
        fill: var(--hover-secundary-dark);
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .image {
      width: 80px;
      height: 80px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .image {
      width: 75px;
      height: 75px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 25px;
    border-radius: 10px;

    .image {
      width: 70px;
      height: 70px;
    }

    .text {
      width: calc(100% - 100px);
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 20px;
    gap: 18px;

    .image {
      width: 60px;
      height: 60px;
    }

    .text {
      .email {
        svg {
          width: 15px;
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 10px;
    gap: 10px;
    border-radius: 5px;

    .box-left {
      h3 {
        margin-bottom: 0;
      }
    }

    .text {
      .email {
        gap: 5px;

        svg {
          width: 13px;
        }
      }
    }

    .image {
      width: 55px;
      height: 55px;
    }

    .settings {
      display: flex;
      margin-top: -30px;

      svg {
        max-width: 20px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .text {
      .email {
        font-size: 11px;
      }
    }

    .settings {
      svg {
        max-width: 16px;
      }
    }
  }
`;
