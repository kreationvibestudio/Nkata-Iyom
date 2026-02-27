import { createClient } from "@/lib/supabase/server";

export type Profile = {
  id: string;
  email: string;
  role: "admin" | "staff";
  created_at: string;
  updated_at: string;
};

export async function getProfile(userId: string): Promise<Profile | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .maybeSingle();
  if (error) {
    console.error("getProfile error:", error);
    return null;
  }
  return data as Profile | null;
}

export function hasMemberAccess(profile: Profile | null): boolean {
  return profile !== null;
}

export function isAdmin(profile: Profile | null): boolean {
  return profile?.role === "admin";
}
