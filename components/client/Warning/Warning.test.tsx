import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Warning from "./index";

describe("Warning component", () => {
  it("renders a text", () => {
    render(<Warning text="test" />);
    const text = screen.getByRole("paragraph");
    expect(text).toBeInTheDocument();
  });
});
