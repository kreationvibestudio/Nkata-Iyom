-- Profiles: roles for member area (admin dashboard) access.
-- Only users with a row here can log in to the member area; admin creates users and assigns role.
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  role text not null check (role in ('admin', 'staff')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;

-- Users can read their own profile (to check role for UI).
create policy "Users can read own profile" on public.profiles
  for select using (auth.uid() = id);

-- No insert/update/delete for anon or authenticated; only service role (admin API) can write.
-- First admin: create a user in Supabase Auth, then run:
--   insert into public.profiles (id, email, role) values ('<user-uuid>', 'admin@example.com', 'admin');