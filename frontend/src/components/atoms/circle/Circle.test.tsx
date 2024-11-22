import { render, screen } from "@testing-library/react";
import React from "react";
import { Circle } from "./Circle";

describe("Circle Component", () => {
  test("renders Circle with correct snapshot", () => {
    const { asFragment } = render(<Circle>This is a Circle test</Circle>);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders Circle with correct children", () => {
    render(<Circle>This is a Circle test</Circle>);
    expect(screen.getByText("This is a Circle test")).toBeInTheDocument();
  });

  test("renders Circle with correct className", () => {
    render(<Circle className="test-class">This is a Circle test</Circle>);
    expect(screen.getByText("This is a Circle test")).toHaveClass("test-class");
  });

  test("renders Circle with correct size", () => {
    render(<Circle size="lg">This is a Circle test</Circle>);
    expect(screen.getByText("This is a Circle test")).toHaveClass("w-32 h-32");
  });
});
