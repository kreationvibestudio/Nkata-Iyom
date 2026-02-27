-- Join / membership application form submissions (public form, admin reads in member area later).
create table if not exists public.join_applications (
  id uuid primary key default gen_random_uuid(),
  family_name text not null,
  first_name text not null,
  middle_name text,
  title_s text,
  date_of_birth date,
  address text,
  state_of_origin text,
  email text not null,
  phone_number text,
  occupation text,
  educational_qualifications text,
  other_professional_qualifications text,
  your_values text,
  hobbies text,
  created_at timestamptz default now()
);

alter table public.join_applications enable row level security;
-- Only service role can insert (form submits via server action). Admins can read in dashboard later.
create policy "Service role only for join_applications" on public.join_applications
  for all using (false);
-- No select for anon/auth; admin will use service role to list. So we don't add a select policy for users.
