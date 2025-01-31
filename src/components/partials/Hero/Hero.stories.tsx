import type { Meta, StoryObj } from "@storybook/react";
import Hero from "./Hero";

const meta: Meta<typeof Hero> = {
  title: "Components/Hero",
  component: Hero,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    image: "/images/home-hero.jpg",
    headline: "Relax, Refresh, Rejuvenate",
    description:
      "Escape the stress of daily life and indulge in pure tranquility. Experience soothing massages, revitalizing facials, and luxurious treatments designed to nourish your body and mind.",
    ctaLink: "/services",
    ctaLabel: "Book Your Escape",
  },
};

export const CustomHero: Story = {
  args: {
    image: "/images/home-hero.jpg",
    headline: "Discover Your Inner Glow",
    description:
      "Unlock the secrets of self-care with our expert treatments. Feel rejuvenated, refreshed, and radiant every day!",
    ctaLink: "/about",
    ctaLabel: "Learn More",
  },
};

export const NoCTA: Story = {
  args: {
    image: "/images/home-hero.jpg",
    headline: "Tranquility Awaits",
    description: "Let go of stress and embrace relaxation like never before.",
    ctaLink: "",
    ctaLabel: "",
  },
};
