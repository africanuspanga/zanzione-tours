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
  title: "Nakupenda Sandbank Trip - Swim & Snorkel Paradise | ZANZIONE TOURS",
  description:
    "Visit Nakupenda 'I Love You' Sandbank near Stone Town. Half-day tour with snorkeling, seafood BBQ lunch, tropical fruits, and pristine white sand beaches. Listed among Africa's best beaches.",
  alternates: {
    canonical: "https://www.zanzionetours.com/zanzibar/nakupenda-sandbank",
  },
}

export default function NakupendaSandbankPage() {
  const whatsappNumber = "255710885320"
  const whatsappMessage = encodeURIComponent(
    "Hi, I'm interested in booking the Nakupenda Sandbank Trip. Can you provide more details?"
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <Image
          src="/images/tours/nakupenda-sandbank.jpg"
          alt="Nakupenda Sandbank Trip"
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
            Nakupenda Sandbank Trip
          </h1>
          <p className="text-xl sm:text-2xl mb-6">Swim, Snorkel, and Relax on the "I Love You" Sandbank</p>
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
                The Nakupenda Sandbank is a pristine slice of paradise located just 20 minutes from Stone Town via a
                traditional local boat. The name "Nakupenda" translates to <strong>"I Love You"</strong> in English,
                making it the perfect spot for honeymooners and romantics, and it has been listed among Africa's best
                beaches by Travelers' Choice awards.
              </p>

              <div className="bg-golden/10 border-l-4 border-golden p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-season mb-3">What You Will Experience</h3>
                <p className="text-gray-600 mb-4">
                  This is the ultimate sea and sun escape, offering a spectacular mix of relaxation and marine adventure:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Snorkeling Adventure:</strong> Explore the unbelievably spectacular underwater world.
                      Snorkeling equipment (masks) will be provided to discover countless colorful fish, coral reefs, and
                      other sea creatures
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Sandbank Relaxation:</strong> Enjoy sunbathing, swimming, and simply relaxing on the white
                      sands of the sandbank
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Gourmet Lunch:</strong> Indulge in a delicious Seafood BBQ Lunch featuring fresh catch like
                      Octopus, Lobsters, Squids, and Prawns, with Chicken or Vegetarian options also available
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Tropical Treats:</strong> Enjoy seasonal tropical fruits such as Banana, Pineapple, Mangoes,
                      and Watermelon
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-display font-bold text-blue-season mb-4">Tour Details & Inclusions</h3>
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-blue-season mb-3">The tour price is comprehensive and includes:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Guide: Services of an English-Speaking Guide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Transport: Round-trip boat transfer in a local traditional wooden boat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Equipment: Swimming/snorkeling gear</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden mt-1">✓</span>
                    <span>Lunch: Seafood BBQ Lunch (Chicken and Vegetarian options available)</span>
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
                  This tour is very accessible from Stone Town's coast. If you are staying in Stone Town, you may{" "}
                  <strong>not</strong> need to pay for additional transport costs to the departure point. For guests
                  staying outside Stone Town, please inquire for the full price including transfer fees.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-season/10 to-golden/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-season mb-3">Visit Nakupenda Today!</h3>
                <p className="text-gray-600">
                  Visiting Nakupenda Sandbank is one of the most enjoyable things you can do during your Zanzibar
                  vacation. It provides stunning views and romantic vibes that make it truly worth the trip.
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
                      <span>Half Day (4-5 hours)</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Users className="w-5 h-5 text-blue-season flex-shrink-0" />
                      <span>4-20 People</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-blue-season flex-shrink-0" />
                      <span>20 mins from Stone Town</span>
                    </div>
                  </div>

                  <BookingModal 
                    tourName="Nakupenda Sandbank Trip" 
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
            Ready to Experience Paradise?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Book your Nakupenda Sandbank trip today and create unforgettable memories in one of Africa's most beautiful
            locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal 
              tourName="Nakupenda Sandbank Trip" 
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
