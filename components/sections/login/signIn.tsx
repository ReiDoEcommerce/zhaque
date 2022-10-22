import { useRef, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { useAuth } from "src/contexts/Auth/authContext";

import { ButtonComponent } from "components/data/components";
import { Form, FormHandles, InputComponent, YupValidation } from "components/inputs/core";

export default function SignInComponent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const { signIn } = useAuth();
  const formRef = useRef<FormHandles>(null);

  async function HandleSubmit(data) {
    const Yup = await import("yup");
    
    const { email, password } = data;

    try {
      setLoading(true);
      setError("");

      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Por favor, digite um email válido.")
          .required("Por favor, digite um email."),
        password: Yup.string().required("Por favor, digite uma senha."),
      });

      await schema.validate(
        { email, password },
        {
          abortEarly: false,
        }
      );

      formRef.current?.setErrors({});

      await signIn({ email, password });


      router.push(router.query.callbackurl ? "/" + router.query.callbackurl : "/perfil");
    } catch (err: any) {
      setLoading(false);

      const yupError = err instanceof Yup.ValidationError;

      if (err && !yupError) {
        setError(err);
      }

      YupValidation(Yup, err, formRef);
    }
  }

  return (
    <Form ref={formRef} onSubmit={HandleSubmit}>
      <h3 className="title-3-bold">Login</h3>

      {error.length > 0 && (
        <p className="error paragraph-2-bold error-message">{error}</p>
      )}

      <InputComponent
        id="email"
        name="email"
        type="email"
        placeholder="Email"
      />

      <InputComponent
        id="password"
        name="password"
        type="password"
        placeholder="Senha"
      />

      <Link href="/esqueci-minha-senha" passHref>
        <a href="replaced" className="link-2-regular forgot-password-link">
          Esqueci minha senha
        </a>
      </Link>

      {router.pathname === "/login" && (
        <Link href="/criar-conta" passHref>
          <a
            href="replaced"
            className="link-2-bold forgot-password-link"
          >
            Criar uma conta
          </a>
        </Link>
      )}

      <ButtonComponent type="submit" text="Entrar" loading={loading} />
    </Form>
  );
}
