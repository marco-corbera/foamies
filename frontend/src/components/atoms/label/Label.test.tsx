import React from "react";
import { render } from "@testing-library/react";
import Label from "@/components/atoms/label";

describe("Label component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Label>Test Label</Label>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByText } = render(<Label>Test Label</Label>);
    expect(getByText("Test Label")).toBeInTheDocument();
  });
});
