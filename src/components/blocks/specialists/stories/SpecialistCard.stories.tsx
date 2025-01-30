import { Specialist } from "@/interfaces";
import type { Meta, StoryObj } from "@storybook/react";
import SpecialistCard from "../SpecialistCard";

const mockSpecialist: Specialist = {
  id: "1",
  name: "John Doe",
  designation: "Senior Developer",
  bio: "Experienced in building scalable web applications.",
  image: "https://placehold.co/1080x1080",
  secretOfferings: ["Code Review", "Technical Consulting", "Mentorship"],
  hireCost: 1000,
  background: "",
  dateOfBirth: new Date(),
  sex: "male",
  services: [],
  tips: [],
  bodyMeasurements: {
    height: 0,
    weight: 0,
    chest: 0,
    waist: 0,
    hips: 0,
  },
  hotness: 0,
  nudityLevel: "none",
};

const meta: Meta<typeof SpecialistCard> = {
  title: "Components/SpecialistCard",
  component: SpecialistCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SpecialistCard>;

export const Default: Story = {
  args: {
    specialist: mockSpecialist,
  },
};

export const WithLongBio: Story = {
  args: {
    specialist: {
      ...mockSpecialist,
      bio: "Experienced in building scalable web applications with a focus on performance, security, and maintainability. Passionate about mentoring junior developers and contributing to open-source projects.",
    },
  },
};

export const WithManyOfferings: Story = {
  args: {
    specialist: {
      ...mockSpecialist,
      secretOfferings: [
        "Code Review",
        "Technical Consulting",
        "Mentorship",
        "Architecture Design",
        "Performance Optimization",
        "DevOps Setup",
      ],
    },
  },
};

export const WithHighHireCost: Story = {
  args: {
    specialist: {
      ...mockSpecialist,
      hireCost: 2500,
    },
  },
};
