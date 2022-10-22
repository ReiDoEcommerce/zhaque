import styled from "styled-components";

export const TabNavigation = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 9px;
    text-align: center;
    width: 100%;
    height: 150px;
    border-radius: 10px;
    color: #fff;
    text-transform: uppercase;
    background-color: var(--secundary-color);

    svg {
      height: 29px;
      width: auto;
    }

    i {
      display: flex;
    }
  }

  a:hover {
    background-color: var(--hover-secundary-dark);
  }

  @media only screen and (max-width: 1600px) {
    gap: 25px;
  }

  @media only screen and (max-width: 1400px) {
    gap: 15px;
  }

  @media only screen and (max-width: 1024px) {
    gap: 10px;

    a {
      display: flex;
      flex-direction: row;
      height: 60px;
      border-radius: 10px;

      svg {
        height: 22px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    a {
      span {
        font-size: 14px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    a {
      height: 50px;

      span {
        font-size: 12px;
      }

      svg {
        height: 20px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    gap: 8px;

    a {
      flex-direction: column;
      gap: 6px;
      height: 65px;
      border-radius: 5px;

      span {
        font-size: 10px;
      }

      svg {
        height: 16px;
      }
    }
  }
`;
