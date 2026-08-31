# Website Data Requirements
## Chhotelal Kandu – Professional Painting Contractor

This document lists every piece of data shown on the website that needs to be replaced with real information.

---

## 1. Business / Contact Info
**File:** `lib/site-config.ts`

| Field | Current (Dummy) | Replace With |
|---|---|---|
| Business Name | Chhotelal Kandu | Your full legal/trade name |
| Tagline | Professional Painting Contractor | Your actual tagline |
| Phone 1 | 9930959409 | Primary phone number |
| Phone 2 | 7021134754 | Secondary / WhatsApp number |
| WhatsApp number | 919930959409 | WhatsApp-enabled number (with country code) |
| Email | chhotelalkandu@profinishpainters.com | Real business email |
| Address | Room no. 61, Lakshmi Niwas Society… | Full business/service address |
| Working Hours | Mon–Sat: 8:00 AM – 7:00 PM | Actual working hours |

---

## 2. Stats / Achievements
**File:** `lib/site-config.ts` → `stats`

| Field | Current (Dummy) | Replace With |
|---|---|---|
| Years of Experience | 18+ | Actual years in business |
| Projects Completed | 2,400+ | Real number of completed jobs |
| Client Satisfaction | 98% | Real satisfaction / rating figure |
| Number of Painters | 40+ | Actual team size |

---

## 3. Services
**File:** `lib/content.ts` → `services[]`

10 services are listed. For **each service** confirm or update:

| Field | What To Provide |
|---|---|
| Title | Final service name (e.g. "Interior Painting") |
| Short description | 1–2 line summary of what the service is |
| Benefits | 3 bullet points – what the customer gains |
| Process steps | 4 steps explaining how you do the work |
| Paint brands / materials used | Real brand names you actually use |
| Cost range | Your actual price range per sq ft (or "Custom pricing") |

**Current 10 services:**
1. Interior Painting
2. Exterior Painting
3. Texture Painting
4. Waterproofing
5. Wall Putty
6. Wood Polishing
7. Metal Painting
8. Commercial Painting
9. Apartment Painting
10. Renovation Painting

> Add or remove services as needed.

---

## 4. Projects / Portfolio
**File:** `lib/content.ts` → `projects[]`

6 projects are listed. For **each project** provide:

| Field | What To Provide |
|---|---|
| Title | Project name (e.g. "Modern Villa Repaint") |
| Category | One of: Residential / Interior / Commercial / Texture / Renovation |
| Short description | 1–2 lines about what was done |
| Photo | Real project photo (JPG/PNG, ideally 4:3 ratio, min 800×600px) |

**Current dummy photos used (in `public/projects/`):**
- `villa-exterior.png`
- `living-room.png`
- `office.png`
- `texture-wall.png`
- `heritage-home.png`
- `retail-store.png`

> Replace all 6 dummy images with real project photos. Add more projects if available.

---

## 5. Testimonials / Reviews
**File:** `lib/content.ts` → `testimonials[]`

6 reviews are listed. For **each review** provide:

| Field | What To Provide |
|---|---|
| Client Name | Real first name + last name (or initials if preferred) |
| Role / Label | e.g. "Homeowner, Goregaon" or "Office Manager" |
| Star Rating | 1–5 |
| Review Text | Genuine client quote (1–4 sentences) |

> Collect reviews from Google, JustDial, Facebook, or directly from past clients.

---

## 6. FAQs
**File:** `lib/content.ts` → `faqs[]`

8 FAQs currently listed. For each:

| Field | What To Provide |
|---|---|
| Question | Real question your clients ask most |
| Answer | Clear, honest 2–4 sentence answer |

> Keep, edit, or replace the existing 8 questions with ones actually relevant to your business.

---

## 7. Color Palettes (Colors Page)
**File:** `app/colors/page.tsx`

### Interior Palettes (6 palettes)
Each palette needs:
- Palette name
- Room type (Living Room / Bedroom / Kitchen etc.)
- 3–4 paint colors with hex codes and color names

### Exterior Palettes (3 palettes)
Each palette needs:
- Palette name
- Property type (Bungalow / Villa / Apartment etc.)
- 3 paint colors with hex codes and color names

### Texture Styles (4 textures)
| Field | What To Provide |
|---|---|
| Name | e.g. "Travertino", "Metallic Sheen" |
| Description | 1 sentence explaining the texture look |

### Paint Finishes (5 finishes)
Already accurate (Matte / Eggshell / Satin / Semi-Gloss / High-Gloss) — confirm descriptions match what you offer.

---

## 8. About Page Content
**File:** `app/about/page.tsx`

| Content | What To Provide |
|---|---|
| Team photo | Real team photo (`public/about-team.png`) |
| Brand story paragraph 1 | How the business started |
| Brand story paragraph 2 | Your philosophy / approach |
| Company values (4 values) | Real values that represent your brand |

**Current dummy values:**
1. Craftsmanship First
2. Honest & Transparent
3. Safe & Low-VOC
4. Customer Obsessed

---

## 9. Before & After Photos
**File:** `public/projects/`

| File | What To Provide |
|---|---|
| `before-room.png` | Real "before" photo of a project |
| `after-room.png` | Matching "after" photo of the same project |

> Both photos should be the same room/area for the before/after slider on the Portfolio page.

---

## 10. Banner / Slider Images
**Used across:** All pages via `SwiperBanner`

Each page uses different images. Replace these files in `public/projects/` with real project photos:

| Image File | Used On |
|---|---|
| `villa-exterior.png` | Home, About, Services, Contact, Estimator |
| `living-room.png` | Home, About, Services, Portfolio, Reviews, FAQ, Estimator, Colors |
| `office.png` | Home, Services, Portfolio, Contact, Estimator |
| `texture-wall.png` | Home, Services, Portfolio, FAQ, Colors |
| `heritage-home.png` | About, Reviews, Colors |
| `retail-store.png` | Portfolio, Reviews |

> You can also add videos — just change `type: 'image'` to `type: 'video'` and provide the `.mp4` file in `public/`.

---

## 11. Hero / Home Page
**File:** `app/page.tsx`

| Content | What To Provide |
|---|---|
| Banner headline | Main marketing message (currently: "Transform Your Space…") |
| Banner sub-text | Supporting description line |
| CTA Button 1 label | e.g. "Get Free Quote" |
| CTA Button 2 phone number | Auto-pulled from `site-config.ts` |

---

## 12. Cost Estimator Page
**File:** `app/estimator/page.tsx`, `components/cost-estimator.tsx`

Verify the estimator logic matches your **real pricing rates**:
- Base rate per sq ft for each service type
- Additional charges (putty, primer, texture premium etc.)

---

## Summary Checklist

- [ ] Business name, phone, email, address confirmed
- [ ] Stats (years, projects, satisfaction, team size) updated
- [ ] All 10 service descriptions & pricing reviewed
- [ ] 6+ real project photos added
- [ ] 6+ real client reviews collected
- [ ] FAQs reviewed and updated
- [ ] Team photo added (`public/about-team.png`)
- [ ] Before/After photos added (`public/projects/before-room.png` & `after-room.png`)
- [ ] Banner slider images replaced with real project photos
- [ ] Color palettes verified with actual brand colors you recommend
- [ ] Estimator pricing rates verified
