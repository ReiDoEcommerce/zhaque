interface DetailOrder {
  imagem: string;
  quantidade: number;
  titulo: string;
  valorTotal: number;
  dataSorteio: string;
  guid: number;
  isPriced: boolean;
  numSorteio: number;
  numerosSorteio: string;
}

interface DetailLog {
  dateCreated: string;
  titulo: string;
}



export interface Order {
  guid: string;
  orderNumber: string;
  orderStatus: string;
  dateCreated: string;
  paymentMethod: string;
  totalValue: number;
  cellphone?: string;
  cityAddress?: string;
  countryAddress?: string;
  discountCode?: string;
  discountValue?: number;
  districtAddress?: string;
  identifier?: string;
  identifierType?: string;
  name?: string;
  orderDetailItems?: DetailOrder[];
  orderDetailLogs?: DetailLog[];
  phone?: string;
  plusAddress?: string;
  shipValue?: number;
  stateAddress?: string;
  streetAddress?: string;
  subtotalValue?: number;
  surname?: string;
  zipCode?: string;
  qrCode?: string;
  qrCodeUrl?: string;
  boletoBarCode?: string;
  boletoLine?: string;
  boletoPDF?: string;
  boletoUrl?: string;
}
