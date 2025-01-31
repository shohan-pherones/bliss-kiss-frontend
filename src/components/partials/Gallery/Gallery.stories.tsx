import { GalleryImage } from "@/interfaces";
import type { Meta, StoryObj } from "@storybook/react";
import Gallery from "./Gallery";

const mockImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://placehold.co/1080x1080",
    alt: "Placeholder 1",
  },
  {
    id: 2,
    src: "https://placehold.co/1080x1080",
    alt: "Placeholder 2",
  },
  {
    id: 3,
    src: "https://placehold.co/1080x1080",
    alt: "Placeholder 3",
  },
  {
    id: 4,
    src: "https://placehold.co/1080x1080",
    alt: "Placeholder 4",
  },
  {
    id: 5,
    src: "https://placehold.co/1080x1080",
    alt: "Placeholder 5",
  },
  {
    id: 6,
    src: "https://placehold.co/1080x1080",
    alt: "Placeholder 6",
  },
];

const meta: Meta<typeof Gallery> = {
  title: "Components/Gallery",
  component: Gallery,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Gallery>;

export const Default: Story = {
  args: {
    images: mockImages,
  },
};

export const FewImages: Story = {
  args: {
    images: mockImages.slice(0, 3),
  },
};

export const SingleImage: Story = {
  args: {
    images: mockImages.slice(0, 1),
  },
};
