import { useState } from "react";

import { NewAddress } from "./new-address";
import { ListAddresses } from "./list-addresses";
import { ButtonComponent } from "components/data/components";

import * as S from "./styles";
import { Address } from "src/services/profile";

export function MyAddresses() {
  const [newAddress, setNewAddress] = useState(false);
  return (
    <S.MyAddresses>
      {!newAddress && <ListAddresses/>}

      {newAddress && <NewAddress closeNewAddress={setNewAddress} />}

      {!newAddress && (
        <div className="button-new-address">
          <ButtonComponent
            onClick={() => setNewAddress(true)}
            type="button"
            text="Novo endereço"
          />
        </div>
      )}
    </S.MyAddresses>
  );
}
