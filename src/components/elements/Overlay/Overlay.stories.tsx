/* eslint-disable @next/next/no-img-element */

import type { Meta, StoryObj } from "@storybook/react";
import Overlay from "./Overlay";

const meta: Meta<typeof Overlay> = {
  title: "Components/Overlay",
  component: Overlay,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Overlay>;

export const Default: Story = {
  render: () => (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <img
        src="https://placehold.co/1920x1080"
        alt="Background"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <Overlay />
    </div>
  ),
};
