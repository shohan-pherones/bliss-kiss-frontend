import SectionWrapper from "@/components/elements/SectionWrapper";
import Hero from "@/components/partials/Hero";
import SpecialistDetailsPartition from "@/components/partials/SpecialistDetailsPartition";
import SpecialistHirePartition from "@/components/partials/SpecialistHirePartition";
import { services } from "@/constants";
import { notFound } from "next/navigation";

const SpecialistDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const specialistId = (await params).slug;
  const specialist = [
    ...new Set(services.map((service) => service.specialists).flat()),
  ].find((s) => s.id === specialistId);

  if (!specialist) {
    return notFound();
  }

  return (
    <div>
      <Hero
        headline={specialist.name}
        image={specialist.image}
        description={specialist.background}
        ctaLink={`/specialists/${specialist.id}#explore`}
        ctaLabel="Hire Now"
      />
      <SectionWrapper
        id="explore"
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 lg:gap-x-10 gap-y-5 lg:gap-y-0"
      >
        <SpecialistDetailsPartition specialist={specialist} />
        <SpecialistHirePartition specialist={specialist} />
      </SectionWrapper>
    </div>
  );
};

export default SpecialistDetailsPage;
