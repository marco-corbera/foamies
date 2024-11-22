'use client'
import React from "react";
import TableBarrel from "@/components/molecules/table/TableBarrel";
import { H1, H3 } from "@/components/atoms/text";

interface Order {
  id: string;
  paid: boolean;
}

interface BarrelTablesProps {
  orders: Order[];
  onTableClick: (id: string) => void;
  className?: string
}

const BarrelTables: React.FC<BarrelTablesProps> = ({ orders, onTableClick, className = "" }) => {
  return (
    <div className={`p-8 bg-white ${className}`}>
      <H1 className="text-3xl font-bold text-primary">Foamies</H1>
      <H3 className="text-gray-600 mb-4">Click on a table to get its order</H3>
      <div className="flex overflow-x-auto">
        {orders?.map((order) => (
          <div key={order.id} className="flex-none p-4">
            <TableBarrel tableNumber={order.id} isPaid={order.paid} onTableClick={onTableClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarrelTables;
