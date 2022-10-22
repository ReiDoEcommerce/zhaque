import styled from "styled-components";

export const Footer = styled.footer`
  background-color: var(--primary-color);
  padding: 65px 0 22px;

  .show-1024 {
    display: none;
    max-width: 188px;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .links.link-show-1024 {
    display: none;
  }

  .top-links {
    display: flex;
    justify-content: space-between;
  }

  .links {
    display: flex;
    flex-direction: column;
    color: #fff;

    a {
      color: currentColor;
    }

    a:hover {
      color: var(--secundary-color);
    }

    h3 + * {
      margin-top: 16px;
    }

    .link + * {
      margin-top: 10px;
    }
  }

  .links.atendimento {
    .link {
      fill: #fff;
      display: flex;
      gap: 10px;

      i {
        display: block;
        max-width: 16px;
      }

      svg {
        width: 100%;
        margin-top: 6px;
      }
    }

    a:hover {
      color: var(--secundary-color);
      fill: var(--secundary-color);
    }

    .time {
      svg {
        margin-top: 4px;
      }
    }
  }

  .links.redes {
    .redes {
      display: flex;
      align-items: center;
      gap: 13px;

      a {
        fill: #fff;
      }

      svg {
        max-width: 20px;
      }

      a:hover {
        fill: var(--secundary-color);
      }
    }
  }

  .top-links + * {
    margin-top: 50px;
  }

  .payment-footer {
    display: flex;
    align-items: flex-start;
    gap: 40px;
    color: #fff;

    h3 {
      margin-top: 5px;
    }

    img {
      max-width: 75px;
      width: 100%;
      object-fit: contain;
    }

    .box-left {
      display: flex;
      align-items: center;
      gap: 15px;
    }
  }

  .payment-footer + * {
    margin-top: 50px;
  }

  @media only screen and (max-width: 1600px) {
    padding: 55px 0 20px;

    .links {
      h3 + * {
        margin-top: 12px;
      }

      .link + * {
        margin-top: 9px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 50px 0 18px;

    .top-links + * {
      margin-top: 45px;
    }

    .payment-footer + * {
      margin-top: 45px;
    }

    .links {
      h3 + * {
        margin-top: 10px;
      }

      .link + * {
        margin-top: 8px;
      }
    }

    .links.atendimento {
      .link {
        i {
          max-width: 15px;
        }
      }
    }

    .links.redes {
      .redes {
        svg {
          max-width: 17px;
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 40px 0 16px;

    .top-links + * {
      margin-top: 40px;
    }

    .payment-footer + * {
      margin-top: 40px;
    }

    a,
    span,p {
      font-size: 13px;
    }

    .links {
      h3 + * {
        margin-top: 8px;
      }

      .link + * {
        margin-top: 6px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 25px 0 13px;

    .show-1024 {
      display: block;
      margin-bottom: 15px;
    }

    .top-links {
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;
    }

    .links {
      display: none;
    }

    .links.link-show-1024,
    .links.redes {
      display: flex;
    }

    .links.link-show-1024 {
      margin-bottom: 10px;
    }

    .links.redes {
      .redes {
        justify-content: center;
      }
    }

    .payment-footer {
      display: none;
    }

    .payment-footer + * {
      margin-top: 30px;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 25px 0 11px;

    .show-1024 {
      max-width: 150px;
    }

    a,
    span {
      font-size: 12px;
    }

    .links {
      h3 + * {
        margin-top: 6px;
      }

      .linl + * {
        margin-top: 5px;
      }
    }

    .links.help {
      margin-bottom: 12px;
    }

    .payment-footer + * {
      margin-top: 20px;
    }
  }
`;
