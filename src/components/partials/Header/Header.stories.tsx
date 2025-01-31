import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const mockNavLinks = [
  { id: "1", label: "Home", route: "/" },
  { id: "2", label: "Services", route: "/services" },
  { id: "3", label: "Specialists", route: "/specialists" },
  { id: "4", label: "Blogs", route: "/blogs" },
  { id: "5", label: "About", route: "/about" },
  { id: "6", label: "Contact", route: "/contact" },
];

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    navLinks: mockNavLinks,
  },
};

export const MinimalNavLinks: Story = {
  args: {
    navLinks: mockNavLinks.slice(0, 3),
  },
};

export const NoNavLinks: Story = {
  args: {
    navLinks: [],
  },
};
