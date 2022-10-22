import styled from "styled-components";

export const Carousel = styled.div`
  display: flex;
  position: relative;
  z-index: 5;

  .controls {
    width: 100%;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    display: flex;
    justify-content: space-between;
    right: 0;
    left: 0;
    padding: 0 0.8vw;
    height: 100%;
  }

  button {
    cursor: pointer;
    background-color: unset;
    border: 0;

    img {
      min-width: 35px;
      object-fit: contain;
      height: 11.79%;
    }
  }


  .slider {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-shrink: 0;
    transition: all 0.5s;
  }

  .item {
    display: flex;
    align-items: center;
    font-size: 20px;
    aspect-ratio: 0.95;
    position: relative;

    > * {
      aspect-ratio: inherit;
    }
  }

  .item.center {
    aspect-ratio: 659/430;
  }

  .image {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    border-radius: 15px;
    overflow: hidden;
  }

  h3 {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border-radius: 15px;
    padding-bottom: 20px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-size: 18px;
    margin-bottom: 0;
    position: relative;
    overflow: hidden;
    z-index: 2;

    span {
      z-index: 2;
      position: relative;
    }
  }

  h3::after {
    content: "";
    width: 100%;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      #000000 100%
    );
    opacity: 0.7;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    height: 100%;
  }

  .next-owl-item-opacity {
    opacity: 0.6;
  }

  .next-owl-item-opacity + * {
    opacity: 0.3;
  }

  .prev-owl-item-opacity {
    opacity: 0.3;
  }

  .prev-owl-item-opacity + * {
    opacity: 0.6;
  }

  .center {
    opacity: 1;
  }

  @media only screen and (max-width: 1400px) {
    h3 {
      font-size: 14px;
    }
  }


`;
