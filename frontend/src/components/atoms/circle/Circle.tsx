'use client'
import React from "react";

interface CircleProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  onClick?: () => void;
}

const Circle: React.FC<CircleProps> = ({
  children,
  className = "",
  size = "md",
  onClick
}) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-40 h-40",
  };

  return (
    <div
      className={`rounded-full flex items-center justify-center ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Circle;
