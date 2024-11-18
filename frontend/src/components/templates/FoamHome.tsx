import OrderCard from "@/components/organisms/order";
import type { IRoundProps } from "@/components/organisms/order/OrderCard";

const data = {
  created: "2024-09-10 12:00:00",
  paid: false,
  subtotal: 18.9,
  taxes: 4.5,
  discounts: 5.0,
  rounds: [
    {
      created: "2024-09-10 12:00:30",
      items: [
        {
          name: "Corona",
          price_per_unit: 1.5,
          total: 3,
        },
        {
          name: "Club Colombia",
          price_per_unit: 1,
          total: 3,
        },
      ],
    },
    {
      created: "2024-09-10 12:20:31",
      items: [
        {
          name: "Club Colombia",
          price_per_unit: 1.8,
          total: 3,
        },
        {
          name: "Quilmes",
          price_per_unit: 1.2,
          total: 2,
        },
      ],
    },
    {
      created: "2024-09-10 12:43:21",
      items: [
        {
          name: "Cuzqueña",
          price_per_unit: 1.2,
          total: 3,
        },
      ],
    },
  ],
};

const mappedRoundsData: IRoundProps[] = data.rounds.map((round) => ({
  items: round.items.map((item) => ({
    name: item.name,
    price: item.price_per_unit,
    quantity: item.total,
  })),
}));

const Home = () => {
  return (
    <div className="p-4">
      <OrderCard
        title="Orden Total"
        subtotal={data.subtotal}
        taxes={data.taxes}
        discounts={data.discounts}
        rounds={mappedRoundsData}
        paid={data.paid}
      />
    </div>
  );
};

export default Home;
