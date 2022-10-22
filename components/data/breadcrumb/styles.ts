import styled from "styled-components";

export const BreadCrumb = styled.ul`
  display: flex;
  align-items: center;

  a, span {
    color: #252525;
    opacity: 0.5;
    transition: all 0.3s;
  }

  a:hover {
    opacity: unset;
  }

  li::after {
    content: ">";
    margin: 0 11px;
    color:#003050;
    opacity: .3;
    font-size: 20px;
  }

  li:last-child::after {
    display: none;
  }

  @media only screen and (max-width: 1600px) {
    li::after {
      margin: 0 10px;
      font-size: 19px;
    }
  }

  @media only screen and (max-width: 1400px) {
    li::after {
      margin: 0 9px;
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 1200px) {
    li::after {
      margin: 0 8px;
      font-size: 17px;
    }
  }

  @media only screen and (max-width: 1024px) {
    li::after {
      margin: 0 6px;
      font-size: 15px;
    }

    li {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 900px) {
    max-width: 530px;
    width: 100%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 600px) {
    li::after {
      margin: 0 5px;
      font-size: 14px;
    }

    li {
      font-size: 13px;
    }
  }

  @media only screen and (max-width: 500px) {
    li::after {
      margin: 0 5px;
      font-size: 13px;
    }

    li {
      font-size: 12px;
    }

    li:first-child {
      display: none;
    }
  }


`;
