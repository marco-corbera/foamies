import { ReactNode } from "react";

interface CardBodyProps {
  info?: ReactNode;
  items: ReactNode[];
}

const CardBody = ({ info, items }: CardBodyProps) => {
  return (
    <div className="px-4 py-0">
      {info && <div className="mb-4">{info}</div>}
      <div>{items}</div>
    </div>
  );
};

export default CardBody;
