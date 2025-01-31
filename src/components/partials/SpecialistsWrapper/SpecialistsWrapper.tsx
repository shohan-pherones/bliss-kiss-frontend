"use client";

import { SpecialistCard } from "@/components/blocks";
import { SectionTitle, SectionWrapper } from "@/components/elements";
import { services } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SpecialistsWrapper = () => {
  const pathname = usePathname();
  const isSpecialistsPage = pathname === "/specialists";

  const specialists = [
    ...new Set(services.map((service) => service.specialists).flat()),
  ];

  const specialistsToDisplay = isSpecialistsPage
    ? specialists
    : specialists.slice(0, 10);

  return (
    <SectionWrapper id={isSpecialistsPage ? "explore" : undefined}>
      {!isSpecialistsPage && (
        <SectionTitle
          title="Our Specialists"
          description="Meet our team of highly skilled and experienced specialists dedicated to providing personalized care and exceptional service."
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10">
        {specialistsToDisplay.map((specialist) => (
          <SpecialistCard key={specialist.id} specialist={specialist} />
        ))}
      </div>
      {!isSpecialistsPage && (
        <div className="mt-5 md:mt-10 flex justify-center">
          <Link href="/specialists" className="btn btn-outline">
            More Specialists
          </Link>
        </div>
      )}
    </SectionWrapper>
  );
};

export default SpecialistsWrapper;
