import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getProfile, isAdmin } from "@/lib/profiles";
import { createUser } from "./actions";

export const metadata = { title: "Member area — Users", description: "Manage users and roles." };

const inputClass = "w-full rounded-md border border-brand-300 px-3 py-2 text-brand-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500";
const labelClass = "block text-sm font-medium text-brand-700 mb-1";

export default async function MemberUsersPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; msg?: string }>;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getProfile(user.id) : null;
  if (!user || !profile) redirect("/member");
  if (!isAdmin(profile)) redirect("/member");

  const admin = createAdminClient();
  const { data: profiles } = await admin.from("profiles").select("id, email, role, created_at").order("created_at", { ascending: false });
  const { error, msg } = await searchParams;

  return (
    <div>
      <Link href="/member" className="text-sm text-primary-500 hover:text-primary-600 mb-6 inline-block">← Dashboard</Link>
      <h1 className="font-display text-display-sm text-brand-900">Users</h1>
      <p className="mt-2 text-brand-600 text-sm">
        Only admins can create users. New users can sign in with the password you set.
      </p>
      {error && <p className="mt-4 text-sm text-red-600" role="alert">{error}</p>}
      {msg && <p className="mt-4 text-sm text-green-600" role="alert">{msg}</p>}

      <div className="mt-8 rounded-xl border border-brand-200/60 bg-surface p-6 max-w-md">
        <h2 className="font-display text-lg text-brand-900">Create user</h2>
        <form action={createUser} className="mt-4 space-y-4">
          <div>
            <label htmlFor="user-email" className={labelClass}>Email</label>
            <input id="user-email" name="email" type="email" required className={inputClass} placeholder="user@example.com" />
          </div>
          <div>
            <label htmlFor="user-password" className={labelClass}>Temporary password</label>
            <input id="user-password" name="password" type="password" required minLength={6} className={inputClass} placeholder="Min 6 characters" />
            <p className="mt-1 text-xs text-brand-500">Share this with the user securely; they can change it later if you add that feature.</p>
          </div>
          <div>
            <label htmlFor="user-role" className={labelClass}>Role</label>
            <select id="user-role" name="role" className={inputClass}>
              <option value="admin">Admin</option>
              <option value="staff">Staff</option>
            </select>
          </div>
          <button type="submit" className="rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600">
            Create user
          </button>
        </form>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-lg text-brand-900">Existing users</h2>
        {!profiles?.length ? (
          <p className="mt-2 text-brand-600 text-sm">No users yet. Create the first one above.</p>
        ) : (
          <ul className="mt-4 space-y-2">
            {profiles.map((p) => (
              <li key={p.id} className="flex items-center gap-4 py-2 border-b border-brand-100">
                <span className="text-brand-900">{p.email}</span>
                <span className="text-sm text-brand-500">({p.role})</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
