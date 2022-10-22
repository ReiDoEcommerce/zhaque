import styled from "styled-components";

interface HeaderStyleProps {
  headerAbsolute?: boolean;
}

export const Header = styled.header<HeaderStyleProps>`
  position: ${(props: HeaderStyleProps) =>
    props.headerAbsolute ? "absolute" : "relative"};
  width: 100%;
  z-index: ${(props) => (props.headerAbsolute ? "99" : "3")};
  background-color: var(--primary-color);

  .menu-mobile {
    position: fixed;
    height: 100vh;
    width: 100%;
    right: 0;
    top: 0;
    z-index: -10;
    visibility: hidden;
    transition: 0.3s ease-in-out;
    display: flex;
    justify-content: flex-end;

    .filter {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.4);
      display: flex;
      justify-content: flex-end;
    }

    .menu {
      width: 30%;
      min-width: 370px;
      height: 100%;
      background-color: #fff;
      position: relative;
      z-index: 99;
      transform: translateX(100%);
      transition: 0.3s ease-in-out;
      padding: 25px;

      nav {
        display: flex;
        flex-direction: column;
        flex-direction: column;
        height: 100%;
        align-items: flex-start;
        gap: 15px;
        height: calc(100vh - 44px);
        overflow: auto;
        padding-right: 10px;

        a {
          color: var(--secundary-color);
        }
      }

      nav::-webkit-scrollbar {
        width: 5px;
      }
      nav::-webkit-scrollbar-thumb {
        background: var(--secundary-color);
      }

      nav::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
    }

    .close {
      color: var(--secundary-color);
      display: flex;
      justify-content: flex-end;
      transition: 0.3s;
      width: 20px;
      margin-left: auto;
      cursor: pointer;
      margin-bottom: 20px;
    }

    .close:hover {
      color: var(--yellow);
    }
  }

  .block-bar {
    display: none;
    width: 35px;
    flex-direction: column;
    cursor: pointer;
    align-self: center;
    gap: 6.8px;

    div {
      background-color: var(--secundary-color);
      width: 100%;
      height: 3.2px;
    }
  }

  .menu-mobile.active {
    z-index: 99;
    visibility: visible;
    .menu {
      transform: translateX(0%);
    }
  }

  .top {
    background-color: var(--primary-color-dark);
    padding: 14px 0;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-content {
    padding: 38px 0;
  }

  .box-left {
    max-width: 1050px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .box-right {
    display: flex;
    max-width: 290px;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
  }

  .logo {
    margin-right: 10px;
    max-width: 97px;
    width: 100%;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .logo + * {
    max-width: 810px;
    width: 100%;
    margin-left: 42px;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 40px;

    .account {
      display: flex;
      gap: 10px;
      color: #fff;

      a {
        color: #fff;
      }
    }

    .action {
      display: flex;
      position: relative;
      cursor: pointer;

      a:hover {
        color: var(--secundary-color);
      }

      svg,
      img {
        width: 33px;
        max-height: 100%;
        height: auto;
        object-fit: contain;
      }
    }
  }

  .header-category {
    background-color: var(--secundary-color);
    padding: 13px 0 15px;

    .container {
      display: flex;
      justify-content: center;
      gap: 4.21vw;
    }

    a {
      color: var(--tertiary-color);
    }

    a:hover {
      color: var(--primary-color);
    }
  }

  @media only screen and (max-width: 1600px) {
    .logo {
      max-width: 94px;
    }

    .box-left {
      max-width: 885px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .top {
      padding: 12px 0;
    }

    .logo {
      max-width: 145px;
    }

    .box-left {
      max-width: 725px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .top {
      padding: 10px 0;
    }

    .logo {
      max-width: 91px;
    }

    .box-left {
      max-width: 625px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .logo {
      max-width: 88px;
    }

    .logo + * {
      margin-left: 20px;
    }

    .show-1024 {
      display: flex !important;
    }

    .top {
      display: none;
    }

    .header-content {
      padding: 25px 0;
    }

    .container {
      max-width: 90%;
    }

    .box-left {
      max-width: 525px;
    }

    .box-right {
      gap: 30px;
      max-width: 210px;
    }

    .actions {
      gap: 20px;

      .action {
        svg,
        img {
          width: 30px;
        }
      }
    }

    .header-category {
      display: none;
    }

    .menu-mobile {
      .menu {
        form {
          border: 1px solid var(--secundary-color);

          button {
            svg {
              fill: var(--secundary-color);
            }
          }

          input {
            color: var(--secundary-color);
          }

          input::placeholder {
            color: var(--secundary-color);
          }
        }
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .logo {
      max-width: 84px;
    }

    .box-left {
      max-width: 455px;
    }

    .actions {
      gap: 15px;

      .action {
        svg,
        img {
          width: 27px;
        }
      }
    }

    .block-bar {
      width: 30px;
      gap: 6px;
    }
  }

  @media only screen and (max-width: 768px) {
    .logo {
      max-width: 80px;
    }

    .hide-768 {
      display: none !important;
    }

    .hide-1024 {
      display: none !important;
    }

    .menu-mobile {
      .menu {
        padding: 20px;

        nav {
          gap: 15px;
        }
      }

      .close {
        margin-bottom: 10px;
      }
    }

    .header-content {
      padding: 15px 0;
    }

    .block-bar {
      max-width: 30px;
      div {
        height: 2px;
      }
    }
  }

  @media only screen and (max-width: 650px) {
    .menu-mobile {
      .menu {
        min-width: 340px;
      }
    }
  }

  @media only screen and (max-width: 550px) {
    .logo {
      max-width: 75px;
    }

    .menu-mobile {
      .menu {
        min-width: 280px;
      }
    }

    .box-right {
      gap: 25px;
    }

    .actions {
      .action {
        svg,
        img {
          width: 25px;
        }
      }
    }

    .block-bar {
      max-width: 25px;
      gap: 5px;
    }
  }

  @media only screen and (max-width: 500px) {
    .box-left {
      max-width: 130px;
    }

    .box-right {
      max-width: 240px;
    }

    .menu-mobile {
      .menu {
        min-width: 250px;
        padding: 15px;
        min-width: 240px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .container {
      max-width: 100%;
    }

    .logo {
      max-width: 73px;
    }

    .actions {
      .action {
        img,
        svg {
          width: 23px;
        }
      }
    }
  }
`;
