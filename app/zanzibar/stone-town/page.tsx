import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock, Users, MapPin, CheckCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import BookingModal from "@/components/booking-modal"

export const metadata: Metadata = {
  title: "Stone Town Walking Tour - UNESCO Heritage Site | ZANZIONE TOURS",
  description:
    "Explore Zanzibar's UNESCO World Heritage Stone Town with expert local guides. Half-day walking tour featuring historic sites, House of Wonders, Sultans' Palace, Freddie Mercury House, and bustling Darajani Market.",
  alternates: {
    canonical: "https://www.zanzionetours.com/zanzibar/stone-town",
  },
}

export default function StoneTownTourPage() {
  const whatsappNumber = "255710885320"
  const whatsappMessage = encodeURIComponent(
    "Hi, I'm interested in booking the Stone Town Walking Tour. Can you provide more details?"
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <Image
          src="/images/tours/stone-town-tour.jpg"
          alt="Stone Town Walking Tour"
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
            Stone Town Walking Tour
          </h1>
          <p className="text-xl sm:text-2xl mb-6">Explore Zanzibar's UNESCO World Heritage Site with a Local Expert</p>
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
                Stone Town is the oldest living Swahili town in East Africa and was designated a{" "}
                <strong>UNESCO World Heritage Site in 2000</strong>. Join our expert, licensed local guide to discover
                the heart and soul of Zanzibar, learning about its rich history, unique architecture, and vibrant Swahili
                culture.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our tour is conducted in the most requested languages (English, French, German, Italian) to ensure you
                fully enjoy the beauty of Stone Town.
              </p>

              <div className="bg-golden/10 border-l-4 border-golden p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-season mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  What You Will See
                </h3>
                <p className="text-gray-600 mb-4">
                  Your half-day tour covers the most important historical and cultural sites:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Historical Landmarks:</strong> House of Wonders, Sultans' Palace, Freddie Mercury House
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Cultural Hubs:</strong> Experience the bustling atmosphere of Darajani Market and witness
                      the local Fish Auction
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Historic Sites:</strong> Visit the Former Slave Market and its monuments
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Unique Experience:</strong> Navigate the famous narrow streets of Stone Town, perfect for
                      photography and random souvenir shopping
                    </span>
                  </li>
                </ul>
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
                    <span>Entrance Fees: Admission to the Former Slave Market</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Refreshments: Drinking water</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>All government taxes and fees</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
                <h4 className="font-semibold text-amber-900 mb-2">Important Note on Pricing</h4>
                <p className="text-amber-800">
                  <strong>TRANSPORT IS EXCLUDED:</strong> The price displayed is exclusive of transport costs. The final
                  price depends on the location of your hotel. Please reach out to us and we will provide you with the
                  full, final price based on your accommodation.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-season/10 to-golden/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-season mb-3">Meet Your Local Guide</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Authentic Experience:</strong> We exclusively use licensed Zanzibari local tour guides. We
                  believe they possess the best knowledge of the island and can provide you with insider access and
                  historical context that enables you to <strong>experience Stone Town like a local</strong>.
                </p>
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
                      <span>2-12 People</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-blue-season flex-shrink-0" />
                      <span>Stone Town, Zanzibar</span>
                    </div>
                  </div>

                  <BookingModal 
                    tourName="Stone Town Walking Tour" 
                    className="w-full bg-golden hover:bg-golden/90 text-white font-semibold py-6 text-lg mb-3"
                  />

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
            Ready to Explore Stone Town?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Book your Stone Town walking tour today and discover the heart of Zanzibar with our expert local guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal 
              tourName="Stone Town Walking Tour" 
              className="bg-golden hover:bg-golden/90 text-white font-semibold px-8 py-6 text-lg"
            />
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
