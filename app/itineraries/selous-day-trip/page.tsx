import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Users, Check, Star, ArrowLeft } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import BookingModal from "@/components/booking-modal"

export const metadata: Metadata = {
  title: "Selous Day Trip Safari from Zanzibar | ZANZIONE TOURS",
  description:
    "Unforgettable day trip to Selous Game Reserve (Nyerere National Park), Africa's largest reserve. Experience lions, elephants, giraffes, and stunning Rufiji River landscapes from Zanzibar.",
}

export default function SelousDayTripPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/selous-PLPCwmHRaGPCeRtGO4YFWqPzgbbLuj.jpg"
          alt="Selous Game Reserve Safari"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 text-balance">
            Selous Day Trip Safari from Zanzibar
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-base sm:text-lg">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>1 Day</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Selous Game Reserve</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>All Group Sizes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex text-golden">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">5 Stars Rated</span>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-lg font-semibold text-blue-season">Contact for Current Pricing</p>
              <p className="text-gray-600">Price on request</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Itinerary */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-season mb-4">Overview</h2>
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Embark on an unforgettable day trip from Zanzibar to Selous Game Reserve, a thrilling adventure
                    that comes with a lot of wonders. Selous Game Reserve, also known as Nyerere National Park located
                    just a short flight from Zanzibar, this journey promises a day of remarkable wildlife encounters,
                    stunning landscapes, and indelible memories.
                  </p>
                  <p>
                    In this trip, you will find wild animals like giraffes, elephants, wildebeests, powerful big cats
                    like lions, zebras, African buffalo, and a rich tapestry of other wild animals.
                  </p>
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-season mb-6">
                  Day Trip Itinerary
                </h2>
                <div className="space-y-6">
                  <Card className="overflow-hidden border-l-4 border-l-golden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-blue-season mb-2">Early Morning Departure (5:00 AM)</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Your day begins with an early morning flight from Zanzibar to Selous Game Reserve. Our driver
                        will pick you up from your hotel in Zanzibar and drive you to Zanzibar Airport.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-l-4 border-l-golden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-blue-season mb-2">
                        Arrival at Zanzibar Airport (6:00 AM)
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Upon your arrival at the airport, complete the check-in process and board your flight to Selous
                        Game Reserve.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-l-4 border-l-golden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-blue-season mb-2">
                        Arrival at Selous Game Reserve (7:20 AM)
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Upon landing at Selous, your experienced guide will lead you on a safari game drive through the
                        reserve. Selous Game Reserve is known for its remarkable wildlife diversity, including lions,
                        elephants, zebras, giraffes, and a multitude of bird species. Be prepared to witness the
                        splendors of the African wilderness up close.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-l-4 border-l-golden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-blue-season mb-2">Lunch Amidst Nature</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Recharge with a delicious lunch served amidst the beauty of the reserve, providing you with the
                        opportunity to relax and refuel before continuing your safari adventure.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-l-4 border-l-golden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-blue-season mb-2">Return to Zanzibar</h3>
                      <p className="text-gray-600 leading-relaxed">
                        After a day filled with exploration and wildlife encounters, you'll catch an evening flight back
                        to Zanzibar, concluding your Selous Day Trip. Selous Game Reserve's landscapes are stunning,
                        with vast plains, lush woodlands, and the enchanting backdrop of the Rufiji River. Don't forget
                        your camera; there are countless photo opportunities.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* About Selous */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-season mb-4">
                  About Selous Game Reserve
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Selous Game Reserve, the largest game reserve in Africa, boasts incredible biodiversity including
                    Rufiji River. Selous is known for its remote and pristine wilderness, located just a short flight
                    from Zanzibar around 50 minutes, Selous offers a unique opportunity to experience the wonders of the
                    African savanna, with confirmed wildlife sightings and stunning landscapes.
                  </p>
                  <p>
                    This day trip to Selous from Zanzibar is an excellent way to explore the reserve, and even a single
                    day provides a glimpse into the grandeur of this remarkable natural wonder.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 space-y-6">
                {/* Pricing Card */}
                <Card className="border-2 border-golden">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-blue-season mb-4">Tour Pricing</h3>
                    <div className="text-center mb-6">
                      <p className="text-lg font-semibold text-blue-season mb-2">Contact for Current Pricing</p>
                      <p className="text-gray-600">Price on request</p>
                    </div>
                    <BookingModal
                      tourName="Selous Day Trip Safari"
                      className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6"
                    />
                  </CardContent>
                </Card>

                {/* Inclusions */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-season mb-4">Price Includes</h3>
                    <ul className="space-y-3">
                      {[
                        "Roundtrip flight from Zanzibar to Selous/Nyerere National Park",
                        "All Park fees",
                        "All activities",
                        "Bush lunch",
                        "Professional driver/guide",
                        "Safari Jeep (open car)",
                        "Pick up / Drop off",
                        "All Taxes/VAT",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-blue-season text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">Ready for Your Safari?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Book your Selous day trip today and experience Africa's largest game reserve in all its glory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal 
              tourName="Selous Day Trip Safari" 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4"
            />
            <Link href="/itineraries">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-season hover:bg-gray-100 font-semibold px-8 py-4"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                View All Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
