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
### Colors
- **Primary Blue:** `#103968` (CSS var: `--blue-season-primary`, class: `.bg-blue-season`, `.text-blue-season`)
- **Golden/Amber:** `#f7a10d` (CSS var: `--blue-season-secondary`, class: `.bg-golden`, `.text-golden`)
- **Light:** `#f8fafc` (var: `--blue-season-light`)
- **Dark:** `#0f172a` (var: `--blue-season-dark`)

### Typography
- **Display Font:** Poppins (weights: 300-700), class: `.font-display`
- **Body Font:** Inter (default sans-serif)
- Both loaded from Google Fonts via `next/font`

### Logo
- Primary: `/images/logo-zanzione.png` (226KB)
- Alt: `/images/logo.png` (83KB)
- Admin: `/images/admin-logo.png` (148KB)

## Contact Information
- **Phone:** +255 773 929 583
- **WhatsApp:** +255 710 885 320
- **Email:** zanzionetoursandtravel@gmail.com
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
Home | About | Itineraries | Zanzibar Tours | Safari (dropdown: Safari Tours, Kilimanjaro) | Services | Contact

## Development Commands
```bash
pnpm dev       # Start dev server
pnpm build     # Build static export
pnpm lint      # Run ESLint
pnpm start     # Start production server
```

## Important Conventions
- All pages use the `<Navigation />` + `<Footer />` + `<WhatsAppFloat />` wrapper pattern
- Booking actions trigger `BookingModal` which sends to WhatsApp (+255710885320)
- Use `.font-display` for headings (Poppins), default sans for body (Inter)
- Use `.bg-blue-season` / `.text-blue-season` for primary blue
- Use `.bg-golden` / `.text-golden` for accent/CTA elements
- Static export mode: no server-side features, all pages pre-rendered
- Images use `next/image` with `unoptimized: true` (static export)
- Mobile-first responsive design with custom `xs` breakpoint (480px)
