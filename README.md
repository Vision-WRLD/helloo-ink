# Vision Wrld — Custom Tattoo Studio Website

A premium, immersive multi-page website for **Vision Wrld**, a custom tattoo studio in Newmarket, Ontario. Built with Next.js 16, Tailwind CSS 4, PostgreSQL via Drizzle ORM, and Framer Motion.

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Database**: PostgreSQL via [Drizzle ORM](https://orm.drizzle.team/)
- **Animations**: Framer Motion + CSS transitions
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Bebas Neue (headings) + Inter (body) via Google Fonts

---

## Pages

| Route | Description |
|---|---|
| `/` | Hero, studio intro, featured artists, Instagram feed, testimonials, CTA |
| `/artists` | Filterable masonry gallery with lightbox, artist profiles |
| `/artists/[slug]` | Individual artist bio, inspirations, dedicated gallery |
| `/booking` | 3-step process timeline, multi-step booking form, policies |
| `/aftercare` | Dual-tab healing guide (Standard / Saniderm), timeline, FAQ |
| `/faq` | Searchable, category-filtered accordion FAQ |
| `/contact` | Google Maps, hours, contact form, social links |

---

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/vision-wrld.git
cd vision-wrld
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example env file and fill in your database URL:

```bash
cp .env.example .env
```

Edit `.env`:

```
DATABASE_URL=postgresql://user:password@host:5432/dbname
```

### 4. Push the database schema

```bash
npm run db:push
```

### 5. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 6. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
├── public/
│   └── images/           # Hero, studio, artist portraits, portfolio
├── src/
│   ├── app/
│   │   ├── api/          # Booking + contact form API routes
│   │   ├── artists/      # Portfolio page + [slug] artist profiles
│   │   ├── booking/      # Multi-step consultation form
│   │   ├── aftercare/    # Healing guide with tabs
│   │   ├── faq/          # Searchable accordion FAQ
│   │   ├── contact/      # Map, hours, contact form, social
│   │   ├── globals.css   # Tailwind + custom theme + components
│   │   ├── layout.tsx    # Root layout with Navbar + Footer
│   │   └── page.tsx      # Homepage
│   ├── components/
│   │   ├── FadeIn.tsx    # Scroll-triggered animation component
│   │   ├── Footer.tsx    # Global footer
│   │   └── Navbar.tsx    # Sticky navigation
│   ├── db/
│   │   ├── index.ts      # Drizzle client
│   │   └── schema.ts     # Bookings + contacts tables
│   └── lib/
│       └── data.ts       # Artists, portfolio, FAQs, aftercare data
├── .env.example
├── .gitignore
├── drizzle.config.ts
├── package.json
└── tsconfig.json
```

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `vw-black` | `#0A0A0A` | Page background |
| `vw-charcoal` | `#1A1A1A` | Card backgrounds |
| `vw-accent` | `#C41E3A` | Primary accent (crimson red) |
| `vw-gold` | `#D4A574` | Secondary accent (warm copper) |
| `vw-white` | `#F5F5F5` | Headings & primary text |
| `vw-gray` | `#999999` | Body text |
| `vw-gray-dark` | `#333333` | Muted/disabled text |

---

## License

Private project. All rights reserved.
