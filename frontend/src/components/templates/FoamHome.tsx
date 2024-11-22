"use client";
import React, { useState, useEffect } from "react";
import { getOrders, getOrderStatus } from "@/services/apiClient";
import OrderCard from "@/components/organisms/order";
import EmptyState from "@/components/templates/OrderCardEmpty";
import BarrelTables from "@/components/organisms/barrelTables/BarrelTables";

import type { IOrders, IOrderData } from "@/types/apiData";

const FoamHome: React.FC = () => {
  const [orders, setOrders] = useState<IOrders[]>([]);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [orderData, setOrderData] = useState<IOrderData | null>(null);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [loadingOrderData, setLoadingOrderData] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders(false);
        setOrders(data as IOrders[]);
      } catch (error) {
        console.error("Error on getting tables:", error);
      } finally {
        setLoadingOrders(false);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    if (!selectedTable) return;

    const fetchOrderData = async () => {
      setLoadingOrderData(false);
      try {
        const data = await getOrderStatus(selectedTable, false);
        setOrderData(data as IOrderData);
      } catch (error) {
        console.error(
          `Error on getting order for table ${selectedTable}:`,
          error,
        );
      } finally {
        setLoadingOrderData(false);
      }
    };

    fetchOrderData();
  }, [selectedTable]);

  if (loadingOrders) return <div>Cargando mesas...</div>;

  return (
    <div className="p-4 md:w-2/3 mx-auto">
      <BarrelTables
        orders={orders}
        onTableClick={(tableNumber: string) => setSelectedTable(tableNumber)}
        className="mb-4 rounded-lg"
      />

      {selectedTable && loadingOrderData && <div>Loading order...</div>}

      {selectedTable && !loadingOrderData && orderData && (
        <OrderCard
          title="Total Bill"
          subtotal={orderData.subtotal}
          taxes={orderData.taxes}
          discounts={orderData.discounts}
          rounds={orderData.rounds.map((round) => ({
            items: round.items.map((item) => ({
              name: item.name,
              price: item.price_per_unit,
              quantity: item.total,
            })),
          }))}
          paid={orderData.paid}
        />
      )}

      {!orders && <EmptyState />}
    </div>
  );
};

export default FoamHome;
