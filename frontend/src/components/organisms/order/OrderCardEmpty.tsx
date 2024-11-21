"use client";
import { P } from "@/components/atoms/text";
import Button from "@/components/atoms/button";

const EmptyCard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <P className="text-gray-500 text-lg">There is not available data.</P>
      <Button
        className="mt-4 p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={() => location.reload()}
      >
        Reload
      </Button>
    </div>
  );
};

export default EmptyCard;
