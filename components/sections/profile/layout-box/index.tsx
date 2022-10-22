import * as S from "./styles";

interface LayoutBoxProps {
  title: {
    text: string;
    icon?: {
      image: string;
      height?: number;
      isround?: boolean;
    };
    size: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  };
  titleInside?: boolean;
  children?: React.ReactNode;
  noContentLayout?: boolean;
  isDefault?: boolean;
}

export function LayoutBox({
  title,
  children,
  titleInside,
  noContentLayout,
  isDefault
}: LayoutBoxProps) {
  return (
    <S.LayoutBox
      titleInside={titleInside}
      icon={{
        height: title.icon?.height,
        isRound: title.icon?.isround,
      }}
      isDefault={isDefault}
    >
      <h3 className={`title-layout-box title-${title.size}-bold-graphie title-my-order`}>
        {title.icon && (
          <i>
            <img src={"/images/"+title.icon.image}/>
          </i>
        )}
        {title.text}
      </h3>

      {noContentLayout ? (
        children
      ) : (
        <div className="content-layout">{children}</div>
      )}
    </S.LayoutBox>
  );
}
