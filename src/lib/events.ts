import { createClient } from "@/lib/supabase/server";

export type EventRow = {
  id: string;
  title: string;
  event_date: string;
  location: string;
  event_type: string;
  description: string | null;
  created_at: string;
  updated_at: string;
};

export async function getEvents(): Promise<EventRow[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("event_date", { ascending: true });
  if (error) {
    console.error("getEvents error:", error);
    return [];
  }
  return (data ?? []) as EventRow[];
}
