import {
  Hero,
  ServicesWrapper,
  SpecialistsWrapper,
} from "@/components/partials";
import GalleryPage from "./(company)/gallery/page";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ServicesWrapper />
      <SpecialistsWrapper />
      <GalleryPage />
    </div>
  );
};

export default HomePage;
