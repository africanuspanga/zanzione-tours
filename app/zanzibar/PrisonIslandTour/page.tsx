import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Users, Star, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import ScrollToTop from "@/components/scroll-to-top"
import BookingModal from "@/components/booking-modal"

export const metadata: Metadata = {
  title: "Prison Island Tour - Meet Giant Tortoises | ZANZIONE TOURS",
  description:
    "Visit Changuu Island (Prison Island) and meet giant Aldabra tortoises over 100 years old. Half-day boat trip with swimming and relaxation on beautiful beaches.",
}

export default function PrisonIslandTourPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image src="/images/tours/prison-island.jpg" alt="Prison Island Tour" fill className="object-cover" priority />
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
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Prison Island Tour (Changuu Island)
              </h1>
              <p className="text-2xl text-white/90 mb-8">Meet the Giant Tortoises & Relax on the Beach</p>
              <div className="flex flex-wrap gap-4 text-white">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5" />
                  <span>Half Day</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Users className="w-5 h-5" />
                  <span>2-15 People</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <MapPin className="w-5 h-5" />
                  <span>Changuu Island</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
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
                    Prison Island, also known as Changuu Island, is located a short 25-minute traditional boat ride from
                    Stone Town's beach. Originally named after the coral stone (Changuu), the island's main attraction
                    today is the colony of massive Aldabra Giant Tortoises.
                  </p>
                  <p className="font-semibold text-blue-season">
                    This half-day tour, led by our expert local guide, allows you to:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-golden flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Meet the Giants:</strong> Explore the sanctuary and learn the history of the popular
                        Giant Tortoises, which can live up to 200 years (the oldest is estimated at 196 years old!)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-golden flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Feed the Tortoises:</strong> Get up close and personal with these magnificent creatures
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-golden flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Relaxation:</strong> After learning the island's history, you will have time to enjoy
                        swimming, sunbathing, and relaxing on the beautiful beach
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Getting There */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-season">Getting There</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    The trip to the island involves a scenic ride in a local wooden boat from Stone Town beach.
                  </p>
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
                        "Expert Local Guide: Services of a licensed guide (available in English, French, German, and Italian)",
                        "Entrances: All required entrance fees to the island/sanctuary",
                        "Boat Transfer: Round-trip transport via a local boat",
                        "Refreshments: Drinking water",
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
                      <strong>TRANSPORT IS EXCLUDED:</strong> The displayed price is exclusive of transport costs
                      between your hotel and Stone Town. The final price depends on your hotel's specific location.
                      Please contact us and we will provide you with the full, final price based on your accommodation
                      details.
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
                  <p className="font-semibold text-lg text-blue-season">Experience Zanzibar with a Local</p>
                  <p>All of our guides are licensed locals, born and raised in Zanzibar.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-golden flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Deep Knowledge:</strong> They provide deep, firsthand knowledge of the island's
                        fascinating past—from its history to its vibrant Swahili culture and diverse marine life—which
                        goes beyond any guidebook
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-golden flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Insider Access:</strong> We believe only locals can truly show you Zanzibar as it is
                        meant to be experienced, providing unique stories and personal connections
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-golden flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Multi-Lingual:</strong> Guides are available who speak English, French, German, and
                        Italian. Please request your preferred language when booking to ensure a comfortable and
                        engaging experience
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-xl">
                <CardHeader className="bg-white">
                  <CardTitle className="text-2xl text-gray-900">Book This Tour</CardTitle>
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

                  <div className="border-t pt-6 space-y-4">
                    <BookingModal
                      tourName="Prison Island Tour"
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

                  <p className="text-xs text-gray-500 text-center">
                    Book now and pay later. Free cancellation up to 24 hours before the tour.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Meet the Giant Tortoises?</h2>
          <p className="text-xl text-white mb-8">
            Experience the wonder of Prison Island and meet these magnificent creatures over 100 years old.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal
              tourName="Prison Island Tour"
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
