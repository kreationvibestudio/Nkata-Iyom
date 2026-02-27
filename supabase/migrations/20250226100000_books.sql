-- Books table (admin-managed, for Bookshelf)
create table if not exists public.books (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null default 'General',
  description text not null default '',
  cover_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.books enable row level security;
create policy "Anyone can read books" on public.books for select using (true);
