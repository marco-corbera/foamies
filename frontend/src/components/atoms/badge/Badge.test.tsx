import { render, screen } from "@testing-library/react";
import Badge from "@/components/atoms/badge";

describe("Badge tests", () => {
  it("Matches snapshot", () => {
    const { asFragment } = render(<Badge text={"My great badge"} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the badge", () => {
    render(<Badge text={"My great badge"} />);
    expect(screen.getByText("My great badge")).toBeInTheDocument();
  });
});
