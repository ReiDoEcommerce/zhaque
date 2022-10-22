import { useRef, useState } from "react";
import Router, { useRouter } from "next/router";

import { api } from "src/services/api";

import {
  Form,
  FormHandles,
  InputComponent,
  SelectComponent,
} from "components/inputs/core";
import { ButtonComponent } from "components/data/components";

import * as S from "./styles";
import { usePayment } from "src/contexts/PaymentContext";
import { useCart } from "src/contexts/CartContext";
import checkCPF from "src/utils/checkCPF";
import { OnlyNumbers } from "src/utils/replaceToOnlyNumber";

export function CreditCardComponent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { statePayment } = usePayment();
  const { dispatch } = useCart();

  const { push } = useRouter();

  const formRef = useRef<FormHandles>(null);

  interface CreditCardProps {
    number: string;
    holder_name: string;
    exp_month: string;
    exp_year: string;
    cvv: string;
    cpf: string;
    installments: string;
  }

  async function handleSubmit({
    number,
    holder_name,
    exp_month,
    exp_year,
    cvv,
    installments,
    cpf,
  }: CreditCardProps) {
    const Yup = await import("yup");

    try {
      setLoading(true);
      (document.getElementById("error_exp") as any).innerText = "";

      const schema = Yup.object().shape({
        number: Yup.string().required("Por favor, digite o número do cartão"),
        holder_name: Yup.string().required("Por favor, digite seu nome"),
        exp: Yup.string().required(
          "Por favor, selecione uma data de validade válida"
        ),
        cvv: Yup.string().required("Por favor, digite o código de segurança"),
        installments: Yup.string().required(
          "Por favor, selecione uma forma de parcelamento"
        ),
        cpf: Yup.string()
          .required("Por favor, digite o número do seu cpf.")
          .min(11, "Por favor, digite um cpf válido.")
          .test("test-invalid-cpf", "Por favor, digite um cpf válido.", (cpf) =>
            checkCPF(OnlyNumbers(cpf || ""))
          ),
      });

      await schema.validate(
        {
          number,
          holder_name,
          exp: exp_month && exp_year && "1",
          cvv,
          installments,
          cpf,
        },
        {
          abortEarly: false,
        }
      );

      formRef.current?.setErrors({});

      const cartGuid = localStorage.getItem("guid");

      if (!cartGuid) {
        setLoading(false);

        dispatch({
          payload: [],
          type: "CleanCart",
        });

        push({
          pathname: "/carrinho",
        });

        return;
      }

      const cpfReplaced = cpf.replaceAll(".", "").replaceAll("-", "");

      const responseCreditCard: any = await api.post("/checkout/payment", {
        addressId: statePayment.payment.addressId,
        countryId: 0,
        shippingId: statePayment.payment.shippingId?.id,
        cartGuid: JSON.parse(cartGuid ? cartGuid : ""),
        coupon: statePayment.payment.couponCode?.nome,
        number: number.replaceAll(" ", ""),
        holder_name,
        exp_month,
        exp_year,
        cvv,
        installments,
        cpf: cpfReplaced,
        paymentType: 903, //CreditCard code 903
      });

      if (
        responseCreditCard.status !== 200 &&
        responseCreditCard.status !== 201
      ) {
        throw responseCreditCard.response.data.error;
      }

      setLoading(false);

      dispatch({
        payload: [],
        type: "CleanCart",
      });

      push({
        pathname: "/carrinho/sucesso",
        query: {
          name: holder_name,
        },
      });
    } catch (err: any) {
      setLoading(false);

      if (err && !(err instanceof Yup.ValidationError)) {
        setError(err);
      }

      if (err instanceof Yup.ValidationError) {
        const errorMessages: Record<string, string> = {};

        err.inner.forEach((error: any) => {
          if (error.path === "exp") {
            (document.getElementById("error_exp") as any).innerText =
              error.message;
            return;
          }

          errorMessages[error.path] = error.message;
        });

        formRef.current?.setErrors(errorMessages);
      }
    }
  }

  const exp_monthList = [
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
    {
      label: "4",
      value: "4",
    },
    {
      label: "5",
      value: "5",
    },
    {
      label: "6",
      value: "6",
    },
    {
      label: "7",
      value: "7",
    },
    {
      label: "8",
      value: "8",
    },
    {
      label: "9",
      value: "9",
    },
    {
      label: "10",
      value: "10",
    },
    {
      label: "11",
      value: "11",
    },
    {
      label: "12",
      value: "12",
    },
  ];

  const exp_yearList = [
    {
      label: "22",
      value: "22",
    },
    {
      label: "23",
      value: "23",
    },
    {
      label: "24",
      value: "24",
    },
    {
      label: "25",
      value: "25",
    },
    {
      label: "26",
      value: "26",
    },
    {
      label: "27",
      value: "27",
    },
    {
      label: "28",
      value: "28",
    },
    {
      label: "29",
      value: "29",
    },
    {
      label: "30",
      value: "30",
    },

    {
      label: "31",
      value: "31",
    },
    {
      label: "32",
      value: "32",
    },
    {
      label: "33",
      value: "33",
    },

    {
      label: "34",
      value: "34",
    },
    {
      label: "35",
      value: "35",
    },
    {
      label: "36",
      value: "36",
    },
    {
      label: "37",
      value: "37",
    },
  ];

  const installments = [
    {
      label: "1x sem juros",
      value: "1",
    },
    {
      label: "2x sem juros",
      value: "2",
    },
    {
      label: "3x sem juros",
      value: "3",
    },
  ];

  return (
    <S.CredCardComponent>
      <Form method="post" ref={formRef} onSubmit={handleSubmit}>
        {error && <p className="error-message -bold" style={{paddingLeft: 0, marginBottom: 15}}>{error}</p>}

        <InputComponent
          id="cpf"
          name="cpf"
          type="text"
          mask="999.999.999-99"
          placeholder="CPF"
          label="CPF"
        />

        <InputComponent
          id="card-number"
          name="number"
          type="text"
          mask="9999 9999 9999 9999"
          placeholder="0000 0000 0000 0000"
          label="Número do cartão"
        />

        <InputComponent
          id="fullCard"
          name="holder_name"
          type="text"
          placeholder="Digite seu nome completo"
          label="Nome no cartão"
          maxLength={80}
        />

        <div className="card-data">
          <div className="input-content date">
            <p className="paragraph-2-bold-graphie label-validate">
              Data de validade:
            </p>

            <div className="input-content date-input paragraph-1-bold-graphie">
              <SelectComponent
                name="exp_month"
                placeholder="mm"
                optionsSelect={exp_monthList}
              />
              <span>/</span>
              <SelectComponent
                name="exp_year"
                placeholder="aa"
                optionsSelect={exp_yearList}
              />
            </div>

            <span
              id="error_exp"
              className="error paragraph-3-bold select-gender error-message error_exp"
            ></span>
          </div>

          <div className="input-content security">
            <div className="security-input">
              <InputComponent
                id="securityCode"
                label="Código de segurança:"
                name="cvv"
                type="text"
                placeholder="CVV"
                mask="999"
              />
            </div>
          </div>
        </div>

        <div className="input-content">
          <p className="paragraph-2-bold-graphie label-validate">
            Parcelamento:
          </p>

          <div className="input-content date paragraph-1-bold-graphie">
            <SelectComponent
              name="installments"
              placeholder="Parcelamento"
              optionsSelect={installments}
            />
          </div>
        </div>

        <ButtonComponent type="submit" text="Comprar" loading={loading} />
      </Form>
    </S.CredCardComponent>
  );
}
