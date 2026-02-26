import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "Events",
  description:
    "Upcoming workshops, meetings, and community events from Nkata ndi Inyom Igbo.",
};

// Placeholder — replace with CMS/calendar data later
const placeholderEvents = [
  { id: "1", title: "Community Leadership Workshop", date: "2025-03-15", location: "TBA", type: "Workshop" },
  { id: "2", title: "Cultural Storytelling Evening", date: "2025-03-22", location: "TBA", type: "Event" },
  { id: "3", title: "Monthly Council Meeting", date: "2025-04-01", location: "TBA", type: "Meeting" },
];

export default function EventsPage() {
  return (
    <>
      <section className="section-padding bg-brand-50/30 border-b border-brand-200/60">
        <div className="container-narrow">
          <h1 className="font-display text-display-lg text-brand-900 heading-balance max-w-2xl">
            Events
          </h1>
          <p className="mt-4 text-lg text-brand-700 max-w-2xl">
            Workshops, meetings, and community events. Dates and details will be updated as they are confirmed.
          </p>
        </div>
      </section>

      <Section>
        <div className="space-y-6 max-w-2xl">
          {placeholderEvents.map((event) => (
            <article
              key={event.id}
              className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-xl border border-brand-200/60 bg-surface hover:border-brand-300/60 transition-colors"
            >
              <div className="sm:w-24 shrink-0 text-center sm:text-left">
                <time className="block text-sm font-semibold text-accent-600" dateTime={event.date}>
                  {new Date(event.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </time>
                <span className="text-xs text-brand-600">{event.type}</span>
              </div>
              <div className="flex-1">
                <h2 className="font-display text-display-sm text-brand-900">{event.title}</h2>
                <p className="mt-1 text-sm text-brand-600">{event.location}</p>
              </div>
              <ButtonLink href="/contact" variant="outline" size="sm">
                RSVP / Inquire
              </ButtonLink>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <div className="text-center">
          <p className="text-brand-700 mb-6">Want to stay updated on events?</p>
          <ButtonLink href="/contact">Contact Us</ButtonLink>
        </div>
      </Section>
    </>
  );
}
