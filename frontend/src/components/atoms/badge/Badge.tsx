import React from "react";

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
    <span
      className={`inline-block px-3 py-1 text-sm font-medium text-white rounded-full ${bgColor} ${className}`}
    >
      {text}
    </span>
  );
};

export default Badge;
