import { ToMoney } from "src/utils/numberToCurrency";
import * as S from "./styles";

interface PixComponentProps {
  pixValor: string;
  pixImage: string;
  pixURL: string;
}

export function PixComponent({
  pixValor,
  pixImage,
  pixURL,
}: PixComponentProps) {
  return (
    <S.Pix className="pix">
      <div className="container-pix">
        <div className="preco-pix">
          Valor a pagar:{" "}
          <span className=" paragraph-1-bold">
            {ToMoney(Number(pixValor as String))}
          </span>
        </div>
        <p className="paragraph-1-bold escaneie">Escaneie o QR code:</p>

        <img src={pixImage as string} alt="QR Code pix" />

        <span className="validade">Código válido por 24 horas</span>

        <p className="paragraph-1-regular escaneie">
          Se preferir, voce pode pagar copiando e colando o seguinte código
        </p>

        <input value={pixURL as string} type="text" readOnly />

        <button
          type="button"
          onClick={() => navigator.clipboard.writeText(pixURL as string)}
        >
          Copiar
        </button>
      </div>
    </S.Pix>
  );
}
