import { Service } from "@/interfaces";
import type { Meta, StoryObj } from "@storybook/react";
import ServiceCard from "../ServiceCard";

const mockService: Service = {
  id: "1",
  title: "Web Development",
  banner: "https://placehold.co/1280x720",
  shortDescription: "Build modern and responsive websites.",
  perks: ["Custom Design", "SEO Optimization", "24/7 Support"],
  baseCost: 500,
  durations: [60, 90, 120],
  longDescription: "",
  procedures: [],
  specialists: [],
  thumbnail: "",
  conversionRate: 0,
};

const meta: Meta<typeof ServiceCard> = {
  title: "Components/ServiceCard",
  component: ServiceCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ServiceCard>;

export const Default: Story = {
  args: {
    service: mockService,
  },
};

export const WithLongDescription: Story = {
  args: {
    service: {
      ...mockService,
      shortDescription:
        "Build modern and responsive websites with a focus on performance, accessibility, and SEO. Our team ensures your website stands out in the competitive digital landscape.",
    },
  },
};

export const WithManyPerks: Story = {
  args: {
    service: {
      ...mockService,
      perks: [
        "Custom Design",
        "SEO Optimization",
        "24/7 Support",
        "Mobile Optimization",
        "E-commerce Integration",
        "Analytics Setup",
      ],
    },
  },
};

export const WithHighBaseCost: Story = {
  args: {
    service: {
      ...mockService,
      baseCost: 1500,
    },
  },
};
