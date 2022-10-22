import { ButtonComponent } from "components/data/button";
import { CardAddress } from "components/sections/profile/my-addresses/list-addresses/card-address";
import { NewAddress } from "components/sections/profile/my-addresses/new-address";
import { Dispatch, SetStateAction, useState } from "react";
import { useProfile } from "src/contexts/Profile";
import { Address } from "src/services/profile";
import { AddressList } from "../addressList";
import * as S from "./styles";

interface SelectAddressProps {
  addressSelected: Address | null;
  setAddressSelected: Dispatch<SetStateAction<Address | null>>
}

export function SelectAddress({ addressSelected, setAddressSelected }: SelectAddressProps) {
  const { address } = useProfile();
  const [newAddress, setNewAddress] = useState(false);
  const [listAddress, setListAddress] = useState(false);

  return (
    <>
      <S.SelectAddress>
        {addressSelected && !listAddress && !newAddress && (
          <CardAddress addressSelected={addressSelected} setAddressSelected={setAddressSelected} addressInformations={addressSelected} />
        )}

        {newAddress && !listAddress && <NewAddress closeNewAddress={setNewAddress} setAddressSelected={setAddressSelected} />}

        {listAddress && <AddressList setAddressSelected={setAddressSelected} addressSelected={addressSelected} closeAddressList={setListAddress} />}

        <div className="address-actions">

          {!(addressSelected && address?.length === 1) && address && !newAddress && !listAddress && address?.length > 0 && (
            <button
              type="button"
              className="link-3-bold-graphie"
              onClick={() => setListAddress(true)}
            >
              {addressSelected ? "Selecione outro" : "Selecione um endereço"}
            </button>
          )}

          {!newAddress && !listAddress && (
            <button
              type="button"
              className="link-3-bold-graphie"
              onClick={() => setNewAddress(true)}
            >
              Novo endereço
            </button>
          )}
        </div>
      </S.SelectAddress>

      {!newAddress && !listAddress && (
        <small className="paragraph-2-bold">Endereço é obrigatório para gerar uma cobrança.</small>
      )}
    </>
  );
}
