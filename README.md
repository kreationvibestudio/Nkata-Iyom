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

## What Has Been Done So Far

- [x] Project plan and client-facing high-level document (`Nkata-ndi-Inyom-Rebuild-Plan.html`)
- [x] Repository created and connected to GitHub
- [x] Initial `.gitignore` for Node/Next.js
- [ ] Next.js app and design system
- [ ] CMS, auth, and member areas
- [ ] Bookshelf and video library (Mux)
- [ ] Blog and remaining features

---

## For Future Maintainers

1. **Read the plan** — [Nkata-ndi-Inyom-Rebuild-Plan.html](./Nkata-ndi-Inyom-Rebuild-Plan.html) describes vision, features, phases, and what the client needs to provide.
2. **Update this README on every deploy** — Add a short entry to the **Deployment history** section below with date, version/tag if any, and what shipped or changed.
3. **Keep the plan in sync** — If scope or phases change, update the plan document and/or this README so the next person has the full picture.

---

## Deployment history

**Important:** Update this section with **every** release or significant deploy so the next person (or you in six months) knows what shipped.

- Add the latest entry at the **top** of the table.
- Include: date, version or tag (if any), and a short list of what changed or went live.
- Commit the README change in the same release (e.g. `docs: update README deployment history for [release name]`).

| Date       | Version / Tag | Changes |
|------------|----------------|---------|
| 2025-02-26 | —             | Repo setup: README, project plan (HTML), .gitignore; connected to GitHub. |

---

## Local Development (When the App Exists)

*(Placeholder — replace once the Next.js app is in place.)*

```bash
# Install dependencies
npm install

# Copy env example and set variables
cp .env.example .env.local

# Run dev server
npm run dev
```

---

## License & Contact

*(Add license and/or client contact details when agreed.)*
