"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Facebook, Instagram, Linkedin, Youtube, Send, Mail, Phone, MessageSquareText, ChevronRight } from "lucide-react"

const PHONE_PRIMARY = "+255 773 929 583"
const PHONE_WHATSAPP = "+255 710 885 320"
const EMAIL = "info@zanzionetours.com"

const topExcursions = [
  { label: "Safari Blue Day Trip", href: "/zanzibar/SafariBlueTour" },
  { label: "Stone Town Tour", href: "/zanzibar/StoneTownTour" },
  { label: "Prison Island", href: "/zanzibar/PrisonIslandTour" },
  { label: "Nakupenda Sandbank", href: "/zanzibar/NakupendaSandbankTour" },
  { label: "Spice Farm Tour", href: "/zanzibar/SpiceFarmTour" },
  { label: "Jozani Forest", href: "/zanzibar/JozaniForestTour" },
  { label: "Mnemba Island", href: "/zanzibar/MnembaIslandTour" },
  { label: "Sunset Dhow Cruise", href: "/zanzibar/SunsetDhowCruise" },
  { label: "The Rock Restaurant", href: "/zanzibar/TheRockRestaurant" },
]

const popularSearches = [
  { label: "Tanzania Safaris", href: "/safari" },
  { label: "Kilimanjaro Climbing", href: "/kilimanjaro" },
  { label: "Airport Transfers", href: "/transfers" },
  { label: "Zanzibar Packages", href: "/itineraries" },
  { label: "Serengeti Safari", href: "/itineraries/serengeti-safari" },
  { label: "Mikumi Day Trip", href: "/itineraries/mikumi-day-trip" },
  { label: "Car Hire & Rental", href: "/services" },
  { label: "Water Sports", href: "/services" },
  { label: "Honeymoon Trips", href: "/itineraries" },
]

const resources = [
  { label: "About Zanzione", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Tour Itineraries", href: "/itineraries" },
  { label: "Zanzibar Excursions", href: "/zanzibar" },
  { label: "Transfers & Taxi", href: "/transfers" },
  { label: "Contact Us", href: "/contact" },
  { label: "Sitemap", href: "/sitemap.xml" },
]

const paymentLogos = [
  { src: "/payment logos/visa.png", alt: "Visa" },
  { src: "/payment logos/mastercard.svg", alt: "Mastercard" },
  { src: "/payment logos/discover.png", alt: "Discover" },
  { src: "/payment logos/mpesa.png", alt: "M-Pesa" },
  { src: "/payment logos/airtel-money.png", alt: "Airtel Money" },
  { src: "/payment logos/mixx.png", alt: "Mixx by Yas" },
  { src: "/payment logos/pesapal.png", alt: "PesaPal" },
]

const socials = [
  { Icon: Facebook, href: "https://www.facebook.com/share/17Wn8GXrd8/", label: "Facebook" },
  { Icon: Instagram, href: "https://www.instagram.com/zanzione_tours", label: "Instagram" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/zanzione-tours", label: "LinkedIn" },
  { Icon: Youtube, href: "https://www.youtube.com/@zanzionetours", label: "YouTube" },
]

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.25-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.25 8.23z" />
    </svg>
  )
}

/** Subtle dotted texture that sits behind the dark footer panel. */
function DotTexture() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none opacity-[0.07]"
      style={{
        backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    />
  )
}

function FooterLinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-white font-display font-bold text-lg mb-5">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-1.5 text-[14px] text-white/65 hover:text-aqua transition-colors"
            >
              <ChevronRight className="w-3.5 h-3.5 text-aqua/0 group-hover:text-aqua -ml-1.5 group-hover:ml-0 transition-all" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    const msg = `Hi Zanzione! Please add me to your newsletter. My email is ${email.trim()}`
    window.open(`https://wa.me/255710885320?text=${encodeURIComponent(msg)}`, "_blank", "noopener")
    setEmail("")
  }

  return (
    <>
      {/* ═══════ INQUIRY CTA BAND ═══════ */}
      <section className="relative bg-ink overflow-hidden" aria-labelledby="inquiry-heading">
        <DotTexture />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-10">
            {/* Left: prompt */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <MessageSquareText className="w-11 h-11 text-aqua flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p id="inquiry-heading" className="text-white font-display font-bold text-lg leading-tight">
                  For More Inquiry
                </p>
                <p className="text-white/55 font-semibold text-[15px] leading-tight mt-1">
                  Don&apos;t hesitate to call Zanzione.
                </p>
              </div>
            </div>

            {/* Right: the three ways to reach us */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 xl:ml-auto">
              <a
                href="https://wa.me/255710885320"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5"
              >
                <span className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center text-white flex-shrink-0 transition-transform group-hover:scale-105">
                  <WhatsAppIcon />
                </span>
                <span className="min-w-0">
                  <span className="block text-[13px] text-white/55">WhatsApp</span>
                  <span className="block text-[15px] font-extrabold text-white group-hover:text-aqua transition-colors truncate">
                    {PHONE_WHATSAPP}
                  </span>
                </span>
              </a>

              <a href={`mailto:${EMAIL}`} className="group flex items-center gap-3.5">
                <span className="w-11 h-11 rounded-full bg-aqua flex items-center justify-center text-white flex-shrink-0 transition-transform group-hover:scale-105">
                  <Mail className="w-5 h-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[13px] text-white/55">Mail Us</span>
                  <span className="block text-[14px] font-extrabold text-white group-hover:text-aqua transition-colors truncate">
                    {EMAIL}
                  </span>
                </span>
              </a>

              <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`} className="group flex items-center gap-3.5">
                <span className="w-11 h-11 rounded-full bg-sea flex items-center justify-center text-white flex-shrink-0 transition-transform group-hover:scale-105">
                  <Phone className="w-5 h-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[13px] text-white/55">Call Us</span>
                  <span className="block text-[15px] font-extrabold text-white group-hover:text-aqua transition-colors truncate">
                    {PHONE_PRIMARY}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative h-px bg-white/10" />
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="relative bg-ink text-white overflow-hidden">
        <DotTexture />

        {/* Oversized brand emblem watermark */}
        <div aria-hidden="true" className="absolute -right-24 top-1/2 -translate-y-1/2 opacity-[0.035] pointer-events-none hidden md:block">
          <Image src="/images/brand/zanzione-mark.png" alt="" width={560} height={560} className="w-[560px] h-auto" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-4 lg:pr-8">
              <Link href="/" className="inline-flex items-center gap-3 mb-6" aria-label="ZANZIONE Tours & Safaris — home">
                <Image
                  src="/images/brand/zanzione-mark.png"
                  alt=""
                  width={112}
                  height={112}
                  className="h-14 w-14 object-contain"
                />
                <span className="leading-none">
                  <span className="block font-display font-extrabold text-white text-2xl tracking-tight">ZANZIONE</span>
                  <span className="block text-aqua text-[10px] font-semibold uppercase tracking-[0.28em] mt-1.5">
                    Tours &amp; Safaris
                  </span>
                </span>
              </Link>

              <p className="text-white/60 text-[14px] leading-relaxed mb-6 max-w-md">
                Zanzione Tours &amp; Travel LTD is a premier travel and tour operator in the heart of Zanzibar — island
                excursions, Tanzania safaris, Kilimanjaro climbs and airport transfers, run by local guides who know
                every corner of the island.
              </p>

              <div className="flex items-start gap-3 text-white/60 text-[14px] mb-6">
                <MapPin className="w-4 h-4 text-aqua flex-shrink-0 mt-1" />
                <address className="not-italic">
                  Shangani, Stone Town
                  <br />
                  Zanzibar, Tanzania
                </address>
              </div>

              <div className="flex items-center gap-2.5 mb-8">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-white/70 hover:bg-aqua hover:border-aqua hover:text-white transition-colors"
                  >
                    <Icon className="w-[17px] h-[17px]" />
                  </a>
                ))}
              </div>

              {/* Newsletter */}
              <form onSubmit={handleSubscribe} className="max-w-sm">
                <label htmlFor="newsletter-email" className="block text-white font-display font-bold text-[15px] mb-3">
                  Get our latest offers
                </label>
                <div className="flex gap-2">
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 min-w-0 h-12 px-4 rounded-full bg-white/8 border border-white/12 text-white text-[14px] placeholder:text-white/35 focus:outline-none focus:border-aqua focus:ring-2 focus:ring-aqua/25 transition"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to the newsletter"
                    className="w-12 h-12 rounded-full bg-golden hover:bg-sand text-ink flex items-center justify-center flex-shrink-0 transition-colors"
                  >
                    <Send className="w-[18px] h-[18px]" />
                  </button>
                </div>
              </form>
            </div>

            {/* Link columns */}
            <div className="lg:col-span-3">
              <FooterLinkColumn title="Top Excursions" links={topExcursions} />
            </div>
            <div className="lg:col-span-3">
              <FooterLinkColumn title="Popular Searches" links={popularSearches} />
            </div>
            <div className="lg:col-span-2">
              <FooterLinkColumn title="Resources" links={resources} />
            </div>
          </div>
        </div>

        {/* ─── Bottom bar ─── */}
        <div className="relative border-t border-white/10">
          {/* Extra bottom/right room so the fixed WhatsApp button cannot sit on
              top of the last payment logo. */}
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-6 lg:pr-28">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <p className="text-white/50 text-[13.5px] text-center lg:text-left">
                &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Zanzione Tours &amp; Safaris</span>{" "}
                | All Rights Reserved.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="text-white/50 text-[13.5px]">Accepted Payment Methods :</span>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {paymentLogos.map((logo) => (
                    <div
                      key={logo.alt}
                      className="bg-white rounded-md h-9 w-[58px] flex items-center justify-center px-2"
                      title={logo.alt}
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={58}
                        height={36}
                        style={{ width: "auto", height: "auto" }}
                        className="max-h-[22px] max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
