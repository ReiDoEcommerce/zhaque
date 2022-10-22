import React, { useEffect, useRef, useState } from "react";
import { useField } from "@unform/core";

import * as S from "./styles";

interface Option {
  label: string;
  value: string | number;
}

interface Select extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  optionsSelect: Option[];
  placeholder?: string;
}

export function SelectComponent({ name, optionsSelect, placeholder, ...rest }: Select) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLSelectElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current || value,
      path: "value",
    });
  }, [fieldName, value, registerField]);

  return (
    <S.Input>
      <div className="input-content">
        <input className="selectValidator" value={value} readOnly/>
        <select
          defaultValue={defaultValue}
          ref={inputRef}
          name={name}
          className="paragraph-1-bold select-gender"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          {...rest}
        >
          <option value="">{placeholder ? placeholder : "Gênero..."}</option>
          {optionsSelect.map((option) => {
            return (
              <option key={"select" + option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>

      {error && (
        <span className="error paragraph-3-bold select-gender error-message">
          {error}
        </span>
      )}
    </S.Input>
  );
}
