import { render, screen } from "@testing-library/react";

import React from "react";

import { H1, H2, H3, H4, P, Span } from "./Text";

describe("Text Component Exports", () => {
  test("renders H1 with correct text content, tag, and snapshot", () => {
    render(<H1>This is an H1 test</H1>);
    const element = screen.getByText("This is an H1 test");
    expect(element).toBeInTheDocument();
    expect(element.tagName.toLowerCase()).toBe("h1");
    expect(element).toMatchSnapshot();
  });

  test("renders H2 with correct text content, tag, and snapshot", () => {
    render(<H2>This is an H2 test</H2>);
    const element = screen.getByText("This is an H2 test");
    expect(element).toBeInTheDocument();
    expect(element.tagName.toLowerCase()).toBe("h2");
    expect(element).toMatchSnapshot();
  });

  test("renders H3 with correct text content, tag, and snapshot", () => {
    render(<H3>This is an H3 test</H3>);
    const element = screen.getByText("This is an H3 test");
    expect(element).toBeInTheDocument();
    expect(element.tagName.toLowerCase()).toBe("h3");
    expect(element).toMatchSnapshot();
  });

  test("renders H4 with correct text content, tag, and snapshot", () => {
    render(<H4>This is an H4 test</H4>);
    const element = screen.getByText("This is an H4 test");
    expect(element).toBeInTheDocument();
    expect(element.tagName.toLowerCase()).toBe("h4");
    expect(element).toMatchSnapshot();
  });

  test("renders P with correct text content, tag, and snapshot", () => {
    render(<P>This is a P test</P>);
    const element = screen.getByText("This is a P test");
    expect(element).toBeInTheDocument();
    expect(element.tagName.toLowerCase()).toBe("p");
    expect(element).toMatchSnapshot();
  });

  test("renders Span with correct text content, tag, and snapshot", () => {
    render(<Span>This is a P test</Span>);
    const element = screen.getByText("This is a P test");
    expect(element).toBeInTheDocument();
    expect(element.tagName.toLowerCase()).toBe("span");
    expect(element).toMatchSnapshot();
  });
});
