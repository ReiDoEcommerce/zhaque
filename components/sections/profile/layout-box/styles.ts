import styled from "styled-components";

interface LayoutBoxProps {
  titleInside?: boolean;
  icon?: {
    height?: number;
    isRound?: boolean;
  };
  isDefault?: boolean;
}

export const LayoutBox = styled.div<LayoutBoxProps>`
  background-color: ${(props) =>
    props.titleInside ? "#fff" : props.isDefault ? "unset" : "unset"};
  padding: ${(props) =>
    props.titleInside ? "40px 40px 25px" : props.isDefault ? "0" : "0"};
  border-radius: ${(props) =>
    props.titleInside ? "10px" : props.isDefault ? "0" : "0"};

  .title-layout-box {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 15px;
    color: #000;
    text-transform: uppercase;

    i {
      width: ${(props) =>
        props.icon?.height ? props.icon.height + `px` : `28px`};
      height: ${(props) =>
        props.icon?.height ? props.icon.height + `px` : `28px`};
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: ${(props) => (props.icon?.isRound ? "hidden" : "unset")};

      svg,
      img {
        height: inherit;
        width: auto;
      }
    }
  }

  .content-layout {
    padding: ${(props) =>
      props.titleInside ? "0" : props.isDefault ? "0" : "35px"};
    background-color: ${(props) => (!props.isDefault ? "#fff" : "unset")};
    border-radius: 10px;
  }

  @media only screen and (max-width: 1600px) {
    padding: ${(props) => (props.titleInside ? "32px" : "0")};

    .title-layout-box {
      gap: 11px;
      margin-bottom: 14px;

      i {
        width: ${(props) => (props.icon?.height ? "23px" : `37px`)};
        height: ${(props) => (props.icon?.height ? "23px" : `37px`)};
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: ${(props) => (props.titleInside ? "25px" : "0")};

    .title-layout-box {
      gap: 10px;
      margin-bottom: 13px;

      i {
        width: ${(props) => (props.icon?.height ? "22px" : `35px`)};
        height: ${(props) => (props.icon?.height ? "22px" : `35px`)};
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: ${(props) => (props.titleInside ? "25px 20px" : "0")};

    .title-layout-box {
      gap: 9px;
      margin-bottom: 12px;

      i {
        width: ${(props) => (props.icon?.height ? "21px" : `36px`)};
        height: ${(props) => (props.icon?.height ? "21px" : `36px`)};
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: ${(props) => (props.titleInside ? "25px 19px" : "0")};

    .title-layout-box {
      gap: 8px;
      margin-bottom: 11px;

      i {
        width: ${(props) => (props.icon?.height ? "20px" : `25px`)};
        height: ${(props) => (props.icon?.height ? "20px" : `25px`)};
      }
    }
  }

  @media only screen and (max-width: 900px) {
    padding: ${(props) => (props.titleInside ? "15px" : "0")};
  }

  @media only screen and (max-width: 768px) {
    padding: ${(props) => (props.titleInside ? "13px" : "0")};

    .title-layout-box {
      gap: 7px;
      margin-bottom: 10px;

      i {
        width: ${(props) => (props.icon?.height ? "18px" : `22px`)};
        height: ${(props) => (props.icon?.height ? "18px" : `22px`)};
      }
    }
  }

  @media only screen and (max-width: 500px) {
    padding: ${(props) => (props.titleInside ? "11px" : "0")};
  }
`;
