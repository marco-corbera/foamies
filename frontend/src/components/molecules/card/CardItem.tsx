import { ReactNode } from "react";

interface CardItemProps {
  children: ReactNode;
  className?: string;
}

const CardItem = ({ children, className }: CardItemProps) => {
  return (
    <div className={`grid grid-cols-1 gap-2 py-2 ${className}`}>{children}</div>
  );
};

export default CardItem;
