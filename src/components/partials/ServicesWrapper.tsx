"use client";

import { services } from "@/constants";
import { usePathname } from "next/navigation";
import ServiceCard from "../blocks/ServiceCard";
import SectionTitle from "../elements/SectionTitle";
import SectionWrapper from "../elements/SectionWrapper";
import Link from "next/link";

const ServicesWrapper = () => {
  const pathname = usePathname();
  const isServicesPage = pathname === "/services";

  const servicesToDisplay = isServicesPage ? services : services.slice(0, 10);

  return (
    <SectionWrapper id={isServicesPage ? "explore" : undefined}>
      {!isServicesPage && (
        <SectionTitle
          title="Our Services"
          description="Discover the wide range of services we offer to help you relax, rejuvenate, and feel your best."
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10">
        {servicesToDisplay.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      {!isServicesPage && (
        <div className="mt-5 md:mt-10 flex justify-center">
          <Link href="/services" className="btn btn-outline">
            More Services
          </Link>
        </div>
      )}
    </SectionWrapper>
  );
};

export default ServicesWrapper;
