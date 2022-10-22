import styled from "styled-components";

export const Product = styled.div`
  padding: 60px 30px 30px;
  border: 1px solid var(--yellow);
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  margin-top: -20px;

  .container-cards {
    display: flex;
    align-items: flex-start;
    gap: 30px;
    flex-wrap: wrap;
  }

  .error {
    width: 100%;
    color: #fff;
    text-align: center;
  }

  .nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;

    * {
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 1500px) {
    padding: 50px 20px 25px;
    max-width: 1100px;
    margin: 0 auto;
  }

  @media only screen and (max-width: 1400px) {
    padding: 35px 20px 25px;
    max-width: 1000px;
    margin-top: -10px;
  }

  @media only screen and (max-width: 1200px) {
    padding: 35px 20px 25px;
    max-width: 800px;
    margin-top: -20px;

    .container-cards {
      gap: 15px;

      > div {
        max-width: calc(33% - 8px);
      }
    }
  }

  @media only screen and (max-width: 1150px) {
    padding: 35px 15px 20px;
    max-width: 700px;
  }

  @media only screen and (max-width: 1100px) {
    max-width: 650px;
  }
`;
