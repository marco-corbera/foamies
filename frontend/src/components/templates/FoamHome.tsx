import { IOrderData, IOrders } from "@/types/apiData";
import OrderCard from "@/components/organisms/order";
import EmptyState from "@/components/templates/OrderCardEmpty";
import BarrelTables from "@/components/organisms/barrelTables/BarrelTables";

interface FoamHomeProps {
  orders: IOrders[];
  orderData: IOrderData;
}

const FoamHome = ({ orders, orderData }: FoamHomeProps) => {
  if (!orderData.rounds.length) return <EmptyState />;

  const mappedRoundsData =
    orderData?.rounds?.map((round) => ({
      items: round.items.map((item) => ({
        name: item.name,
        price: item.price_per_unit,
        quantity: item.total,
      })),
    })) || [];

  return (
    <div className="p-4 md:w-2/3 mx-auto">
      <BarrelTables orders={orders} />

      <OrderCard
        title="Total Bill"
        subtotal={orderData?.subtotal}
        taxes={orderData?.taxes}
        discounts={orderData?.discounts}
        rounds={mappedRoundsData}
        paid={orderData?.paid}
      />
    </div>
  );
};

export default FoamHome;
