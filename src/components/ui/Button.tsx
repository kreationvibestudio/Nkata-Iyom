import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500 shadow-sm",
  secondary:
    "bg-brand-800 text-white hover:bg-brand-900 focus-visible:ring-brand-500",
  outline:
    "border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus-visible:ring-primary-500",
  ghost:
    "text-primary-500 hover:bg-primary-50 focus-visible:ring-primary-500",
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
