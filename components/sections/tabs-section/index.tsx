import React from "react";
import { useEffect, useState } from "react";
import { Product } from "src/services/shop/get";
import { DefinicoesComponent } from "./tabs-product/definicoes";
import { DescricaoComponent } from "./tabs-product/descricao";
import { Review, ReviewsComponent } from "./tabs-product/reviews";

import * as S from "./styles";

interface TabSectionProps {
  product: Product;
  reviews: Review[];
}

interface Tab {
  title: string;
  id: number;
  component: JSX.Element;
}

export default function TabsSectionComponent({
  product,
  reviews,
}: TabSectionProps) {
  const [tab, setTab] = useState<Tab | null>(null);
  const [size, setSize] = useState<{ height: number; width: number } | null>(
    null
  );

  const tabs: Tab[] = [
    {
      id: 1,
      title: "Descrição",
      component: <DescricaoComponent products={product}/>,
    },
    {
      id: 2,
      title: "Definições técnicas",
      component: <DefinicoesComponent />,
    },
    {
      id: 3,
      title: "Avaliações",
      component: <ReviewsComponent reviews={reviews} />,
    },
  ];

  const initialTab = tabs[0];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  if (!size) {
    return <></>;
  }

  return (
    <S.TabsSection>
      <div className="tab-container">
        <div className="tabs-actions">
          {tabs.map((tabItem) => {
            
            return (
            <React.Fragment key={tabItem.title}>
              <div className="tab-container">
                <button
                  key={tabItem.title}
                  className={`button-tab ${
                    tabItem.title === (tab ? tab.title : initialTab.title) &&
                    "active"
                  }`}
                  type="button"
                  onClick={() => setTab(tabItem)}
                >
                  <span className="paragraph-1-bold uppercase">
                    {tabItem.title}
                  </span>
                </button>

                {(tab || initialTab) && size.width <= 1024 && (
                  <div className={`tab-element ${
                    tabItem.title === (tab ? tab.title : initialTab.title) &&
                    "active"
                  }`}>
                    {tab ? tab.id === tabItem.id && tab.component : initialTab.id === tabItem.id && initialTab.component}
                  </div>
                )}
              </div>
            </React.Fragment>
          )})}
        </div>

        {(tab || initialTab) && size.width > 1024 && (
          <div className="tab-element">
            {tab ? tab.component : initialTab.component}
          </div>
        )}
      </div>
    </S.TabsSection>
  );
}
