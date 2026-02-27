import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client with service role. Bypasses RLS.
 * Use only in server code (API routes, server actions) after verifying admin.
 */
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  }
  return createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}

/** @deprecated Use getProfile + hasMemberAccess from @/lib/profiles instead. Kept for migration. */
export function isAdminEmail(email: string | undefined): boolean {
  if (!email) return false;
  const list = process.env.ADMIN_EMAILS ?? process.env.ADMIN_EMAIL;
  if (!list) return false;
  const emails = list.split(",").map((e) => e.trim().toLowerCase());
  return emails.includes(email.toLowerCase());
}
