import SectionTitle from "@/components/elements/SectionTitle";
import SectionWrapper from "@/components/elements/SectionWrapper";
import { privacyPolicyContents } from "@/constants";
import { cn } from "@/lib/utils";

const PrivacyPolicyPage = () => {
  return (
    <SectionWrapper className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
      {privacyPolicyContents.map((content) => (
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
  );
};

export default PrivacyPolicyPage;
