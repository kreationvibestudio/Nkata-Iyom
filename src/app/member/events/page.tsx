import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getEvents } from "@/lib/events";
import { getProfile, hasMemberAccess } from "@/lib/profiles";
import { deleteEvent } from "./actions";

export const metadata = {
  title: "Member area — Events",
  description: "Manage events.",
};

export default async function MemberEventsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getProfile(user.id) : null;
  if (!user || !hasMemberAccess(profile)) redirect("/member");

  const events = await getEvents();

  return (
    <div>
      <Link href="/member" className="text-sm text-primary-500 hover:text-primary-600 mb-6 inline-block">← Dashboard</Link>
      <div className="flex items-center justify-between gap-4 mb-8">
        <h1 className="font-display text-display-sm text-brand-900">Events</h1>
        <Link href="/member/events/new" className="inline-flex items-center justify-center rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600">
          Add event
        </Link>
      </div>
      {events.length === 0 ? (
        <p className="text-brand-600">No events yet. Add one to get started.</p>
      ) : (
        <ul className="space-y-4">
          {events.map((event) => (
            <li key={event.id} className="flex flex-wrap items-center gap-4 p-4 rounded-lg border border-brand-200 bg-surface">
              <div className="min-w-0 flex-1">
                <p className="font-medium text-brand-900">{event.title}</p>
                <p className="text-sm text-brand-600">
                  {new Date(event.event_date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  {" · "}{event.location || "TBA"}
                  {" · "}{event.event_type}
                </p>
              </div>
              <div className="flex gap-2">
                <Link href={`/member/events/${event.id}/edit`} className="text-sm text-primary-500 hover:text-primary-600">Edit</Link>
                <form action={deleteEvent.bind(null, event.id)} className="inline">
                  <button type="submit" className="text-sm text-red-600 hover:text-red-700">Delete</button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
