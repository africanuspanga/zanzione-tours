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
  title: "Zanzibar Spice Farm Tour - Experience the Spice Island | ZANZIONE TOURS",
  description:
    "Discover why Zanzibar is the Spice Island. Half-day walking tour through spice plantations to taste, smell, and learn about turmeric, cardamom, cinnamon, cloves, and nutmeg. Includes spiced rice lunch.",
  alternates: {
    canonical: "https://www.zanzionetours.com/zanzibar/spice-farm",
  },
}

export default function SpiceFarmPage() {
  const whatsappNumber = "255710885320"
  const whatsappMessage = encodeURIComponent(
    "Hi, I'm interested in booking the Spice Farm Tour. Can you provide more details?"
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <Image
          src="/images/tours/spice-tour.jpg"
          alt="Zanzibar Spice Farm Tour"
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
            Zanzibar Spice Farm Tour
          </h1>
          <p className="text-xl sm:text-2xl mb-6">Experience, Taste, and Smell the Spice Island</p>
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
                Zanzibar is famously known as the <strong>"Spice Island"</strong> due to its rich cultivation of various
                spices. Join us for an approximate <strong>2-hour walking trip</strong> with an expert local guide to
                dive into the world of tropical fruits and spices.
              </p>

              <div className="bg-golden/10 border-l-4 border-golden p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-season mb-3">What You Will Experience</h3>
                <p className="text-gray-600 mb-4">This tour is a feast for the senses, allowing you to:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Explore Nature:</strong> Enjoy a unique walk through the rainforest-like environment with
                      tropical plants and trees
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Taste and Smell:</strong> Experience, taste, and smell numerous spices grown in Zanzibar,
                      including Turmeric, Cardamom, Cinnamon, Black Pepper, Cloves, and Nutmegs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Cultural Experience:</strong> Learn more about the local culture and traditions surrounding
                      these valuable herbs and spices
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Refreshments:</strong> Drink fresh coconut juice directly from the local farm
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Lunch & Shopping:</strong> The tour concludes with a delicious Spiced Rice (Pilau) Lunch
                      paired with tropical fruits. You will also have the opportunity to buy fresh spices at the farm
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
                    <span>
                      Expert Local Guide: Services of a licensed guide (available in English, French, German, and Italian)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Entrances: All required entrance fees to the farm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Lunch: Spiced Rice Pilau lunch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Refreshments: Tropical fruits and coconut juice</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
                <h4 className="font-semibold text-amber-900 mb-2">Important Note on Pricing</h4>
                <p className="text-amber-800">
                  Please be aware that the price for this tour does <strong>not</strong> include transportation costs.
                  Since the final price depends on your hotel's location, kindly reach out to us, and we will provide you
                  with the full price based on your accommodation details.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-season/10 to-golden/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-season mb-3">Meet Your Local Guide</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Experience Zanzibar like a Local:</strong> Book your half-day tour today and be guided by a
                  professional Zanzibari local.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">•</span>
                    <span>
                      <strong>Spice Experts:</strong> All our local guides are from Zanzibar and have deep, firsthand
                      knowledge of the spices and their traditional uses, which they are passionate about sharing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">•</span>
                    <span>
                      <strong>Insider Access:</strong> We believe that only locals can truly show you Zanzibar as it is
                      meant to be experienced, providing unique insights that enhance your journey
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">•</span>
                    <span>
                      <strong>Multi-Lingual:</strong> Guides are skilled in multiple languages, including English, French,
                      German, and Italian
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
                      <span>Half Day (2-3 hours)</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Users className="w-5 h-5 text-blue-season flex-shrink-0" />
                      <span>2-15 People</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-blue-season flex-shrink-0" />
                      <span>Local Spice Farms</span>
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
            Ready to Discover the Spice Island?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Book your Spice Farm tour today and experience the aromatic journey through Zanzibar's spice plantations.
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
