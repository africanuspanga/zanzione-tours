import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Check, Star } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import BookingModal from "@/components/booking-modal"

export const metadata: Metadata = {
  title: "Zanzibar Safari Blue Trip - Full Day Snorkeling & Seafood BBQ Tour | ZANZIONE TOURS",
  description:
    "Experience Zanzibar's best marine adventure! Safari Blue full-day tour in Menai Bay with snorkeling, sandbanks, Kwale Island lagoon, seafood BBQ lunch, and traditional dhow sailing. Book now with expert local guides.",
  keywords: "Safari Blue Zanzibar, Menai Bay tour, Zanzibar snorkeling, sandbank trip, seafood BBQ, dhow sailing, Kwale Island, marine safari",
}

export default function SafariBlueTourPage() {
  const whatsappNumber = "255710885320"
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi, I'm interested in booking the Safari Blue Trip tour. Can you provide more details?`

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="absolute inset-0">
          <Image
            src="/images/tours/safari-blue-day.jpg"
            alt="Safari Blue Trip - Menai Bay Zanzibar"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-golden text-golden" />
                ))}
              </div>
              <span className="text-sm font-semibold">5-Star Rated</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Zanzibar Safari Blue Trip</h1>
            <p className="text-2xl md:text-3xl font-light mb-6">Full Day Marine Adventure in Menai Bay</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Full Day Tour</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>4-20 People</span>
              </div>
              <div className="bg-golden px-4 py-2 rounded-full font-bold">
                Best Price Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 -mt-20 relative z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Booking Card */}
          <Card className="mb-12 shadow-2xl border-t-4 border-golden">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-display font-bold text-ocean mb-4">Book Your Safari Blue Adventure</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Secure your spot for Zanzibar's most popular marine tour
                </p>
                <BookingModal tourName="Safari Blue Trip" />
                <p className="text-sm text-gray-500 mt-4">✓ Best Price Guarantee | ✓ Easy Online Booking | ✓ Book Now & Pay Later</p>
              </div>
            </CardContent>
          </Card>

          {/* Overview Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Overview & Experience</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Safari Blue trip is a <strong>full day tour along Menai Bay</strong>, which is one of the best coral reefs in Zanzibar. 
                Main activities in the tour include visits to naturally occurring sandbanks, swimming & snorkeling in the crystal clear waters, 
                visiting Kwale Island with its natural green lagoon, and climbing the old Baobab tree for spectacular views of the Island.
              </p>
              <p>
                If you love the ocean, this tour is for you. You will witness <strong>countless colorful fishes and other sea creatures</strong> that 
                survive among the coral reefs and underwater plants which together form the barrier reef ecosystem in the bay.
              </p>
              <p>
                During the tour, enjoy the <strong>fresh seafood barbecue</strong>: Octopus, Lobsters, Squids, Calamari, and Fish. 
                Plus exotic fresh fruit tasting like Banana, Watermelon, Pineapple, and Mangoes. 
                This will be the best adventurous day of your stay in Zanzibar Islands, and you will understand why we call this <em>"Blue Safari"</em>.
              </p>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Tour Highlights</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Swimming and Snorkeling around Menai Bay area",
                "Seafood BBQ Lunch: Octopus, Lobsters, Squids, Prawns, etc.",
                "Tropical Fruits: Mangoes, Bananas, Pineapple, Watermelon etc.",
                "Sailing with Traditional Dhow Boat",
                "Visit Kwale Island Natural Lagoon & Sandbank",
                "Explore the Barrier Reef Ecosystem",
              ].map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Pricing</h2>
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">Please contact us for current pricing.</p>
                <p className="text-gray-700 text-sm">
                  <strong>Note:</strong> Transport costs depend on your hotel location. Please contact us via WhatsApp for a complete quote including transfers.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Inclusions Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {[
                  "English Speaking Guide",
                  "Traditional Sailing Boat (Dhow)",
                  "Snorkeling Equipment",
                  "Lunch (Seafood BBQ, Chicken, or Vegetarian options)",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-golden rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-golden">
                <h3 className="font-bold text-ocean mb-3">Important Note on Pricing</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>TRANSPORT IS EXCLUDED:</strong> The final price depends on your hotel location. 
                  Please contact us via WhatsApp and we will provide you with the full price including hotel transfers.
                </p>
              </div>
            </div>
          </div>

          {/* About Menai Bay */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">About Menai Bay Conservation Area</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Safari Blue is one of the most enjoyable things you can do during your Zanzibar vacation. 
                It is called "Blue Safari" because of the <strong>ocean blueness</strong> that you experience during the tour. 
                It's a whole day of playing with the ocean in the Menai Bay Conservation Area.
              </p>
              <p>
                The Menai Bay Conservation Area is located in Menai Bay, on the west-south coast of Unguja, Zanzibar. 
                This is the <strong>largest marine conserved area</strong> covering 470 square kilometres (180 sq mi), 
                comprising extensive coral reefs, colorful tropical fish, abundant sea creatures, and mangrove forests.
              </p>
              <p>
                All together, they create the best tourist experience when visiting Zanzibar islands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-blue-600 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Ready for the Best Day of Your Zanzibar Trip?</h2>
          <p className="text-xl text-white mb-8">
            Join us for an unforgettable marine adventure in Menai Bay
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <BookingModal tourName="Safari Blue Trip" />
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-6 bg-transparent w-full sm:w-auto">
                Contact Us
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
