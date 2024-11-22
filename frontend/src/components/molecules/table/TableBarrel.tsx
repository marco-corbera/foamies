import React from "react";
import Circle from "@/components/atoms/circle";
import Label from "@/components/atoms/label";
import Badge from "@/components/atoms/badge";

interface TableBarrelProps {
  tableNumber: string;
  isPaid: boolean;
}

const TableBarrel: React.FC<TableBarrelProps> = ({ tableNumber, isPaid }) => (
  <Circle
    className={`relative ${isPaid ? "bg-green-500" : "bg-red-500"} shadow-lg`}
    size="xl"
  >
    <Badge
      size="xl"
      text={tableNumber}
      className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/20 px-4 py-1 rounded-full text-white"
    />
    <div className="flex flex-col items-center justify-center h-full">
      <Label className="text-white text-lg font-medium">
        {isPaid ? "Paid" : "Not paid"}
      </Label>
    </div>
  </Circle>
);

export default TableBarrel;
