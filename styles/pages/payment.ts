import styled from "styled-components";

export const Payment = styled.section`
  padding: 54px 0 120px;

  .container {
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }

  .method-payment {
    max-width: 890px;
    width: 100%;
  }

  .top {
    display: flex;
    justify-content: space-between;

    h2 {
      color: #fff;
    }

    a {
      color: var(--yellow);
      fill: var(--yellow);
      display: flex;
      gap: 8px;
      margin-right: 5px;
    }
  }

  @media only screen and (max-width:1024px) {
    .container {
      flex-direction: column;
      gap: 25px;
    }
  }

  @media only screen and (max-width:768px) {
    .container {
      max-width: 600px;
    }
  }

  @media only screen and (max-width:500px) {
    .container {
      gap: 20px;
    }
  }
`;
