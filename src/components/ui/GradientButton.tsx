"use client";

import { type ReactNode } from "react";

interface GradientButtonProps {
  variant: "primary" | "outline";
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base",
};

export function GradientButton({
  variant,
  children,
  href,
  onClick,
  size = "md",
}: GradientButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 font-bold rounded-lg transition-all duration-200 ease-out cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-purple focus-visible:outline-offset-2";

  const variantClasses =
    variant === "primary"
      ? "bg-accent-purple text-text-primary hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(124,49,178,0.35)]"
      : "bg-white/[0.04] text-text-primary border border-white/10 backdrop-blur-xl hover:bg-white/[0.08]";

  const className = `${baseClasses} ${variantClasses} ${sizes[size]}`;

  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
