-- Replace join_applications with new schema per client design.
drop table if exists public.join_applications;

create table public.join_applications (
  id uuid primary key default gen_random_uuid(),
  -- Section 1: Personal Information
  full_name text not null,
  title text,
  date_of_birth date,
  sex text,
  -- Section 2: Contact Information
  nationality text,
  institution_organization text,
  position_role text,
  mailing_address text,
  city_state_country text,
  -- Section 3: Membership Details
  phone_number text,
  email text not null,
  membership_category text,
  area_of_interest text,
  -- Section 4: Professional Background & Motivation
  highest_qualification text,
  specialization text,
  years_of_experience integer,
  relevant_publications_projects text,
  motivation_for_joining text,
  -- Section 5: Skills & Volunteer Interests (stored as JSON array)
  skills_volunteer_interests jsonb,
  -- Section 6: Payment & Agreement
  payment_option text,
  payment_proof_url text,
  code_of_conduct_agreed boolean default false,
  signature_name text,
  created_at timestamptz default now()
);

alter table public.join_applications enable row level security;
create policy "Service role only for join_applications" on public.join_applications
  for all using (false);

-- Storage bucket for payment proof uploads (private; admins access via service role).
-- If this fails (e.g. storage schema), create the bucket manually in Supabase Dashboard:
-- Storage → New bucket → id: payment-proof, public: off, file size limit: 5MB
do $$
begin
  insert into storage.buckets (id, name, public, file_size_limit)
  values ('payment-proof', 'payment-proof', false, 5242880)
  on conflict (id) do nothing;
exception when others then
  raise notice 'Could not create payment-proof bucket. Create it manually in Supabase Dashboard.';
end $$;
