import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { PageBanner } from "@/components/layout/PageBanner";
import { getEvents } from "@/lib/events";

export const metadata = {
  title: "Events",
  description:
    "Upcoming workshops, meetings, and community events from Nkata ndi Inyom Igbo.",
};

export const dynamic = "force-dynamic";

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <>
      <PageBanner
        variant="events"
        title="Events"
        description="Workshops, meetings, and community events. Dates and details will be updated as they are confirmed."
      />

      <Section variant="muted">
        {events.length === 0 ? (
          <p className="text-brand-600 max-w-2xl">No upcoming events at the moment. Check back soon or contact us to get involved.</p>
        ) : (
          <div className="space-y-6 max-w-2xl">
            {events.map((event) => (
              <article
                key={event.id}
                className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-xl border border-brand-200/60 bg-surface hover:border-brand-300/60 transition-colors"
              >
                <div className="sm:w-24 shrink-0 text-center sm:text-left">
                  <time className="block text-sm font-semibold text-primary-500" dateTime={event.event_date}>
                    {new Date(event.event_date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                  <span className="text-xs text-brand-600">{event.event_type}</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-display-sm text-brand-900">{event.title}</h2>
                  <p className="mt-1 text-sm text-brand-600">{event.location || "TBA"}</p>
                  {event.description && (
                    <p className="mt-2 text-sm text-brand-700">{event.description}</p>
                  )}
                </div>
                <ButtonLink href="/contact" variant="outline" size="sm">
                  RSVP / Inquire
                </ButtonLink>
              </article>
            ))}
          </div>
        )}
      </Section>

      <Section variant="primary-subtle">
        <div className="text-center">
          <p className="text-brand-700 mb-6">Want to stay updated on events?</p>
          <ButtonLink href="/contact">Contact Us</ButtonLink>
        </div>
      </Section>
    </>
  );
}
