import styled from "styled-components";

export const TopHeader = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .box-top-left,
  .box-top-right {
    display: flex;
    align-items: center;
    color: #fff;
    gap: 3.39vw;

    a {
      color: currentColor;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      fill: #fff;

      i {
        margin-bottom: 2px;
      }
    }

    a:hover {
      color: var(--secundary-color);
      fill: var(--secundary-color);
    }

    .box,
    a {
      i {
        display: flex;
        align-items: center;
        height: 18px;

        svg,
        img {
          height: inherit;
          width: auto;
          object-fit: contain;
        }
      }
    }
  }

  .box {
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      margin-top: 3px;
    }
  }

  @media only screen and (max-width: 1600px) {
    .box-top-left,
    .box-top-right {
      gap: 2.39vw;
    }
  }

  @media only screen and (max-width: 1400px) {
    .box-top-left,
    .box-top-right {
      gap: 25px;

      span,
      a {
        font-size: 14px;
      }

      .box,
      a {
        i {
          height: 17px;
        }
      }
    }

    .box {
      gap: 6px;
    }
  }

  @media only screen and (max-width:1200px) {
    .box-top-left,
    .box-top-right {
      gap: 18px;

      span,
      a {
        font-size: 13px;
      }

      .box,
      a {
        i {
          height: 15px;
        }
      }
    }

    .box {
      gap: 5px;
    }
  }
`;
