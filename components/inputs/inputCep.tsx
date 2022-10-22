import { apiViaCep, ViaCep } from "src/services/api_cep";

import React, { RefObject, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import { FormHandles, useField } from "@unform/core";

const ReactInputMask = dynamic(() => import("react-input-mask"), {
  ssr: false,
});

import * as S from "./styles";

interface Props {
  placeholder?: string;
  formRef: RefObject<FormHandles>;
  children: React.ReactNode;
}

type InputProps = JSX.IntrinsicElements["input"] & Props;

export function InputCep({ placeholder, formRef, children }: InputProps) {
  const [cep, setCep] = useState("");
  const [validCep, setValidCep] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, defaultValue, error } = useField("zipCode");

  async function CallCep() {
    try {
      const { data } = await apiViaCep.get<ViaCep>(
        `${inputRef.current?.value}/json`
      );

      if (data.erro) {
        setValidCep(false);
        formRef.current?.setFieldError("zipCode", "Cep inválido.");
        return;
      }

      setValidCep(true);

      formRef.current?.setFieldError("zipCode", "");
      formRef.current?.setFieldValue("street", data.logradouro);
      formRef.current?.setFieldValue("district", data.bairro);
      formRef.current?.setFieldValue("city", data.localidade);
      formRef.current?.setFieldValue("state", data.uf);
    } catch (e) {
      setValidCep(false);
      formRef.current?.setFieldError("zipCode", "");
    }
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current || cep,
      path: "value",
    });
  }, [fieldName, cep, registerField]);

  useEffect(() => {
    if (defaultValue) {
      setCep(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (cep.length === 9 || cep.length === 8) {
      (async () => {
        await CallCep();
      })();
      return;
    }

    setValidCep(false);
    formRef.current?.setFieldError("zipCode", "");
  }, [inputRef.current?.value, cep, defaultValue]);

  return (
    <>
      <S.Input>
        <div className="input-content">
          <ReactInputMask
            mask="99999-999"
            onChange={(e) => {
              setCep(e.target.value.replace("-", "").replace("_", ""));
            }}
            value={cep}
          >
            {() => (
              <input
                className="paragraph-1-bold-graphie"
                ref={inputRef}
                type="text"
                name="zipCode"
                placeholder={placeholder}
                value={cep}
              />
            )}
          </ReactInputMask>
        </div>

        {error && (
          <span className="error paragraph-3-bold-graphie error-message">
            {error}
          </span>
        )}
      </S.Input>
      
      <div
        style={{ display: !validCep ? "none" : "block" }}
        className="show-if-cep-is-valid"
      >
        {children}
      </div>
    </>
  );
}
