import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button tests", () => {
  it("Matches snapshot", () => {
    const { asFragment } = render(<Button>My great button </Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the button", () => {
    render(<Button>My great button </Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
