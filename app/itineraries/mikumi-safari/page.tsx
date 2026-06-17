import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock, Plane, Utensils, Camera, Binary as Binoculars } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import BookingModal from "@/components/booking-modal"

export const metadata: Metadata = {
  title: "Mikumi Day Trip Safari | ZANZIONE TOURS",
  description:
    "Full-day flying safari to Mikumi National Park from Zanzibar. See elephants, giraffes, lions, and zebras. Includes round-trip flights, game drive, and bush lunch. Perfect day safari experience.",
  alternates: {
    canonical: "https://www.zanzionetours.com/itineraries/mikumi-safari",
  },
}

export default function MikumiSafariPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <Image src="/images/packages/mikumi-safari.jpg" alt="Mikumi Safari" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-golden">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold mb-4 leading-tight">
            Mikumi Day Trip Safari
          </h1>
          <p className="text-xl sm:text-2xl mb-6">Full Day Flying Safari from Zanzibar</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>1 Full Day</span>
            </div>
            <div className="hidden sm:block">•</div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-season mb-6">Package Overview</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Experience the thrill of an African safari in just one day! Our Mikumi Day Trip Safari offers a perfect
                opportunity for those with limited time to witness Tanzania's incredible wildlife. Fly from Zanzibar to
                Mikumi National Park and spend a full day exploring this accessible yet wildlife-rich destination.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Mikumi National Park is known for its open horizons and abundant wildlife viewing opportunities. Spot
                elephants, giraffes, lions, zebras, wildebeests, impalas, and numerous bird species in their natural
                habitat. This package includes round-trip flights, full-day guided game drive, and a bush lunch.
              </p>

              <div className="bg-golden/10 border-l-4 border-golden p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-season mb-3">Package Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Round-trip flights from Zanzibar to Mikumi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Full-day guided game drive in 4x4 safari vehicle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Bush lunch at scenic picnic site in the park</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Expert safari guide with wildlife knowledge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Park entrance fees included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Perfect for families and day trippers</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-lg font-semibold text-blue-season mb-2">Contact for Current Pricing</p>
                    <p className="text-gray-600">Price on request</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock className="w-5 h-5 text-blue-season" />
                      <span>1 Full Day</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Plane className="w-5 h-5 text-blue-season" />
                      <span>Flights Included</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Utensils className="w-5 h-5 text-blue-season" />
                      <span>Bush Lunch Included</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Camera className="w-5 h-5 text-blue-season" />
                      <span>Full-Day Game Drive</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Binoculars className="w-5 h-5 text-blue-season" />
                      <span>Expert Guide</span>
                    </div>
                  </div>

                  <BookingModal 
                    tourName="Mikumi Day Trip Safari" 
                    trigger={
                      <Button className="w-full bg-golden hover:bg-golden/90 text-white font-semibold py-6 text-lg">
                        BOOK THIS TRIP
                      </Button>
                    }
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-season mb-8 text-center">
            Full Day Itinerary
          </h2>

          <Card className="overflow-hidden">
            <div className="bg-blue-season text-white p-4 sm:p-6">
              <h3 className="text-2xl font-display font-bold">Full Day Mikumi Trip</h3>
            </div>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-blue-season mb-2 text-lg">5:00 AM - Early Morning Departure</h4>
                  <p className="text-gray-600">
                    Early morning hotel pick-up (approximately 5:00 AM) and transfer to Zanzibar Airport. Check in for
                    your domestic flight to Mikumi National Park.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-season mb-2 text-lg">6:30 AM - Flight to Mikumi</h4>
                  <p className="text-gray-600">
                    Board your domestic flight to Mikumi National Park (approximately 1 to 1.5 hours). Enjoy stunning
                    aerial views of the Tanzanian landscape during your flight.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-season mb-2 text-lg">
                    8:00 AM - Arrival & Morning Game Drive
                  </h4>
                  <p className="text-gray-600">
                    Upon landing at Mikumi airstrip, meet your experienced safari guide and board your 4x4 safari
                    vehicle. Begin your thrilling morning game drive through the park. Mikumi is home to elephants,
                    buffalos, giraffes, zebras, lions, leopards, and various antelope species. Your guide will help you
                    spot and identify wildlife while sharing fascinating facts about the ecosystem.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-season mb-2 text-lg">12:00 PM - Bush Lunch</h4>
                  <p className="text-gray-600">
                    Enjoy a delicious bush lunch at a scenic picnic site within the park. Relax and take in the
                    beautiful surroundings while enjoying your meal. This is also a great time for photos and to observe
                    birds and smaller wildlife.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-season mb-2 text-lg">1:30 PM - Afternoon Game Drive</h4>
                  <p className="text-gray-600">
                    Continue with an afternoon game drive exploring different areas of the park. The afternoon light
                    provides excellent photography opportunities, and you may encounter animals you missed in the
                    morning. Your guide will take you to prime viewing spots based on recent wildlife sightings.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-season mb-2 text-lg">3:30 PM - Return Transfer</h4>
                  <p className="text-gray-600">
                    In the late afternoon (approximately 3:30 PM), transfer back to the airstrip for your return flight
                    to Zanzibar. Say goodbye to the incredible wildlife and landscapes of Mikumi.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-season mb-2 text-lg">5:00 PM - Arrival in Zanzibar</h4>
                  <p className="text-gray-600">
                    Upon arrival at Zanzibar Airport, our driver will transfer you back to your hotel. Reflect on an
                    amazing day filled with wildlife encounters and safari adventure.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-blue-season text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Ready for Your Mikumi Adventure?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Experience the thrill of an African safari in just one day. Perfect for travelers with limited time who want
            to witness Tanzania's incredible wildlife.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal 
              tourName="Mikumi Day Trip Safari" 
              trigger={
                <Button size="lg" className="bg-golden hover:bg-golden/90 text-white font-semibold px-8 py-6 text-lg">
                  BOOK THIS TRIP
                </Button>
              }
            />
            <Link href="/itineraries">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-season font-semibold px-8 py-6 text-lg bg-transparent"
              >
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
