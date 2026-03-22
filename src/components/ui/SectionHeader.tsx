interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={alignClass}>
      {eyebrow && (
        <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-purple-light mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-4xl font-bold text-text-primary md:text-5xl">
        {heading}
      </h2>
      {description && (
        <p className="mt-4 max-w-[600px] text-lg text-text-secondary leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
