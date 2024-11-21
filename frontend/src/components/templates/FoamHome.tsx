import { IOrderData } from "@/types/apiData";
import OrderCard from "@/components/organisms/order";

interface FoamHomeProps {
  orderData: IOrderData;
}

const FoamHome = ({ orderData }: FoamHomeProps) => {
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
