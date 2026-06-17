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
  title: "3 Days Serengeti Safari & Hot Air Balloon from Zanzibar | ZANZIONE TOURS",
  description:
    "Ultimate Serengeti adventure with hot air balloon safari at sunrise. Witness wildlife from the sky, enjoy game drives, night safari, and bush breakfast. Unforgettable 3-day package from Zanzibar.",
}

export default function SerengetiBalloonSafariPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/serengeti-VUxSGtAmLFsVZH7cx67afMN8rT2oBn.jpg"
          alt="Serengeti Hot Air Balloon Safari"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 text-balance">
            3 Days Serengeti Safari & Hot Air Balloon from Zanzibar
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-base sm:text-lg">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>3 Days / 2 Nights</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Serengeti National Park</span>
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
                    Join our 3 days safari to Serengeti National Park which starts from Zanzibar, this safari is filled
                    with unforgettable wildlife encounters and a unique hot air balloon experience. From exciting game
                    drives through the endless plains to the rare opportunity of viewing the Serengeti from the sky,
                    this safari offers a once-in-a-lifetime adventure.
                  </p>
                  <p>
                    Discover the park's diverse ecosystems, observe the Big Five, and enjoy both day and night
                    explorations in this breathtaking African wilderness.
                  </p>
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-season mb-6">Itinerary</h2>
                <div className="space-y-6">
                  <Card className="overflow-hidden border-l-4 border-l-golden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-blue-season mb-2">
                        Day 1: Arrival & Start Serengeti Safari
                      </h3>
                      <ul className="space-y-2 text-gray-600 leading-relaxed">
                        <li>• Early morning pick-up from your hotel in Zanzibar</li>
                        <li>
                          • Transfer to Zanzibar Airport for a domestic flight to Serengeti, Seronera airstrip
                        </li>
                        <li>
                          • Upon arrival, embark on a thrilling safari game drive in the world-famous Serengeti, where
                          you'll encounter lions, elephants, zebras, and more
                        </li>
                        <li>• Enjoy a mid-morning coffee/tea break and a picnic lunch in the heart of the wilderness</li>
                        <li>• Late afternoon arrival at Africa Safari Serengeti Ikoma</li>
                        <li>
                          • After an early dinner, prepare for an exciting night game drive, where you'll experience the
                          Serengeti's nocturnal wildlife in action
                        </li>
                        <li>• Overnight at Africa Safari Serengeti Ikoma with full board (FB) services</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-l-4 border-l-golden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-blue-season mb-2">Day 2: Full-Day Serengeti Safari</h3>
                      <ul className="space-y-2 text-gray-600 leading-relaxed">
                        <li>
                          • Enjoy a leisurely breakfast before setting off for another exciting day of game driving in a
                          different area of the Serengeti, where new wildlife and landscapes await
                        </li>
                        <li>• Take a mid-morning coffee/tea break and a picnic lunch while out on safari</li>
                        <li>
                          • Return to your accommodation in the late afternoon for some relaxation before dinner
                        </li>
                        <li>• Overnight at Africa Safari Serengeti Ikoma, with full board services</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-l-4 border-l-golden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-blue-season mb-2">
                        Day 3: Serengeti Hot Air Balloon Safari & Return
                      </h3>
                      <ul className="space-y-2 text-gray-600 leading-relaxed">
                        <li>
                          • Early morning pick-up for a magical hot air balloon safari over the Serengeti. Soar above
                          the plains at sunrise, witnessing wildlife from a unique and breathtaking perspective
                        </li>
                        <li>
                          • After landing, enjoy a bush breakfast in the Serengeti, soaking in the atmosphere of the
                          wild
                        </li>
                        <li>• Transfer back to the Seronera airstrip for your flight to Zanzibar</li>
                        <li>• Upon arrival in Zanzibar, transfer to your hotel</li>
                      </ul>
                    </CardContent>
                  </Card>
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
                      tourName="3 Days Serengeti Safari & Hot Air Balloon"
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
                        "Roundtrip flight from Zanzibar to Arusha",
                        "All Park fees",
                        "All activities",
                        "Bush lunch",
                        "Professional driver/guide",
                        "Safari Jeep (open car)",
                        "Pick up / Drop off",
                        "Accommodation",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Ready for the Ultimate Serengeti Experience?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Book your Serengeti safari with hot air balloon today and experience the park from both land and sky in this once-in-a-lifetime adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal 
              tourName="3 Days Serengeti Safari & Hot Air Balloon" 
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
