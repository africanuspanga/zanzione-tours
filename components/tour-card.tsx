"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, MoveHorizontal, Lightbulb, Plus, Minus, ArrowUpRight, Check } from "lucide-react"
import BookingModal from "@/components/booking-modal"
import { formatPrice, type Tour } from "@/lib/tours"

type Panel = "experience" | "inclusion" | null

function DisclosureButton({
  label,
  icon,
  open,
  onClick,
  controls,
}: {
  label: string
  icon: React.ReactNode
  open: boolean
  onClick: () => void
  controls: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-controls={controls}
      className={`flex items-center gap-1.5 text-[13px] font-semibold transition-colors ${
        open ? "text-aqua" : "text-slate-ink hover:text-aqua"
      }`}
    >
      {icon}
      {label}
      <span
        aria-hidden="true"
        className={`w-[15px] h-[15px] rounded-full border flex items-center justify-center text-[9px] font-bold transition-colors ${
          open ? "border-aqua text-aqua" : "border-slate-ink/50 text-slate-ink/70"
        }`}
      >
        i
      </span>
    </button>
  )
}

export default function TourCard({ tour, priority = false }: { tour: Tour; priority?: boolean }) {
  const [panel, setPanel] = useState<Panel>(null)
  const href = `/zanzibar/${tour.slug}`
  const panelId = `tour-panel-${tour.slug}`

  const toggle = (next: Exclude<Panel, null>) => setPanel((cur) => (cur === next ? null : next))

  return (
    <article className="group bg-white rounded-2xl border border-border p-3 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image */}
      <Link href={href} className="relative block rounded-xl overflow-hidden aspect-[4/2.9]">
        <Image
          src={tour.image || "/placeholder.svg"}
          alt={tour.title}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {tour.badge && (
          <span className="absolute top-3 right-3 bg-golden text-ink text-[12.5px] font-bold px-3.5 py-1.5 rounded-full shadow-sm">
            {tour.badge}
          </span>
        )}
      </Link>

      {/* Body */}
      <div className="px-2 pt-4 pb-1 flex flex-col flex-1">
        <h3 className="font-display font-bold text-ink text-[19px] leading-snug mb-2.5">
          <Link href={href} className="hover:text-ocean transition-colors">
            {tour.cardTitle}
          </Link>
        </h3>

        <div className="flex items-center gap-2.5 text-[13.5px] text-slate-ink mb-5">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 fill-slate-ink text-slate-ink" />
            {tour.location}
          </span>
          <MoveHorizontal className="w-4 h-4 text-slate-ink/60" aria-hidden="true" />
          <span>{tour.duration}</span>
        </div>

        <div className="flex items-end justify-between gap-3 mb-4 mt-auto">
          <BookingModal
            tourName={tour.title}
            trigger={
              <button
                type="button"
                className="inline-flex items-center gap-1.5 bg-ocean hover:bg-navy text-white font-semibold text-[14.5px] px-5 py-2.5 rounded-lg transition-colors"
              >
                Book Now
                <ArrowUpRight className="w-4 h-4" />
              </button>
            }
          />
          <div className="text-right leading-tight">
            <span className="block text-[12.5px] font-bold text-slate-ink">Per Person</span>
            <span className="block text-[22px] font-display font-extrabold text-ink">{formatPrice(tour.price)}</span>
          </div>
        </div>

        <div className="border-t border-border pt-3 flex items-center justify-between gap-3">
          <DisclosureButton
            label="Experience"
            controls={panelId}
            open={panel === "experience"}
            onClick={() => toggle("experience")}
            icon={<Lightbulb className="w-4 h-4" />}
          />
          <DisclosureButton
            label="Inclusion"
            controls={panelId}
            open={panel === "inclusion"}
            onClick={() => toggle("inclusion")}
            icon={panel === "inclusion" ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          />
        </div>

        {panel && (
          <ul id={panelId} className="pt-3 space-y-1.5">
            {(panel === "experience" ? tour.highlights : tour.inclusions).map((item) => (
              <li key={item} className="flex items-start gap-2 text-[13px] text-slate-ink">
                <Check className="w-3.5 h-3.5 text-island flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
