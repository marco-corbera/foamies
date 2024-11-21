import React from "react";
import { getOrderStatus } from "@/services/apiClient";
import FoamHome from "@/components/templates/FoamHome";
import type { IOrderData } from "@/types/apiData";

const HomePage: React.FC = async () => {
  const orderData = await getOrderStatus();
  return <FoamHome orderData={orderData as IOrderData} />;
};

export default HomePage;
