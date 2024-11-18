import { ReactNode } from "react";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

interface CardProps {
  title: string;
  badge?: ReactNode;
  info?: ReactNode;
  items: ReactNode[];
  footer?: ReactNode;
}

const Card = ({ title, badge, info, items, footer }: CardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader title={title} badge={badge} />

      <CardBody info={info} items={items} />

      <CardFooter>{footer}</CardFooter>
    </div>
  );
};

export default Card;
