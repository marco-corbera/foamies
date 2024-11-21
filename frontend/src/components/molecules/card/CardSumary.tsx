import { ReactNode } from "react";

interface CardSummaryProps {
  info?: ReactNode;
}

const CardSumary = ({ info }: CardSummaryProps) => {
  return <>{info && <div className="mb-4 px-4">{info}</div>}</>;
};

export default CardSumary;
