import { render, screen, waitFor } from "@testing-library/react";

import Button from "./Button";

describe("Button tests", () => {
  it("Matches snapshot", () => {
    const { asFragment } = render(<Button children={"My great button"} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the button", () => {
    render(<Button children={"My great button"} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
