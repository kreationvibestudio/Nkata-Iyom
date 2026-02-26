import { type ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  /** Optional id for anchor links */
  id?: string;
  /** Optional background: default, muted, accent-subtle */
  variant?: "default" | "muted" | "accent-subtle";
}

const variantStyles = {
  default: "bg-surface",
  muted: "bg-surface-muted",
  "accent-subtle": "bg-accent-50/40",
};

export function Section({
  children,
  className = "",
  containerClassName = "",
  id,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section-padding ${variantStyles[variant]} ${className}`.trim()}
    >
      <Container as="div" className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
