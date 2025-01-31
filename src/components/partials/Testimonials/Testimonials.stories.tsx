import { Testimonial } from "@/interfaces";
import type { Meta, StoryObj } from "@storybook/react";
import Testimonials from "./Testimonials";

const meta: Meta<typeof Testimonials> = {
  title: "Components/Testimonials",
  component: Testimonials,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Testimonials>;

const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    review:
      "Absolutely amazing experience! The staff was so welcoming, and the spa treatments were top-notch.",
    rating: 5,
    authorName: "Jane Doe",
    authorDesignation: "Happy Customer",
    authorImage: "https://placehold.co/512x512",
  },
  {
    id: 2,
    review:
      "Bliss Kiss Spa is my go-to place for relaxation. Their services are exceptional, and I always leave feeling rejuvenated.",
    rating: 4.5,
    authorName: "John Smith",
    authorDesignation: "Regular Client",
    authorImage: "https://placehold.co/512x512",
  },
  {
    id: 3,
    review:
      "The ambiance is so calming, and the therapists are highly skilled. Highly recommend!",
    rating: 5,
    authorName: "Emily Johnson",
    authorDesignation: "Spa Enthusiast",
    authorImage: "https://placehold.co/512x512",
  },
];

export const Default: Story = {
  args: {
    testimonials: mockTestimonials,
  },
};

export const NoTestimonials: Story = {
  args: {
    testimonials: [],
  },
};

export const SingleTestimonial: Story = {
  args: {
    testimonials: [mockTestimonials[0]],
  },
};

export const HalfStarRating: Story = {
  args: {
    testimonials: [
      {
        id: 4,
        review: "Great experience, but there's always room for improvement.",
        rating: 3.5,
        authorName: "Michael Brown",
        authorDesignation: "First-Time Visitor",
        authorImage: "https://placehold.co/512x512",
      },
    ],
  },
};
