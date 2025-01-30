import { SectionTitle, SectionWrapper } from "@/components/elements";
import { Hero } from "@/components/partials/shared";
import { aboutContents } from "@/constants";
import { cn } from "@/lib";

const AboutPage = () => {
  return (
    <div>
      <Hero
        image="/images/about-hero.jpg"
        headline="About Us"
        description="Discover our story, mission, and the passion that drives us to deliver exceptional experiences. We are dedicated to creating a space where you can relax, rejuvenate, and feel truly cared for."
        ctaLink="/contact"
        ctaLabel="Get in Touch"
      />
      <SectionWrapper className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        {aboutContents.map((content) => (
          <div key={content.id}>
            <SectionTitle title={content.title} />
            {content.descriptions.map((desc, index, arr) => (
              <p
                className={cn(index === arr.length - 1 ? "" : "mb-5 md:mb-10")}
                key={index + desc}
              >
                {desc}
              </p>
            ))}
          </div>
        ))}
      </SectionWrapper>
    </div>
  );
};

export default AboutPage;
