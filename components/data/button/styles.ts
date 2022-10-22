import styled from "styled-components";

interface ButtonProps {
  backgroundColor?: string;
  $loading?: boolean;
  svgSize?: number;
}

export const Button = styled.div<ButtonProps>`
  a,
  button {
    width: 100%;
    height: 54px;
    border-radius: 10px;
    cursor: ${(props) => (props.$loading ? "not-allowed" : "pointer")};
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    color: #fff;
    border: 0;
    transition: all 0.2s ease-in-out;
    background-size: 300% 100%;
    background-color: ${props => props.backgroundColor ? props. backgroundColor : "var(--secundary-color)"};

    i {
      display: flex;
      max-width: ${(props) => (props.svgSize ? props.svgSize + "px" : "25px")};

      svg {
        width: 100%;
        height: auto;
        fill: #fff;
      }
    }
  }

  a:hover,
  button:hover {
    transition: all 0.2s ease-in-out;
    background-color: var(--hover-secundary-dark);
  }

  @keyframes loading {
    0% {
      background-size: 300% 100%;
    }

    50% {
      background-position: 100% 0;
    }

    100% {
      background-size: 300% 100%;
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  @media only screen and (max-width: 1600px) {
    a,
    button {
      height: 50px;
    }
  }

  @media only screen and (max-width: 1400px) {
    a,
    button {
      height: 48px;
      gap: 10px;
    }

    svg {
      max-width: 21px;
    }
  }

  @media only screen and (max-width: 1200px) {
    a,
    button {
      height: 46px;
    }
  }

  @media only screen and (max-width: 1024px) {
    a,
    button {
      height: 44px;
    }
  }

  @media only screen and (max-width: 768px) {
    a,
    button {
      height: 42px;
    }
  }

  @media only screen and (max-width: 600px) {
    a,
    button {
      height: 38px;
    }
  }

  @media only screen and (max-width: 450px) {
    a,
    button {
      height: 36px;
    }
  }

  @media only screen and (max-width: 370px) {
    button {
      height: 33px;
      font-size: 13px;
    }
  }

  @media only screen and (max-width: 350px) {
    button {
      height: 31px;
      font-size: 12px;
    }
  }
`;
