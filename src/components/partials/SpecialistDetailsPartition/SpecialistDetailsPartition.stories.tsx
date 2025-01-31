import { Specialist } from "@/interfaces";
import type { Meta, StoryObj } from "@storybook/react";
import SpecialistDetailsPartition from "./SpecialistDetailsPartition";

const mockSpecialist: Specialist = {
  id: "1",
  name: "John Doe",
  designation: "Massage Therapist",
  bio: "An experienced therapist specializing in deep tissue and relaxation massages.",
  sex: "male",
  dateOfBirth: new Date(),
  bodyMeasurements: {
    height: 180,
    weight: 75,
    chest: 100,
    waist: 80,
    hips: 95,
  },
  hotness: 8,
  nudityLevel: "none",
  secretOfferings: ["Private Consultation", "Exclusive Treatments"],
  tips: ["Stay hydrated", "Arrive 15 minutes early"],
  image: "",
  background: "",
  hireCost: 0,
  services: [],
};

const meta: Meta<typeof SpecialistDetailsPartition> = {
  title: "Components/SpecialistDetailsPartition",
  component: SpecialistDetailsPartition,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SpecialistDetailsPartition>;

export const Default: Story = {
  args: {
    specialist: mockSpecialist,
  },
};
