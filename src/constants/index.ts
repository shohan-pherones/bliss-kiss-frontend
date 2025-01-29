import { NavLink, SocialLink } from "@/interfaces";
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
