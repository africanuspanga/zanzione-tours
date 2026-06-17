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
  title: "Mikumi Day Trip Safari from Zanzibar | ZANZIONE TOURS",
  description:
    "Experience incredible wildlife in Mikumi National Park on this day trip from Zanzibar. Round-trip flights included. Spot lions, elephants, giraffes, zebras, and more in Tanzania's accessible park.",
}

export default function MikumiDayTripPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mikumi-bxYBdPwmmPNbzzdU2RvasPGdoZnptH.jpg"
          alt="Mikumi National Park Safari"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 text-balance">
            Mikumi Day Trip Safari from Zanzibar
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-base sm:text-lg">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>1 Day</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Mikumi National Park</span>
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
                    Escape to the heart of wild Africa with our Mikumi Park Safari day trip from Zanzibar, a thrilling
                    adventure that combines the convenience of a day trip with the rich biodiversity of Mikumi National
                    Park and you will be back to Zanzibar in the evening.
                  </p>
                  <p>
                    Mikumi is located just a short flight from Zanzibar, around 50 minutes flight time, this journey
                    promises a day of remarkable wildlife encounters, picturesque landscapes, and unforgettable memories.
                    In this trip, you will find Giraffe, Elephants, Wildebeest, big cats like Lions, Zebra, African
                    Buffalo and many other wild animals.
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
                        Your day begins with an early morning flight from Zanzibar to Mikumi National Park, ensuring you
                        make the most of your day. Our driver will pick up from your Hotel in Zanzibar to Zanzibar
                        Airport.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-l-4 border-l-golden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-blue-season mb-2">
                        Arrival at Zanzibar Airport (6:00 AM)
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Once you arrive at the Airport, you will check in and take your flight to Mikumi National Park.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-l-4 border-l-golden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-blue-season mb-2">
                        Arrival at Mikumi National Park (7:20 AM)
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Upon arrival at Mikumi, your experienced guide will lead you on a safari game drive through the
                        park. Mikumi is home to a wide range of animals, including lions, elephants, zebras, giraffes,
                        and an array of bird species. Be prepared to witness the wonders of the African wilderness up
                        close.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-l-4 border-l-golden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-blue-season mb-2">Lunch Amidst Nature</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Enjoy your delicious lunch served amidst the beauty of the park, allowing you to relax and
                        refuel before continuing your Safari adventure.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-l-4 border-l-golden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-blue-season mb-2">Return to Zanzibar</h3>
                      <p className="text-gray-600 leading-relaxed">
                        After a day filled with exploration and wildlife encounters, you'll catch an evening flight back
                        to Zanzibar, bringing your Mikumi Day Trip to a satisfying conclusion. Mikumi's landscapes are
                        stunning, with vast plains, acacia woodlands, and the magical backdrop of the Uluguru Mountains.
                        Don't forget your camera; there are countless photo opportunities.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* About Mikumi */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-season mb-4">
                  About Mikumi National Park
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Mikumi National Park, the fourth-largest national park in Tanzania, is not only renowned for its
                    size but is also the most accessible from Zanzibar. For travelers with limited time in Tanzania,
                    Mikumi offers an excellent safari experience with its confirmed wildlife sightings. Even a two-day
                    visit provides a chance to bask in the splendor of this remarkable park.
                  </p>
                  <p>
                    Since the construction of a highway connecting Mikumi National Park to Dar es Salaam, this park has
                    emerged as a prominent hotspot for the country's tourism industry. Nestled between the Uluguru
                    Mountains and the Lumango Range, Mikumi stands as an easily accessible destination, just a short
                    drive from Zanzibar and those who are from Dar es Salaam.
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
                      tourName="Mikumi Day Trip Safari"
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
                        "Roundtrip flight from Zanzibar to Mikumi",
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
            Book your Mikumi day trip today and experience Tanzania's incredible wildlife in comfort and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal 
              tourName="Mikumi Day Trip Safari" 
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
