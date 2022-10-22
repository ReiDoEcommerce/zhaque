import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Address, CreateAddress, UpdateAddress } from "src/services/profile";
import { useProfile } from "src/contexts/Profile";
import {
  Form,
  FormHandles,
  InputCep,
  InputComponent,
  YupValidation,
} from "components/inputs/core";
import { ButtonComponent } from "components/data/components";
import * as S from "./styles";
interface NewAddressProps {
  address?: Address;
  closeNewAddress: React.Dispatch<boolean>;
  setAddressSelected?: Dispatch<SetStateAction<Address | null>>;
}

export function NewAddress({ address, closeNewAddress, setAddressSelected }: NewAddressProps) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const { setAddress } = useProfile();

  async function HandleSubmit(data: Address) {
    const Yup = await import("yup");
    try {
      setLoading(true);
      
      const schema = Yup.object().shape({
        complement: Yup.string(),
        city: Yup.string().required("Por favor digite sua cidade"),
        district: Yup.string().required("Por favor digite seu bairro"),
        state: Yup.string().required("Por favor digite seu estado"),
        zipCode: Yup.string().required("Por favor digite seu CEP"),
        street: Yup.string().required("Por favor digite sua rua"),
        number: Yup.string().required("Por favor digite um número"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

      if (!address) {
        const responseNewAddress = await CreateAddress(data);

        if (responseNewAddress) {
          setAddress(responseNewAddress);

          if(setAddressSelected && responseNewAddress.length === 1) {
            setAddressSelected(responseNewAddress[0]);
          }
        }

        closeNewAddress(false);
        setLoading(false);

        return;
      }

      const updateItem: Address = {
        id: (address as Address).id,
        city: data.city,
        district: data.district,
        number: data.number,
        state: data.state,
        street: data.street,
        zipCode: data.zipCode,
        complement: data.complement,
      };

      const responseUpdateAddress = await UpdateAddress(updateItem);
      if (responseUpdateAddress) {
        setAddress(responseUpdateAddress);
      }
      
      const header = document.querySelector("header");

      if (header) {
        header.style.zIndex = "";
      }

      closeNewAddress(false);
      setLoading(false);

    } catch (err: any) {

      setLoading(false);

      const yupError = err instanceof Yup.ValidationError;
      if (err.messageError && !yupError) {
        setError(err.messageError);
      }

      YupValidation(Yup, err, formRef);
    }
  }

  return (
    <S.NewAddress isEdit={!!address}>
      <div className="top-new-address">
        <h3 className="paragraph-1-bold-graphie">
          {address ? "Editar endereço" : "Novo endereço"}
        </h3>
        
        <button
          type="button"
          onClick={() => {
            closeNewAddress(false);
            const header = document.querySelector("header");
            if (header) {
              header.style.zIndex = "";
            }
          }}
          aria-label="close creation address"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" />
          </svg>
        </button>
      </div>

      <Form
        ref={formRef}
        onSubmit={HandleSubmit}
        initialData={{
          ...address,
        }}
      >
        {error.length > 0 && (
          <p className="error paragraph-2-bold-graphie error-message">
            {error}
          </p>
        )}

        <InputCep formRef={formRef} placeholder="Por favor digite seu CEP.">
          <InputComponent
            name="street"
            type="text"
            placeholder="Rua"
          />
          <InputComponent
            name="district"
            type="text"
            placeholder="Bairro"
          />
          <InputComponent
            name="state"
            type="text"
            placeholder="Estado"
            readOnly
          />
          <InputComponent name="city" placeholder="Cidade" type="text"  readOnly />

          <div className="double-colunm modal">
            <InputComponent name="number" type="text" placeholder="Número" />
            <InputComponent
              name="complement"
              type="text"
              placeholder="Complemento (opcional)"
            />
          </div>
          <div className="button-submit">
            <ButtonComponent type="submit" text="Salvar" loading={loading} />
          </div>
        </InputCep>
      </Form>
    </S.NewAddress>
  );
}