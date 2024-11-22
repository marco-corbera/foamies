import React from "react";
import { getOrderStatus, getOrders } from "@/services/apiClient";
import FoamHome from "@/components/templates/FoamHome";
import type { IOrderData, IOrders } from "@/types/apiData";

const HomePage: React.FC = async () => {
  const orders = await getOrders();
  const orderData = await getOrderStatus(1);
  return (
    <FoamHome
      orders={orders as IOrders[]}
      orderData={orderData as IOrderData}
    />
  );
};

export default HomePage;
