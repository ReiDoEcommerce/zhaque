import * as S from "./styles";

interface SkeletonProps {
  element: any;
  show: number;
}

export function Skeleton({ element, show }: SkeletonProps) {
  const Element = element;

  function getSecondPart(elementInString: any) {
    var idx = elementInString.lastIndexOf("<");
    if (idx > -1) {
      return (
        elementInString.substr(0, idx) +
        `<div class="loader"></div>` +
        elementInString.substr(idx)
      );
    }

    return "";
  }

  if (typeof element === "string") {
    return (
      <S.Container>
        {[...Array(show)].map(() => (
          <div
            dangerouslySetInnerHTML={{
              __html: getSecondPart(element),
            }}
          ></div>
        ))}
      </S.Container>
    );
  }

  return (
    <>
      {[...Array(show)].map((item, index) => {
        return (
          <Element key={Math.random() + index}>
            <S.Container>
              <div className="loader"></div>
            </S.Container>
          </Element>
        );
      })}
    </>
  );
}
