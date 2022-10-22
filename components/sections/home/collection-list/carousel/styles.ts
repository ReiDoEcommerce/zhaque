import styled from "styled-components";

export const Carousel = styled.div`
  padding-bottom: 100px;

  * { 
    transition: 0.3s;
  }

  @media only screen and (max-width: 1600px) {
    padding-bottom: 90px;
  }

  @media only screen and (max-width: 1400px) {
    padding-bottom: 75px;
  }

  @media only screen and (max-width: 1200px) {
    padding-bottom: 65px;
  }

  @media only screen and (max-width: 1024px) {
    padding-bottom: 50px;
  }

  @media only screen and (max-width: 900px) {
    padding-bottom: 45px;
  }

  @media only screen and (max-width: 800px) {
    padding-bottom: 40px;
  }

  @media only screen and (max-width: 768px) {
    padding-bottom: 30px;
  }

  @media only screen and (max-width: 500px) {
    padding-bottom: 23px;
  }
`;
