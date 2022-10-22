import * as S from "./styles";

interface PaginationProps {
  pages: number[];
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  onSelect(page: number): void;
}

export function PaginationComponent({
  pages,
  currentPage,
  hasNextPage,
  hasPreviousPage,
  onSelect,
}: PaginationProps) {
  
  if (pages.length === 1) {
    return <div></div>;
  }

  return (
    <S.PaginationStyle>
      {hasPreviousPage && (
        <span
          style={{ display: currentPage == 1 ? "none" : "block" }}
          className="link-3-bold filson"
          onClick={() => onSelect(currentPage - 1)}
        >
          {"<"}
        </span>
      )}

      {pages.map((pageItem) => {
        return (
          <button
            key={`${pageItem}-pagination}`}
            type="button"
            className={`${
              currentPage === pageItem
                ? "link-3-bold filson active"
                : "link-3-bold filson"
            }`}
            onClick={() => onSelect(pageItem)}
          >
            {pageItem}
          </button>
        );
      })}

      {hasNextPage && (
        <span
          style={{
            display: pages[pages.length - 1] == currentPage ? "none" : "block",
          }}
          className="link-3-bold filson"
          onClick={() => onSelect(currentPage + 1)}
        >
          {">"}
        </span>
      )}
    </S.PaginationStyle>
  );
}
