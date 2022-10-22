import { useRef, useState } from "react";

import { api } from "src/services/api";
import { useAuth } from "src/contexts/Auth/authContext";
import { getCookie, setCookie } from "src/utils/cookies";

import {
  Form,
  FormHandles,
  InputEditComponent,
  YupValidation,
} from "components/inputs/core";
import { ButtonComponent, Modal } from "components/data/components";

import * as S from "./styles";

interface SubmitProps {
  name: string;
  surname: string;
  phone: string;
}

export function EditMyDetails() {
  const [modalEditMyDetails, setModalEditMyDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formRef = useRef<FormHandles>(null);

  const { user } = useAuth();

  async function HandleSubmit({
    name,
    surname,
    phone,
  }: SubmitProps) {
    const Yup = await import("yup");

    try {
      setLoading(true);

      let phoneOnlyNumbers = phone?.replace(/[^0-9]/g, "");

      const schema = Yup.object().shape({
        name: Yup.string().required("Please enter a name"),
        surname: Yup.string().required("Please enter a surname"),
        phone: Yup.string()
          .required("Please enter a phone")
          .min(11, "Please enter a valid phone"),
      });

      await schema.validate(
        {
          name,
          surname,
          phone: phoneOnlyNumbers,
        },
        {
          abortEarly: false,
        }
      );

      formRef.current?.setErrors({});

      await api.post("/account/update", {
        name,
        surname,
        phone: phoneOnlyNumbers,
      });

      const userCookies = getCookie("user");

      if (userCookies) {
        const userCookiesParsed = JSON.parse(userCookies);

        const emailUser = userCookiesParsed.email;
        const birthdayUser = userCookiesParsed.birthday;

        const value = {
          email: emailUser,
          birthday: birthdayUser,
          name,
          surname,
          phone,
        };

        setCookie("user", JSON.stringify(value), 30);
      }

      const header = document.querySelector("header");

      if (header) {
        header.style.zIndex = "0";
      }

      setModalEditMyDetails(true);
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

  function CloseModal() {
    const header = document.querySelector("header");

    if (header) {
      header.style.zIndex = "";
    }

    setModalEditMyDetails(false);
  }

  return (
    <S.EditMyDetails>
      {modalEditMyDetails && (
        <Modal resetModal={CloseModal}>
          <div className="send-sucess">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM632.3 134.4c-9.703-9-24.91-8.453-33.92 1.266l-87.05 93.75l-38.39-38.39c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l56 56C499.5 285.5 505.6 288 512 288h.4375c6.531-.125 12.72-2.891 17.16-7.672l104-112C642.6 158.6 642 143.4 632.3 134.4z" />
            </svg>

            <p className="title-3  -bold-graphie">
              Informação do usuário <br /> alteradas com sucesso
            </p>

            <ButtonComponent text="Fechar" onClick={CloseModal} />
          </div>
        </Modal>
      )}

      <Form
        ref={formRef}
        onSubmit={HandleSubmit}
        initialData={{
          name: user?.name,
          surname: user?.surname,
          email: user?.email,
          gender: user?.gender,
          birthday: user?.birthday,
          phone: user?.phone,
        }}
      >
        {error.length > 0 && (
          <p className="error paragraph-2-bold-graphie error-message">
            {error}
          </p>
        )}

        <InputEditComponent
          id="name"
          name="name"
          type="text"
          label="Surname*"
          placeholder="Primeiro nome"
        />

        <InputEditComponent
          id="surname"
          name="surname"
          type="text"
          label="Surname*"
          placeholder="Sobrenome"
        />

        <InputEditComponent
          id="email"
          label="Email*"
          name="email"
          type="email"
          placeholder="Email"
          readOnly
        />

        <InputEditComponent
          id="birthday"
          name="birthday"
          label="Data de aniversário"
          type="text"
          mask="99/99/9999"
          readOnly
        />

        <InputEditComponent
          label="Telephone*"
          mask="(99) 99999-9999"
          name="phone"
          type="text"
          placeholder="Telefone"
        />

        <ButtonComponent type="submit" text="Salvar" loading={loading} />
      </Form>
    </S.EditMyDetails>
  );
}
