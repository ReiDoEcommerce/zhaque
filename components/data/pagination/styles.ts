import styled from "styled-components";

export const PaginationStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5.21vw;
  gap: 28px;

  button,
  span {
    width: 42px;
    height: 42px;
    border-radius: 10px;
    background-color: var(--secundary-color);
    color: #fff;
    border: 1px solid var(--theme-color-extra-light);
    display: flex !important;
    align-items: center;
    justify-content: center;
  }

  button.active {
    background-color: var(--primary-color);
    color: #fff;
  }

  @media only screen and (max-width: 1600px) {
    gap: 25px;

    button, span {
      width: 40px;
      height: 40px;
    }
  }

  @media only screen and (max-width: 1400px) {
    gap: 22px;

    button, span {
      width: 38px;
      height: 38px;
    }
  }

  @media only screen and (max-width: 1200px) {
    gap: 20px;
    
    button, span {
      width: 37px;
      height: 37px;
    }
  }

  @media only screen and (max-width: 1024px) {
    gap: 17px;

    button, span {
      width: 36px;
      height: 36px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-top: 40px;

    button, span {
      width: 35px;
      height: 35px;
    }
  }

  @media only screen and (max-width: 500px) {
    gap: 15px;
    margin-top: 35px;

    button, span {
      width: 34px;
      height: 34px;
    }
  }

  @media only screen and (max-width:400px) {
    button, span {
      width: 32px;
      height: 32px;
    }
  }
`;
