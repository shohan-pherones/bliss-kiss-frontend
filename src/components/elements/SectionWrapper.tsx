import { HTMLAttributes, PropsWithChildren } from "react";

type SectionWrapperProps = HTMLAttributes<HTMLElement>;

const SectionWrapper = ({
  children,
  className = "",
  ...props
}: PropsWithChildren<SectionWrapperProps>) => {
  return (
    <section className={`container py-10 md:py-20 ${className}`} {...props}>
      {children}
    </section>
  );
};

export default SectionWrapper;
