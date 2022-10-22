import Link from "next/link";
import * as S from "./styles";

interface TabNavigationProps {
  tabs: Array<{ icon: string; name: string; url: string }>;
}

export function TabNavigationComponent({ tabs }: TabNavigationProps) {
  return (
    <S.TabNavigation>
      {tabs.map((tab) => {
        return (
          <Link key={"tab-navigation" + tab.name} href={tab.url}>
            <a href="replaced" className="paragraph-2-bold-graphie">
              <i
                dangerouslySetInnerHTML={{
                  __html: tab.icon,
                }}
              ></i>
              <span>
              {tab.name}
              </span>
            </a>
          </Link>
        );
      })}
    </S.TabNavigation>
  );
}
