import styled from "styled-components";

export const Pix = styled.div`
  width: 100%;
  margin: 30px auto 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  .container-pix {
    display: flex;
    flex-direction: column;
    max-width: 400px;
  }

  .preco-pix {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 400;

    span {
      font-weight: bold;
      font-size: 18px;
    }
  }

  .escaneie {
    margin-bottom: 10px;
  }

  .validade {
    font-size: 14px;
    color: #000;
    opacity: 0.8;
    margin-bottom: 20px;
  }

  img {
    height: 300px;
    width: 290px;
    object-fit: contain;
    border: 1px solid #000;
    margin: 10px auto 10px;
  }

  input {
    height: 40px;
    padding: 0 20px;
    width: 100%;
    text-align: center;
  }

  button {
    background-color: var(--primary-color);
    color: #fff;
    border: 0;
    font-weight: bold;
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  @media only screen and (max-width:900px) {
    margin-bottom: 30px!important;

    .preco-pix {
        margin-bottom: 10px;
    }
  }

  @media only screen and (max-width:768px) {
    .validade {
        margin-bottom: 10px;
    }
  }

  @media only screen and (max-width:500px) {
    .escaneie, .validade {
        margin-bottom: 3px;
    }

    .preco-pix {
        margin-bottom: 5px;
    }

    img {
        height: 250px;
        width: 250px;
    }
  }
`;
