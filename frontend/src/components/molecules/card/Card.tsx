import { ReactNode } from "react";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardSummary from "./CardSumary";

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
      <div className="sticky top-0 z-10 bg-white">
        <CardHeader title={title} badge={badge} />
        <CardSummary info={info} />
      </div>

      <div className="overflow-y-auto h-96">
        <CardBody items={items} />
      </div>

      <div className="sticky bottom-0 z-10 bg-white">
        <CardFooter>{footer}</CardFooter>
      </div>
    </div>
  );
};

export default Card;
