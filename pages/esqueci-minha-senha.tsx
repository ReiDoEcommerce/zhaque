import Head from "next/head";
import { useRef, useState } from "react";

import { api } from "src/services/api";

import {
  Form,
  FormHandles,
  InputComponent,
  YupValidation,
} from "components/inputs/core";
import { Layout } from "components/layout";
import { ButtonComponent, Container } from "components/data/components";

import * as S from "styles/pages/login";

export default function ResetPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);

  const formRef = useRef<FormHandles>(null);

  async function HandleSubmit(data) {
    const Yup = await import("yup");

    const { email } = data;

    try {
      setLoading(true);

      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Please enter a valid email")
          .required("Please enter a email"),
      });

      await schema.validate(
        { email },
        {
          abortEarly: false,
        }
      );

      formRef.current?.setErrors({});

      await api.post("/account/forgot-password", { email });

      setCheckEmail(true);
      setLoading(false);
    } catch (err) {
      setLoading(false);

      YupValidation(Yup, err, formRef);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout isBackgroundColor>
      <Head>
        <title>Recuperar senha</title>
      </Head>
      
      <S.Login isMaxWidth>
        <Container>
          <Form className="form-login" ref={formRef} onSubmit={HandleSubmit}>
            <h3 className="title-6-bold">
              {checkEmail ? "Verifique seu email" : "Recuperar senha"}
            </h3>
            {!checkEmail && (
              <p className="paragraph-2-regular margin">
                Digite o e-mail associado à sua conta e enviaremos <br />
                um e-mail com instruções para redefinir sua senha
              </p>
            )}

            {checkEmail && (
              <p className="paragraph-1-regular margin">
                Enviamos instruções em seu email para recuperar sua senha
              </p>
            )}
            {!checkEmail && (
              <InputComponent
                id="email"
                name="email"
                type="email"
                placeholder="Email"
              />
            )}

            {checkEmail ? (
              <ButtonComponent href="/login" text="Voltar" />
            ) : (
              <ButtonComponent type="submit" text="Enviar" loading={loading} />
            )}

            {checkEmail && (
              <p className="paragraph-2-regular try-other-email">
                Não recebeu o e-mail? Verifique sua caixa de span, <br /> ou
                <button type="button" onClick={() => setCheckEmail(false)}>
                  tente outro endereço de email
                </button>
              </p>
            )}
          </Form>
        </Container>
      </S.Login>
    </Layout>
  );
}
