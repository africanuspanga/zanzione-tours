import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock, Plane, Utensils, Hotel, Camera } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import BookingModal from "@/components/booking-modal"

export const metadata: Metadata = {
  title: "Serengeti 2 Days 1 Night Safari Package | ZANZIONE TOURS",
  description:
    "Fly-in safari to Serengeti National Park from Zanzibar. 2 days of game drives, Big Five viewing, accommodation included. Experience the Great Migration and Tanzania's premier wildlife destination.",
  alternates: {
    canonical: "https://www.zanzionetours.com/itineraries/serengeti-safari",
  },
}

export default function SerengetiSafariPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <Image
          src="/images/packages/serengeti-safari.jpg"
          alt="Serengeti Safari"
          fill
          className="object-cover"
          priority
        />
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
            Serengeti 2 Days 1 Night Safari
          </h1>
          <p className="text-xl sm:text-2xl mb-6">Fly-in Safari Package from Zanzibar</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>2 Days / 1 Night</span>
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
                Experience the magic of Serengeti National Park with our exclusive fly-in safari package. This 2-day
                adventure takes you from the pristine beaches of Zanzibar to the vast savannah plains of Tanzania's most
                iconic wildlife destination.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Witness the legendary Great Migration, spot the Big Five in their natural habitat, and enjoy thrilling
                game drives across endless plains teeming with wildlife. This package includes round-trip flights,
                accommodation, meals, and expert guided safaris.
              </p>

              <div className="bg-golden/10 border-l-4 border-golden p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-season mb-3">Package Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Round-trip flights from Zanzibar to Serengeti</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Full-day game drives with experienced guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Accommodation in Serengeti National Park</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>All meals included (lunch, dinner, breakfast)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Possible sightings of the Big Five</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Park entrance fees included</span>
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
                      <span>2 Days / 1 Night</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Plane className="w-5 h-5 text-blue-season" />
                      <span>Flights Included</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Hotel className="w-5 h-5 text-blue-season" />
                      <span>Accommodation Included</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Utensils className="w-5 h-5 text-blue-season" />
                      <span>All Meals Included</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Camera className="w-5 h-5 text-blue-season" />
                      <span>Game Drives</span>
                    </div>
                  </div>

                  <BookingModal 
                    tourName="Serengeti 2 Days 1 Night Safari" 
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
            Day-by-Day Itinerary
          </h2>

          <div className="space-y-8">
            {/* Day 1 */}
            <Card className="overflow-hidden">
              <div className="bg-blue-season text-white p-4 sm:p-6">
                <h3 className="text-2xl font-display font-bold flex items-center gap-3">
                  <span className="w-10 h-10 bg-golden rounded-full flex items-center justify-center text-lg">1</span>
                  Day 1: Serengeti Safari Begins
                </h3>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-season mb-2">Early Morning - Departure</h4>
                    <p className="text-gray-600">
                      Early morning pick-up from your hotel in Zanzibar and transfer to Zanzibar Airport for a domestic
                      flight to Serengeti (Seronera Airstrip). Enjoy aerial views of Tanzania's stunning landscapes
                      during your flight.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-season mb-2">Mid-Morning - Arrival & Game Drive</h4>
                    <p className="text-gray-600">
                      Upon arrival at Seronera Airstrip, meet your experienced safari guide and embark on your first
                      thrilling game drive. The Serengeti is home to the Big Five and countless other species.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-season mb-2">Lunch</h4>
                    <p className="text-gray-600">
                      Enjoy a delicious picnic lunch amidst the wildlife, surrounded by the breathtaking scenery of the
                      Serengeti plains.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-season mb-2">Afternoon - Continued Safari</h4>
                    <p className="text-gray-600">
                      Continue your game drive through different regions of the park, searching for lions, leopards,
                      elephants, buffalo, and more. Your guide will share insights about animal behavior and ecology.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-season mb-2">Evening - Check-in</h4>
                    <p className="text-gray-600">
                      Late afternoon arrival at your accommodation within or near the park. Enjoy dinner and relax after
                      an exciting day. Overnight stay in Serengeti.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 2 */}
            <Card className="overflow-hidden">
              <div className="bg-blue-season text-white p-4 sm:p-6">
                <h3 className="text-2xl font-display font-bold flex items-center gap-3">
                  <span className="w-10 h-10 bg-golden rounded-full flex items-center justify-center text-lg">2</span>
                  Day 2: Final Safari & Return to Zanzibar
                </h3>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-season mb-2">Early Morning - Sunrise Game Drive</h4>
                    <p className="text-gray-600">
                      After an early breakfast, set out for a final morning game drive across the vast savannah plains.
                      Early morning is prime time for wildlife viewing as animals are most active.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-season mb-2">Mid-Morning - Last Sightings</h4>
                    <p className="text-gray-600">
                      Capture final photos and soak in the magnificent landscape one last time. Your guide will ensure
                      you get the most out of your remaining time in the park.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-season mb-2">Transfer to Airstrip</h4>
                    <p className="text-gray-600">
                      After the game drive, you will be transferred back to the Seronera airstrip for your return flight
                      to Zanzibar.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-season mb-2">Afternoon - Return to Zanzibar</h4>
                    <p className="text-gray-600">
                      Upon arrival at Zanzibar Airport, you will be transferred back to your hotel with incredible
                      memories and photos from your Serengeti adventure.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-blue-season text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Explore the Serengeti?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Don't miss this opportunity to witness one of the world's greatest wildlife spectacles. Book your Serengeti
            safari today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal 
              tourName="Serengeti 2 Days 1 Night Safari" 
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
