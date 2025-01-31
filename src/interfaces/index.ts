import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface NavLink {
  id: number;
  route: string;
  label: string;
}

export interface SocialLink {
  id: number;
  label: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  procedures: string[];
  specialists: Specialist[];
  thumbnail: string;
  banner: string;
  perks: string[];
  durations: number[];
  baseCost: number;
  conversionRate: number;
}

export interface Specialist {
  id: string;
  name: string;
  image: string;
  designation: string;
  bio: string;
  background: string;
  dateOfBirth: Date;
  sex: "male" | "female" | "other";
  hireCost: number;
  services: Service[];
  secretOfferings: string[];
  tips: string[];
  bodyMeasurements: {
    height: number;
    weight: number;
    chest: number;
    waist: number;
    hips: number;
  };
  hotness: number;
  nudityLevel: "none" | "partial" | "full";
}

export interface Content {
  id: number;
  title: string;
  descriptions: string[];
}

export interface FAQItem {
  title: string;
  content: string;
  isDefaultChecked?: boolean;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}
