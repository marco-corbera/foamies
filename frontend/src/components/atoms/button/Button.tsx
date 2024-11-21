import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  const baseClasses =
    "px-4 py-2 rounded-full text-white font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses =
    variant === "primary"
      ? "bg-primary hover:bg-blue-600 focus:ring-blue-400"
      : "bg-secondary hover:bg-gray-600 focus:ring-gray-400";
  const disabledClasses = disabled
    ? "bg-gray-300 text-gray-700 cursor-not-allowed"
    : "";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${disabledClasses} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
