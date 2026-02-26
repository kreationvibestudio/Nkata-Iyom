# Nkata ndi Inyom Igbo — To-Do List

Task list for the website rebuild. Update this file as work is completed.

---

## Done

- [x] **Project plan** — Client-facing high-level plan (`Nkata-ndi-Inyom-Rebuild-Plan.html`)
- [x] **Repository** — Created and connected to GitHub (kreationvibestudio/Nkata-Iyom)
- [x] **.gitignore** — Node/Next.js, env, build artifacts, editor locks
- [x] **Next.js app** — App Router, TypeScript, Tailwind CSS
- [x] **Design system** — Cormorant Garamond + Outfit, primary blue + navy palette (from original site)
- [x] **Theme & logo** — Colors and theme adopted from nkatandiinyom.com; logo from live site saved as `public/logo.png`
- [x] **Layout** — Responsive Header (with logo), Footer, main nav, mobile menu, skip link
- [x] **Home page** — Hero, initiatives, story, testimonial, why choose us, CTA (placeholder content)
- [x] **About** — Page with mission/vision (placeholder content)
- [x] **Offerings** — Page with program list (placeholder content)
- [x] **Blog** — List page + dynamic post page `/blog/[slug]` (placeholder posts)
- [x] **Bookshelf** — List page + detail page `/library/[id]` (placeholder catalog)
- [x] **Video library** — List page + detail page `/videos/[id]` (placeholder; Mux not wired)
- [x] **Events** — List page (placeholder events)
- [x] **Contact** — Page with placeholder for form and details
- [x] **Member area** — Placeholder page (auth not wired)
- [x] **Privacy** — Placeholder page for policy
- [x] **README** — Project overview, tech stack, local dev, deployment history
- [x] **TODO.md** — This file

---

## To do

### Content & CMS

- [ ] Choose and set up headless CMS (Strapi or Sanity)
- [ ] Connect blog to CMS (fetch posts, render body)
- [ ] Connect bookshelf to CMS (catalog metadata, cover images)
- [ ] Connect video library metadata to CMS (titles, descriptions; playback via Mux)
- [ ] Connect events to CMS or calendar source
- [ ] Replace all placeholder copy and images with final content from client

### Auth & members

- [ ] Set up auth (NextAuth.js or Clerk)
- [ ] Member sign-up and login
- [ ] Protect member-only routes (e.g. bookshelf, video library)
- [ ] Member dashboard (saved items, progress, profile)

### Video (Mux)

- [ ] Create Mux account and get API keys
- [ ] Wire Mux playback on `/videos/[id]` (playback ID from CMS or DB)
- [ ] Optional: upload flow or webhook for new videos
- [ ] Optional: signed URLs or gating for member-only videos

### Bookshelf

- [ ] Define format (e.g. PDF/EPUB) and hosting (e.g. Supabase Storage or S3)
- [ ] In-browser reader or download flow for books
- [ ] Member-only access rules per item

### Forms & actions

- [ ] Contact form (backend or form service)
- [ ] Events RSVP or inquiry flow (if required)
- [ ] Donations / membership CTA and payment (if required)

### Infrastructure & deployment

- [ ] Set up Vercel project and connect repo
- [ ] Set up Supabase (or other) for DB if needed (users, memberships, progress)
- [ ] Add environment variables (CMS, Mux, auth, etc.) and `.env.example`
- [ ] Deploy and point domain (when ready)

### Polish & compliance

- [ ] Privacy policy content and cookie consent (if needed)
- [ ] SEO: sitemap, meta per page, Open Graph
- [ ] Accessibility pass (focus, contrast, labels)
- [ ] Site-wide search (blog, library, videos, events)

---

## Reference

- **Plan:** [Nkata-ndi-Inyom-Rebuild-Plan.html](./Nkata-ndi-Inyom-Rebuild-Plan.html)
- **README:** [README.md](./README.md) — overview, setup, deployment history
