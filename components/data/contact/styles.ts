import styled from "styled-components";

export const ContactStyle = styled.section`
  form {
    width: 100%;

    .double-colunm {
      display: flex;
      width: 100%;
      gap: 1.56vw;

      div {
        width: 100%;
      }
    }
  }

  input,textarea {
    background-color: rgba(0, 0, 0, 0.1);
  }

  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: rgba(0, 0, 0, 0.3);
  }

  input::-moz-placeholder,
  textarea::-moz-placeholder {
    /* Firefox 19+ */
    color: rgba(0, 0, 0, 0.3);
  }

  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    /* IE 10+ */
    color: rgba(0, 0, 0, 0.3);
  }

  input:-moz-placeholder,
  textarea:-moz-placeholder {
    /* Firefox 18- */
    color: rgba(0, 0, 0, 0.3);
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  textarea {
    resize: unset;
  }

  @media only screen and (max-width: 1024px) {
    form {
      .double-colunm {
        flex-direction: column;
        gap: 0;
      }
    }

    .container {
      max-width: 450px;
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }

    .box-left {
      max-width: 100%;
      text-align: center;

      p {
        max-width: 586px;
        margin: 0 auto;
        line-height: 17px;
        font-size: 14px;
      }

      .midias {
        justify-content: center;
        a {
          width: 30px;
          height: 30px;

          svg {
            max-width: 16px;
          }
        }
      }
    }
  }
`;
