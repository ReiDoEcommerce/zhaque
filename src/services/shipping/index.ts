import { api } from "../api";

export interface Shipping {
  id: number;
  code: string;
  name: string;
  price: number;
  days: number;
}

async function GetListShipping(
  cep: string,
  cartGuid: string
): Promise<Shipping[]> {
  try {
    const response: any = await api.get(
      `/shipping-price/list-brazil?ZipCode=${cep}&CartGuid=${cartGuid}`
    );

    if(response?.response?.data?.error || !response || response.status !== 200) {
      return [];
    }

    return response.data;
  } catch (e) {
    throw e;
  }
}

export { GetListShipping };
