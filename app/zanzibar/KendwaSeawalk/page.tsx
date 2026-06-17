import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Check, Star, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import BookingModal from "@/components/booking-modal"

export const metadata: Metadata = {
  title: "Kendwa Sea Walk Zanzibar - Underwater Helmet Walking | ZANZIONE TOURS",
  description:
    "Walk on the ocean floor in Kendwa with our Sea Walk experience. No swimming or diving needed. Perfect for non-swimmers, families, and couples who want to explore Zanzibar's underwater world safely.",
  keywords:
    "Kendwa Sea Walk Zanzibar, underwater walking Zanzibar, sea walk Nungwi, helmet diving Zanzibar, non-swimmer activity Zanzibar",
}

export default function KendwaSeawalkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-cyan-600 to-blue-500">
        <div className="absolute inset-0">
          <Image
            src="/kendwa-seawalk.jpeg"
            alt="Kendwa Sea Walk - Underwater Adventure"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-golden text-golden" />
                ))}
              </div>
              <span className="text-sm font-semibold">Underwater Adventure</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Kendwa Sea Walk</h1>
            <p className="text-2xl md:text-3xl font-light mb-6">Walk Beneath the Indian Ocean</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>1 Hour</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Min Age 10+</span>
              </div>
              <div className="bg-golden px-4 py-2 rounded-full font-bold">Contact for Pricing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 -mt-20 relative z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Booking Card */}
          <Card className="mb-12 shadow-2xl border-t-4 border-golden">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-display font-bold text-ocean mb-4">Book Your Sea Walk Adventure</h2>
                <p className="text-gray-600 mb-6 text-lg">Discover the underwater world without getting your hair wet</p>
                <BookingModal tourName="Kendwa Sea Walk" />
                <p className="text-sm text-gray-500 mt-4">
                  ✓ Best Price Guarantee | ✓ Easy Online Booking | ✓ Book Now & Pay Later
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Overview Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Overview & Experience</h2>
            <h3 className="text-2xl font-bold text-blue-season mb-4">Walk on the Ocean Floor</h3>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Discover the underwater world of Zanzibar in a unique and easy way — no swimming, no diving, and no
                experience needed.
              </p>
              <p>
                The Sea Walk experience allows you to walk on the ocean floor while breathing normally through a
                specially designed underwater helmet. Surrounded by colorful fish and marine life, you’ll enjoy a calm,
                safe, and unforgettable journey beneath the surface.
              </p>
              <p>
                Your trip starts at our Sea Walk station, where our professional team welcomes you, explains the
                experience, and prepares you with all the necessary equipment. After a short boat ride to the walking
                area, you’ll descend gently into the water and begin your underwater walk with full guidance at every
                step.
              </p>
              <p>
                The underwater walk lasts around 20 minutes, giving you plenty of time to explore, take photos, and
                fully enjoy the experience. The entire trip takes approximately 1 hour, including preparation, briefing,
                and transfer.
              </p>
              <p>
                Sea Walk is designed for non-swimmers, beginners, and anyone who wants to experience the ocean in a
                relaxed and safe way. You can even wear your glasses or contact lenses underwater, so you won’t miss a
                single detail.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Highlights</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Walk on the ocean floor with a modern underwater helmet",
                "Breathe normally underwater — no scuba gear needed",
                "Safe for non-swimmers, beginners, and families",
                "See colorful fish and marine life up close",
                "Keep your glasses or contact lenses on",
                "Professional guides and full safety briefing included",
              ].map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-cyan-50 rounded-lg">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tour Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Tour Plan</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Arrival at Nungwi Office",
                  desc: "The guest arrives at the Zanzibar Sea Walk office in Nungwi/Kendwa area. Booking is confirmed and contact details collected. This is the administration point, not the activity location.",
                },
                {
                  title: "Transfer to the Sea Walk Station",
                  desc: "Guest waits at the office or nearby meeting point, then is transferred by small boat to the Sea Walk Station.",
                },
                {
                  title: "Arrival at the Sea Walk Station",
                  desc: "The small boat arrives at the Sea Walk floating station. Guests meet the professional diving team and personal belongings are secured.",
                },
                {
                  title: "Safety Briefing",
                  desc: "Full safety briefing covers how the helmet works, how to breathe underwater, how to walk on the seabed, and hand signals for communication. No swimming or diving experience is required.",
                },
                {
                  title: "Underwater Sea Walk Experience",
                  desc: "Around 20 minutes underwater walking on the ocean floor. Interact with fish and coral while photos and videos are taken. Suitable for couples, families, children from 10 years old, and non-swimmers.",
                },
                {
                  title: "Exit & Return",
                  desc: "Controlled ascent back to the station, helmet removal and short rest, then return by small boat to Nungwi or Kendwa depending on the pickup point.",
                },
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-golden rounded-full flex items-center justify-center text-white font-black">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-season mb-1">{step.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Included / Excluded */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Included & Excluded</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-blue-season mb-4 text-lg">Included</h3>
                <div className="space-y-3">
                  {[
                    "Underwater helmet walking experience",
                    "Safety briefing and full guidance",
                    "High-quality underwater helmet & equipment",
                    "Professional guide throughout the activity",
                    "Use of glasses or contact lenses underwater",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-blue-season mb-4 text-lg">Excluded</h3>
                <div className="space-y-3">
                  {[
                    "Professional photo or video packages",
                    "Hotel transfers",
                    "Food and drinks",
                    "Personal expenses",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <X className="w-5 h-5 text-red-500" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Important Info */}
          <div className="bg-blue-50 rounded-lg shadow-lg p-8 mb-8 border-l-4 border-ocean">
            <h2 className="text-2xl font-display font-bold text-ocean mb-4">Important Information</h2>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Duration:</strong> Approximately 1 hour total, including 20 minutes underwater.</li>
              <li><strong>Location:</strong> Kendwa / Nungwi area, north coast of Zanzibar.</li>
              <li><strong>Minimum age:</strong> 10 years old.</li>
              <li><strong>Suitable for:</strong> Couples, families, children 10+, and non-swimmers.</li>
              <li><strong>What to bring:</strong> Swimwear, towel, sunscreen, and a sense of adventure.</li>
            </ul>
          </div>

          {/* Final CTA */}
          <div className="bg-blue-600 text-white shadow-2xl rounded-lg p-10 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Walk Underwater?</h2>
            <p className="text-xl text-white mb-8">Book your Kendwa Sea Walk today for a once-in-a-lifetime ocean experience</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <BookingModal tourName="Kendwa Sea Walk" />
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-ocean font-semibold px-8 py-6 bg-transparent w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
