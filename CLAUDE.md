# ZANZIONE TOURS & TRAVELS - Project Documentation

## Project Overview
A premium tour operator website for **ZANZIONE TOURS & TRAVELS**, based in Shangani, Stone Town, Zanzibar, Tanzania. The site offers Zanzibar tours, Tanzania safaris, Kilimanjaro climbing, airport/hotel transfers, and taxi services.

## Tech Stack
- **Framework:** Next.js 15.2.4 (App Router) with React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4.1.9 with PostCSS
- **UI Components:** Radix UI primitives, shadcn/ui pattern
- **Icons:** Lucide React
- **Forms:** react-hook-form + zod validation
- **Carousel:** Embla Carousel
- **Theming:** next-themes
- **Notifications:** Sonner (toast)
- **Build:** Static export (`output: 'export'` in next.config.mjs)
- **Package Manager:** pnpm

## Brand Identity
### Colour Palette
Defined once in `app/globals.css` as `--zn-*` variables and registered in the
Tailwind `@theme` block, which is what makes opacity modifiers (`bg-golden/90`,
`text-ocean/70`) generate. Never hardcode these hex values in components.

| Role | Name | Hex | Tailwind class |
|---|---|---|---|
| Primary Navy | Deep Ocean Blue | `#022F6A` | `navy` (alias: `blue-season`) |
| Primary Blue | Zanzibar Blue | `#025292` | `ocean` |
| Secondary Blue | Indian Ocean Blue | `#026DAF` | `sea` |
| Primary Cyan | Tropical Aqua | `#04AFDD` | `aqua` |
| Bright Aqua | Lagoon Cyan | `#05D4E9` | `lagoon` |
| Teal Accent | Island Teal | `#02867F` | `island` |
| Sun Accent | Zanzibar Gold | `#FDB320` | `golden` |
| Soft Gold | Sunset Sand | `#F7D460` | `sand` |
| Background | Pure White | `#FFFFFF` | `white` |
| Soft Background | Ocean Mist | `#F5FAFC` | `mist` |
| Main Text | Deep Navy | `#071D35` | `ink` |
| Muted Text | Slate Blue Gray | `#647B8F` | `slate-ink` |

**Usage rules**
- `navy` / `ocean` — headings, primary buttons, dark panels
- `aqua` — section eyebrows, links, active nav, focus rings
- `golden` — CTAs and badges only, always with `text-ink` (gold + white fails contrast)
- `island` — "included" ticks and success states
- `ink` / `slate-ink` — body copy; `mist` — alternating section backgrounds

Helper utilities: `.bg-gradient-ocean`, `.bg-gradient-lagoon`, `.bg-gradient-sun`,
`.text-gradient-ocean`, `.zn-rule` (the section divider), `.shadow-card`,
`.shadow-card-hover`.

### Typography
- **Display Font:** Poppins (300-800), class `.font-display`; applied to all `h1`-`h6` by default
- **Body Font:** Inter (default sans-serif)
- Both loaded from Google Fonts via `next/font`

### Logo
- Full stacked logo: `/images/brand/zanzione-logo.png` (emblem + wordmark)
- Emblem only: `/images/brand/zanzione-mark.png` (used in nav and footer)
- Favicons: `app/icon.png` and `app/apple-icon.png` (Next.js file convention)
- Original source files live in `/assets/brand-source/` (outside `public/` so they are not deployed)

## Contact Information
- **Phone:** +255 773 929 583
- **WhatsApp:** +255 710 885 320
- **Email:** info@zanzionetours.com
- **Location:** Shangani, Stone Town, Zanzibar, Tanzania
- **Facebook:** https://www.facebook.com/share/17Wn8GXrd8/
- **Instagram:** @zanzione_tours
- **Website:** https://www.zanzionetours.com

## Key Directories
```
/app                    - Next.js App Router pages
/app/page.tsx           - Homepage
/app/about/             - About page
/app/contact/           - Contact page
/app/itineraries/       - Tour packages listing + detail pages
/app/zanzibar/          - Zanzibar tours listing + detail pages
/app/safari/            - Safari tours
/app/kilimanjaro/       - Kilimanjaro climbing routes
/app/services/          - Services overview
/app/transfers/         - Transfer services
/app/globals.css        - Global styles + brand color vars
/components/            - Shared React components
/components/ui/         - shadcn/ui primitives (Button, Card, Dialog, etc.)
/components/navigation.tsx  - Site navbar (sticky, responsive)
/components/footer.tsx      - Site footer
/components/booking-modal.tsx - WhatsApp booking form modal
/components/whatsapp-float.tsx - Floating WhatsApp button
/public/images/         - All site images
/public/images/tours/   - Zanzibar tour images (13 files)
/public/images/safari/  - Safari destination images (6 files)
/public/images/packages/ - Featured package images (3 files)
/public/images/vehicles/ - Vehicle fleet images (9 files)
/public/images/partners/ - Partner logos (7 files)
/public/taxi drivers/   - Driver stock photos (4 files)
/lib/utils.ts           - cn() utility (clsx + tailwind-merge)
```

## Tour Pricing Reference
### Zanzibar Day Tours
- Safari Blue: $40 | Stone Town: $25 | Prison Island: $30
- Nakupenda Sandbank: $49 | Spice Farm: $25 | Jozani Forest: $25
- Mnemba Dolphins: $35 | Sunset Dhow: $45 | The Rock: $35 | Kizimkazi: $40

### Tanzania Safari Packages
- Mikumi Day Trip: $430 | Selous Day Trip: $450
- Serengeti 2D/1N: $1,676 | Serengeti 3D/2N: $2,048
- 5 Days Safari: $1,770 | 7 Days: $2,480 | 8 Days: $2,600 | 10 Days: $3,720

### Zanzibar Packages
- 3D/2N: $398 | 4D/3N: $617 | 5D/4N: $390-$740
- 7D/6N: $1,298 | 8D/7N: $1,340 | 9D/8N: $1,430 | 10D/9N: $1,590

### Transfer Prices
- Airport/Ferry to Stone Town: $15
- Airport/Ferry to Nungwi-Kendwa: $35
- Airport/Ferry to Paje/Jambiani: $35

## Navigation Menu Items
Two-row sticky header (`components/navigation.tsx`):
- **Row 1:** logo · site search · "Need Help?" · Book Now
- **Row 2:** Home | Zanzibar Excursions | Safari (dropdown: Tanzania Safaris, Kilimanjaro Climbing) | Itineraries | Transfers | Services | About | Contact · WhatsApp block

## Development Commands
```bash
pnpm dev       # Start dev server
pnpm build     # Regenerate the sitemap, then build the static export to out/
pnpm sitemap   # Regenerate public/sitemap.xml only
pnpm lint      # Run ESLint
npx tsc --noEmit   # Typecheck (next.config.mjs ignores TS errors during build)
```

## Important Conventions
- Pages use the `<Navigation />` + page content + `<Footer />` pattern.
  `<WhatsAppFloat />` is rendered **once in `app/layout.tsx`** — do not add it per page.
- `<Footer />` also renders the "For More Inquiry" contact band above itself.
- Tour data lives in `lib/tours.ts` (single source of truth for cards, nav search
  and JSON-LD). Tours quoted case-by-case carry `price: null` and render as
  "On Request" — never invent a price.
- `lib/site-index.ts` powers the navigation search box; add new pages there.
- Tour cards are `components/tour-card.tsx`. Do not re-implement card markup.
- Booking actions open `BookingModal`, which sends to WhatsApp **and** emails the
  office via `lib/send-enquiry.ts` → `public/api/send-booking.php`.
  See `docs/booking-email-setup.md`. `public/api/mail-config.php` holds live
  credentials and is git-ignored.
- Static export mode: no server-side features, no API routes, no server actions.
- Images use `next/image` with `unoptimized: true`.
- `public/sitemap.xml` is generated by `scripts/generate-sitemap.mjs` from the
  route tree — edit the script, not the XML.
- Structured data (Organisation, WebSite, ItemList) is emitted once from
  `components/structured-data.tsx`; pages add `<Breadcrumbs />` for their trail.
- Mobile-first responsive design with an `xs` breakpoint (30rem) registered in `@theme`.
