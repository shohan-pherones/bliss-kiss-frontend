import { cn } from "@/lib";

interface SectionTitleProps {
  title: string;
  description?: string;
  variant?: "primary" | "secondary" | "accent";
  isGallery?: boolean;
}

const SectionTitle = ({
  title,
  description,
  variant = "primary",
  isGallery,
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
        <p
          className={cn(
            "text-sm text-base-content max-w-md",
            isGallery ? "" : "opacity-50"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
