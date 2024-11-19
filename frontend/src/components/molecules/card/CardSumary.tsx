import { ReactNode } from "react";

interface CardSummaryProps {
  info?: ReactNode;
}

const CardBody = ({ info }: CardSummaryProps) => {
  return (
    <div className="px-4">{info && <div className="mb-4">{info}</div>}</div>
  );
};

export default CardBody;
