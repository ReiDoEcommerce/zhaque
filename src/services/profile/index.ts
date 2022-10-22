import { useQuery } from "react-query";

import { api } from "src/services/api";
import { getCookie, setCookie } from "src/utils/cookies";

export interface Address {
  id: string;
  complement?: string;
  city: string;
  district: string;
  state: string;
  zipCode: string;
  street: string;
  number: string;
}

async function GetAddresses() {
  const { data } = await api.get<Address[]>("/address/list");

  if (data) {
    return data;
  }

  return undefined;
}

function GetAddressesList() {
  return useQuery([`address-list`], () => GetAddresses(), {
    staleTime: 1000 * 60 * 30,
  });
}

async function CreateAddress(address: Address): Promise<Address[] | undefined> {
  try {
    const newAddress = {
      ...address,
      country: "Brasil"
    }

    const { data } = await api.post("/address/create", newAddress);

    const savedAddressCookie = getCookie("address");

    if (savedAddressCookie !== null) {
      let parsedAddress: Address[] = JSON.parse(savedAddressCookie);

      parsedAddress.push(data);

      setCookie("address", JSON.stringify(parsedAddress), 30);

      return parsedAddress;
    }

    setCookie("address", JSON.stringify([data]), 30);

    return [data];
  } catch (e) {
    throw e;
  }
}

async function UpdateAddress(address: Address): Promise<Address[] | undefined> {
  try {
     await api.post("/address/update", address);

    const savedAddressCookie = getCookie("address");

    if(savedAddressCookie) {
      let parsedAddress: Address[] = JSON.parse(savedAddressCookie);

      const newListUpdated = parsedAddress.map((addressLocalStorage) => {
        if(addressLocalStorage.id === address.id) {
          return address
        }

        return addressLocalStorage
      })

      setCookie("address", JSON.stringify(newListUpdated), 30);

      return newListUpdated;
    }

  } catch (e) {
    throw e;
  }
}


async function DeleteAddress(id: string): Promise<Address[] | undefined> {
  try {
    await api.post("/address/delete", { id: Number(id) });

    const savedAddressCookie = getCookie("address");

    if (savedAddressCookie !== null) {
      let parsedAddress: Address[] = JSON.parse(savedAddressCookie);

      const removeAddressToCookies = parsedAddress.filter(
        (address) => address.id !== id
      );

      setCookie("address", JSON.stringify(removeAddressToCookies), 30);

      return removeAddressToCookies;
    }

    setCookie("address", JSON.stringify([]), 30);

    return [];
  } catch (e) {
    throw e;
  }
}


export { UpdateAddress, GetAddressesList, CreateAddress, DeleteAddress };
