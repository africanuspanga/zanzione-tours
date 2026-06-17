import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import BookingModal from "@/components/booking-modal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Users, Star, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Stone Town Walking Tour - UNESCO World Heritage Site | ZANZIONE TOURS",
  description:
    "Explore Zanzibar's UNESCO World Heritage Site with expert local guides. Discover historic landmarks, bustling markets, and Swahili culture in a half-day walking tour.",
}

export default function StoneTownTourPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="/images/tours/stone-town-tour.jpg"
          alt="Stone Town Walking Tour"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-golden text-golden" />
                  ))}
                </div>
                <span className="text-white font-semibold">5-Star Rated</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">Stone Town Walking Tour</h1>
              <p className="text-2xl text-white/90 mb-8">
                Explore Zanzibar's UNESCO World Heritage Site with a Local Expert
              </p>
              <div className="flex flex-wrap gap-4 text-white">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5" />
                  <span>Half Day</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Users className="w-5 h-5" />
                  <span>2-12 People</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <MapPin className="w-5 h-5" />
                  <span>Stone Town</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Tour Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl text-blue-season">Overview & Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Stone Town is the oldest living Swahili town in East Africa and was designated a UNESCO World
                    Heritage Site in 2000. Join our expert, licensed local guide to discover the heart and soul of
                    Zanzibar, learning about its rich history, unique architecture, and vibrant Swahili culture.
                  </p>
                  <p>
                    Our tour is conducted in the most requested languages (English, French, German, Italian) to ensure
                    you fully enjoy the beauty of Stone Town.
                  </p>
                </CardContent>
              </Card>

              {/* Highlights */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-season">What You Will See</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6">
                    Your half-day tour covers the most important historical and cultural sites:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "House of Wonders",
                      "Sultans' Palace",
                      "Freddie Mercury House",
                      "Darajani Market",
                      "Fish Auction",
                      "Former Slave Market & Monuments",
                      "Famous Narrow Streets",
                      "Photography Opportunities",
                    ].map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-golden flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tour Pricing */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-season">Tour Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">Please contact us for current pricing.</p>
                  <p className="text-sm text-gray-600 italic">
                    Prices vary by group size and exclude transportation costs from your hotel.
                  </p>
                </CardContent>
              </Card>

              {/* Tour Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-season">Tour Details & Inclusions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg text-blue-season mb-3">The tour price includes:</h3>
                    <ul className="space-y-2">
                      {[
                        "Expert Local Guide: Services of a licensed guide available in English, French, German, and Italian",
                        "Entrance Fees: Admission to the Former Slave Market",
                        "Refreshments: Drinking water",
                        "Fees: All government taxes and fees",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-golden flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                    <h3 className="font-semibold text-amber-900 mb-2">Important Note on Pricing</h3>
                    <p className="text-amber-800 text-sm">
                      <strong>TRANSPORT IS EXCLUDED:</strong> The price displayed is exclusive of transport costs. The
                      final price depends on the location of your Hotel. Please reach out to us and we will provide you
                      with the full, final price based on your accommodation.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Local Guide Focus */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-season">Meet Your Local Guide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="font-semibold text-lg text-blue-season">Authentic Experience</p>
                  <p>
                    We exclusively use licensed Zanzibari local tour guides. We believe they possess the best knowledge
                    of the island and can provide you with insider access and historical context that enables you to{" "}
                    <strong>experience Stone Town like a local.</strong>
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-xl overflow-hidden">
                <CardHeader className="bg-white text-gray-900 p-6">
                  <CardTitle className="text-2xl">Book This Tour</CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-2xl font-bold text-golden">Contact for Pricing</span>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-golden">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-golden" />
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>5-Star Rated</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Best Price Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Easy Online Booking</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    Book now and pay later. Free cancellation up to 24 hours before the tour.
                  </p>

                  <div className="border-t pt-6 space-y-4">
                    <BookingModal
                      tourName="Stone Town Walking Tour"
                      trigger={
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6">
                          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          BOOK VIA WHATSAPP
                        </Button>
                      }
                    />
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className="w-full border-blue-season text-blue-season hover:bg-blue-season hover:text-white py-6 bg-transparent"
                      >
                        Request Custom Quote
                      </Button>
                    </Link>
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
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Explore Stone Town?</h2>
          <p className="text-xl text-white mb-8">
            Book your Stone Town walking tour today and discover the heart of Zanzibar with our expert local guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal
              tourName="Stone Town Walking Tour"
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
