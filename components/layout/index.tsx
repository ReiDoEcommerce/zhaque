import { HeaderComponent } from "./header";
import { FooterComponent } from "./footer";
import * as S from "./styles";

interface LayoutProps {
  children?: React.ReactNode;
  isBackgroundColor?: boolean;
}

export function Layout({ children, isBackgroundColor }: LayoutProps) {
  return (
      <S.Layout isBackgroundColor={isBackgroundColor}>
        <HeaderComponent />

        {children}

        <FooterComponent />
      </S.Layout>
  );
}
