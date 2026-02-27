# Nkata ndi Inyom Igbo — Website Rebuild

Repository for the full rebuild of **nkatandiinyom.com**, the website for Nkata ndi Inyom Igbo — an organization empowering Igbo women and preserving Igbo culture through leadership, community, and cultural preservation.

---

## What This Project Is

- **Total rebuild** of the former WordPress site.
- **New stack:** Next.js, headless CMS, Mux (video), PostgreSQL, modern hosting.
- **Features:** Blog, digital bookshelf, video library (both public), events, contact form, join form, member dashboard (Supabase auth), page banners, accessibility-first and mobile-first UX.

A detailed, client-facing plan is in **[Nkata-ndi-Inyom-Rebuild-Plan.html](./Nkata-ndi-Inyom-Rebuild-Plan.html)** (open in a browser or in Word and save as .docx to share).

---

## Tech Stack

| Layer           | Choice                          |
|----------------|----------------------------------|
| Frontend       | Next.js 15 (App Router, React)   |
| Content       | Supabase (events, blog, books)   |
| Video         | Mux (streaming)                  |
| Auth & members| Supabase Auth + profiles/roles   |
| Database       | Supabase (PostgreSQL)            |
| Email         | Resend (contact form)            |
| Hosting       | Vercel                           |

---

## Repository & Links

- **GitHub:** [github.com/kreationvibestudio/Nkata-Iyom](https://github.com/kreationvibestudio/Nkata-Iyom)
- **Live site (current/legacy):** [nkatandiinyom.com](https://nkatandiinyom.com)

---

## To-Do List

**See [TODO.md](./TODO.md)** for the full task list: what’s done and what’s left (CMS, auth, Mux, deployment, etc.). Update that file as work is completed.

---

## What Has Been Done So Far

- [x] Project plan and client-facing high-level document (`Nkata-ndi-Inyom-Rebuild-Plan.html`)
- [x] Repository created and connected to GitHub
- [x] Next.js app (App Router, TypeScript, Tailwind) and design system
- [x] Theme and logo (blue/navy), responsive Header, Footer, nav, skip link
- [x] Home page (hero, initiatives, pillars, CTA), About (with portrait banner), Offerings, Blog, Bookshelf, Video library, Events, Contact, Member area, Join, Privacy
- [x] Supabase: auth, profiles/roles (admin/staff), events, blog_posts, books, join_applications
- [x] Member area: dashboard, Events/Blog/Books CRUD, Users (admin only); login at `/member/login`
- [x] Contact form (Resend); Join form (stored in Supabase)
- [x] Mux video playback; Bookshelf and Video library **public** (no login required)
- [x] Page banners (Offerings, Blog, Bookshelf, Video library, Events, Contact, Member area)
- [x] Header: “Join Us Now” and Member area links; mobile menu scrollable with Sign out visible
- [ ] Replace placeholder copy with final content; optional: join-applications admin view

---

## For Future Maintainers

1. **Read the plan** — [Nkata-ndi-Inyom-Rebuild-Plan.html](./Nkata-ndi-Inyom-Rebuild-Plan.html) describes vision, features, phases, and what the client needs to provide.
2. **Use the to-do list** — [TODO.md](./TODO.md) tracks what’s done and what’s left; update it as you complete tasks.
3. **Update this README on every deploy** — Add a short entry to the **Deployment history** section below with date, version/tag if any, and what shipped or changed.
4. **Keep the plan in sync** — If scope or phases change, update the plan document, TODO.md, and/or this README so the next person has the full picture.

---

## Deployment history

**Important:** Update this section with **every** release or significant deploy so the next person (or you in six months) knows what shipped.

- Add the latest entry at the **top** of the table.
- Include: date, version or tag (if any), and a short list of what changed or went live.
- Commit the README change in the same release (e.g. `docs: update README deployment history for [release name]`).

| Date       | Version / Tag | Changes |
|------------|----------------|---------|
| 2025-02-27 | Banners & UX  | Page banners for Offerings, Blog, Bookshelf, Video library, Events, Contact, Member area. About banner with portrait collage and gentle bounce. Join Us Now in header before Member area. Bookshelf and Video library made public (no login). Mobile menu scrollable; Member area and Sign out visible. README and tech stack updated. |
| 2025-02-26 | Docs          | Added TODO.md with full task list (done vs to do). README updated: link to TODO.md, theme/logo in “What has been done”, Vercel/Supabase in remaining work, maintainer note to update TODO. |
| 2025-02-26 | Theme & logo  | Adopted original site colors (blue #086afe, navy #031530) and logo; favicon from logo. |
| 2025-02-26 | Framework     | Next.js 15 app: design system (Cormorant Garamond + Outfit, primary blue + navy), layout (Header, Footer, nav), Home + About, Offerings, Blog, Bookshelf, Video library, Events, Contact, Member, Privacy. Placeholder content; ready for CMS and assets. |
| 2025-02-26 | —             | Repo setup: README, project plan (HTML), .gitignore; connected to GitHub. |

---

## Local Development

```bash
# Install dependencies
npm install

# Run dev server (with Turbopack)
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). For production build: `npm run build` then `npm start`. Add `.env.local` when you add CMS, auth, or Mux keys (see `.env.example` when added).

---

## License & Contact

*(Add license and/or client contact details when agreed.)*
