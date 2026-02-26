import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}

export function Container({ children, className = "", as: Component = "div" }: ContainerProps) {
  return (
    <Component className={`container-narrow ${className}`.trim()}>
      {children}
    </Component>
  );
}
