"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getProfile, hasMemberAccess } from "@/lib/profiles";

export async function createEvent(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getProfile(user.id) : null;
  if (!user || !hasMemberAccess(profile)) redirect("/member");
  const title = formData.get("title") as string;
  const event_date = formData.get("event_date") as string;
  const location = (formData.get("location") as string) || "";
  const event_type = (formData.get("event_type") as string) || "Event";
  const description = (formData.get("description") as string) || null;
  if (!title?.trim() || !event_date) redirect("/member/events/new?error=" + encodeURIComponent("Title and date are required."));
  const admin = createAdminClient();
  const { error } = await admin.from("events").insert({
    title: title.trim(),
    event_date,
    location: location.trim(),
    event_type: event_type.trim(),
    description: description?.trim() || null,
  });
  if (error) redirect("/member/events/new?error=" + encodeURIComponent(error.message));
  revalidatePath("/events");
  revalidatePath("/member/events");
  redirect("/member/events");
}

export async function updateEvent(id: string, formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getProfile(user.id) : null;
  if (!user || !hasMemberAccess(profile)) redirect("/member");
  const title = formData.get("title") as string;
  const event_date = formData.get("event_date") as string;
  const location = (formData.get("location") as string) || "";
  const event_type = (formData.get("event_type") as string) || "Event";
  const description = (formData.get("description") as string) || null;
  if (!title?.trim() || !event_date) redirect("/member/events/" + id + "/edit?error=" + encodeURIComponent("Title and date are required."));
  const admin = createAdminClient();
  const { error } = await admin.from("events").update({
    title: title.trim(),
    event_date,
    location: location.trim(),
    event_type: event_type.trim(),
    description: description?.trim() || null,
    updated_at: new Date().toISOString(),
  }).eq("id", id);
  if (error) redirect("/member/events/" + id + "/edit?error=" + encodeURIComponent(error.message));
  revalidatePath("/events");
  revalidatePath("/member/events");
  redirect("/member/events");
}

export async function deleteEvent(id: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getProfile(user.id) : null;
  if (!user || !hasMemberAccess(profile)) redirect("/member");
  const admin = createAdminClient();
  await admin.from("events").delete().eq("id", id);
  revalidatePath("/events");
  revalidatePath("/member/events");
  redirect("/member/events");
}
