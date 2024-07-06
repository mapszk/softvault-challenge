import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PuzzlePiece from "./index";

describe("Puzzle Piece component", () => {
  const props = {
    title: "Title",
    description: "Description",
    pieceNumber: 1,
    iconUrl: "/icon-1.svg",
  };

  it("renders a heading", () => {
    render(
      <PuzzlePiece
        title={props.title}
        description={props.description}
        iconUrl={props.iconUrl}
        pieceNumber={props.pieceNumber as 1}
      />
    );
    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe(props.title);
  });

  it("renders a paragraph", () => {
    render(
      <PuzzlePiece
        title={props.title}
        description={props.description}
        iconUrl={props.iconUrl}
        pieceNumber={props.pieceNumber as 1}
      />
    );
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.textContent).toBe(props.description);
  });

  it("renders an image", () => {
    render(
      <PuzzlePiece
        title={props.title}
        description={props.description}
        iconUrl={props.iconUrl}
        pieceNumber={props.pieceNumber as 1}
      />
    );
    const image = screen.getByAltText("Icon");
    expect(image).toBeInTheDocument();
  });
});
