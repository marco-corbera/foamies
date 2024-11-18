import { ReactNode } from "react";

interface CardBodyProps {
  info?: ReactNode;
  items: ReactNode[];
}

const CardBody = ({ info, items }: CardBodyProps) => {
  return (
    <div className="p-4">
      {info && <div className="mb-4">{info}</div>}
      <div>{items}</div>
    </div>
  );
};

export default CardBody;
