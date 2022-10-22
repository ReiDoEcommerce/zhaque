import { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { CategoriesList, GetCategories } from "src/services/shop/get";

import { Container, SearchComponent } from "components/data/components";

import { CartComponent } from "./cart";
import { ProfileAction } from "./profile";
import { FavoriteAction } from "./favorite";

import * as S from "./styles";
import { TopHeaderComponent } from "./top-header";

export function HeaderComponent() {
  const [categories, setCategories] = useState<CategoriesList[]>([]);
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMenu(false);
  }, [router]);

  useEffect(() => {
    (async () => {
      const categoriesResponseApi = await GetCategories();

      setCategories(categoriesResponseApi);
    })();
  }, []);

  const [size, setSize] = useState<{ height: number; width: number } | null>(
    null
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  if (!size) {
    return <></>;
  }

  return (
    <S.Header>
      {/* Menu mobile */}
      <div className={`menu-mobile ${menu ? "active" : ""}`}>
        <div className="filter" onClick={() => setMenu(false)}></div>

        <div className="menu">
          <div
            className="close title-5-bold-graphie"
            onClick={() => setMenu(false)}
          >
            X
          </div>

          <nav className="link-2-bold-graphie">
            <SearchComponent />

            <Link href="/" passHref>
              <a href="replaced" className="title-3-bold">
                Início
              </a>
            </Link>

            <Link href="/produtos" passHref>
              <a href="replaced" className="title-3-bold">
                Produtos
              </a>
            </Link>

            {categories?.map((categories) => {
              return (
                <Link
                  key={categories.id + categories.titulo + categories.url}
                  href={{
                    pathname: "/produtos",
                    query: {
                      category: categories.url,
                    },
                  }}
                  passHref
                >
                  <a href="replaced" className="title-3-bold">
                    {categories.titulo}
                  </a>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="top">
        <Container>
          <TopHeaderComponent />
        </Container>
      </div>

      <div className="header-content">
        <Container>
          <div className="box-left">
            <Link href="/" passHref>
              <a href="replace" className="logo">
                <img src="/images/logo.png" alt="Logo" />
              </a>
            </Link>

            <div className="hide-1024">
              <SearchComponent />
            </div>
          </div>

          <div className="box-right">
            <div className="actions">
              <ProfileAction />

              <FavoriteAction />

              <CartComponent />
            </div>

            <div className="block-bar show-1024" onClick={() => setMenu(!menu)}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </Container>
      </div>

      <div className="header-category">
        <Container>
          {categories?.map((categories) => {
            return (
              <Link
                key={categories.id + categories.titulo + categories.url}
                href={{
                  pathname: "/produtos",
                  query: {
                    category: categories.url,
                  },
                }}
                passHref
              >
                <a href="replaced" className="link-2-medium">
                  {categories.titulo}
                </a>
              </Link>
            );
          })}
        </Container>
      </div>
    </S.Header>
  );
}
