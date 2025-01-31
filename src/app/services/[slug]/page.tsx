import { SectionWrapper } from "@/components/elements";
import {
  Hero,
  ServiceBookingPartition,
  ServiceDetailsPartition,
} from "@/components/partials";
import { services } from "@/constants";
import { notFound } from "next/navigation";

const ServiceDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const serviceId = (await params).slug;
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return notFound();
  }

  return (
    <div>
      <Hero
        headline={service.title}
        image={service.banner}
        description={service.longDescription}
        ctaLink={`/services/${service.id}#explore`}
        ctaLabel="Book Now"
      />
      <SectionWrapper
        id="explore"
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 lg:gap-x-10 gap-y-5 lg:gap-y-0"
      >
        <ServiceDetailsPartition service={service} />
        <ServiceBookingPartition service={service} />
      </SectionWrapper>
    </div>
  );
};

export default ServiceDetailsPage;
