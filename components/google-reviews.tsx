import Image from "next/image"
import { Star } from "lucide-react"

/** The company's Google Business Profile — the page carries Google's own
 *  "Write a review" control. */
const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/S9uJRoUZ6gMqqw8KA"

type GoogleReview = {
  name: string
  /** The line under the name, e.g. "Local Guide · 19 reviews · 4 photos". */
  credit: string
  rating: number
  /** Google's relative timestamp, as shown on the profile. */
  when: string
  /** Google's "NEW" pill on recent reviews. */
  isNew?: boolean
  text: string
  /** Avatar circle colour, matching the reviewer's Google avatar. */
  avatarColor: string
}

// Verbatim from the company's Google Business Profile — do not paraphrase.
const reviews: GoogleReview[] = [
  {
    name: "Ozan Demirel",
    credit: "Local Guide · 19 reviews · 4 photos",
    rating: 5,
    when: "a month ago",
    text: "Masoud and his team provided us with excellent service. They are very professional, responsive, and friendly. The cars were also clean and well maintained. Highly recommended!",
    avatarColor: "#e0732d",
  },
  {
    name: "Virginie J",
    credit: "Local Guide · 17 reviews · 11 photos",
    rating: 5,
    when: "a week ago",
    isNew: true,
    text: "We used this taxi service; they were punctual, and everything went smoothly. They also offer typical local activities, so don't hesitate to contact them via WhatsApp.",
    avatarColor: "#4285f4",
  },
  {
    name: "Lindsay Zurba",
    credit: "4 reviews",
    rating: 5,
    when: "a month ago",
    text: "We had the absolute pleasure of using Zanzi One Tours & Safaris during our family holiday in December 2025, and I cannot recommend Masoud and his team highly enough.",
    avatarColor: "#1e4c41",
  },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={`w-[18px] h-[18px] ${
            i < rating ? "text-google-star fill-google-star" : "text-slate-ink/25 fill-slate-ink/25"
          }`}
        />
      ))}
    </div>
  )
}

export default function GoogleReviews() {
  return (
    <section className="py-12 sm:py-20 bg-white" aria-labelledby="google-reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── Header ─── */}
        <div className="text-center mb-10 sm:mb-12 animate-on-scroll fade-up">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-5 transition-opacity hover:opacity-80"
          >
            <Image
              src="/images/brand/google-reviews-logo.png"
              alt="Google Reviews"
              width={800}
              height={321}
              className="h-11 sm:h-14 w-auto"
            />
          </a>
          <h2
            id="google-reviews-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-ink"
          >
            Rated <span className="text-sea italic">5 Stars</span> on Google
          </h2>
          <div className="zn-rule" aria-hidden="true" />
          <p className="text-slate-ink text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            What guests write about us on our Google Business Profile.
          </p>
        </div>

        {/* ─── Reviews ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {reviews.map((review, i) => (
            <article
              key={review.name}
              className="animate-on-scroll fade-up bg-white rounded-2xl border border-border shadow-card p-5 sm:p-6 flex flex-col"
              data-delay={(i * 100).toString()}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  aria-hidden="true"
                  className="w-11 h-11 rounded-full text-white font-display font-black text-base flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: review.avatarColor }}
                >
                  {review.name.charAt(0).toUpperCase()}
                </span>
                <div className="min-w-0">
                  <p className="font-display font-bold text-ink text-[15px] leading-tight truncate">
                    {review.name}
                  </p>
                  <p className="text-slate-ink text-xs mt-0.5 truncate">{review.credit}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 mb-3">
                <Stars rating={review.rating} />
                <span className="text-slate-ink text-[13px]">{review.when}</span>
                {review.isNew ? (
                  <span className="text-slate-ink text-[11px] font-semibold border border-border rounded px-1.5 py-0.5 leading-none">
                    NEW
                  </span>
                ) : null}
              </div>

              <p className="text-ink/85 text-[13.5px] leading-relaxed">{review.text}</p>
            </article>
          ))}
        </div>

        {/* ─── Write a review ─── */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll fade-up">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-google-blue hover:brightness-110 text-white font-bold px-7 py-3.5 rounded-full inline-flex items-center gap-2.5 text-sm tracking-wide transition-all shadow-md"
          >
            Write a Review on Google
          </a>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ocean hover:text-navy font-semibold text-sm underline underline-offset-4 transition-colors"
          >
            See us on Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
