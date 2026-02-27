import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getProfile, hasMemberAccess } from "@/lib/profiles";
import { updateEvent } from "../../actions";

const inputClass = "w-full rounded-md border border-brand-300 px-3 py-2 text-brand-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500";
const labelClass = "block text-sm font-medium text-brand-700 mb-1";

export default async function EditEventPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getProfile(user.id) : null;
  if (!user || !hasMemberAccess(profile)) redirect("/member");

  const { id } = await params;
  const { error: errorMsg } = await searchParams;
  const { data: event, error } = await supabase.from("events").select("*").eq("id", id).single();
  if (error || !event) notFound();

  return (
    <div>
      <Link href="/member" className="text-sm text-primary-500 hover:text-primary-600 mb-2 inline-block">← Dashboard</Link>
      <Link href="/member/events" className="text-sm text-primary-500 hover:text-primary-600 mb-4 inline-block">← Back to events</Link>
      <h1 className="font-display text-display-sm text-brand-900 mt-2">Edit event</h1>
      {errorMsg && <p className="mt-4 text-sm text-red-600" role="alert">{errorMsg}</p>}
      <form action={updateEvent.bind(null, id)} className="mt-6 max-w-lg space-y-4">
        <div>
          <label htmlFor="title" className={labelClass}>Title</label>
          <input id="title" name="title" type="text" required defaultValue={event.title} className={inputClass} />
        </div>
        <div>
          <label htmlFor="event_date" className={labelClass}>Date</label>
          <input id="event_date" name="event_date" type="date" required defaultValue={event.event_date} className={inputClass} />
        </div>
        <div>
          <label htmlFor="location" className={labelClass}>Location</label>
          <input id="location" name="location" type="text" defaultValue={event.location ?? ""} className={inputClass} />
        </div>
        <div>
          <label htmlFor="event_type" className={labelClass}>Type</label>
          <select id="event_type" name="event_type" className={inputClass} defaultValue={event.event_type ?? "Event"}>
            <option value="Event">Event</option>
            <option value="Workshop">Workshop</option>
            <option value="Meeting">Meeting</option>
          </select>
        </div>
        <div>
          <label htmlFor="description" className={labelClass}>Description (optional)</label>
          <textarea id="description" name="description" rows={4} defaultValue={event.description ?? ""} className={inputClass} />
        </div>
        <div className="flex gap-4">
          <button type="submit" className="rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600">Save changes</button>
          <Link href="/member/events" className="rounded-md border border-brand-300 px-4 py-2 text-sm text-brand-700 hover:bg-brand-50">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
