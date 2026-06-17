import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, MapPin, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import ScrollToTop from "@/components/scroll-to-top"
import BookingModal from "@/components/booking-modal"

export const metadata: Metadata = {
  title: "Kizimkazi Wild Dolphin Tour - Swim with Dolphins in Zanzibar | ZANZIONE TOURS",
  description:
    "Witness and swim with wild dolphins on Zanzibar's South Coast. Enjoy a unique 3-hour experience in Kizimkazi, spotting and swimming with dolphins in their natural habitat.",
}

export default function KizimkaziDolphinsTourPage() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/images/tours/kizimkazi-dolphin.jpg"
          alt="Kizimkazi Wild Dolphin Tour"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
                Kizimkazi Wild Dolphin Tour
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Witness and Swim with Wild Dolphins on Zanzibar's South Coast
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
              <span>3 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>2-12 people</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Kizimkazi, South Coast</span>
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
                    This is an amazing and unique 3-hour experience located in Kizimkazi, the famous home of dolphins on
                    the south coast of Zanzibar. You will set out on a traditional local boat to witness schools of wild
                    dolphins in their natural habitat, leaping and playing in the clear blue ocean.
                  </p>
                </div>
              </div>

              {/* Highlights Section */}
              <div>
                <h2 className="text-3xl font-display font-bold text-blue-season mb-6">What You Will Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-l-4 border-golden">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg text-blue-season mb-2">Dolphin Spotting</h3>
                      <p className="text-gray-600">
                        Cruise out to the open ocean from the quaint Kizimkazi fishing village.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-golden">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg text-blue-season mb-2">Swimming with Dolphins</h3>
                      <p className="text-gray-600">
                        If you are lucky and conditions allow, you will have the unique opportunity to jump in and swim
                        alongside these beautiful wild creatures.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-golden">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg text-blue-season mb-2">Local Boat</h3>
                      <p className="text-gray-600">
                        Travel on a locally made wooden boat, which is part of the traditional Zanzibar experience.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-golden">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg text-blue-season mb-2">Refreshments</h3>
                      <p className="text-gray-600">Enjoy delicious tropical fruits included in your trip.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Inclusions Section */}
              <div>
                <h2 className="text-3xl font-display font-bold text-blue-season mb-6">Tour Inclusions</h2>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-blue-season mb-4">Tour Pricing</h3>
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6">
                      <p className="text-gray-700">Please contact us for current pricing based on your group size.</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <p className="text-lg font-semibold text-blue-season mb-4">
                      The tour price is comprehensive and includes:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Services of an English-Speaking Guide",
                        "Boat transfer",
                        "Swimming/snorkeling equipment",
                        "Tropical Fruits",
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

              {/* Important Note */}
              <div>
                <h2 className="text-3xl font-display font-bold text-blue-season mb-6">Important Logistics Note</h2>
                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      This tour is located on the South Coast of Zanzibar in Kizimkazi village. Please note that
                      transportation costs to and from your hotel to Kizimkazi are typically not included in the base
                      price and will depend on your hotel's location.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Visit Section */}
              <div>
                <h2 className="text-3xl font-display font-bold text-blue-season mb-6">Visit Kizimkazi Today!</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="text-lg leading-relaxed">
                    This tour offers a chance to connect with Zanzibar's marine life in a way few other experiences can.
                    Don't miss the opportunity to witness wild dolphins in their element.
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
                      <span>3 hours</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>2-12 people</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>Kizimkazi, South Coast</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t space-y-3">
                    <BookingModal
                      tourName="Kizimkazi Wild Dolphin Tour"
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
                      Contact us on WhatsApp for hotel transfer arrangements
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
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Meet the Dolphins?</h2>
          <p className="text-xl text-white mb-8">
            Experience the thrill of swimming with wild dolphins in their natural habitat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal
              tourName="Kizimkazi Wild Dolphin Tour"
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
