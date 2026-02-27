import { type ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  /** Optional id for anchor links */
  id?: string;
  /** Optional background: default, muted, primary-subtle */
  variant?: "default" | "muted" | "primary-subtle";
}

const variantStyles = {
  default: "bg-surface",
  muted: "bg-surface-muted",
  "primary-subtle": "bg-primary-50/60",
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
