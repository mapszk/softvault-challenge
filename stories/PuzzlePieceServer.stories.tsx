import type { Meta, StoryObj } from "@storybook/react";

import PuzzlePiece from "../components/server/PuzzlePiece/index";

const meta: Meta<typeof PuzzlePiece> = {
  title: "components/PuzzlePieceServer",
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "black",
      values: [
        {
          name: "black",
          value: "#000",
        },
      ],
    },
  },
  component: PuzzlePiece,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Piece1: Story = {
  args: {
    title: "Understanding needs",
    description:
      "We identify who has the problem or need and provide a detailed description of what the problem entails.",
    iconUrl: "/icon-1.svg",
    pieceNumber: 1,
  },
};

export const Piece2: Story = {
  args: {
    title: "Identifying opportunities",
    description:
      "Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's standard...",
    iconUrl: "/icon-1.svg",
    pieceNumber: 2,
  },
};

export const Piece3: Story = {
  args: {
    title: "Developing customized solutions",
    description:
      "Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's standard...",
    iconUrl: "/icon-1.svg",
    pieceNumber: 3,
  },
};
