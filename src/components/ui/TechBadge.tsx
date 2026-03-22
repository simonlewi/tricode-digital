interface TechBadgeProps {
  label: string;
}

export function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="inline-block rounded-md border border-accent-purple/20 bg-accent-purple/10 px-3 py-1 font-mono text-sm text-text-secondary transition-colors hover:bg-accent-purple/15">
      {label}
    </span>
  );
}
