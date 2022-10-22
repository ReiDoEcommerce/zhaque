import React, { useEffect, useRef, useState } from "react";

import { useField } from "@unform/core";

import ReactInputMask from "react-input-mask";

import * as S from "./styles";

export function InputEditComponent({
  id,
  name,
  label,
  type,
  mask,
  readOnly = false,
  ...rest
}: any) {
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [value, setValue] = useState(defaultValue);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current || value,
      path: "value",
    });
  }, [fieldName, registerField]);

  function handleChange(e) {
    setValue(e.target.value)
  }

  return (
    <S.Input>
      <div className={`input-content edit ${readOnly && "read-only"}`}>
        {mask ? (
          <ReactInputMask mask={mask} value={value || defaultValue || ""} onChange={handleChange} readOnly={readOnly}>
            {() => (
              <input
                id={id}
                ref={inputRef}
                type={type}
                className="paragraph-1-bold-graphie"
                readOnly={readOnly}
                {...rest}
              />
            )}
          </ReactInputMask>
        ) : (
          <input
            id={id}
            defaultValue={defaultValue}
            ref={inputRef}
            type={type}
            className="paragraph-1-bold-graphie"
            readOnly={readOnly}
            {...rest}
          />
        )}

        {label && (
          <label htmlFor={id} className="label-animation paragraph-1-bold-graphie">
            <span>{label}</span>
          </label>
        )}
      </div>

      {error && (
        <span className="error paragraph-3-bold-graphie error-message">
          {error}
        </span>
      )}
    </S.Input>
  );
}
