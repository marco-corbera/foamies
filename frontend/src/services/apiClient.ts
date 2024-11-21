import { FETCH } from "@/services/fetchWrapper";

const getOrderStatus = async () => {
  try {
    const response = await FETCH({
      endpoint: "/api/order/",
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

export { getOrderStatus };
