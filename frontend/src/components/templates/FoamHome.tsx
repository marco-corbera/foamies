import OrderCard from "@/components/organisms/order";
import type { IRoundProps } from "@/components/organisms/order/OrderCard";

const data = {
  created: "2024-09-10 12:00:00",
  paid: false,
  subtotal: 45.0,
  taxes: 4.5,
  discounts: 5.0,
  items: [
    {
      name: "Corona",
      price_per_unit: 1.5,
      total: 3.0,
    },
    {
      name: "Club Colombia",
      price_per_unit: 1.8,
      total: 3.6,
    },
  ],
  rounds: [
    {
      created: "2024-09-10 12:00:30",
      items: [
        {
          name: "Corona",
          price_per_unit: 1.5,
          total: 3.0,
        },
        {
          name: "Club Colombia",
          price_per_unit: 1.8,
          total: 3.6,
        },
      ],
    },
    {
      created: "2024-09-10 12:20:31",
      items: [
        {
          name: "Club Colombia",
          price_per_unit: 1.8,
          total: 3.6,
        },
        {
          name: "Quilmes",
          price_per_unit: 1.2,
          total: 2.4,
        },
      ],
    },
    {
      created: "2024-09-10 12:43:21",
      items: [
        {
          name: "Quilmes",
          price_per_unit: 1.2,
          total: 3.6,
        },
        {
          name: "Águila",
          price_per_unit: 1.0,
          total: 2.0,
        },
      ],
    },
  ],
};

const mappedData: IRoundProps[] = data.items.map((item) => ({
  name: item.name,
  price: item.price_per_unit,
  quantity: item.total / item.price_per_unit,
}));

const Home = () => {
  return (
    <div className="p-4">
      <OrderCard
        title="Orden Total"
        subtotal={data.subtotal}
        taxes={data.taxes}
        discounts={data.discounts}
        roundItems={mappedData}
        paid={data.paid}
      />
    </div>
  );
};

export default Home;
