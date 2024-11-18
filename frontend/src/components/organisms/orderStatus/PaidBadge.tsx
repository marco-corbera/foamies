import React from "react";
import { Span } from "@/components/atoms/text";

const PaidBadge = () => {
  return (
    <Span className="bg-green-500 text-white py-1 px-3 rounded-full text-sm">
      Paid
    </Span>
  );
};

export default PaidBadge;
