import { Accordion, SectionWrapper } from "@/components/elements";
import { Hero } from "@/components/partials";
import { faqItems } from "@/constants";

const FAQsPage = () => {
  return (
    <div>
      <Hero
        image="/images/faqs-hero.jpg"
        headline="Frequently Asked Questions"
        description="Have questions? We’ve got answers! Explore our FAQs to learn more about our services, policies, and what to expect during your visit. We're here to help!"
        ctaLink="/faqs#explore"
        ctaLabel="Explore Questions"
      />
      <SectionWrapper>
        <Accordion items={faqItems} />
      </SectionWrapper>
    </div>
  );
};

export default FAQsPage;
