import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Check, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import BookingModal from "@/components/booking-modal"

export const metadata: Metadata = {
  title: "Mtende Beach Tour - Zanzibar's Secret Cove | ZANZIONE TOURS",
  description:
    "Discover Mtende Beach on Zanzibar's southeast coast - a secluded cove with dramatic rock formations, tide pools, and authentic local culture. Experience extreme tides, natural swimming pools, and the famous rock swing.",
  keywords: "Mtende Beach Zanzibar, Makunduchi beach, secluded beach Zanzibar, tide pools, rock swing Zanzibar",
}

export default function MtendeBeachPage() {
  const whatsappNumber = "255710885320"
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi, I'm interested in booking the Mtende Beach tour. Can you provide more details?`

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-cyan-600 to-blue-500">
        <div className="absolute inset-0">
          <Image
            src="/images/mtende-20beach.jpeg"
            alt="Mtende Beach - Secluded Paradise"
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
              <span className="text-sm font-semibold">Secluded Paradise</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Mtende Beach</h1>
            <p className="text-2xl md:text-3xl font-light mb-6">Zanzibar's Secret Picturesque Cove</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>2-3 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>2-25 People</span>
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
                <h2 className="text-3xl font-display font-bold text-ocean mb-4">Book Your Mtende Beach Escape</h2>
                <p className="text-gray-600 mb-6 text-lg">Experience Zanzibar's most secluded and dramatic beach</p>
                <BookingModal tourName="Mtende Beach Tour" />
                <p className="text-sm text-gray-500 mt-4">
                  ✓ Best Price Guarantee | ✓ Easy Online Booking | ✓ Book Now & Pay Later
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Overview Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Overview & Experience</h2>
            <h3 className="text-2xl font-bold text-blue-season mb-4">Zanzibar's Secluded Cove</h3>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Mtende Beach, located on the southeast coast near <strong>Makunduchi</strong>, is a photographer's
                dream. Nestled between towering, rugged rock formations, the beach forms a large, secluded cove. Unlike
                the bustling northern beaches, Mtende offers a sense of discovery and privacy, perfect for those seeking
                genuine tranquility and unique coastal scenery.
              </p>
              <p>
                This hidden gem showcases nature's dramatic artistry with its natural amphitheater of sand and sea,
                framed by impressive cliffs and lush tropical vegetation on both sides.
              </p>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">What You Will Experience</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Dramatic scenery: Natural amphitheater framed by 15-meter cliffs",
                "Tide pool exploration: Walk hundreds of meters at low tide",
                "High tide swimming: Safe, emerald-green calm waters",
                "The iconic rock swing: Perfect for photos and fun",
                "Authentic culture: Glimpse traditional Swahili village life",
                "Ancient coral cliffs: Explore exposed formations at low tide",
              ].map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-cyan-50 rounded-lg">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Pricing Overview</h2>
            <p className="text-gray-600 mb-6">
              Please contact us for current pricing. We offer excellent value for groups exploring this secluded paradise.
            </p>
            <Link href="/contact" className="inline-block">
              <Button className="bg-golden hover:bg-golden/90 text-white font-semibold px-8">
                Contact Us
              </Button>
            </Link>
            <div className="mt-6 bg-amber-50 p-6 rounded-lg border-l-4 border-golden">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Note:</strong> The base price covers local guide services and entrance fees.
                <strong> Transport is not included</strong> - there is no public transport to Mtende Beach. Contact us
                for full pricing including private transfer from your hotel.
              </p>
            </div>
          </div>

          {/* Inclusions Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-bold text-blue-season mb-3">Inclusions</h3>
                {[
                  "Local Guide Services",
                  "Beach Entrance Fee",
                  "Cultural insights and local knowledge",
                  "Safety briefing about tides",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-golden rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-ocean">
                <h3 className="font-bold text-ocean mb-3">Logistics & Practical Tips</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>
                    <strong>Duration:</strong> Recommended 2-3 hours at the beach
                  </li>
                  <li>
                    <strong>Tides:</strong> Highly tide-dependent. Check tide charts for best experience
                  </li>
                  <li>
                    <strong>Accessibility:</strong> Stairs lead down to beach (may not suit limited mobility)
                  </li>
                  <li>
                    <strong>Nearby:</strong> Often combined with The Rock Restaurant and Maalum Cave
                  </li>
                  <li>
                    <strong>Transport:</strong> Private taxi or arranged transfer required
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tide Information */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Understanding the Tides</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-blue-season mb-3 text-lg">Low Tide Experience</h3>
                <p className="text-gray-700 leading-relaxed">
                  At low tide, witness Zanzibar's spectacular tidal changes. Walk hundreds of meters out to explore
                  exposed ancient coral cliffs and natural tide pools teeming with small fish and crabs. The dramatic
                  rock formations are fully revealed, creating incredible photo opportunities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-blue-season mb-3 text-lg">High Tide Experience</h3>
                <p className="text-gray-700 leading-relaxed">
                  At high tide, the cove's calm, emerald-green waters reach the stairs, creating perfect conditions for
                  safe swimming and kayaking. The rock swing becomes an exciting attraction as you swing over the deeper
                  water. The natural amphitheater effect is most pronounced.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-blue-600 text-white shadow-2xl rounded-lg p-10 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Discover Mtende Beach?</h2>
            <p className="text-xl text-white mb-8">Book your secluded beach escape to Zanzibar's hidden gem today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <BookingModal tourName="Mtende Beach Tour" />
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
