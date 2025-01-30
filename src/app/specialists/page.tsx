import Hero from "@/components/partials/Hero";
import SpecialistsWrapper from "@/components/partials/SpecialistsWrapper";

const SpecialistsPage = () => {
  return (
    <div>
      <Hero
        image="/images/specialists-hero.jpg"
        headline="Meet Our Specialists"
        description="Our team of highly skilled and experienced specialists is dedicated to providing personalized care and exceptional service. Get to know the experts who will help you achieve your wellness goals."
        ctaLink="/specialists#explore"
        ctaLabel="Meet the Team"
      />
      <SpecialistsWrapper />
    </div>
  );
};

export default SpecialistsPage;
