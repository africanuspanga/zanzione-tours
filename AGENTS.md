# ZANZIONE TOURS & TRAVELS - Agent Instructions

## Project Overview
A premium tour operator website for **ZANZIONE TOURS & TRAVELS**, based in Shangani, Stone Town, Zanzibar, Tanzania. The site offers Zanzibar tours, Tanzania safaris, Kilimanjaro climbing, airport/hotel transfers, and taxi services.

## Tech Stack
- **Framework:** Next.js 16.2.4 (App Router) with React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4.1.9 with PostCSS
- **UI Components:** shadcn/ui pattern with Radix UI primitives
- **Icons:** Lucide React
- **Forms:** react-hook-form + zod validation
- **Carousel:** Embla Carousel
- **Theming:** next-themes
- **Notifications:** Sonner (toast)
- **Build:** Static export (`output: 'export'` in next.config.mjs)
- **Package Manager:** pnpm

## Brand Identity
### Colors
- **Primary Blue:** `#103968` (CSS var: `--blue-season`, class: `.bg-blue-season`, `.text-blue-season`)
- **Golden/Amber:** `#f7a10d` (CSS var: `--golden`, class: `.bg-golden`, `.text-golden`)
- **Light:** `#f8fafc` (var: `--blue-season-light`)
- **Dark:** `#0f172a` (var: `--blue-season-dark`)

### Typography
- **Display Font:** Poppins (weights: 300-700), class: `.font-display`
- **Body Font:** Inter (default sans-serif)
- Both loaded from Google Fonts via `next/font`

### Logo
- Primary: `/images/logo-zanzione.png`
- Alt: `/images/logo.png`
- Admin: `/images/admin-logo.png`

## Contact Information
- **Phone:** +255 773 929 583 / +255 710 885 320
- **WhatsApp:** +255 710 885 320
- **Email:** zanzionetoursandtravel@gmail.com
- **Location:** Shangani, Stone Town, Zanzibar, Tanzania
- **Facebook:** https://www.facebook.com/share/17Wn8GXrd8/
- **Instagram:** @zanzione_tours
- **Website:** https://www.zanzionetours.com

## Key Directories
```
/app                         - Next.js App Router pages
/app/page.tsx                - Homepage (renders HomePageClient)
/app/HomePageClient.tsx      - Homepage client component with all sections
/app/about/                  - About page
/app/contact/                - Contact page
/app/itineraries/            - Tour packages listing + detail pages
/app/zanzibar/               - Zanzibar tours listing + detail pages
/app/safari/                 - Safari tours
/app/kilimanjaro/            - Kilimanjaro climbing routes
/app/services/               - Services overview
/app/transfers/              - Transfer services
/components/                 - Shared React components
/components/navigation.tsx   - Site navbar
/components/footer.tsx       - Site footer
/components/booking-modal.tsx - WhatsApp booking form modal
/components/whatsapp-float.tsx - Floating WhatsApp button
/public/images/              - Site images
/public/background-images/    - Background images
/public/payment logos/        - Payment method logos
/lib/utils.ts                - cn() utility
```

## Development Commands
```bash
pnpm dev       # Start dev server
pnpm build     # Build static export
pnpm lint      # Run ESLint
pnpm start     # Start production server
```

## Important Conventions
- All pages use the `<Navigation />` + `<Footer />` + `<WhatsAppFloat />` wrapper pattern.
- Booking actions trigger `BookingModal` which sends to WhatsApp (+255710885320).
- Use `.font-display` for headings (Poppins), default sans for body (Inter).
- Use `.bg-blue-season` / `.text-blue-season` for primary blue.
- Use `.bg-golden` / `.text-golden` for accent/CTA elements.
- Static export mode: no server-side features, all pages pre-rendered.
- Images use `next/image` with `unoptimized: true` (static export).
- Mobile-first responsive design with custom `xs` breakpoint (480px).

## Pricing Policy (Current)
- **Transfer prices** are maintained in `app/transfers/page.tsx` and `app/HomePageClient.tsx` (`highlightTransfers`).
- **Zanzibar tour prices** appear in `app/zanzibar/page.tsx` cards and in each `/app/zanzibar/[tour]/page.tsx` detail page.
- **Itinerary/package prices** appear in `app/itineraries/page.tsx` cards and in each `/app/itineraries/[package]/page.tsx` detail page.
- **Water sports prices** appear in `app/HomePageClient.tsx` (`waterSports`).
- **Quad biking price** appears in `app/HomePageClient.tsx` in the "Explore Zanzibar by Quad 4H" section.
- When pricing is volatile, hide prices from public pages and invite users to contact via WhatsApp for current rates.

## Payment Methods
Payment logos are stored in `/public/payment logos/`:
- `airtel-money.png`
- `discover.png`
- `mastercard.svg`
- `mixx.png`
- `mpesa.png`
- `pesapal.png`
- `visa.png`

## Notes for Agents
- Do not run `git commit`, `git push`, `git reset`, or `git rebase` unless explicitly asked.
- Always build after making changes: `pnpm build`.
- Keep changes minimal and follow existing code style.
- For footer updates, maintain the existing 4-column layout.
