import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Check, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import BookingModal from "@/components/booking-modal"

export const metadata: Metadata = {
  title: "Maalum Cave Tour - Natural Freshwater Swimming Pool & Limestone Grotto | ZANZIONE TOURS",
  description:
    "Discover Maalum Cave in Paje - a hidden natural limestone oasis with crystal-clear freshwater pools. Swim in mineral-rich waters, explore stunning stalactites, and relax in this unique geological wonder.",
  keywords:
    "Maalum Cave Zanzibar, Paje cave, natural swimming pool, limestone cave, freshwater cave Zanzibar, geological tour",
}

export default function MaalumCavePage() {
  const whatsappNumber = "255710885320"
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi, I'm interested in booking the Maalum Cave tour. Can you provide more details?`

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-emerald-600 to-teal-500">
        <div className="absolute inset-0">
          <Image
            src="/images/maalum-20cave.jpeg"
            alt="Maalum Cave - Natural Freshwater Pool"
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
              <span className="text-sm font-semibold">Hidden Natural Wonder</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Maalum Cave</h1>
            <p className="text-2xl md:text-3xl font-light mb-6">The Hidden Oasis of Paje</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>90 min - 2 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>2-25 People</span>
              </div>
              <div className="bg-golden px-4 py-2 rounded-full font-bold">Contact for Pricing</div>
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
                <h2 className="text-3xl font-display font-bold text-ocean mb-4">Book Your Maalum Cave Adventure</h2>
                <p className="text-gray-600 mb-6 text-lg">Experience Zanzibar's hidden natural swimming pool</p>
                <BookingModal tourName="Maalum Cave Tour" />
                <p className="text-sm text-gray-500 mt-4">
                  ✓ Best Price Guarantee | ✓ Easy Online Booking | ✓ Book Now & Pay Later
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Overview Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Overview & Experience</h2>
            <h3 className="text-2xl font-bold text-blue-season mb-4">The Hidden Oasis of Paje</h3>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Located just minutes from Paje on the southeast coast, <strong>Maalum Cave</strong> is a unique natural
                phenomenon featuring a beautiful, <strong>clear-water swimming pool inside a limestone grotto</strong>.
                The cave's unique, open-top design allows sunlight to stream in, illuminating the pool's mineral-rich
                water, which many visitors find incredibly refreshing and peaceful.
              </p>
              <p>
                This hidden natural sanctuary offers a luxurious retreat from the tropical heat, where you can swim in
                pristine freshwater surrounded by ancient geological formations that have been sculpted over thousands
                of years.
              </p>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">What You Will Experience</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Swim in crystal-clear, mineral-rich freshwater",
                "Marvel at stunning stalactites and stalagmites",
                "Relax in the cozy lounge area",
                "Learn about cave geology and formation",
                "Hear local legends and folklore",
                "Enjoy the peaceful jungle surroundings",
              ].map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Pricing Overview</h2>
            <p className="text-gray-600 mb-6">
              Please contact us for current pricing. We offer excellent value for shared experiences.
            </p>
            <Link href="/contact" className="inline-block">
              <Button className="bg-golden hover:bg-golden/90 text-white font-semibold px-8">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Inclusions Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">What's Included & Logistics</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-blue-season mb-4 text-lg">Inclusions</h3>
                <div className="space-y-4">
                  {[
                    "Professional Tour Guide (English)",
                    "Entrance Fees to Maalum Cave",
                    "Snorkeling gear (provided)",
                    "Use of lounge and relaxation area",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-ocean">
                  <h3 className="font-bold text-ocean mb-3">What to Bring</h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>• Swimwear</li>
                    <li>• Towel</li>
                    <li>• Water shoes (recommended)</li>
                  </ul>
                  <p className="text-gray-600 text-xs mt-3">
                    Note: Sunscreen is often not allowed in the pool to protect natural water quality.
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-golden">
                  <h3 className="font-bold text-ocean mb-3">Duration</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The experience slot is typically <strong>90 minutes to 2 hours</strong> inside the cave area.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Geological Wonder */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">A Geological Wonder</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Maalum Cave is a <strong>natural limestone phenomenon</strong> formed over thousands of years by
                filtering water that has created spectacular stalactites hanging from above and stalagmites rising from
                below - nature's sculptures in their purest form.
              </p>
              <p>
                The cave's open-top design creates a unique microclimate where sunlight dances on the water's surface,
                creating mesmerizing light patterns throughout the day. The <strong>mineral-rich freshwater</strong> is
                incredibly clear and refreshing, making it perfect for swimming and underwater exploration.
              </p>
              <p>
                Your guide will share fascinating stories about the cave's formation, local legends, and the cultural
                significance of this hidden gem in Zanzibar's landscape.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-blue-600 text-white shadow-2xl rounded-lg p-10 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Discover This Hidden Oasis?</h2>
            <p className="text-xl text-white mb-8">Book your Maalum Cave experience and dive into natural beauty</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <BookingModal tourName="Maalum Cave Tour" />
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-ocean font-semibold px-8 py-6 bg-transparent w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
