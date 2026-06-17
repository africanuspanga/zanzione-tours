import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, MapPin, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import BookingModal from "@/components/booking-modal"

export const metadata: Metadata = {
  title: "Sunset Dhow Cruise Zanzibar - Romantic Evening Sailing | ZANZIONE TOURS",
  description:
    "Experience an unforgettable romantic evening on a traditional Arabian dhow. Enjoy stunning sunset views, local delights, and traditional music while sailing from Stone Town, Nungwi, or Kendwa Beach.",
}

export default function SunsetDhowCruisePage() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/images/tours/sunset-dhow.jpg"
          alt="Sunset Dhow Cruise Zanzibar"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
                Zanzibar Sunset Dhow Cruise
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                An Unforgettable, Romantic Evening on a Traditional Arabian Dhow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-blue-season text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Evening (Daily Departures)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>2-20 people</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Stone Town, Nungwi, Kendwa</span>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview Section */}
              <div>
                <h2 className="text-3xl font-display font-bold text-blue-season mb-6">Overview & Experience</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="text-lg leading-relaxed mb-4">
                    A Sunset Dhow Cruise is one of the best and most romantic activities to do during your Zanzibar
                    holiday. Experience the breathtaking coastal views in the evening while sailing on a traditional
                    Arabian dhow—a memorable way to spend time with your loved ones.
                  </p>
                  <p className="text-lg leading-relaxed">We offer daily sunset cruises departing from:</p>
                  <ul className="list-disc pl-6 text-lg space-y-2">
                    <li>Stone Town</li>
                    <li>Nungwi Beach</li>
                    <li>Kendwa Beach</li>
                  </ul>
                </div>
              </div>

              {/* Highlights Section */}
              <div>
                <h2 className="text-3xl font-display font-bold text-blue-season mb-6">What You Will Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-l-4 border-golden">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg text-blue-season mb-2">Sunset Views</h3>
                      <p className="text-gray-600">
                        Witness the lovely, vibrant sunset from the water, the best way to view the coasts of Stone
                        Town, Kendwa, and Nungwi.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-golden">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg text-blue-season mb-2">Traditional Sailing</h3>
                      <p className="text-gray-600">Sail aboard an authentic wooden traditional Arabian Dhow.</p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-golden">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg text-blue-season mb-2">Local Delights</h3>
                      <p className="text-gray-600">
                        Enjoy delicious, locally prepared snacks and refreshing drinks included in the trip.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-golden">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg text-blue-season mb-2">Entertainment</h3>
                      <p className="text-gray-600">Experience a Traditional Music Performance while sailing.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Inclusions Section */}
              <div>
                <h2 className="text-3xl font-display font-bold text-blue-season mb-6">Tour Inclusions</h2>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-blue-season mb-4">Cruise Pricing</h3>
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6">
                      <p className="text-gray-700">Please contact us for current cruise pricing based on your group size and hotel location.</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <p className="text-lg font-semibold text-blue-season mb-4">
                      The cruise price is comprehensive and includes:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Services of an English-Speaking Guide",
                        "Sailing on a Traditional Dhow Boat",
                        "Locally prepared snacks and drinks",
                        "Traditional Music Performance",
                        "All government taxes and fees",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-golden flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* History Section */}
              <div>
                <h2 className="text-3xl font-display font-bold text-blue-season mb-6">Explore the Traditional Dhow</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="text-lg leading-relaxed mb-4">
                    The history of these traditional dhows dates back many centuries when Arab and Indian merchants
                    began exploring East Africa for trade and religion, relying on the monsoon winds for transport.
                  </p>
                  <p className="text-lg leading-relaxed">
                    On this tour, you will experience this perfect, traditional method of sailing. Today, these dhows
                    are still used by locals to travel and import different commodities between the Zanzibar Islands and
                    the Tanzania mainland.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-2 border-golden shadow-xl">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-blue-season mb-2">Book This Experience</h3>
                    <div className="text-2xl font-bold text-golden mb-2">Contact for Pricing</div>
                    <p className="text-gray-600 text-sm">per person</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>Evening departure</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>2-20 people</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>Multiple departure points</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t space-y-3">
                    <BookingModal
                      tourName="Sunset Dhow Cruise"
                      trigger={
                        <Button className="w-full bg-golden hover:bg-golden/90 text-white font-semibold py-6 text-lg">
                          BOOK VIA WHATSAPP
                        </Button>
                      }
                    />
                    <Link href="/contact" className="block">
                      <Button
                        variant="outline"
                        className="w-full border-blue-season text-blue-season hover:bg-blue-season hover:text-white py-6 bg-transparent"
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-xs text-gray-500 text-center">
                      Available daily from Stone Town, Nungwi, and Kendwa Beach
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready for a Romantic Evening?</h2>
          <p className="text-xl text-white mb-8">
            Experience the magic of Zanzibar's sunset from the water on a traditional dhow cruise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal
              tourName="Sunset Dhow Cruise"
              trigger={
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8">
                  Book Now on WhatsApp
                </Button>
              }
            />
            <Link href="/zanzibar">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-ocean bg-transparent"
              >
                View All Tours
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
