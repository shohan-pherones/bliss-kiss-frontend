import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";

const mockNavLinks = [
  { id: "1", label: "Services", route: "/services" },
  { id: "2", label: "Specialists", route: "/specialists" },
  { id: "3", label: "Blogs", route: "/blogs" },
  { id: "4", label: "About", route: "/about" },
  { id: "5", label: "Gallery", route: "/gallery" },
  { id: "6", label: "Testimonials", route: "/testimonials" },
  { id: "7", label: "FAQs", route: "/faqs" },
  { id: "8", label: "Contact", route: "/contact" },
];

const mockPolicyLinks = [
  { id: "1", label: "Privacy Policy", route: "/privacy-policy" },
  { id: "2", label: "Terms of Service", route: "/terms-of-service" },
  { id: "3", label: "Refund Policy", route: "/refund-policy" },
];

const mockSocialLinks = [
  {
    id: "1",
    label: "Facebook",
    href: "https://facebook.com",
    icon: () => <span>FB</span>,
  },
  {
    id: "2",
    label: "Twitter",
    href: "https://twitter.com",
    icon: () => <span>TW</span>,
  },
  {
    id: "3",
    label: "Instagram",
    href: "https://instagram.com",
    icon: () => <span>IG</span>,
  },
];

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    navLinks: mockNavLinks,
    policyLinks: mockPolicyLinks,
    socialLinks: mockSocialLinks,
  },
};

export const NoSocialLinks: Story = {
  args: {
    navLinks: mockNavLinks,
    policyLinks: mockPolicyLinks,
    socialLinks: [],
  },
};

export const MinimalLinks: Story = {
  args: {
    navLinks: mockNavLinks.slice(0, 3),
    policyLinks: mockPolicyLinks.slice(0, 1),
    socialLinks: mockSocialLinks.slice(0, 1),
  },
};
