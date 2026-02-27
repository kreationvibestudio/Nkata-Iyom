import { type ReactNode } from "react";

interface PageHeroProps {
  title: string;
  description?: ReactNode;
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="section-padding bg-primary-50/80 border-b border-brand-200">
      <div className="container-narrow">
        <h1 className="font-display text-display-lg text-brand-900 heading-balance max-w-2xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-brand-700 max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
