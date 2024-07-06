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
    const paragraph = screen.getByAltText("Icon");
    expect(paragraph).toBeInTheDocument();
  });
});
