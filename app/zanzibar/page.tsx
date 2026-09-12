import type { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import TourCard from "@/components/tour-card"
import { Breadcrumbs } from "@/components/structured-data"
import { zanzibarTours } from "@/lib/tours"
import { ArrowRight, MapPin, ShieldCheck, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Zanzibar Island Tours — Stone Town, Safari Blue, Spice Tours & Dolphin Adventures",
  description:
    "Explore Zanzibar's best excursions: UNESCO Stone Town tours, Safari Blue, Nakupenda sandbank, dolphin swimming, spice farms, Jozani Forest and sunset dhow cruises. Book with expert local guides.",
  keywords: [
    "Zanzibar tours",
    "Zanzibar excursions",
    "Stone Town tour",
    "Safari Blue",
    "Nakupenda sandbank",
    "Prison Island",
    "spice farm tour",
    "Jozani Forest",
    "Kizimkazi dolphins",
    "sunset dhow cruise",
    "Mnemba Island snorkeling",
    "The Rock Restaurant",
  ],
  openGraph: {
    title: "Zanzibar Island Tours — Experience the Spice Island",
    description:
      "From Stone Town's historic alleys to pristine sandbanks and vibrant marine life — discover authentic Zanzibar excursions with Zanzione.",
    url: "https://www.zanzionetours.com/zanzibar",
    images: [
      {
        url: "/new-zanzi-tours-images/nakupenda-island.jpeg",
        width: 1200,
        height: 630,
        alt: "Nakupenda sandbank surrounded by turquoise water in Zanzibar",
      },
    ],
  },
  alternates: {
    canonical: "https://www.zanzionetours.com/zanzibar",
  },
}

const assurances = [
  { Icon: MapPin, title: "Local guides", copy: "Born-and-raised Zanzibari guides who know every alley and reef." },
  { Icon: ShieldCheck, title: "No hidden fees", copy: "Entrance fees, permits and hotel transfers quoted up front." },
  { Icon: Users, title: "Private or shared", copy: "Every excursion runs as a private trip or a small shared group." },
]

export default function ZanzibarPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs trail={[{ name: "Zanzibar Excursions", href: "/zanzibar" }]} />

      {/* ═══════ HERO ═══════ */}
      <section className="relative bg-ink overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/background-images/bg-safari-sunset.jpg)" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background: "linear-gradient(100deg, rgba(2,47,106,0.94) 0%, rgba(2,47,106,0.72) 45%, rgba(7,29,53,0.45) 100%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-white/90 font-display font-semibold tracking-[0.22em] uppercase text-[11px] mb-5 bg-white/10 border border-white/20 rounded-full px-4 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-lagoon" aria-hidden="true" />
              Zanzibar Excursions
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white mb-5 leading-[1.08]">
              Zanzibar Island Tours
            </h1>
            <p className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl">
              Discover the magic of the Spice Island with {zanzibarTours.length} carefully curated day trips — from
              UNESCO Stone Town to sandbanks that only exist at low tide.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ ASSURANCES ═══════ */}
      <section className="bg-mist border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {assurances.map(({ Icon, title, copy }) => (
              <div key={title} className="flex items-start gap-3.5">
                <span className="w-10 h-10 rounded-full bg-aqua/12 text-ocean flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-display font-bold text-ink text-[15px]">{title}</p>
                  <p className="text-slate-ink text-[13.5px] leading-relaxed mt-0.5">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TOURS GRID ═══════ */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14">
            <p className="text-aqua font-display font-bold tracking-[0.2em] uppercase text-xs mb-3">Our Excursions</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-ink mb-4">
              Unique Zanzibar Experiences
            </h2>
            <p className="text-[15px] sm:text-base text-slate-ink max-w-2xl mx-auto leading-relaxed">
              From pristine beaches to cultural treasures, each tour is a different window into the island.
            </p>
            <div className="zn-rule" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
            {zanzibarTours.map((tour, i) => (
              <TourCard key={tour.slug} tour={tour} priority={i < 4} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="relative py-16 sm:py-20 bg-gradient-ocean text-white overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold mb-5 text-white">Ready to Explore Zanzibar?</h2>
          <p className="text-lg text-white/75 mb-9 leading-relaxed">
            Tell us what you want to see and we&apos;ll build a day-by-day plan around your dates, your pace and your
            hotel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-golden hover:bg-sand text-ink font-bold px-8 py-4 rounded-full transition-colors shadow-lg shadow-black/10"
            >
              Customise Your Tour <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/40 hover:bg-white hover:text-navy text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
