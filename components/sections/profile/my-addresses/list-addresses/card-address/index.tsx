import { LoaderCircle } from "components/data/loader-circle";
import { SetStateAction, useState } from "react";
import { useProfile } from "src/contexts/Profile";
import { Address } from "src/services/profile";
import { DeleteAddress } from "src/services/profile";
import { NewAddress } from "../../new-address";

import * as S from "./styles";

interface CardAddressProps {
  addressInformations: Address;
  addressSelected?: Address | null;
  setAddressSelected?: React.Dispatch<SetStateAction<Address | null>>;
  closeAddressList?: React.Dispatch<boolean>;
}

export function CardAddress({
  addressInformations,
  addressSelected,
  setAddressSelected,
  closeAddressList,
}: CardAddressProps) {
  const [updateAddress, setUpdateAddress] = useState(false);
  const [loading, setLoading] = useState(false);

  const { address, setAddress } = useProfile();

  async function Delete() {
    setLoading(true);

    const data = await DeleteAddress(addressInformations.id);

    if (addressSelected?.id === addressInformations.id && setAddressSelected) {
      setAddressSelected(null);
    }

    if (closeAddressList && address?.length === 1) {
      closeAddressList(false);
    }

    setTimeout(() => {
      if (data) setAddress(data);
    }, 400);
  }

  return (
    <>
      <S.CardAddress $loading={loading}>
        {loading && (
          <div className="loader-delete">
            <LoaderCircle size={40} />
          </div>
        )}

        <div className="top-address">
          <div></div>

          <div>
            <button
              type="button"
              aria-label="button to edit address"
              onClick={() => {
                const header = document.querySelector("header");

                if (header) {
                  header.style.zIndex = "0";
                }

                setUpdateAddress(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
              >
                <g>
                  <g>
                    <path d="M10.667 9.614c0-.089.036-.172.097-.236l1.111-1.111a.334.334 0 0 1 .57.236v4.383c0 .736-.598 1.334-1.334 1.334H1.333A1.334 1.334 0 0 1 0 12.886V3.11c0-.737.597-1.334 1.333-1.334h7.94c.296 0 .446.359.235.57l-1.11 1.11a.342.342 0 0 1-.237.098H1.778v8.889h8.889zm5.016-7.942a1.086 1.086 0 0 1 0 1.534l-.983.983a.272.272 0 0 1-.383 0L11.81 1.684a.272.272 0 0 1 0-.384l.983-.983a1.086 1.086 0 0 1 1.534 0l1.355 1.355zm-4.5.637l2.506 2.505a.272.272 0 0 1 0 .383l-6.067 6.067-2.578.286a.54.54 0 0 1-.597-.597l.286-2.578L10.8 2.31a.272.272 0 0 1 .383 0z" />
                  </g>
                </g>
              </svg>
            </button>

            <button
              type="button"
              onClick={Delete}
              aria-label="button to delete address"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z" />
              </svg>
            </button>
          </div>
        </div>

        <address className="paragraph-2-regular-graphie">
          <div className="address-content">
            {addressInformations.street} {addressInformations.number}
          </div>
          <div className="address-content">
            {" "}
            {addressInformations.complement}{" "}
          </div>
          <div className="address-content">
            {" "}
            CEP {addressInformations.zipCode} - {addressInformations.state},{" "}
            {addressInformations.city}
          </div>
        </address>

        {setAddressSelected && closeAddressList && (
          <div className="select-this-address">
            <button
              type="button"
              className="paragraph-2-regular-graphie"
              onClick={() => {
                setAddressSelected(addressInformations);
                closeAddressList(false);
              }}
            >
              Selecionar este endereço
            </button>
          </div>
        )}
      </S.CardAddress>

      {updateAddress && (
        <NewAddress
          address={addressInformations}
          closeNewAddress={setUpdateAddress}
        />
      )}
    </>
  );
}
