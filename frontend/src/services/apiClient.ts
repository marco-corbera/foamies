import { FETCH } from "@/services/fetchWrapper";

const getOrderStatus = async (id: string) => {
  try {
    const response = await FETCH({
      endpoint: `/api/orders/${id}`
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

const getOrders = async () => {
  try {
    const response = await FETCH({
      endpoint: "/api/orders"
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
