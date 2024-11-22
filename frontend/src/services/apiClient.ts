import { FETCH } from "@/services/fetchWrapper";

const getOrderStatus = async (id: string, isServer: boolean = true) => {
  try {
    const response = await FETCH({
      endpoint: `/api/orders/${id}`,
      isServer
    });
    if (response.ok) {
      return response.data;
    } else {
      throw new Error(response.error || "Failed to fetch order status");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getOrders = async (isServer: boolean = true) => {
  try {
    const response = await FETCH({
      endpoint: "/api/orders",
      isServer
    });
    if (response.ok) {
      return response.data;
    } else {
      throw new Error(response.error || "Failed to fetch orders");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getOrderStatus, getOrders };
