import { useRef, useState } from "react";

import { Modal, ButtonComponent } from "components/data/components";
import {
  Form,
  FormHandles,
  InputComponent,
  YupValidation,
} from "components/inputs/core";

import { AccountChangePassword } from "src/services/account";
import { useAuth } from "src/contexts/Auth/authContext";

import * as S from "./styles";

interface HandleSubmitProps {
  oldPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

export function ChangePassword() {
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalChagePassword, setModalChangePassword] = useState(false);

  const { signIn, user } = useAuth();

  const formRef = useRef<FormHandles>(null);

  async function handleSubmit({
    oldPassword,
    newPassword,
    newPasswordConfirm,
  }: HandleSubmitProps) {
    const Yup = await import("yup");

    try {
      setLoading(true);

      const schema = Yup.object().shape({
        oldPassword: Yup.string().required("Por favor, digite sua senha atual"),
        newPassword: Yup.string().required("Por favor, digite sua nova senha"),
        newPasswordConfirm: Yup.string()
          .required("Por favor, confirme sua nova senha")
          .oneOf([Yup.ref("newPassword"), null], "As senhas devem ser iguais"),
      });

      await schema.validate(
        {
          oldPassword,
          newPassword,
          newPasswordConfirm,
        },
        {
          abortEarly: false,
        }
      );

      formRef.current?.setErrors({});

      await AccountChangePassword(
        { oldPassword, newPassword, confirmNewPassword: newPassword },
        signIn,
        user
      );

      setSucess(true);
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      setSucess(false);
      const yupError = err instanceof Yup.ValidationError;

      if (err && !yupError) {
        setError(err);
      }

      YupValidation(Yup, err, formRef);
    }
  }

  function ResetModal() {
    setLoading(false);
    setSucess(false);
    setModalChangePassword(false);
  }

  return (
    <S.ChangePassword>
      {modalChagePassword && (
        <Modal resetModal={ResetModal}>
          {!sucess ? (
            <>
              <h3 className="title-4-bold">Altere sua senha</h3>

              <p className="paragraph-2-regular">
                Por favor, escreva sua nova senha
              </p>

              <Form ref={formRef} onSubmit={handleSubmit}>
                {error.length > 0 && (
                  <p className="error paragraph-2-bold error-message">
                    {error}
                  </p>
                )}

                <InputComponent
                  id="oldPassword"
                  name="oldPassword"
                  type="password"
                  placeholder="Senha atual"
                />

                <InputComponent
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  placeholder="Nova senha"
                />

                <InputComponent
                  id="newPasswordConfirm"
                  name="newPasswordConfirm"
                  type="password"
                  placeholder="Confirme sua senha"
                />

                <div className="button-submit">
                  <ButtonComponent text="Alterar" loading={loading} />
                </div>
              </Form>
            </>
          ) : (
            <div className="send-sucess">
              <p className="title-2-bold">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="122.879px"
                  height="118.662px"
                  viewBox="0 0 122.879 118.662"
                  enable-background="new 0 0 122.879 118.662"
                >
                  <g>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M43.101,54.363h4.138v-8.738c0-4.714,1.93-8.999,5.034-12.105v-0.004 c3.105-3.105,7.392-5.034,12.108-5.034c4.714,0,8.999,1.929,12.104,5.034l0.004,0.004c3.104,3.105,5.034,7.392,5.034,12.104v8.738 l3.297,0.001c0.734,0,1.335,0.601,1.335,1.335v28.203c0,0.734-0.602,1.335-1.336,1.335H43.101c-0.734,0-1.336-0.602-1.336-1.335 V55.698C41.765,54.964,42.366,54.363,43.101,54.363L43.101,54.363z M16.682,22.204c-1.781,2.207-3.426,4.551-5.061,7.457 c-5.987,10.645-8.523,22.731-7.49,34.543c1.01,11.537,5.432,22.827,13.375,32.271c2.853,3.392,5.914,6.382,9.132,8.968 c11.112,8.935,24.276,13.341,37.405,13.216c13.134-0.125,26.209-4.784,37.145-13.981c3.189-2.682,6.179-5.727,8.915-9.13 c6.396-7.957,10.512-17.29,12.071-27.138c1.532-9.672,0.595-19.829-3.069-29.655c-3.487-9.355-8.814-17.685-15.775-24.206 C96.695,8.333,88.593,3.755,79.196,1.483c-2.943-0.712-5.939-1.177-8.991-1.374c-3.062-0.197-6.193-0.131-9.401,0.224 c-2.011,0.222-3.459,2.03-3.238,4.041c0.222,2.01,2.03,3.459,4.04,3.237c2.783-0.308,5.495-0.366,8.141-0.195 c2.654,0.171,5.23,0.568,7.731,1.174c8.106,1.959,15.104,5.914,20.838,11.288c6.138,5.751,10.847,13.125,13.941,21.427 c3.212,8.613,4.035,17.505,2.696,25.959c-1.36,8.589-4.957,16.739-10.553,23.699c-2.469,3.071-5.121,5.78-7.912,8.127 c-9.591,8.067-21.031,12.153-32.502,12.263c-11.473,0.109-23.001-3.762-32.764-11.61c-2.895-2.328-5.621-4.983-8.129-7.966 c-6.917-8.224-10.771-18.092-11.655-28.202c-0.908-10.375,1.317-20.988,6.572-30.331c1.586-2.82,3.211-5.071,5.013-7.241 l0.533,14.696c0.071,2.018,1.765,3.596,3.782,3.524s3.596-1.765,3.524-3.782l-0.85-23.419c-0.071-2.019-1.765-3.596-3.782-3.525 c-0.126,0.005-0.25,0.016-0.372,0.032v-0.003L3.157,16.715c-2.001,0.277-3.399,2.125-3.122,4.126 c0.276,2.002,2.124,3.4,4.126,3.123L16.682,22.204L16.682,22.204L16.682,22.204z M53.899,54.363h20.963v-8.834 c0-2.883-1.18-5.504-3.077-7.403l-0.002,0.001c-1.899-1.899-4.521-3.08-7.402-3.08c-2.883,0-5.504,1.18-7.404,3.078 c-1.898,1.899-3.077,4.521-3.077,7.404V54.363L53.899,54.363L53.899,54.363z M64.465,69.795l2.116,9.764l-5.799,0.024l1.701-9.895 c-1.584-0.509-2.733-1.993-2.733-3.747c0-2.171,1.76-3.931,3.932-3.931c2.17,0,3.931,1.76,3.931,3.931 C67.612,67.845,66.261,69.433,64.465,69.795L64.465,69.795L64.465,69.795z"
                    />
                  </g>
                </svg>
                <span>Senha alterada com sucesso</span>
              </p>

              <ButtonComponent text="Fechar" onClick={ResetModal} />
            </div>
          )}
        </Modal>
      )}

      <div className="buttonOpenModal">
        <div className="password">
          <i>
            <img src="/images/profile/icon-password.png" alt="Icone senha" />
          </i>

          <h4 className="title-4-bold uppercase">senha</h4>
        </div>

        <ButtonComponent
          text="alterar senha"
          type="button"
          onClick={() => {
            setModalChangePassword(true);
            const header = document.querySelector("header");

            if (header) {
              header.style.zIndex = "0";
            }
          }}
        />
      </div>
    </S.ChangePassword>
  );
}
