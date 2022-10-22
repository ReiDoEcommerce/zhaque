import styled from "styled-components";

export const SortBy = styled.div`
  max-width: 330px;
  width: 100%;
  padding-right: 5px;

  select {
    background-color: transparent;
    border: unset;
    border-bottom: 1px solid #000000;
    border-radius: unset;
    color: var(--secundary-color);
    width: 100%;
    height: 50px;
    padding: 0 10px;
    background-position: 95% center;
  }

  @media only screen and (max-width: 1600px) {
    max-width: 295px;

    select {
      height: 45px;
    }
  }

  @media only screen and (max-width: 1400px) {
    max-width: 245px;
  }

  @media only screen and (max-width: 1200px) {
    max-width: 220px;

    select {
      height: 40px;
    }
  }

  @media only screen and (max-width:1024px) {
    max-width: 200px;
    
    select {
      height: 37px;
    }
  }
`;
