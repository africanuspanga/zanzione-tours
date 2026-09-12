import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BookingModal from "@/components/booking-modal"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Airport & Hotel Transfers in Zanzibar - Reliable Transport | ZANZIONE TOURS",
  description:
    "Book reliable and comfortable transfer services across Zanzibar. Airport transfers, hotel transfers, and ferry connections to Stone Town, Nungwi, Paje, Jambiani, and all major destinations. Professional drivers and a modern 6, 10, 14 and 28-seater fleet available 24/7.",
  keywords:
    "Zanzibar transfers, airport transfer, ferry transfer, hotel transfer, Zanzibar transportation, Stone Town transfer, Nungwi transfer",
}

interface TransferRoute {
  from: string
  to: string
  /** Vehicle shown on the card — rates are agreed per booking, never published. */
  vehicle: string
  image: string
}

const transferRoutes: TransferRoute[] = [
  { from: "Airport / Ferry", to: "Stone Town", vehicle: "Toyota Alphard · up to 6 seats", image: "/images/vehicles/alphard-6-seater.jpeg" },
  { from: "Airport / Ferry", to: "Chuini", vehicle: "Toyota Hiace · up to 10 seats", image: "/images/vehicles/hiace-10-seater.jpeg" },
  { from: "Airport / Ferry", to: "M/Pwani", vehicle: "Toyota Alphard · up to 6 seats", image: "/images/vehicles/alphard-6-seater.jpeg" },
  { from: "Airport / Ferry", to: "Nungwi - Kendwa", vehicle: "Toyota Hiace · up to 10 seats", image: "/images/vehicles/hiace-10-seater.jpeg" },
  { from: "Airport / Ferry", to: "Kiwengwa", vehicle: "Toyota Alphard · up to 6 seats", image: "/images/vehicles/alphard-6-seater.jpeg" },
  { from: "Airport / Ferry", to: "P/Mchangani", vehicle: "Toyota Hiace · up to 10 seats", image: "/images/vehicles/hiace-10-seater.jpeg" },
  { from: "Airport / Ferry", to: "Matemwe", vehicle: "Toyota Coaster · up to 28 seats", image: "/images/vehicles/coaster-28-seater.jpeg" },
  { from: "Airport / Ferry", to: "Bwejuu", vehicle: "Toyota Alphard · up to 6 seats", image: "/images/vehicles/alphard-6-seater.jpeg" },
  { from: "Airport / Ferry", to: "Michamvi", vehicle: "Toyota Hiace · up to 10 seats", image: "/images/vehicles/hiace-10-seater.jpeg" },
  { from: "Airport / Ferry", to: "Paje", vehicle: "Toyota Alphard · up to 6 seats", image: "/images/vehicles/alphard-6-seater.jpeg" },
  { from: "Airport / Ferry", to: "Jambiani", vehicle: "Toyota Hiace · up to 10 seats", image: "/images/vehicles/hiace-10-seater.jpeg" },
  { from: "Airport / Ferry", to: "Makunduchi", vehicle: "Toyota Coaster · up to 28 seats", image: "/images/vehicles/coaster-28-seater.jpeg" },
  { from: "Airport / Ferry", to: "Kizimkazi", vehicle: "Toyota Alphard · up to 6 seats", image: "/images/vehicles/alphard-6-seater.jpeg" },
  { from: "Airport / Ferry", to: "Pongwe", vehicle: "Toyota Hiace · up to 10 seats", image: "/images/vehicles/hiace-10-seater.jpeg" },
  {
    from: "Airport / Ferry",
    to: "Uroa / Marumbi / Chwaka",
    vehicle: "Toyota Alphard · up to 6 seats",
    image: "/images/vehicles/alphard-6-seater.jpeg",
  },
  { from: "Jambiani", to: "Paje / Bwejuu / Dongwe", vehicle: "Toyota Alphard · up to 6 seats", image: "/images/vehicles/alphard-6-seater.jpeg" },
  { from: "Jambiani", to: "Michamvi", vehicle: "Toyota Hiace · up to 10 seats", image: "/images/vehicles/hiace-10-seater.jpeg" },
  { from: "Jambiani", to: "Makunduchi", vehicle: "Toyota Alphard · up to 6 seats", image: "/images/vehicles/alphard-6-seater.jpeg" },
  { from: "Jambiani", to: "Kizimkazi", vehicle: "Toyota Hiace · up to 10 seats", image: "/images/vehicles/hiace-10-seater.jpeg" },
  { from: "Jambiani", to: "Stone Town", vehicle: "Toyota Coaster · up to 28 seats", image: "/images/vehicles/coaster-28-seater.jpeg" },
  { from: "Jambiani", to: "Uroa / Pongwe", vehicle: "Toyota Alphard · up to 6 seats", image: "/images/vehicles/alphard-6-seater.jpeg" },
  { from: "Jambiani", to: "Kiwengwa / P'Mchangani", vehicle: "Toyota Hiace · up to 10 seats", image: "/images/vehicles/hiace-10-seater.jpeg" },
  { from: "Jambiani", to: "Nungwi / Kendwa", vehicle: "Toyota Alphard · up to 6 seats", image: "/images/vehicles/alphard-6-seater.jpeg" },
  { from: "Jambiani", to: "Nungwi", vehicle: "Toyota Coaster · up to 28 seats", image: "/images/vehicles/coaster-28-seater.jpeg" },
  { from: "Airport / Ferry", to: "Nungwi", vehicle: "Toyota Hiace · up to 14 seats", image: "/images/vehicles/hiace-14-seater.jpeg" },
]

export default function TransfersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation Component */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/vehicles/hiace-14-seater.jpeg"
          alt="Zanzibar Transfers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Zanzibar Transfer Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Reliable and comfortable transfers across Zanzibar Island
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-6">
            Comfortable Rides to Any Destination
          </h2>
          <p className="text-lg text-ink/85 leading-relaxed">
            Experience hassle-free transportation with our professional transfer services. We offer reliable airport
            transfers, ferry connections, and hotel-to-hotel transfers across all of Zanzibar's popular destinations.
            Our modern fleet and experienced drivers ensure a smooth and comfortable journey.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-golden/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-golden" />
            </div>
            <h3 className="text-xl font-semibold mb-2">All Destinations</h3>
            <p className="text-slate-ink">Covering every corner of Zanzibar Island</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-golden/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-golden" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
            <p className="text-slate-ink">Your rate is agreed up front — no hidden charges</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-golden/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-golden"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Available</h3>
            <p className="text-slate-ink">Round-the-clock service for your convenience</p>
          </div>
        </div>
      </section>

      {/* Transfer Routes Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-8 text-center">
          Our Transfer Routes
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transferRoutes.map((route, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={route.image || "/placeholder.svg"}
                  alt={`Transfer to ${route.to}`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-slate-ink mb-1">From</p>
                    <p className="font-semibold text-ink">{route.from}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-ink mb-1">To</p>
                    <p className="font-semibold text-ink">{route.to}</p>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-base font-bold text-ocean">Price on request</p>
                    <p className="text-sm text-slate-ink">{route.vehicle}</p>
                  </div>
                  <Link href="/contact" className="block">
                    <Button className="w-full bg-golden hover:bg-sand text-ink">Book Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Need a Custom Transfer Route?</h2>
          <p className="text-xl text-white/80 mb-8">
            Contact us for custom transfer arrangements or multi-stop itineraries
          </p>
          <BookingModal
            tourName="Custom Transfer Route"
            trigger={
              <Button size="lg" className="bg-golden hover:bg-sand text-ink px-8 py-6 text-lg">
                BOOK A TRANSFER
              </Button>
            }
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
