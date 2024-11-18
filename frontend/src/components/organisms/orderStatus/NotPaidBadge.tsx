import React from "react";
import { Span } from "@/components/atoms/text";

const NotPaidBadge = () => {
  return (
    <Span className="bg-red-500 text-white py-1 px-3 rounded-full text-sm">
      Not Paid
    </Span>
  );
};

export default NotPaidBadge;
