"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

/** The company's public Tripadvisor listing — used for both the logo link and
 *  the "Write a review" button (that page carries Tripadvisor's own review form). */
const TRIPADVISOR_URL =
  "https://www.tripadvisor.com/Attraction_Review-g8055401-d32700144-Reviews-Zanzione_Tour_and_Travel-Zanzibar_City_Zanzibar_Island_Zanzibar_Archipelago.html"

type Review = {
  name: string
  /** Reviewer's home town, omitted when Tripadvisor does not show one. */
  location?: string
  contributions: string
  rating: number
  title: string
  /** The trip date line, e.g. "Jun 2026 • Couples". */
  tripMeta: string
  /** One entry per paragraph, kept as written on Tripadvisor. */
  body: string[]
  autoTranslated?: boolean
  written: string
}

// Verbatim from the company's Tripadvisor listing — do not paraphrase.
const reviews: Review[] = [
  {
    name: "Jorge Negrão",
    location: "Phuket, Thailand",
    contributions: "7 contributions",
    rating: 5,
    title: "Punctuality sympathy and predictability",
    tripMeta: "Aug 2026",
    body: [
      "We used this operator to visit the turtles in southern Zanzibar and Mr. Masoud was exceptional in handling everything. Super punctual and helpful according to our needs.",
      "We were very happy with every k service. We recommend 100% this company!",
    ],
    autoTranslated: true,
    written: "Written August 12, 2026",
  },
  {
    name: "fahima",
    location: "Lusaka, Zambia",
    contributions: "2 contributions",
    rating: 5,
    title: "We were in good hands",
    tripMeta: "Jun 2026",
    body: [
      "We hired masood throughout our whole trip, and we can definitely say that he was the best driver we've ever had. He was very fun, lively, and made the children laugh a lot. His driving and conversation skills were also top tier.",
    ],
    written: "Written June 21, 2026",
  },
  {
    name: "Odyssey66343794581",
    location: "Durban, South Africa",
    contributions: "2 contributions",
    rating: 5,
    title: "Zanzibar Anniversary Celebrations",
    tripMeta: "May 2026 • Couples",
    body: [
      "Great Knowledge And Experiences Shared Even By The Transfer Drivers , Always Friendly And Happy To Assist . Well Done !!! 👏",
    ],
    written: "Written May 4, 2026",
  },
  {
    name: "Michael",
    location: "Newark, Delaware",
    contributions: "2 contributions",
    rating: 5,
    title: "Best Company In Zanzibar!!",
    tripMeta: "Jun 2026 • Couples",
    body: [
      "“Outstanding experience from start to finish! The staff were friendly, professional, and genuinely cared about providing excellent service. Everything was handled efficiently, and the quality exceeded my expectations. I really appreciated everything they did for my wife and I during our stay in Zanzibar!! Very welcoming atmosphere. Ali the Driver a great man. He knows the land very well and always goes the extra mile to help!! I highly recommend this business to anyone looking for reliable, high-quality service. I’ll definitely be coming back!”",
    ],
    written: "Written June 28, 2026",
  },
  {
    name: "Corinne V",
    contributions: "1 contribution",
    rating: 5,
    title: "A wonderful stay with a good driver.",
    tripMeta: "Feb 2026",
    body: [
      "In fact, I am so happy to have met Masoud, he is an exceptional driver! Nice! Despite the difference in language (I speak French), I want him to be extremely patient with my sister and me! He helps us in our shopping. And even before our departure we had problems with our flight because of the problems between the USA and Iran... In short, Masoud was there for us from the beginning to the end. Frankly, I will recommend it to you with my eyes closed! Thank you thank you! 🫶🫶",
    ],
    written: "Written March 10, 2026",
  },
  {
    name: "Maria K",
    contributions: "1 contribution",
    rating: 5,
    title: "Holiday in Zanzibar",
    tripMeta: "Mar 2026",
    body: [
      "We had a great experience with the local driver during our stay in Zanzibar. Masoud was very reliable - he always arrived on time and the agreed price was always strictly adhered to, which we really appreciated.",
      "He was also very kind and helpful. He always advised us on places worth visiting, what to see and helped us navigate Zanzibar. Thanks to his advice, we discovered many beautiful places that we might have otherwise missed.",
      "If you are looking for a reliable driver and someone who will advise you and help you get to know Zanzibar, we definitely recommend him. Very satisfied!",
    ],
    written: "Written March 16, 2026",
  },
]

/** Tripadvisor's five rating circles — filled for the score, outlined for the rest. */
function Bubbles({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <div
      className={`flex items-center gap-[3px] ${className}`}
      role="img"
      aria-label={`${rating} of 5 bubbles`}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`w-[15px] h-[15px] rounded-full ${
            i < rating ? "bg-ta-bubble" : "border-[2px] border-ta-bubble"
          }`}
        />
      ))}
    </div>
  )
}

const AUTO_ADVANCE = 6000

export default function TripAdvisorReviews() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return

    const card = track.querySelector<HTMLElement>("[data-review-card]")
    // gap-5 between cards — included so a step lands a card flush to the edge.
    const step = card ? card.offsetWidth + 20 : track.clientWidth
    const max = track.scrollWidth - track.clientWidth
    let next = track.scrollLeft + direction * step

    // Wrap around rather than dead-ending at either extreme.
    if (next > max - 4) next = direction === 1 ? 0 : max
    if (next < 0) next = max

    track.scrollTo({ left: next, behavior: "smooth" })
  }, [])

  useEffect(() => {
    if (paused) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const id = setInterval(() => scrollByCard(1), AUTO_ADVANCE)
    return () => clearInterval(id)
  }, [paused, scrollByCard])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      scrollByCard(-1)
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      scrollByCard(1)
    }
  }

  return (
    <section className="py-12 sm:py-20 bg-mist" aria-labelledby="tripadvisor-heading">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── Header ─── */}
        <div className="text-center mb-10 sm:mb-12 animate-on-scroll fade-up">
          <a
            href={TRIPADVISOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-5 transition-opacity hover:opacity-80"
          >
            <Image
              src="/images/brand/tripadvisor-logo.png"
              alt="Tripadvisor"
              width={1280}
              height={264}
              className="h-8 sm:h-10 w-auto"
            />
          </a>
          <h2
            id="tripadvisor-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-ink"
          >
            What Our <span className="text-sea italic">Travellers</span> Say
          </h2>
          <div className="zn-rule" aria-hidden="true" />
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5">
              <Bubbles rating={5} />
              <span className="text-ink font-display font-bold text-sm">Excellent</span>
            </div>
            <span className="hidden sm:block w-px h-5 bg-border" aria-hidden="true" />
            <p className="text-slate-ink text-sm">Real reviews from our guests on Tripadvisor</p>
          </div>
        </div>

        {/* ─── Scrolling review cards ─── */}
        {/* lg:px-14 reserves a gutter either side so the arrows sit beside the
            cards rather than on top of the review text. */}
        <div
          className="relative lg:px-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onKeyDown={onKeyDown}
          role="region"
          aria-roledescription="carousel"
          aria-label="Tripadvisor reviews"
        >
          <div
            ref={trackRef}
            tabIndex={0}
            className="flex items-start md:items-stretch gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua rounded-2xl"
          >
            {reviews.map((review) => (
              <article
                key={review.name + review.title}
                data-review-card
                className="snap-start flex-shrink-0 w-[85vw] xs:w-[78vw] sm:w-[360px] lg:w-[400px] bg-white rounded-2xl border border-border shadow-card p-5 sm:p-6 flex flex-col"
              >
                {/* Reviewer */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    aria-hidden="true"
                    className="w-11 h-11 rounded-full bg-gradient-ocean text-white font-display font-black text-base flex items-center justify-center flex-shrink-0"
                  >
                    {review.name.charAt(0).toUpperCase()}
                  </span>
                  <div className="min-w-0">
                    <p className="font-display font-bold text-ink text-[15px] leading-tight truncate">
                      {review.name}
                    </p>
                    <p className="text-slate-ink text-xs mt-0.5 truncate">
                      {review.location ? `${review.location} • ${review.contributions}` : review.contributions}
                    </p>
                  </div>
                </div>

                <Bubbles rating={review.rating} className="mb-3" />

                <h3 className="font-display font-bold text-ink text-[17px] leading-snug mb-1">
                  {review.title}
                </h3>
                <p className="text-slate-ink text-[13px] mb-3">{review.tripMeta}</p>

                <div className="space-y-2.5 text-ink/85 text-[13.5px] leading-relaxed flex-1">
                  {review.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-border">
                  {review.autoTranslated && (
                    <p className="text-slate-ink/80 text-xs mb-1">Automatically translated</p>
                  )}
                  <p className="text-slate-ink/80 text-xs">{review.written}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Arrows — hidden on touch widths, where the track is swipeable */}
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous reviews"
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white hover:bg-mist text-navy shadow-lg items-center justify-center transition-colors border border-border"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next reviews"
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white hover:bg-mist text-navy shadow-lg items-center justify-center transition-colors border border-border"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* ─── Write a review ─── */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll fade-up">
          <a
            href={TRIPADVISOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ta-green hover:brightness-95 text-black font-bold px-7 py-3.5 rounded-full inline-flex items-center gap-2.5 text-sm tracking-wide transition-all shadow-md"
          >
            Write a Review on Tripadvisor
          </a>
          <a
            href={TRIPADVISOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ocean hover:text-navy font-semibold text-sm underline underline-offset-4 transition-colors"
          >
            Read all our reviews
          </a>
        </div>
      </div>
    </section>
  )
}
