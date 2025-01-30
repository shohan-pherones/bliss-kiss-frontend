import { NavLink, Service, SocialLink } from "@/interfaces";
import { Facebook, Instagram, Youtube } from "lucide-react";

export const navLinks: NavLink[] = [
  { id: 1, route: "/", label: "Home" },
  { id: 2, route: "/about", label: "About" },
  { id: 3, route: "/services", label: "Services" },
  { id: 4, route: "/specialists", label: "Specialists" },
  { id: 5, route: "/gallery", label: "Gallery" },
  { id: 6, route: "/testimonials", label: "Testimonials" },
  { id: 7, route: "/faqs", label: "FAQs" },
  { id: 8, route: "/blogs", label: "Blogs" },
  { id: 9, route: "/contact", label: "Contact" },
];

export const policyLinks: NavLink[] = [
  { id: 1, route: "/terms-of-use", label: "Terms of Use" },
  { id: 2, route: "/privacy-policy", label: "Privacy Policy" },
  { id: 3, route: "/cookie-policy", label: "Cookie Policy" },
];

export const socialLinks: SocialLink[] = [
  { id: 1, label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { id: 2, label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { id: 3, label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

export const spaServices: Service[] = [
  {
    id: "1",
    title: "Relaxing Massage Therapy",
    shortDescription: "Professional tension relief with various techniques",
    longDescription:
      "Full-body massage combining Swedish, deep tissue and aromatherapy elements for complete relaxation",
    procedures: [
      "Deep tissue manipulation",
      "Swedish techniques",
      "Aromatherapy oils application",
    ],
    specialists: [
      {
        id: "1",
        name: "Elena Rodriguez",
        image:
          "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        designation: "Senior Massage Therapist",
        bio: "10+ years experience in deep tissue and sports massage",
        background: "Certified in multiple international massage techniques",
        dateOfBirth: new Date("1985-08-22"),
        gender: "female",
        hireCost: 80,
        services: [] as Service[],
        secretOfferings: ["Hot stone add-on", "Custom herbal compresses"],
        tips: ["Stay hydrated before session", "Avoid heavy meals 2hrs prior"],
        bodyMeasurements: {
          height: 168,
          weight: 65,
          chest: 92,
          waist: 68,
          hips: 94,
        },
        hotness: 92,
        nudityLevel: "partial",
      },
      {
        id: "2",
        name: "Clara Bennett",
        image:
          "https://images.unsplash.com/photo-1525284890203-9ee752d3f44f?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        designation: "Aromatherapy Specialist",
        bio: "Expert in essential oil blends for stress relief",
        background: "Certified aromatherapist from London Institute",
        dateOfBirth: new Date("1990-12-15"),
        gender: "female",
        hireCost: 75,
        services: [] as Service[],
        secretOfferings: ["Custom scent blending", "Chakra balancing"],
        tips: ["Share preferred scents beforehand", "Bring loose clothing"],
        bodyMeasurements: {
          height: 172,
          weight: 63,
          chest: 89,
          waist: 66,
          hips: 92,
        },
        hotness: 88,
        nudityLevel: "partial",
      },
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    banner:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    perks: [
      "Muscle tension relief",
      "Stress reduction",
      "Improved circulation",
    ],
    durations: [60, 90],
    baseCost: 120,
    conversionRate: 1.75,
  },
  {
    id: "2",
    title: "Luxury Facial Treatment",
    shortDescription: "Rejuvenating skin care experience",
    longDescription:
      "Multi-step facial with premium products for glowing complexion",
    procedures: [
      "Deep cleansing",
      "Exfoliation",
      "Hydration boost",
      "LED therapy",
    ],
    specialists: [
      {
        id: "3",
        name: "Sophia Chen",
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        designation: "Master Esthetician",
        bio: "Specialist in anti-aging treatments",
        background: "Trained in Parisian skincare techniques",
        dateOfBirth: new Date("1988-04-03"),
        gender: "female",
        hireCost: 90,
        services: [] as Service[],
        secretOfferings: ["24k gold mask upgrade", "Cryotherapy add-on"],
        tips: ["Avoid sun exposure after treatment", "Use gentle cleansers"],
        bodyMeasurements: {
          height: 165,
          weight: 58,
          chest: 86,
          waist: 64,
          hips: 90,
        },
        hotness: 95,
        nudityLevel: "none",
      },
      {
        id: "4",
        name: "Mia Kowalski",
        image:
          "https://images.unsplash.com/photo-1510259051177-e2ca96048337?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        designation: "Organic Skincare Expert",
        bio: "Focus on natural and sustainable products",
        background: "Certified organic skincare formulator",
        dateOfBirth: new Date("1993-07-19"),
        gender: "female",
        hireCost: 85,
        services: [] as Service[],
        secretOfferings: ["CBD-infused serum", "Guasha stone therapy"],
        tips: [
          "Bring your own moisturizer for analysis",
          "Avoid makeup before",
        ],
        bodyMeasurements: {
          height: 170,
          weight: 60,
          chest: 88,
          waist: 65,
          hips: 91,
        },
        hotness: 90,
        nudityLevel: "none",
      },
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1531299244174-d247dd4e5a66?q=80&w=1029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    banner:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    perks: ["Deep hydration", "Pore refinement", "Even skin tone"],
    durations: [45, 75],
    baseCost: 95,
    conversionRate: 1.95,
  },
];
