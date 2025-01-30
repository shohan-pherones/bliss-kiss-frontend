import Hero from "@/components/partials/Hero";

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
    </div>
  );
};

export default AboutPage;
