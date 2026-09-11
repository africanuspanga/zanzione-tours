"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, CheckCircle2, AlertTriangle } from "lucide-react"
import { sendEnquiry, openWhatsApp } from "@/lib/send-enquiry"

interface BookingModalProps {
  tourName: string
  trigger?: React.ReactNode
  className?: string
}

export default function BookingModal({ tourName, trigger, className }: BookingModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "email-failed">("idle")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    country: "",
    specialRequests: "",
    company: "", // honeypot — hidden from real users
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    const message = `*New Booking Request*
*Tour:* ${tourName}
*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Date:* ${formData.date}
*Country:* ${formData.country}
*Guests:* ${formData.guests}
*Special Requests:* ${formData.specialRequests || "None"}`

    // Email the office a copy. WhatsApp is the primary channel and opens either
    // way, so a mail failure is surfaced but never blocks the booking.
    const result = await sendEnquiry({
      formType: "Booking Request",
      tour: tourName,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      preferredDate: formData.date,
      country: formData.country,
      guests: formData.guests,
      specialRequests: formData.specialRequests || "None",
      company: formData.company,
    })

    openWhatsApp(message)
    setStatus(result.ok ? "sent" : "email-failed")

    // Leave the confirmation on screen briefly before closing.
    setTimeout(() => {
      setIsOpen(false)
      setStatus("idle")
    }, result.ok ? 1800 : 3500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" className={`bg-golden hover:bg-sand font-bold text-lg px-12 py-6 w-full sm:w-auto ${className}`}>
            BOOK VIA WHATSAPP
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-display font-bold text-center text-navy">Book This Tour</DialogTitle>
          <DialogDescription className="text-center text-base text-slate-ink">
            {tourName}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="relative space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-base font-semibold">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Your full name"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="h-12 text-base bg-mist"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-base font-semibold">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="h-12 text-base bg-mist"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base font-semibold">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              required
              value={formData.phone}
              onChange={handleChange}
              className="h-12 text-base bg-mist"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="guests" className="text-base font-semibold">
                Number of People <span className="text-destructive">*</span>
              </Label>
              <Input
                id="guests"
                name="guests"
                type="number"
                min="1"
                placeholder="2"
                required
                value={formData.guests}
                onChange={handleChange}
                className="h-12 text-base bg-mist"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date" className="text-base font-semibold">
                Preferred Date <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="date"
                  name="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="h-12 text-base bg-mist"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country" className="text-base font-semibold">
              Country <span className="text-destructive">*</span>
            </Label>
            <Input
              id="country"
              name="country"
              placeholder="Your country of residence"
              required
              value={formData.country}
              onChange={handleChange}
              className="h-12 text-base bg-mist"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialRequests" className="text-base font-semibold">
              Special Requests or Questions
            </Label>
            <Textarea
              id="specialRequests"
              name="specialRequests"
              placeholder="Any dietary restrictions, accessibility needs, or special requests..."
              value={formData.specialRequests}
              onChange={handleChange}
              className="min-h-[100px] text-base bg-mist resize-y"
            />
          </div>

          {/* Honeypot — visually hidden, never focusable, bots fill it in */}
          <div className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={status === "sending"}
            className="w-full bg-navy hover:bg-ocean text-white font-bold text-lg py-6 mt-4 disabled:opacity-70"
          >
            {status === "sending" ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending…
              </>
            ) : (
              "Submit Booking Request"
            )}
          </Button>

          <p className="text-center text-[13px] text-slate-ink" role="status" aria-live="polite">
            {status === "sent" && (
              <span className="inline-flex items-center gap-1.5 text-island font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Sent to our team — WhatsApp is opening now.
              </span>
            )}
            {status === "email-failed" && (
              <span className="inline-flex items-center gap-1.5 text-sea font-semibold">
                <AlertTriangle className="w-4 h-4" /> WhatsApp is opening — please send the message to confirm.
              </span>
            )}
            {status === "idle" && "We reply on WhatsApp and by email, usually within the hour."}
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
