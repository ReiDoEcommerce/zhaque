import { useEffect, useState } from "react";
import { NextRouter } from "next/router";

import { CategoriesList } from "src/services/shop/get";

import * as S from "./styles";

interface FilterProps {
  listFilters?: CategoriesList[];
  router: NextRouter;
  routerBuild: any;
  setFilterMobile?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function FilterBy({
  listFilters,
  router,
  routerBuild,
  setFilterMobile,
}: FilterProps) {
  const [active, setActive] = useState({
    id: 0,
    active: false,
  });

  function SetParams(id: string | null) {

    if(id?.length === 0) {
      routerBuild.updateRouteParam("category",  "");
      routerBuild.updateRouteParam("page", 1);
  
      setActive({
        id: 0,
        active: true,
      });

      return;
    }

    const categorie = listFilters?.find(filter => filter.id === Number(id));

    routerBuild.updateRouteParam("category", categorie ? categorie.url : "");
    routerBuild.updateRouteParam("page", 1);

    setActive({
      id: categorie ? categorie.id : 0,
      active: true,
    });
    if (setFilterMobile) {
      setFilterMobile(false);
    }
  }

  useEffect(() => {
    if (router.query && listFilters && router.query.category) {
      routerBuild.updateRouteParam("category", router.query.category);
      routerBuild.updateRouteParam("page", 1);

      const filterExist = listFilters.find(
        (filter) => filter.url === router.query.category
      );

      if (filterExist) {
        setActive({
          id: filterExist.id,
          active: true,
        });
      }
    }
  }, []);

  if (!listFilters) {
    return <div></div>;
  }

  return (
    <S.Filter>
      <select className="paragraph-1-bold select-categories" onChange={(e) => SetParams(e.target.value)}>
        <option value="">
          Filtrar por
        </option>
        <option
          value=""
        >
          Todos ({listFilters.reduce((a, b) => a + b.productsCount, 0)})
        </option>

        {listFilters.map((filter) => {
          return (
              <option
                key={filter.id + filter.titulo}
                value={filter.id}
              >
                {filter.titulo} ({filter.productsCount})
              </option>
          );
        })}
      </select>
    </S.Filter>
  );
}
