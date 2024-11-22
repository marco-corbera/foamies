import React from "react";
import { Span } from "../text";

interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ children, className = "" }) => (
  <Span size="sm" className={`${className}`}>
    {children}
  </Span>
);

export default Label;
