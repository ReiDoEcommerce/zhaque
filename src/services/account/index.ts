import { AxiosError, AxiosResponse } from "axios";
import { SignInData, User } from "src/contexts/Auth/authContext";
import { api } from "src/services/api";

export interface PayloadChangePassword {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface CreateAccountProps {
  name: string;
  surname: string;
  email: string;
  phone: string;
  password: string;
  birthday: string;
  passwordConfirmation: string;
}

async function AccountChangePassword(
  payload: PayloadChangePassword,
  SignIn: (data: SignInData) => Promise<AxiosResponse<any> | undefined>,
  user: User | null
) {
  try {
    const response: any = await api.post("/account/change-password", payload);

    if(response.response.data.error) {
      throw response.response.data.error;
    }

    if (user) {
      await SignIn({
        email: user.email,
        password: payload.confirmNewPassword,
      });
    }
     

    return response.data;
  } catch (err) {
    throw err;
  }
}

async function AccountCreate(payload: CreateAccountProps) {
  try {
    const response: any = await api
      .post("/account/create", payload);

      if(response?.response?.data?.error) {
        throw response?.response?.data?.error;
      }

    if (response.data.status === 200 || response.data.status === 201) {
      return response.data;
    }
  } catch (err) {
    throw err;
  }
}

export { AccountChangePassword, AccountCreate };
