type OrderItem = {
  name: string;
  price_per_unit: number;
  total: number;
};

type Round = {
  created: string;
  items: OrderItem[];
};

export type IOrderData = {
  created: string;
  paid: boolean;
  subtotal: number;
  taxes: number;
  discounts: number;
  rounds: Round[];
};
