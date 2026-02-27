-- Events table (admin-managed)
create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  event_date date not null,
  location text not null default '',
  event_type text not null default 'Event',
  description text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Blog posts table (admin-managed)
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null default '',
  body text not null default '',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- RLS: public read-only; writes only via service role (admin API)
alter table public.events enable row level security;
alter table public.blog_posts enable row level security;

create policy "Anyone can read events" on public.events for select using (true);
create policy "Anyone can read blog_posts" on public.blog_posts for select using (true);

-- No insert/update/delete policies for anon/authenticated; admin uses service role to write
