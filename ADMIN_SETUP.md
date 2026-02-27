# Member area (admin dashboard)

The **Member area** is the admin dashboard. Only users who have been **created by an admin** and assigned a role can sign in. There is no public sign-up.

## 1. Database tables

In the [Supabase Dashboard](https://supabase.com/dashboard) → your project → **SQL Editor**, run these migrations in order:

1. **`supabase/migrations/20250226000000_events_and_blog.sql`** — `events`, `blog_posts`
2. **`supabase/migrations/20250226100000_books.sql`** — `books`
3. **`supabase/migrations/20250226200000_profiles_roles.sql`** — `profiles` (id, email, role: admin | staff)

## 2. First admin user

Because only existing users can sign in, the **first admin** must be created manually:

1. In Supabase → **Authentication** → **Users** → **Add user** → create a user with email and password.
2. Copy the new user’s **UUID** (from the users table).
3. In **SQL Editor** run:
   ```sql
   insert into public.profiles (id, email, role)
   values ('<paste-user-uuid-here>', 'admin@example.com', 'admin');
   ```
   Use the same email you used for the user.

That user can then sign in at **/member** and use **Users** to create more users (admin or staff).

## 3. Environment variables

In **`.env.local`**:

- **`SUPABASE_SERVICE_ROLE_KEY`** — From Supabase → Project Settings → API → `service_role`. Used to create users and to read/write events, blog, books, and profiles.

You no longer need `ADMIN_EMAILS` or `ADMIN_EMAIL`; access is controlled by the `profiles` table.

## 4. How to use

1. **Sign in** at **/member** with an account that has a row in `profiles` (admin or staff).
2. **Dashboard** — Events, Blog, Books, Videos (Mux), and **Users** (admins only).
3. **Users** — Admins can create users: email, temporary password, and role (admin or staff). Share the password with the user; they sign in at /member.
4. **Videos** — Still managed in the [Mux dashboard](https://dashboard.mux.com); they appear in the Video Library when ready.

Old **/admin** URLs redirect to **/member** (e.g. /admin/events → /member/events).
