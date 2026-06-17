import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock, Users, MapPin, CheckCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prison Island Tour - Giant Tortoises & Beach Relaxation | ZANZIONE TOURS",
  description:
    "Visit Prison Island (Changuu Island) to meet 200-year-old Giant Aldabra Tortoises. Half-day tour from Stone Town includes boat transfer, tortoise sanctuary, swimming, and beach time.",
  alternates: {
    canonical: "https://www.zanzionetours.com/zanzibar/prison-island",
  },
}

export default function PrisonIslandPage() {
  const whatsappNumber = "255710885320"
  const whatsappMessage = encodeURIComponent(
    "Hi, I'm interested in booking the Prison Island Tour. Can you provide more details?"
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <Image
          src="/images/tours/prison-island.jpg"
          alt="Prison Island Tour"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-golden">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold mb-4 leading-tight">
            Prison Island Tour
          </h1>
          <p className="text-xl sm:text-2xl mb-6">Meet the Giant Tortoises & Relax on the Beach</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Half Day</span>
            </div>

          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-season mb-6">
                Overview & Experience
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Prison Island, also known as <strong>Changuu Island</strong>, is located a short 25-minute traditional
                boat ride from Stone Town's beach. Originally named after the coral stone (Changuu), the island's main
                attraction today is the colony of massive <strong>Aldabra Giant Tortoises</strong>.
              </p>

              <div className="bg-golden/10 border-l-4 border-golden p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-season mb-3">This half-day tour allows you to:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Meet the Giants:</strong> Explore the sanctuary and learn the history of the popular Giant
                      Tortoises, which can live up to 200 years (the oldest is estimated at 196 years old!)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Feed the Tortoises:</strong> Get up close and personal with these magnificent creatures
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Relaxation:</strong> After learning the island's history, you will have time to enjoy
                      swimming, sunbathing, and relaxing on the beautiful beach
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-blue-season mb-3">Getting There</h3>
                <p className="text-gray-600">
                  The trip to the island involves a scenic ride in a local wooden boat from Stone Town beach.
                </p>
              </div>

              <h3 className="text-2xl font-display font-bold text-blue-season mb-4">Tour Details & Inclusions</h3>
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-blue-season mb-3">The tour price includes:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Expert Local Guide: Services of a licensed guide (English, French, German, Italian)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Entrances: All required entrance fees to the island/sanctuary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Boat Transfer: Round-trip transport via a local boat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Refreshments: Drinking water</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
                <h4 className="font-semibold text-amber-900 mb-2">Important Note on Pricing</h4>
                <p className="text-amber-800">
                  <strong>TRANSPORT IS EXCLUDED:</strong> The displayed price is exclusive of transport costs between your
                  hotel and Stone Town. The final price depends on your hotel's specific location. Please contact us and
                  we will provide you with the full, final price based on your accommodation details.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-season/10 to-golden/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-season mb-3">Meet Your Local Guide</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Experience Zanzibar with a Local:</strong> All of our guides are licensed locals, born and
                  raised in Zanzibar.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">•</span>
                    <span>
                      <strong>Deep Knowledge:</strong> They provide deep, firsthand knowledge of the island's fascinating
                      past—from its history to its vibrant Swahili culture and diverse marine life—which goes beyond any
                      guidebook
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">•</span>
                    <span>
                      <strong>Insider Access:</strong> We believe only locals can truly show you Zanzibar as it is meant
                      to be experienced, providing unique stories and personal connections
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">•</span>
                    <span>
                      <strong>Multi-Lingual:</strong> Guides are available who speak English, French, German, and Italian
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-golden font-bold text-xl mb-2">Contact for Pricing</p>
                    <p className="text-gray-600 text-sm mb-2">Reach out for current rates</p>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      <div className="flex text-golden">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-1">5-Star Rated</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock className="w-5 h-5 text-blue-season flex-shrink-0" />
                      <span>Half Day (3-4 hours)</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Users className="w-5 h-5 text-blue-season flex-shrink-0" />
                      <span>2-15 People</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-blue-season flex-shrink-0" />
                      <span>25 mins from Stone Town</span>
                    </div>
                  </div>

                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-golden hover:bg-golden/90 text-white font-semibold py-6 text-lg mb-3">
                      BOOK VIA WHATSAPP
                    </Button>
                  </a>

                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="w-full border-blue-season text-blue-season hover:bg-blue-season hover:text-white font-semibold py-6 text-lg"
                    >
                      Contact Us
                    </Button>
                  </Link>

                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Best Price Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Easy Online Booking</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-blue-season text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Meet the Giant Tortoises?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Book your Prison Island tour today and experience one of Zanzibar's most unique wildlife encounters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-golden hover:bg-golden/90 text-white font-semibold px-8 py-6 text-lg">
                BOOK VIA WHATSAPP
              </Button>
            </a>
            <Link href="/zanzibar">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-season font-semibold px-8 py-6 text-lg bg-transparent"
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
