import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { useAuth } from "src/contexts/Auth/authContext";

import * as S from "./styles";

export function ProfileAction() {
  const [show, setShow] = useState(false);

  const { signOut, cookieExist } = useAuth();
  const router = useRouter();

  return (
    <S.ProfileAction>
      <div
        className="bg"
        onClick={() => setShow(false)}
        style={{ display: show ? "block" : "none" }}
      ></div>

      <div className="action">
        <div className="account">
          <img
            src="/images/icon-account-header.png"
            alt="Icone Conta"
            onClick={() => setShow(!show)}
          />

          <div className="action-login paragraph-1-regular">
            {!cookieExist && (
              <div>
                <Link href={"/login"}>Entre</Link>
                <span>ou</span>
                <div>
                  <Link href={"/criar-conta"}>cadastre-se</Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="subMenu" style={{ display: show ? "block" : "none" }}>
          <ul>
            <li>
              <Link href="/perfil" passHref>
                <a
                  href="replaced"
                  className="paragraph-1-medium"
                  onClick={() => setShow(false)}
                >
                  {cookieExist ? (
                    <svg
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      aria-hidden="true"
                      focusable="false"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      aria-hidden="true"
                      focusable="false"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 018 4h-2.71a8 8 0 10.001 12h2.71A9.985 9.985 0 0112 22zm7-6v-3h-8v-2h8V8l5 4-5 4z"></path>
                    </svg>
                  )}

                  {cookieExist ? "Perfil" : "Entrar"}
                </a>
              </Link>
            </li>

            {cookieExist && (
              <li className="paragraph-1-medium">
                <button
                  type="button"
                  onClick={() => {
                    setShow(false);
                    signOut(router.pathname);
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    aria-hidden="true"
                    focusable="false"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 018 4h-2.71a8 8 0 10.001 12h2.71A9.985 9.985 0 0112 22zm7-6v-3h-8v-2h8V8l5 4-5 4z"></path>
                  </svg>
                  Sair
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </S.ProfileAction>
  );
}
