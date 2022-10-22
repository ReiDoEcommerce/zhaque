import { useEffect } from "react";
import { NextRouter } from "next/router";

import * as S from "./styles";

interface Option {
  label: string;
  value: string;
}

interface FilterProps {
  options: Option[];
  hasLabel?:boolean;
  title?:string;
  router: NextRouter;
  routerBuild: any;
  setFilterMobile?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SortBy({ title, hasLabel, options, router, routerBuild, setFilterMobile }: FilterProps) {
  function SetParams(currentFilterValue: string) {
    routerBuild.updateRouteParam("currentfilter", currentFilterValue);
    routerBuild.updateRouteParam("page", 1);

    if (setFilterMobile) {
      setFilterMobile(false);
    }
  }

  useEffect(() => {
    if (router.query && router.query.currentfilter !== undefined) {
      routerBuild.updateRouteParam("currentfilter", router.query.currentfilter);
      routerBuild.updateRouteParam("page", 1);
    }
  }, []);

  return (
    <S.SortBy>
      {title && <h3 className="title-6-bold-graphie">{title}</h3>}

      <select
        onChange={(e) => SetParams(e.target.value)}
        className="paragraph-1-bold select-order"
      >
        {hasLabel && <option value="">Filtrar por</option>}
        {options.map((option) => {
          return (
            <option className="paragraph-2-medium" key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </S.SortBy>
  );
}
