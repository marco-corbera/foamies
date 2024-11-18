import { ReactNode } from "react";
import { H2 } from "@/components/atoms/text";

interface CardHeaderProps {
  title: string;
  badge?: ReactNode;
}

const CardHeader = ({ title, badge }: CardHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4">
      <H2 className="text-2xl font-semibold">{title}</H2>
      <div>{badge}</div>
    </div>
  );
};

export default CardHeader;
