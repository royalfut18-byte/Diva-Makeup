-- Create enquiries table for Diva Makeup booking form submissions
create table if not exists enquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text,
  email text,
  event_type text,
  preferred_date date,
  suburb text,
  people_count integer,
  message text,
  status text default 'New',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- RLS policies
alter table enquiries enable row level security;

-- Allow public insert (for the booking form)
create policy "Allow public insert" on enquiries
  for insert
  to anon
  with check (true);

-- Allow anon read for demo admin dashboard
-- NOTE: In production, replace this with authenticated/service-role access only
create policy "Allow anon read for demo" on enquiries
  for select
  to anon
  using (true);

-- Allow anon update for demo status changes
-- NOTE: In production, restrict this to authenticated admin users only
create policy "Allow anon update for demo" on enquiries
  for update
  to anon
  using (true)
  with check (true);
