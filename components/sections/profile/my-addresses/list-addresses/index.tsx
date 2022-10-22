import * as S from "./styles";

import { useProfile } from "src/contexts/Profile";
import { CardAddress } from "./card-address";

export function ListAddresses() {
  const { address } = useProfile();

  if (!address || address.length === 0) {
    return (
      <S.ListAddresses>
        <p className="paragraph-2-regular-graphie">
          Dont have address in your profile
        </p>
      </S.ListAddresses>
    );
  }

  return (
    <S.ListAddresses>
      {address.map((item) => {
        return <CardAddress key={"address" + item.id} addressInformations={item} />;
      })}
    </S.ListAddresses>
  );
}
