import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  description?: string;
  variant?: "primary" | "secondary" | "accent";
}

const SectionTitle = ({
  title,
  description,
  variant = "primary",
}: SectionTitleProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "secondary":
        return "text-secondary";
      case "accent":
        return "text-accent";
      default:
        return "text-primary";
    }
  };

  return (
    <div className={cn(getVariantStyles(), "mb-5 md:mb-10")}>
      <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
      {description && (
        <p className="text-sm text-base-content opacity-50 max-w-md">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
