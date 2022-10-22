import styled from "styled-components";
import { lighten } from "polished";

export const Profile = styled.section`
  padding: 55px 0 200px;

  .hide-password {
    display: block;
  }

  .show-password {
    display: none;
  }

  .top-profile {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-bottom: 50px;
  }

  .top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-bottom: 50px;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--secundary-color);
    margin-bottom: 20px;
    line-height: 23px;

    svg {
      height: 10px;
      width: auto;
      fill: currentColor;
    }
  }

  .back-link:hover {
    color: ${lighten(0.1, `#003050`)};
  }

  .currency {
    color: var(--secundary-color);
    font-size: 20px;
  }

  .title-my-order {
    margin-bottom: 30px;

    i {
      max-width: 32px;

      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }

  .my-orders-filter {
    > div {
      margin-bottom: 30px;
    }

    select {
      background-image: url("/images/icon-seta-sort-by.svg");
      background-color: #fff;
      border: 1px solid var(--primary-color);
      color: var(--primary-color);
      font-weight: 700;
      border-radius: 10px;
      max-width: 180px;
      height: 50px;
    }
  }

  .change-password-container-mobile {
    width: 100%;

    > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    h3 {
      margin-bottom: 0;
    }

    .buttonOpenModal {
      width: 100%;
      margin: 0;
    }
  }

  .password-address {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  @media only screen and (max-width: 1600px) {
    padding: 50px 0 140px;

    .top {
      gap: 25px;
      margin-bottom: 45px;
    }

    .title-my-order {
      margin-bottom: 25px;
    }

    .my-orders-filter {
      > div {
        margin-bottom: 25px;
      }
    }

    .currency {
      font-size: 18.5px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 40px 0 115px;

    .top {
      gap: 20px;
      margin-bottom: 40px;
    }

    .top-profile {
      gap: 20px;
      margin-bottom: 40px;
    }

    .title-my-order {
      margin-bottom: 20px;

      i {
        max-width: 27px;
      }
    }

    .currency {
      font-size: 17.5px;
    }

    .my-orders-filter {
      > div {
        margin-bottom: 20px;
      }

      select {
        max-width: 170px;
        height: 45px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 35px 0 90px;

    .top {
      margin-bottom: 35px;
    }

    .top-profile {
      margin-bottom: 35px;
    }

    .my-orders-filter {
      select {
        max-width: 160px;
        height: 43px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 30px 0 70px;

    .top-profile {
      grid-template-columns: repeat(1,1fr);
      gap: 13px;
      margin-bottom: 30px;
    }

    .hide-password {
      display: none;
    }

    .currency {
      font-size: 16.5px;
    }

    .show-password {
      display: block;
    }

    .top {
      grid-template-columns: repeat(1, 1fr);
      gap: 15px;
      margin-bottom: 25px;
    }

    .title-my-order {
      margin-bottom: 15px;

      i {
        max-width: 24px;
      }
    }

    .my-orders-filter {
      select {
        max-width: 150px;
        height: 40px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .my-orders-filter {
      > div {
        margin-bottom: 15px;
      }

      select {
        max-width: 140px;
        height: 37px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 30px 0 50px;

    .title-my-order {
      margin-bottom: 12px;
    }

    .my-orders-filter {
      > div {
        margin-bottom: 12px;
      }

      select {
        max-width: 130px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .container-my-order {
      .container {
        max-width: 460px;
      }
    }

    .top {
      gap: 10px;
    }

    .my-orders-filter {
      > div {
        margin-bottom: 10px;
      }

      select {
        max-width: 115px;
        height: 33px;
      }
    }

    .title-my-order {
      margin-bottom: 13px;

      h3 {
        font-size: 18px;
      }

      i {
        max-width: 27px;
      }
    }

    .change-password-container-mobile {
      h3 {
        line-height: 15px;
      }

      .buttonOpenModal {
        width: 100%;
        margin: 0;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 30px 0 40px;

    .back-link {
      font-size: 13px;

      svg {
        height: 9px;
      }
    }

    .title-my-order {
      font-size: 15px;
    }

    .top {
      margin-bottom: 20px;
    }

    [class*="paragraph-2"] {
      font-size: 12.5px;
    }

    .currency {
      font-size: 15.5px;
    }
  }

  @media only screen and (max-width: 370px) {
    .change-password-container-mobile {
      .buttonOpenModal {
        width: 100%;
      }
    }

    [class*="paragraph-1"] {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 350px) {
    .change-password-container-mobile {
      .buttonOpenModal {
        width: 100%;
      }
    }
  }
`;

export const MyDetails = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  align-items: flex-start;

  @media only screen and (max-width: 1600px) {
    gap: 27px;
  }

  @media only screen and (max-width: 1400px) {
    gap: 24px;
  }

  @media only screen and (max-width: 1200px) {
    gap: 21px;
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 18px;
  }
`;
