import Hero from "@/components/partials/Hero";
import ServicesWrapper from "@/components/partials/ServicesWrapper";

const ServicesPage = () => {
  return (
    <div>
      <Hero
        image="/images/services-hero.jpg"
        headline="Our Services"
        description="Explore our wide range of services designed to help you relax, rejuvenate, and feel your best. From soothing massages to revitalizing facials, we offer treatments tailored to your needs."
        ctaLink="/services#explore"
        ctaLabel="Explore Now"
      />
      <ServicesWrapper />
    </div>
  );
};

export default ServicesPage;
