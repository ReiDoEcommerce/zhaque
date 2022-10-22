import styled from "styled-components";

export const Filter = styled.div`
  max-width: 180px;
  width: 100%;

  select {
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #000000;
    color: var(--secundary-color);
    width: 100%;
    height: 50px;
    padding: 0 25px;
    background-position: 85% center;
  }

  @media only screen and (max-width: 1400px) {
    select {
      height: 45px;
      padding: 0 17px;
      background-position: 90% center;
    }
  }

  @media only screen and (max-width: 1200px) {
    select {
      height: 40px;
      padding: 0 17px;
      background-position: 90% center;
    }
  }

  @media only screen and (max-width:1024px) {
    select {
      height: 37px;
      padding: 0 15px;
    }
  }
`;
  