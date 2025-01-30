import { Service } from "@/interfaces";
import type { Meta, StoryObj } from "@storybook/react";
import ServiceDetailsPartition from "../ServiceDetailsPartition";

const mockService: Service = {
  id: "1",
  title: "Web Development",
  shortDescription: "Build modern and responsive websites.",
  perks: ["Custom Design", "SEO Optimization", "24/7 Support"],
  procedures: [
    "Initial Consultation",
    "Design Mockups",
    "Development",
    "Testing",
    "Deployment",
  ],
  specialists: [
    {
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
    },
    {
      id: "2",
      name: "Jane Smith",
      designation: "UI/UX Designer",
      bio: "Passionate about creating intuitive and beautiful user interfaces.",
      image: "https://placehold.co/1080x1080",
      secretOfferings: ["Wireframing", "Prototyping", "User Testing"],
      hireCost: 1200,
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
    },
  ],
  longDescription: "",
  thumbnail: "",
  banner: "",
  durations: [],
  baseCost: 0,
  conversionRate: 0,
};

const meta: Meta<typeof ServiceDetailsPartition> = {
  title: "Components/ServiceDetailsPartition",
  component: ServiceDetailsPartition,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ServiceDetailsPartition>;

export const Default: Story = {
  args: {
    service: mockService,
  },
};

export const WithManyPerksAndProcedures: Story = {
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
      procedures: [
        "Initial Consultation",
        "Design Mockups",
        "Development",
        "Testing",
        "Deployment",
        "Post-Launch Support",
      ],
    },
  },
};

export const WithManySpecialists: Story = {
  args: {
    service: {
      ...mockService,
      specialists: [
        ...mockService.specialists,
        {
          id: "3",
          name: "Alice Johnson",
          designation: "DevOps Engineer",
          bio: "Expert in CI/CD pipelines and cloud infrastructure.",
          image: "https://placehold.co/1080x1080",
          secretOfferings: ["CI/CD Setup", "Cloud Migration", "Monitoring"],
          hireCost: 1500,
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
        },
      ],
    },
  },
};
