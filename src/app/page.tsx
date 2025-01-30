import { ServicesWrapper } from "@/components/partials/services";
import { Hero } from "@/components/partials/shared";
import { SpecialistsWrapper } from "@/components/partials/specialists";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ServicesWrapper />
      <SpecialistsWrapper />
    </div>
  );
};

export default HomePage;
