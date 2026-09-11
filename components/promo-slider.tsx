"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Slide = {
  src: string
  alt: string
  href: string
  /** Accessible label for the whole slide link. */
  label: string
}

const slides: Slide[] = [
  {
    src: "/images/slider/zanzibar-full-day-tours.jpg",
    alt: "Zanzibar Full Day Tours — experience the best of Zanzibar, approx. 8 hours, all inclusive package",
    href: "/zanzibar",
    label: "Browse Zanzibar full day tours",
  },
  {
    src: "/images/slider/safaris-multi-day.jpg",
    alt: "Multi-day Safaris — discover the wonders of the wild, 3 to 7 day packages, all inclusive tours",
    href: "/safari",
    label: "Browse multi-day Tanzania safaris",
  },
]

const INTERVAL = 5500

export default function PromoSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback((next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    // Auto-advance, unless the user is interacting or prefers reduced motion.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (paused || reduced || slides.length < 2) return

    timer.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [paused])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      go(index - 1)
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      go(index + 1)
    }
  }

  return (
    <section className="py-10 sm:py-14 bg-white" aria-labelledby="promo-slider-heading">
      <h2 id="promo-slider-heading" className="sr-only">
        Featured tour packages
      </h2>
      {/* The banner art is 1.9:1 with baked-in text, so it cannot be cropped
          vertically. Capping the width keeps it a promo block rather than a
          second full-height hero directly under the video one. */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-card group"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onKeyDown={onKeyDown}
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured tour packages"
        >
          {/* Track — translated horizontally so slides scroll rather than cross-fade */}
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={slide.src}
                className="relative w-full flex-shrink-0"
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${slides.length}`}
                aria-hidden={i !== index}
              >
                <Link href={slide.href} aria-label={slide.label} tabIndex={i === index ? 0 : -1}>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={1600}
                    height={837}
                    priority={i === 0}
                    sizes="(max-width: 1400px) 100vw, 1400px"
                    className="w-full h-auto"
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous slide"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/85 hover:bg-white text-navy shadow-lg flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next slide"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/85 hover:bg-white text-navy shadow-lg flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-white" : "w-2.5 bg-white/55 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
