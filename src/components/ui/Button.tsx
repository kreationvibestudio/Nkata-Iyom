import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-600 text-white hover:bg-accent-700 focus-visible:ring-accent-500 shadow-sm",
  secondary:
    "bg-brand-700 text-white hover:bg-brand-800 focus-visible:ring-brand-500",
  outline:
    "border-2 border-accent-600 text-accent-600 hover:bg-accent-50 focus-visible:ring-accent-500",
  ghost:
    "text-accent-600 hover:bg-accent-50 focus-visible:ring-accent-500",
};

interface BaseProps {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
}

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm font-medium",
  lg: "px-6 py-3 text-base font-medium",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

interface ButtonLinkProps extends BaseProps {
  href: string;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
