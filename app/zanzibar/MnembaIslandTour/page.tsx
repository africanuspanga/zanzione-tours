import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, MapPin, Check, AlertCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import BookingModal from "@/components/booking-modal"

export const metadata: Metadata = {
  title: "Mnemba Island Snorkeling Tour - Best Snorkeling in Zanzibar | ZANZIONE TOURS",
  description:
    "Dive into Zanzibar's best snorkeling spot at Mnemba Island. Explore pristine coral reefs, swim with tropical fish, green turtles, and spot dolphins in this protected marine sanctuary.",
}

export default function MnembaIslandTourPage() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/images/tours/mnemba-island.jpg"
          alt="Mnemba Island Snorkeling Tour"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
                Mnemba Island Snorkeling Tour
              </h1>
              <p className="text-xl md:text-2xl text-white/90">Dive into Zanzibar's Best Snorkeling Spot</p>
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
              <span>Half Day</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>2-12 people</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Northeast Coast (Matemwe/Muyuni)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-golden font-bold text-xl">Contact for Pricing</span>
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
                    Mnemba Island (sometimes called Mnemba Atoll) is renowned as one of the very best snorkeling spots
                    in all of Zanzibar. Located off the northeast coast, this day trip is the easiest way to explore a
                    truly spectacular underwater world.
                  </p>
                  <ul className="list-disc pl-6 text-lg space-y-2 mb-4">
                    <li>
                      <strong>Marine Paradise:</strong> Fishing is strictly forbidden near Mnemba Island, creating a
                      thriving barrier reef ecosystem brimming with life.
                    </li>
                    <li>
                      <strong>What to See:</strong> The underwater world is spectacular! You will snorkel with countless
                      colorful tropical fish, sea creatures, and corals, including Starfishes, Moorish Idols, Snappers,
                      and Green Turtles.
                    </li>
                    <li>
                      <strong>Bonus Sightings:</strong> Occasionally, you might be lucky enough to spot dolphins during
                      the trip!
                    </li>
                  </ul>
                </div>
              </div>

              {/* About Mnemba */}
              <div>
                <h2 className="text-3xl font-display font-bold text-blue-season mb-6">About Mnemba Island</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Mnemba is a small private island located about 3 km off Matemwe Beach on the northeast coast of
                    Unguja (Zanzibar's main island). The island is surrounded by an oval reef, making it a conserved
                    area for marine creatures and an ideal spot for snorkeling and scuba diving.
                  </p>
                </div>
              </div>

              {/* Inclusions Section */}
              <div>
                <h2 className="text-3xl font-display font-bold text-blue-season mb-6">Tour Inclusions</h2>

                <Card className="bg-blue-50 border-blue-200 mb-6">
                  <CardContent className="p-6">
                    <p className="text-lg font-semibold text-blue-season mb-4">Tour Pricing:</p>
                    <Card className="bg-blue-50 border-blue-200 mb-4">
                      <CardContent className="p-6">
                        <p className="text-gray-700">Please contact us for current pricing.</p>
                      </CardContent>
                    </Card>
                    <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded">
                      <p className="text-sm text-gray-600">
                        <strong>Note:</strong> Transport costs to the departure point are excluded. Contact us with your hotel location for the final price.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <p className="text-lg font-semibold text-blue-season mb-4">The tour price includes:</p>
                    <ul className="space-y-3">
                      {[
                        "Services of an English-Speaking Guide",
                        "Transfer via a Local Boat",
                        "Snorkeling Equipment",
                        "Tropical Fruits (Mangoes, Bananas, Pineapple, Watermelon, etc.)",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-golden flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-blue-200">
                      <p className="text-sm text-gray-600">
                        <strong>Lunch Option (Extra Cost):</strong> Seafood BBQ Lunch (Octopus, Lobsters, Squids,
                        Prawns, etc.) is available at an extra cost.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Important Note */}
              <div>
                <h2 className="text-3xl font-display font-bold text-blue-season mb-6">Important Note on Pricing</h2>
                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="p-6 flex gap-4">
                    <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-900 mb-2">TRANSPORT IS EXCLUDED</p>
                      <p className="text-gray-700 leading-relaxed">
                        The displayed price is <strong>exclusive of transport costs</strong> to the departure point
                        (usually Matemwe/Muyuni). Please contact us with your hotel location, and we will provide you
                        with the full, final price including hotel transfers.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Booking Section */}
              <div>
                <h2 className="text-3xl font-display font-bold text-blue-season mb-6">Book Your Mnemba Adventure!</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="text-lg leading-relaxed mb-4">
                    If you are looking for the best snorkeling experience in Zanzibar, look no further. Snorkeling near
                    Mnemba is "insane" due to the high density of colorful fish species and healthy corals.
                  </p>
                  <ul className="list-disc pl-6 text-lg space-y-2">
                    <li>
                      <strong>Simple Booking:</strong> Booking is simple, just contact us today! We are happy to receive
                      bookings well in advance.
                    </li>
                    <li>
                      <strong>Contact:</strong> Use the "Ask on WhatsApp" button for immediate questions or to finalize
                      your booking details.
                    </li>
                  </ul>
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
                    <p className="text-gray-600 text-sm">per person (transport extra)</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>Half Day</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>2-12 people</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>Matemwe/Muyuni</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t space-y-3">
                    <BookingModal
                      tourName="Mnemba Island Snorkeling Tour"
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
                      Contact us for final pricing including hotel transfers
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
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Explore the Underwater Paradise?
          </h2>
          <p className="text-xl text-white mb-8">
            Experience Zanzibar's best snorkeling at Mnemba Island's protected marine sanctuary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal
              tourName="Mnemba Island Snorkeling Tour"
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
