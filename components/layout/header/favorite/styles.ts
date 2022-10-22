import styled from "styled-components";

export const FavoriteAction = styled.div`
  a {
    display: flex;
  }

  svg {
    fill: #fff;
    height: auto;
    transition: 0.3s;
  }

  svg:hover {
    fill: var(--secundary-color);
  }

  @media only screen and (max-width: 1024px) {
    svg {
      width: 30px;
    }
  }

  @media only screen and (max-width: 900px) {
    svg {
      width: 27px;
    }
  }

  @media only screen and (max-width: 500px) {
    svg {
      width: 24px;
    }
  }

  @media only screen and (max-width: 400px) {
    svg {
      width: 23px;
    }
  }
`;
