import { SectionTitle, SectionWrapper } from "@/components/elements";
import Gallery from "@/components/partials/Gallery/Gallery";
import { galleryImages } from "@/constants";

const GalleryPage = () => {
  return (
    <div className="bg-black">
      <SectionWrapper>
        <SectionTitle
          title="Our Gallery"
          description="Explore our serene and luxurious spa environment through our curated gallery of relaxing experiences."
          isGallery
        />
        <Gallery images={galleryImages} />
      </SectionWrapper>
    </div>
  );
};

export default GalleryPage;
