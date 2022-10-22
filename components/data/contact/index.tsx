import { useRef, useState } from "react";
import router from "next/router";

import { api } from "src/services/api";

import { Container, ButtonComponent } from "components/data/components";
import { Form, FormHandles, YupValidation, InputComponent, TextAreaComponent } from "components/inputs/core";

import { ContactStyle } from "./styles";

interface SubmitProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string;
}

export function ContactComponent() {
  const [loading, setLoading] = useState(false);
  
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit({ name, email, subject, message, phone }: SubmitProps) {
    const Yup = await import("yup");
    
    try {
      setLoading(true)

      const phoneOnlyNumbers = phone?.replace(/[^0-9]/g, "");

      const schema = Yup.object().shape({
        name: Yup.string().required("Please enter a name"),
        email: Yup.string()
          .email("Invalid email")
          .required("Please enter a email"),
        subject: Yup.string().required("Please enter a subject"),
        message: Yup.string().required("Please enter a message"),
        phone: Yup.string()
        .required("Please enter a phone")
        .min(11, "Please enter a valid phone"),
      });

      await schema.validate(
        { name, email, subject, message, phone: phoneOnlyNumbers },
        {
          abortEarly: false,
        }
      );

      formRef.current?.setErrors({});

      const response = await api.post("form", {
        name,
        email,
        subject,
        message,
        phone: phoneOnlyNumbers
      });

      if (response.status === 200) {
        router.push({
          pathname: "/contato/success",
          query: { name },
        });

        setLoading(false)
      }
    }catch (err) {
      setLoading(false)

      YupValidation(Yup, err, formRef);
    }
  }

  return (
    <ContactStyle id="contact">
        <Form method="post" ref={formRef} onSubmit={handleSubmit}>
          <div className="double-colunm">
            <InputComponent
              id="name"
              name="name"
              type="text"
              placeholder="Digite seu nome completo"
              label="Nome completo"
            />

            <InputComponent
              id="email"
              name="email"
              type="email"
              placeholder="Digite seu e-mail aqui"
              label="E-mail"
            />
          </div>

          <InputComponent
            id="phone"
            name="phone"
            type="text"
            placeholder="(DDD) 99999-9999"
            mask="(99) 99999-9999"
            label="Telefone"
          />

          <InputComponent
            id="subject"
            name="subject"
            type="text"
            placeholder="Qual assunto da mensagem?"
            label="Assunto"
          />

          <TextAreaComponent
            id="message"
            name="message"
            placeholder="Digite sua mensagem"
            label="Mensagem"
          />

          <ButtonComponent type="submit" text="Enviar" loading={loading} />
        </Form>
    </ContactStyle>
  );
}
