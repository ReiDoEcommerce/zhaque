import styled from "styled-components";

interface BgLayoutProps {
  isBackgroundColor?: boolean;
}

export const Layout = styled.div<BgLayoutProps>`
  background: ${props => props.isBackgroundColor ? "#f6f6f6" : 'url("/images/bg-body.webp")'};

  .page-component-layout,
  footer {
    position: relative;
    z-index: 1;
  }
`;
