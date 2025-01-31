"use client";

import { SectionTitle, SectionWrapper } from "@/components/elements";
import Testimonials from "@/components/partials/Testimonials/Testimonials";
import { testimonials } from "@/constants";
import { cn } from "@/lib";
import { usePathname } from "next/navigation";

const TestimonialsPage = () => {
  const pathname = usePathname();
  const isTestimonialsPage = pathname === "/testimonials";

  return (
    <div
      className={cn("bg-white", {
        "min-h-screen": isTestimonialsPage,
      })}
    >
      <SectionWrapper>
        <SectionTitle
          title="What Our Clients Say"
          description="Discover what our clients love about Bliss Kiss Spa. We’re committed to delivering exceptional service and unforgettable moments of relaxation."
        />
        <Testimonials testimonials={testimonials} />
      </SectionWrapper>
    </div>
  );
};

export default TestimonialsPage;
