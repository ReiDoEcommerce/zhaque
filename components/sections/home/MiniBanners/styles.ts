import styled from "styled-components";

interface MiniBannersStyleProps {
  isColumnInMobile: boolean;
}

export const MiniBanners = styled.section<MiniBannersStyleProps>`
  padding: 35px 0;
  .container {
    display: flex;
    gap: 30px;
  }

  a {
    display: flex;
    width: 100%;
    overflow: hidden;
    border-radius: 20px;

    img {
      width: 100%;
      object-fit: cover;
      object-position: center center;
      transition: 0.5s all ease-in-out;
    }
  }

  a:hover {
    img {
      transform: scale(1.1);
      object-fit: cover;
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 30px 0;
  }

  @media only screen and (max-width: 1400px) {
    padding: 25px 0;

    .container {
      gap: 25px;
    }

    a {
      border-radius: 17px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 20px 0;

    .container {
      gap: 20px;
    }

    a {
      border-radius: 14px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 15px 0;

    .container {
      gap: 15px;
    }

    a {
      border-radius: 10px;
    }
  }

  @media only screen and (max-width: 600px) {
    .container {
      flex-direction: ${props => props.isColumnInMobile && "column"};
    }
  }
`;
