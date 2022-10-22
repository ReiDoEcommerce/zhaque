import styled from "styled-components";

export const ProfileAction = styled.div`
  position: relative;
  z-index: 2;

  .bg {
    height: 100vh;
    width: 100vw;
    position: fixed;
    left: 0px;
    top: 0px;
  }
  
  .subMenu {
    display: none;
    position: absolute;
    bottom: -5px;
    left: -85px;
    transform: translateY(100%);
    width: 120px;
    text-align: left;
    z-index: 99;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 10px;

    ul {
      li {
        overflow: hidden;
        background-color: #fff;
        border-top: 1px solid var(--primary-color-dark);
      }

      li:first-child {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }

      li:last-child {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      }

      li:first-child::before {
        content: "";
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid #fff;
        position: absolute;
        top: -7px;
        right: 8px;
        transition: 0.3s;
        transform: unset;
      }
    }

    a,
    button {
      width: 100%;
      color: var(--theme-color-light);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 10px;
      overflow: hidden;

      svg {
        max-height: 18px !important;
        max-width: 18px !important;
        margin-right: 7px;
      }
    }

    a:hover,
    button:hover {
      color: var(--secundary-color);
    }

    li + li {
      a,
      button {
        border-top: 1px solid var(--theme-color-light);
      }
    }

    button {
      background-color: unset;
      border: 0;
    }
  }

  svg {
    fill: var(--primary-color-dark);
    stroke: #fff;
  }

  .action-login {
    > div {
      span {
        margin-left: 4px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .actions {
      gap: 20px;
    }

    .action-login {
      display: none;
    }

    .subMenu {
      left: -89px;

      a, button {
        padding: 5px 10px;
      }
    }
  }

  @media only screen and (max-width:500px) {
    .subMenu {
      max-width: 100px;
      left: -72px;
    }
  }
`;
