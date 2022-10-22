import { useRef, useState } from "react";
import { useRouter } from "next/router";

import { api } from "src/services/api";
import checkCPF from "src/utils/checkCPF";
import { useCart } from "src/contexts/CartContext";
import { useAuth } from "src/contexts/Auth/authContext";
import { usePayment } from "src/contexts/PaymentContext";
import { OnlyNumbers } from "src/utils/replaceToOnlyNumber";

import {
  Form,
  FormHandles,
  YupValidation,
  InputComponent,
} from "components/inputs/core";
import { ButtonComponent } from "components/data/components";

import * as S from "./styles";

export function BoletoComponent() {
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();
  const { statePayment } = usePayment();
  const { dispatch } = useCart();

  const { push } = useRouter();

  const formRef = useRef<FormHandles>(null);

  interface BoletoProps {
    cpf: string;
  }

  async function handleSubmit({ cpf }: BoletoProps) {
    const Yup = await import("yup");
    
    try {
      setLoading(true);

      const schema = Yup.object().shape({
        cpf: Yup.string()
          .required("Por favor, digite o número do seu cpf.")
          .min(11, "Por favor, digite um cpf válido.")
          .test("test-invalid-cpf", "Por favor, digite um cpf válido.", (cpf) =>
            checkCPF(OnlyNumbers(cpf || ""))
          ),
      });

      await schema.validate(
        {
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

      const responseBoleto = await api.post("/checkout/payment", {
        addressId: statePayment.payment.addressId,
        countryId: 0,
        shippingId: statePayment.payment.shippingId?.id,
        cartGuid: JSON.parse(cartGuid ? cartGuid : ""),
        creditCard: {},
        coupon: statePayment.payment.couponCode?.nome,
        cpf: cpfReplaced,
        paymentType: 902, //Boleto code 902
      });

      setLoading(false);

      dispatch({
        payload: [],
        type: "CleanCart",
      });

      push({
        pathname: "/carrinho/sucesso",
        query: {
          name: user?.name,
          boleto: responseBoleto?.data?.boletoUrl,
          boletoPDF: responseBoleto.data.boletoPDF
        },
      });
    } catch (err) {
      setLoading(false);

      YupValidation(Yup, err, formRef);
    }
  }

  return (
    <S.CredCardComponent>
      <Form method="post" ref={formRef} onSubmit={handleSubmit}>
        <h3 className=" boleto-title">Digite seu cpf</h3>

        <InputComponent
          id="cpf"
          name="cpf"
          type="text"
          mask="999.999.999-99"
          placeholder="CPF"
          label="CPF"
        />

        <ButtonComponent type="submit" text="Comprar" loading={loading} />
      </Form>
    </S.CredCardComponent>
  );
}
