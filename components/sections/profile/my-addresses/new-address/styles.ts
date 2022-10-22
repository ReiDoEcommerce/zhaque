import styled from "styled-components";

interface NewAddressStyleProps {
  isEdit?: boolean;
}

export const NewAddress = styled.section<NewAddressStyleProps>`
  border: 1px solid var(--theme-color);
  padding: ${(props) => (props.isEdit ? "15px 10px" : "10px 20px 30px")};
  position: ${(props) => props.isEdit && "fixed"};
  top: ${(props) => props.isEdit && "0"};
  left: ${(props) => props.isEdit && "0"};
  right: ${(props) => props.isEdit && "0"};
  height: ${(props) => props.isEdit && "100vh"};
  background-color: ${(props) => props.isEdit && "rgba(0,0,0,.6)"};
  display: ${(props) => props.isEdit && "flex"};
  align-items: ${(props) => props.isEdit && "center"};
  justify-content: ${(props) => props.isEdit && "center"};
  flex-direction: ${(props) => props.isEdit && "column"};
  z-index: ${(props) => props.isEdit && "99"};

  .top-new-address {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    background-color: ${(props) => props.isEdit && "#fff"};
    max-width: ${(props) => props.isEdit && "700px"};
    width: ${(props) => props.isEdit && "100%"};
    padding: ${(props) => props.isEdit && "15px 20px 20px"};
    margin-bottom: ${(props) => props.isEdit && "0"};
    border-radius: ${(props) => props.isEdit && "10px 10px 0 0 "};

    h3 {
      margin-bottom: 0;
    }

    button {
      background-color: transparent;
      border: 0;

      svg {
        fill: var(--theme-color-light);
        width: 20px;
        height: auto;
        transition: 0.3s;
      }
    }

    button:hover {
      svg {
        fill: var(--theme-color-dark);
      }
    }
  }

  form {
    max-width: ${(props) => props.isEdit && "700px"};
    width: ${(props) => props.isEdit && "100%"};
    padding: ${(props) => props.isEdit && "5px 20px 20px"};
    border-radius: ${(props) => props.isEdit && "0 0 10px 10px"};

    background-color: #fff;

    input {
      background-color: #eae8ed;
      color: var(--theme-color);
    }

    input::placeholder {
      color: #d6d3de;
    }

    .double-colunm {
      display: flex;
      gap: 15px;
    }

    .button-submit {
      button {
        height: 58px;
        font-size: 17px;
        max-width: 200px;
        margin: 0 0 0 auto;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .top {
      margin-bottom: ${(props) => (props.isEdit ? "0" : "15px")};
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 10px 18px 25px;

    .top {
      padding: ${(props) => props.isEdit && "12px 20px 10px"};
    }

    form {
      .button-submit {
        button {
          height: 37px;
          font-size: 16px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 10px 17px 20px;

    form {
      .button-submit {
        button {
          height: 34px;
          font-size: 15px;
          max-width: ${(props) => props.isEdit ? "100%" : "180px"}
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 0 15px;

    .top {
      padding: ${(props) => props.isEdit && "8px 15px 0px"};
      margin-bottom: 10px;

      button {
        svg {
          width: ${(props) => props.isEdit && "24px"};
        }
      }
    }

    form {
      padding: ${(props) => props.isEdit && "5px 15px 15px"};
      .button-submit {
        button {
          height: 31px;
          font-size: 14px;
          max-width: ${(props) => props.isEdit ? "100%" : "165px"}
        }
      }

      .double-colunm.modal {
        flex-direction: column;
        gap: 0;
      }
    }
  }
`;
