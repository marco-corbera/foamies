import React from "react";
import { Span } from "@/components/atoms/text";

interface BadgeProps {
  text: string;
  bgColor?: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  text,
  bgColor = "bg-secondary",
  className = "",
}) => {
  return (
    <Span
      size="sm"
      className={`inline-block px-3 py-1 text-white rounded-full ${bgColor} ${className}`}
    >
      {text}
    </Span>
  );
};

export default Badge;
