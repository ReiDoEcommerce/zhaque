import { useRef, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { ButtonComponent } from "components/data/components";
import {
  Form,
  FormHandles,
  YupValidation,
  InputComponent,
  RadioInput,
  SelectComponent,
} from "components/inputs/core";

import { genderOptions } from "src/utils/genderOptions";
import { useAuth } from "src/contexts/Auth/authContext";
import { CreateAccountProps, AccountCreate } from "src/services/account";
import { InputRadio } from "components/inputs/styles";

export default function CreateAccountComponent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const { signIn } = useAuth();
  const formRef = useRef<FormHandles>(null);

  interface FormSubmit extends CreateAccountProps {
    gender: string;
  }

  async function HandleSubmitCreateAccount({
    name,
    surname,
    email,
    phone,
    password,
    birthday,
    passwordConfirmation,
    gender,
  }: FormSubmit) {
    const Yup = await import("yup");

    try {
      setLoading(true);

      const phoneOnlyNumbers = phone?.replace(/[^0-9]/g, "");

      const schema = Yup.object().shape({
        name: Yup.string().required("Por favor, digite um nome."),
        surname: Yup.string().required("Por favor, digite seu sobrenome."),
        email: Yup.string()
          .email("Por favor, digite um email válido.")
          .required("Por favor, digite um email."),
        phone: Yup.string()
          .required("Por favor, digite um telefone.")
          .min(11, "Por favor, digite um telefone válido."),
        birthday: Yup.string()
          .required("Por favor, selecione a sua data de nascimento.")
          .nullable(false),
        password: Yup.string().required("Por favor, digite uma senha."),
        passwordConfirmation: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "As senhas não conferem."
        ),
        gender: Yup.string().required("Por favor, escolha um gênero."),
      });

      await schema.validate(
        {
          name,
          surname,
          email,
          phone: phoneOnlyNumbers,
          birthday,
          password,
          passwordConfirmation,
          gender,
        },
        {
          abortEarly: false,
        }
      );

      formRef.current?.setErrors({});

      await AccountCreate({
        name,
        surname,
        email,
        phone: phoneOnlyNumbers,
        birthday,
        password,
        passwordConfirmation,
        gender,
      });

      await signIn({ email, password });

      router.push(
        router.query.callbackurl ? "/" + router.query.callbackurl : "/perfil"
      );

      setLoading(false);
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
    <Form ref={formRef} onSubmit={HandleSubmitCreateAccount}>
      <h3 className="title-6-bold">Criar conta</h3>

      {error.length > 0 && (
        <p className="error paragraph-2-bold error-message" style={{marginBottom: "20px"}}>{error}</p>
      )}

      <InputComponent
        id="firstName"
        name="name"
        type="text"
        placeholder="Primeiro nome"
      />

      <InputComponent
        id="surname"
        name="surname"
        type="text"
        placeholder="Sobrenome"
      />

      <InputComponent name="email" type="email" placeholder="Email" />

      <InputComponent
        mask="(99) 99999-9999"
        name="phone"
        type="text"
        placeholder="Telefone"
      />

      <InputComponent
        id="birthday"
        name="birthday"
        labelAnimation="Data de nascimento"
        type="date"
        max={new Date().toISOString().split("T")[0]}
      />

      <SelectComponent optionsSelect={genderOptions} name="gender" />

      <InputComponent
        id="passwordCreateAccount"
        name="password"
        type="password"
        placeholder="Senha"
      />

      <InputComponent
        id="passwordConfirmation"
        name="passwordConfirmation"
        type="password"
        placeholder="Confirme sua senha"
      />

      <ButtonComponent type="submit" text="Criar conta" loading={loading} />

      {router.pathname === "/create-account" && (
        <Link href="/login" passHref>
          <a
            href="replaced"
            className="link-1-bold forgot-password-link back-to-login"
          >
            Voltar para login
          </a>
        </Link>
      )}
    </Form>
  );
}
