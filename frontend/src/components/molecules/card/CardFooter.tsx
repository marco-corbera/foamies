import { ReactNode } from "react";

interface CardFooterProps {
  children: ReactNode;
}

const CardFooter = ({ children }: CardFooterProps) => {
  return (
    <div className="bg-gray-100 p-4 mt-4 border-t border-gray-200">
      {children}
    </div>
  );
};

export default CardFooter;
