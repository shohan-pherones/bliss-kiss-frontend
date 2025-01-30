import { SectionTitle } from "@/components/elements";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SectionTitle> = {
  title: "Components/SectionTitle",
  component: SectionTitle,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "accent"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof SectionTitle>;

export const Default: Story = {
  args: {
    title: "Default Section Title",
    description: "This is a default section title with a description.",
  },
};

export const Primary: Story = {
  args: {
    title: "Primary Section Title",
    description: "This is a primary section title with a description.",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    title: "Secondary Section Title",
    description: "This is a secondary section title with a description.",
    variant: "secondary",
  },
};

export const Accent: Story = {
  args: {
    title: "Accent Section Title",
    description: "This is an accent section title with a description.",
    variant: "accent",
  },
};

export const WithoutDescription: Story = {
  args: {
    title: "Section Title Without Description",
  },
};
