import {
  Hero,
  ServicesWrapper,
  SpecialistsWrapper,
} from "@/components/partials";
import GalleryPage from "./(company)/gallery/page";
import TestimonialsPage from "./(company)/testimonials/page";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ServicesWrapper />
      <SpecialistsWrapper />
      <GalleryPage />
      <TestimonialsPage />
    </div>
  );
};

export default HomePage;
