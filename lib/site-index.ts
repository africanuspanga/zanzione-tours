/**
 * Flat index of every public page on the site.
 *
 * Powers the navigation search box. Kept as plain data (no fetch, no API) so
 * it works under `output: 'export'`, and derived from `lib/tours.ts` where it
 * can be, so the excursion list only has to be maintained in one place.
 */

import { zanzibarTours } from "./tours"

export type SearchEntry = {
  title: string
  href: string
  category: "Page" | "Zanzibar Tour" | "Safari Package" | "Zanzibar Package" | "Service"
  /** Shown as the second line of a result — duration or a short blurb. */
  meta?: string
  /** Extra terms to match on that don't appear in the title. */
  keywords?: string
}

const pages: SearchEntry[] = [
  { title: "Home", href: "/", category: "Page", keywords: "zanzione homepage start" },
  { title: "About Us", href: "/about", category: "Page", keywords: "company story team who we are" },
  { title: "Contact Us", href: "/contact", category: "Page", keywords: "phone email whatsapp address enquiry booking" },
  { title: "Tour Packages & Itineraries", href: "/itineraries", category: "Page", keywords: "packages holidays multi day" },
  { title: "Zanzibar Excursions", href: "/zanzibar", category: "Page", keywords: "day tours island excursions activities" },
  { title: "Tanzania Safaris", href: "/safari", category: "Page", keywords: "serengeti ngorongoro big five game drive" },
  { title: "Kilimanjaro Climbing", href: "/kilimanjaro", category: "Page", keywords: "trek mountain machame marangu lemosho" },
  { title: "Our Services", href: "/services", category: "Page", keywords: "what we offer taxi car hire" },
  { title: "Airport & Hotel Transfers", href: "/transfers", category: "Page", keywords: "taxi airport ferry pickup nungwi paje stone town" },
]

const services: SearchEntry[] = [
  { title: "Airport Taxi & Transfers", href: "/transfers", category: "Service", keywords: "airport ferry taxi transfer shuttle" },
  { title: "Car Hire & Rental", href: "/services", category: "Service", keywords: "rent a car alphard hiace commuter coaster minibus hire fleet" },
  { title: "Water Sports & Jet Ski", href: "/services", category: "Service", keywords: "jet ski kayak jet car drone water sports" },
  { title: "Quad Biking Adventure", href: "/services", category: "Service", keywords: "quad bike atv adventure off road" },
]

const safariPackages: SearchEntry[] = [
  { title: "Mikumi Day Trip Safari", href: "/itineraries/mikumi-day-trip", category: "Safari Package", meta: "1 Day" },
  { title: "Selous Day Trip Safari", href: "/itineraries/selous-day-trip", category: "Safari Package", meta: "1 Day", keywords: "nyerere national park" },
  { title: "Serengeti 2 Days Safari", href: "/itineraries/serengeti-safari", category: "Safari Package", meta: "2 Days / 1 Night" },
  { title: "3 Days Serengeti Safari", href: "/itineraries/serengeti-3-days", category: "Safari Package", meta: "3 Days / 2 Nights" },
  { title: "Serengeti Hot Air Balloon Safari", href: "/itineraries/serengeti-balloon-safari", category: "Safari Package", meta: "3 Days / 2 Nights", keywords: "balloon flight sunrise" },
  { title: "5 Days Tanzania Safari", href: "/itineraries/tanzania-safari-5-days", category: "Safari Package", meta: "5 Days / 4 Nights", keywords: "tarangire lake manyara ngorongoro" },
  { title: "7 Days Tanzania Safari", href: "/itineraries/tanzania-safari-7-days", category: "Safari Package", meta: "7 Days / 6 Nights" },
  { title: "8 Days Tanzania Safari", href: "/itineraries/tanzania-safari-8-days", category: "Safari Package", meta: "8 Days / 7 Nights", keywords: "hadzabe tribe" },
  { title: "10 Days Tanzania Safari", href: "/itineraries/tanzania-safari-10-days", category: "Safari Package", meta: "10 Days / 9 Nights", keywords: "northern circuit complete" },
]

const zanzibarPackages: SearchEntry[] = [
  { title: "Zanzibar 3 Days Package", href: "/itineraries/zanzibar-3-days", category: "Zanzibar Package", meta: "3 Days / 2 Nights" },
  { title: "Zanzibar 4 Days Package", href: "/itineraries/zanzibar-4-days", category: "Zanzibar Package", meta: "4 Days / 3 Nights" },
  { title: "Zanzibar 5 Days Package", href: "/itineraries/zanzibar-5-days", category: "Zanzibar Package", meta: "5 Days / 4 Nights" },
  { title: "Zanzibar 7 Days Package", href: "/itineraries/zanzibar-7-days", category: "Zanzibar Package", meta: "7 Days / 6 Nights" },
  { title: "Zanzibar 8 Days Package", href: "/itineraries/zanzibar-8-days", category: "Zanzibar Package", meta: "8 Days / 7 Nights" },
  { title: "Zanzibar 9 Days Package", href: "/itineraries/zanzibar-9-days", category: "Zanzibar Package", meta: "9 Days / 8 Nights" },
  { title: "Zanzibar 10 Days Package", href: "/itineraries/zanzibar-10-days", category: "Zanzibar Package", meta: "10 Days / 9 Nights" },
]

const tourEntries: SearchEntry[] = zanzibarTours.map((tour) => ({
  title: tour.title,
  href: `/zanzibar/${tour.slug}`,
  category: "Zanzibar Tour" as const,
  meta: tour.duration,
  keywords: `${tour.location} ${tour.highlights.join(" ")}`,
}))

export const searchIndex: SearchEntry[] = [
  ...tourEntries,
  ...safariPackages,
  ...zanzibarPackages,
  ...services,
  ...pages,
]

/**
 * Ranks entries by where the query lands: a title that starts with the query
 * beats one that merely contains it, which beats a keyword-only match.
 */
export function searchSite(query: string, limit = 8): SearchEntry[] {
  const q = query.trim().toLowerCase()
  if (q.length < 2) return []

  const scored: { entry: SearchEntry; score: number }[] = []

  for (const entry of searchIndex) {
    const title = entry.title.toLowerCase()
    const haystack = `${title} ${entry.keywords ?? ""} ${entry.meta ?? ""}`.toLowerCase()

    let score = 0
    if (title === q) score = 100
    else if (title.startsWith(q)) score = 80
    else if (title.includes(q)) score = 60
    else if (haystack.includes(q)) score = 30
    else {
      // Every word of a multi-word query has to land somewhere.
      const words = q.split(/\s+/).filter(Boolean)
      if (words.length > 1 && words.every((w) => haystack.includes(w))) score = 20
    }

    if (score > 0) scored.push({ entry, score })
  }

  return scored
    .sort((a, b) => b.score - a.score || a.entry.title.length - b.entry.title.length)
    .slice(0, limit)
    .map((s) => s.entry)
}
