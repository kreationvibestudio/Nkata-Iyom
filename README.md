# Nkata ndi Inyom Igbo — Website Rebuild

Repository for the full rebuild of **nkatandiinyom.com**, the website for Nkata ndi Inyom Igbo — an organization empowering Igbo women and preserving Igbo culture through leadership, community, and cultural preservation.

---

## What This Project Is

- **Total rebuild** of the former WordPress site.
- **New stack:** Next.js, headless CMS, Mux (video), PostgreSQL, modern hosting.
- **Planned features:** Blog, digital bookshelf, member-only video library, events, member dashboard, donations, accessibility-first and mobile-first UX.

A detailed, client-facing plan is in **[Nkata-ndi-Inyom-Rebuild-Plan.html](./Nkata-ndi-Inyom-Rebuild-Plan.html)** (open in a browser or in Word and save as .docx to share).

---

## Tech Stack (Planned)

| Layer           | Choice                          |
|----------------|----------------------------------|
| Frontend       | Next.js (React)                  |
| Content       | Headless CMS (Strapi or Sanity)  |
| Video         | Mux (streaming + free tier)      |
| Auth & members| NextAuth.js or Clerk             |
| Database      | PostgreSQL (e.g. Supabase)       |
| Hosting       | Vercel (frontend)                |

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
- [x] Initial `.gitignore` for Node/Next.js
- [x] Next.js app (App Router, TypeScript, Tailwind) and design system
- [x] Theme and logo adopted from original site (blue/navy palette, `public/logo.png`)
- [x] Layout: responsive Header (with logo), Footer, nav, skip link
- [x] Home page (hero, initiatives, story, testimonial, CTA)
- [x] Core pages: About, Offerings, Blog (list + post), Bookshelf (list + detail), Video library (list + detail), Events, Contact, Member area, Privacy
- [ ] CMS integration and real content
- [ ] Auth and member-only access
- [ ] Mux video playback and bookshelf reader
- [ ] Contact form and events/RSVP
- [ ] Vercel deployment and Supabase (or DB) when needed

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
