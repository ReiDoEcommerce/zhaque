import Head from "next/head";
import { useRef } from "react";

import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

import { Layout } from "components/layout";
import { InputComponent } from "components/inputs/input";
import { ButtonComponent } from "components/data/button";

import * as S from "styles/pages/login";

export default function NewPasswordPage() {
  const formRef = useRef<FormHandles>(null);

  function HandleSubmit() {
    console.log("this");
  }

  return (
    <Layout isBackgroundColor>
      <Head>
        <title>Entrar</title>
      </Head>

      <S.Login>
        <Form ref={formRef} onSubmit={HandleSubmit}>
          <h3 className="title-6-bold">Criar uma nova senha</h3>
          <p className="paragraph-2-regular">
            Your new password must be different from previous used passwords.
          </p>

          <InputComponent
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />

          <InputComponent
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
          />

          <ButtonComponent type="submit" text="Reset password" />
        </Form>
      </S.Login>
    </Layout>
  );
}
