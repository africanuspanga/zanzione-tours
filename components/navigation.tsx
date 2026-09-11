"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, Search, ChevronDown, HelpCircle, CalendarCheck, ArrowRight } from "lucide-react"
import { searchSite, type SearchEntry } from "@/lib/site-index"

const WHATSAPP_NUMBER = "255710885320"
const WHATSAPP_DISPLAY = "+255 710 885 320"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Zanzibar Excursions", href: "/zanzibar" },
  {
    label: "Safari",
    href: "/safari",
    children: [
      { label: "Tanzania Safaris", href: "/safari" },
      { label: "Kilimanjaro Climbing", href: "/kilimanjaro" },
    ],
  },
  { label: "Itineraries", href: "/itineraries" },
  { label: "Transfers", href: "/transfers" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.25-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.25 8.23z" />
    </svg>
  )
}

/** Search box with a live result dropdown. Shared by the desktop bar and the mobile drawer. */
function SearchBox({ onNavigate, autoFocus = false }: { onNavigate?: () => void; autoFocus?: boolean }) {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchEntry[]>([])
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const found = searchSite(query)
    setResults(found)
    setActive(0)
    setOpen(found.length > 0)
  }, [query])

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [])

  const go = useCallback(
    (entry: SearchEntry) => {
      setQuery("")
      setOpen(false)
      onNavigate?.()
      router.push(entry.href)
    },
    [router, onNavigate],
  )

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || results.length === 0) return
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActive((i) => (i + 1) % results.length)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActive((i) => (i - 1 + results.length) % results.length)
    } else if (e.key === "Enter") {
      e.preventDefault()
      go(results[active])
    } else if (e.key === "Escape") {
      setOpen(false)
    }
  }

  return (
    <div ref={wrapRef} className="relative w-full">
      <label htmlFor="site-search" className="sr-only">
        Search tours, safaris and transfers
      </label>
      <div className="relative">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-ink pointer-events-none" />
        <input
          id="site-search"
          type="search"
          autoFocus={autoFocus}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(results.length > 0)}
          onKeyDown={onKeyDown}
          placeholder="Find Your Perfect Tour Package"
          autoComplete="off"
          role="combobox"
          aria-expanded={open}
          aria-controls="site-search-results"
          className="w-full h-12 sm:h-[52px] pl-14 pr-5 rounded-full bg-mist border border-transparent text-[15px] text-ink placeholder:text-slate-ink/80 focus:outline-none focus:border-aqua focus:bg-white focus:ring-4 focus:ring-aqua/15 transition-all [&::-webkit-search-cancel-button]:appearance-none"
        />
      </div>

      {open && (
        <ul
          id="site-search-results"
          role="listbox"
          className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-card-hover border border-border py-2 z-50 max-h-[60vh] overflow-y-auto"
        >
          {results.map((entry, i) => (
            <li key={entry.href + entry.title} role="option" aria-selected={i === active}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => go(entry)}
                className={`w-full text-left px-4 py-2.5 flex items-center gap-3 transition-colors ${
                  i === active ? "bg-mist" : ""
                }`}
              >
                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-semibold text-ink truncate">{entry.title}</span>
                  <span className="block text-xs text-slate-ink truncate">
                    {entry.category}
                    {entry.meta ? ` · ${entry.meta}` : ""}
                  </span>
                </span>
                <ArrowRight className="w-4 h-4 text-aqua flex-shrink-0" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileSearch, setMobileSearch] = useState(false)

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setIsOpen(false)
    setMobileSearch(false)
  }, [pathname])

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* ─── Row 1: logo · search · help & CTA ─── */}
      <div className="border-b border-border/70">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 lg:gap-8 h-[68px] sm:h-[84px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="ZANZIONE Tours & Safaris — home">
              <Image
                src="/images/brand/zanzione-mark.png"
                alt=""
                width={104}
                height={104}
                priority
                className="h-10 w-10 sm:h-[52px] sm:w-[52px] object-contain"
              />
              <span className="leading-none">
                <span className="block font-display font-extrabold text-navy text-[17px] sm:text-[22px] tracking-tight">
                  ZANZIONE
                </span>
                <span className="block text-aqua text-[8.5px] sm:text-[10px] font-semibold uppercase tracking-[0.28em] mt-1">
                  Tours &amp; Safaris
                </span>
              </span>
            </Link>

            {/* Search — desktop */}
            <div className="hidden md:block flex-1 max-w-[640px]">
              <SearchBox />
            </div>

            {/* Right side */}
            <div className="ml-auto flex items-center gap-2 sm:gap-4">
              <Link
                href="/contact"
                className="hidden xl:flex items-center gap-1.5 text-sea hover:text-aqua font-bold text-[15px] transition-colors"
              >
                <HelpCircle className="w-4 h-4" />
                Need Help?
              </Link>
              <span className="hidden xl:block w-px h-6 bg-border" aria-hidden="true" />

              {/* Mobile search toggle */}
              <button
                type="button"
                onClick={() => setMobileSearch((v) => !v)}
                aria-label={mobileSearch ? "Close search" : "Open search"}
                aria-expanded={mobileSearch}
                className="md:hidden w-10 h-10 rounded-full bg-mist flex items-center justify-center text-navy"
              >
                {mobileSearch ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
              </button>

              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 bg-navy hover:bg-ocean text-white font-bold text-[15px] px-6 py-3 rounded-full transition-colors shadow-sm"
              >
                <CalendarCheck className="w-[18px] h-[18px]" />
                Book Now
              </Link>

              {/* Hamburger */}
              <button
                type="button"
                onClick={() => setIsOpen((v) => !v)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                className="lg:hidden w-10 h-10 rounded-full bg-mist flex items-center justify-center text-navy"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Search — mobile, revealed by the toggle */}
          {mobileSearch && (
            <div className="md:hidden pb-3">
              <SearchBox autoFocus onNavigate={() => setMobileSearch(false)} />
            </div>
          )}
        </div>
      </div>

      {/* ─── Row 2: primary nav · WhatsApp ─── */}
      <div className="hidden lg:block border-b border-border/70 shadow-[0_1px_3px_rgba(7,29,53,0.04)]">
        <div className="max-w-[1400px] mx-auto pl-4 sm:pl-6 lg:pl-8">
          <div className="flex items-stretch justify-between">
            <nav aria-label="Primary" className="flex items-center gap-6 xl:gap-8 py-4">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 font-bold text-[15px] transition-colors ${
                        isActive(link.href) || isActive("/kilimanjaro") ? "text-aqua" : "text-navy hover:text-aqua"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    <div
                      className={`absolute top-full left-0 pt-4 w-56 transition-all duration-200 ${
                        openDropdown === link.href
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-1"
                      }`}
                    >
                      <div className="bg-white rounded-xl shadow-card-hover border border-border py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-2.5 text-[14px] font-medium text-navy hover:bg-mist hover:text-aqua transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`font-bold text-[15px] transition-colors ${
                      isActive(link.href) ? "text-aqua" : "text-navy hover:text-aqua"
                    }`}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>

            {/* WhatsApp block, flush to the right edge like the reference */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-mist hover:bg-aqua/10 transition-colors pl-5 pr-6 xl:pr-8"
            >
              <span className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white flex-shrink-0">
                <WhatsAppIcon className="w-5 h-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-[12px] text-slate-ink">WhatsApp</span>
                <span className="block text-[15px] font-extrabold text-navy">{WHATSAPP_DISPLAY}</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ─── Mobile drawer ─── */}
      <div
        className={`lg:hidden overflow-hidden border-b border-border transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[620px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="px-4 sm:px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`block py-3 px-3 rounded-xl font-bold text-[15px] transition-colors ${
                  isActive(link.href) ? "text-aqua bg-aqua/10" : "text-navy hover:bg-mist"
                }`}
              >
                {link.label}
              </Link>
              {link.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block py-2.5 pl-8 pr-3 rounded-xl text-[14px] font-medium text-slate-ink hover:text-aqua hover:bg-mist transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}

          <Link
            href="/contact"
            className="mt-3 inline-flex items-center justify-center gap-2 bg-navy hover:bg-ocean text-white font-bold text-[15px] px-6 py-3.5 rounded-full transition-colors"
          >
            <CalendarCheck className="w-[18px] h-[18px]" />
            Book Now
          </Link>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-3 bg-mist rounded-full px-4 py-3"
          >
            <span className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white flex-shrink-0">
              <WhatsAppIcon className="w-5 h-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-[12px] text-slate-ink">WhatsApp</span>
              <span className="block text-[15px] font-extrabold text-navy">{WHATSAPP_DISPLAY}</span>
            </span>
          </a>
        </nav>
      </div>
    </header>
  )
}
