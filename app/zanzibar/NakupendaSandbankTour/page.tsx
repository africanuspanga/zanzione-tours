import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Star, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import BookingModal from "@/components/booking-modal"

export const metadata: Metadata = {
  title: "Nakupenda Sandbank Trip - Swim, Snorkel & Relax | ZANZIONE TOURS",
  description:
    "Experience the pristine 'I Love You' sandbank. 5-star rated tour with snorkeling, seafood BBQ, and crystal-clear waters. Book now with best price guarantee!",
  keywords: "Nakupenda sandbank, Zanzibar sandbank tour, snorkeling Zanzibar, seafood BBQ, romantic beach Zanzibar",
  openGraph: {
    title: "Nakupenda Sandbank Trip - Paradise in Zanzibar",
    description: "Swim, snorkel, and relax on the pristine 'I Love You' sandbank with seafood BBQ lunch.",
    url: "https://www.zanzionetours.com/zanzibar/NakupendaSandbankTour",
  },
}

export default function NakupendaSandbankPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="absolute inset-0">
          <Image
            src="/images/tours/nakupenda-sandbank.jpg"
            alt="Nakupenda Sandbank"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Nakupenda Sandbank Trip</h1>
            <p className="text-2xl md:text-3xl font-light mb-6">
              Swim, Snorkel, and Relax on the "I Love You" Sandbank
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Check className="w-5 h-5" />
                <span className="font-semibold">Best Price Guarantee</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Check className="w-5 h-5" />
                <span className="font-semibold">Easy Online Booking!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-blue-600 text-white py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">Half Day Tour</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span className="font-semibold">4-20 People</span>
          </div>
          <div className="text-lg font-bold text-golden">Contact for Pricing</div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-display font-bold text-blue-600 mb-4">Overview & Experience</h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    The Nakupenda Sandbank is a pristine slice of paradise located just 20 minutes from Stone Town via a
                    traditional local boat. The name <strong>"Nakupenda"</strong> translates to{" "}
                    <strong>"I Love You"</strong> in English, making it the perfect spot for honeymooners and romantics,
                    and it has been listed among Africa's best beaches by Travelers' Choice awards.
                  </p>
                </div>
              </div>

              {/* Experience Highlights */}
              <div>
                <h2 className="text-3xl font-display font-bold text-blue-600 mb-4">What You Will Experience</h2>
                <p className="text-gray-700 mb-6">
                  This is the ultimate sea and sun escape, offering a spectacular mix of relaxation and marine
                  adventure:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-l-4 border-l-golden">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-blue-600 mb-2">🤿 Snorkeling Adventure</h3>
                      <p className="text-gray-600 text-sm">
                        Explore the unbelievably spectacular underwater world. Snorkeling equipment (masks) will be
                        provided to discover countless colorful fish, coral reefs, and other sea creatures.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-golden">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-blue-600 mb-2">🏖️ Sandbank Relaxation</h3>
                      <p className="text-gray-600 text-sm">
                        Enjoy sunbathing, swimming, and simply relaxing on the white sands of the sandbank.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-golden">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-blue-600 mb-2">🦞 Gourmet Lunch</h3>
                      <p className="text-gray-600 text-sm">
                        Indulge in a delicious <strong>Seafood BBQ Lunch</strong> featuring fresh catch like Octopus,
                        Lobsters, Squids, and Prawns, with Chicken or Vegetarian options also available.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-golden">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-blue-600 mb-2">🍍 Tropical Treats</h3>
                      <p className="text-gray-600 text-sm">
                        Enjoy seasonal tropical fruits such as Banana, Pineapple, Mangoes, and Watermelon.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Tour Inclusions */}
              <div>
                <h2 className="text-3xl font-display font-bold text-blue-600 mb-4">Tour Inclusions</h2>
                <p className="text-gray-700 mb-4">The tour price is comprehensive and includes:</p>
                <div className="bg-blue-50 rounded-lg p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Guide:</strong> Services of an English-Speaking Guide
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Transport:</strong> Round-trip boat transfer in a local traditional wooden boat
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Equipment:</strong> Swimming/snorkeling gear
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Lunch:</strong> Seafood BBQ Lunch (Chicken and Vegetarian options available)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Fees:</strong> All government taxes and fees
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tour Pricing */}
              <div>
                <h2 className="text-3xl font-display font-bold text-blue-600 mb-4">Tour Pricing</h2>
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <p className="text-gray-700">Please contact us for current pricing based on your group size and hotel location.</p>
                  </CardContent>
                </Card>
              </div>

              {/* Important Note */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h3 className="font-bold text-gray-900 mb-2">💡 Important Note on Pricing</h3>
                <p className="text-gray-700">
                  This tour is very accessible from Stone Town's coast. If you are staying in Stone Town, you may{" "}
                  <strong>not</strong> need to pay for additional transport costs to the departure point. For guests
                  staying outside Stone Town, please inquire for the full price including transfer fees.
                </p>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="shadow-xl border-2 border-golden">
                  <CardContent className="p-6 space-y-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-2">Contact for Pricing</div>
                      <p className="text-gray-600">per person</p>
                    </div>

                    <BookingModal
                      tourName="Nakupenda Sandbank Trip"
                      trigger={
                        <Button
                          size="lg"
                          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-6"
                        >
                          📱 BOOK VIA WHATSAPP
                        </Button>
                      }
                    />

                    <div className="text-center text-sm text-gray-600">
                      <p>Instant confirmation</p>
                      <p>Book now & pay later</p>
                    </div>

                    <div className="border-t pt-4 space-y-3 text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>Free cancellation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>Expert local guides</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>Best price guarantee</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6 bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-600 mb-2">Need Help?</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Our team is available to answer any questions about this tour.
                  </p>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full bg-transparent">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-display font-bold mb-4">Visit Nakupenda Today!</h2>
          <p className="text-xl mb-8 text-white">
            Visiting Nakupenda Sandbank is one of the most enjoyable things you can do during your Zanzibar vacation. It
            provides stunning views and romantic vibes that make it truly worth the trip.
          </p>
          <BookingModal
            tourName="Nakupenda Sandbank Trip"
            trigger={
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4">
                Book This Experience Now
              </Button>
            }
          />
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
