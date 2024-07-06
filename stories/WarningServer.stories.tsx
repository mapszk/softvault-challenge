import type { Meta, StoryObj } from "@storybook/react";

import Warning from "../components/server/Warning/index";

const meta: Meta<typeof Warning> = {
  title: "Server/WarningClient",
  tags: ["autodocs"],
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
  component: Warning,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Below are some of the key technologies we use in our projects:",
  },
};
