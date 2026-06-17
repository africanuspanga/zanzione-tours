import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Check, Star, TreePine } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import BookingModal from "@/components/booking-modal"

export const metadata: Metadata = {
  title: "Jozani Forest Walking Tour - Meet Rare Red Colobus Monkeys | ZANZIONE TOURS",
  description:
    "Explore Jozani Chwaka Bay National Park on a 3-hour guided walking tour. See the endangered Zanzibar Red Colobus Monkeys, explore mangrove boardwalks, and discover rare flora. Expert local guides included.",
  keywords:
    "Jozani Forest Zanzibar, Red Colobus monkeys, Jozani National Park, mangrove tour, wildlife Zanzibar, Kima Punju",
}

export default function JozaniForestTourPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-green-700 to-emerald-600">
        <div className="absolute inset-0">
          <Image
            src="/images/tours/jozani-forest.jpg"
            alt="Jozani Forest National Park Zanzibar"
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
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Jozani Forest Walking Tour</h1>
            <p className="text-2xl md:text-3xl font-light mb-6">
              Meet the Rare Red Colobus Monkeys & Explore the Mangroves
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>3 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>2-15 People</span>
              </div>
              <div className="flex items-center gap-2">
                <TreePine className="w-5 h-5" />
                <span>National Park</span>
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
                <h2 className="text-3xl font-display font-bold text-ocean mb-4">Book Your Jozani Forest Adventure</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Join us for an unforgettable wildlife encounter in Zanzibar's indigenous forest
                </p>
                <BookingModal
                  tourName="Jozani Forest Walking Tour"
                  trigger={
                    <Button
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-12 py-6 w-full sm:w-auto"
                    >
                      BOOK VIA WHATSAPP
                    </Button>
                  }
                />
                <p className="text-sm text-gray-500 mt-4">
                  ✓ Best Price Guarantee | ✓ Easy Online Booking | ✓ Expert Local Guides
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Overview Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Overview & Experience</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>Jozani Chwaka Bay National Park</strong> is Zanzibar's biggest national park and one of its most
                iconic natural attractions. This <strong>3-hour guided walking tour</strong> takes you deep into the
                lush, green heart of the forest, the last remaining sanctuary of the endangered{" "}
                <strong>Zanzibar Red Colobus Monkey</strong> (locally known as 'Kima Punju'). This is a species found
                nowhere else on Earth!
              </p>
              <p>
                Beyond the famous monkeys, you'll explore the magical mangrove reserve on elevated boardwalks, learning
                about how this vital ecosystem protects Zanzibar's coastline and supports local marine life. Your expert
                local guide will share fascinating insights about the forest's rare flora, including medicinal plants
                and towering mahogany and eucalyptus trees.
              </p>
            </div>
          </div>

          {/* What You Will Experience */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">What You Will Experience</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Red Colobus Monkeys: Watch curious and playful monkeys come down to play and pose for photos",
                "Diverse Wildlife: Spot blue Sykes' monkeys, bush babies, chameleons, and various bird species",
                "Mangrove Boardwalk: Explore the magical mangrove ecosystem on elevated walkways",
                "Flora & Fauna: Learn about rare medicinal plants and towering mahogany trees",
                "Expert Guide: Local naturalist guides share forest history and conservation efforts",
                "Photography: Capture stunning images of wildlife in their natural habitat",
              ].map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tour Details */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Tour Highlights</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-ocean text-xl mb-3 flex items-center gap-2">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                    1
                  </span>
                  Red Colobus Monkey Sanctuary
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Enjoy a peaceful walk through the forest's towering trees where the curious and playful
                  <strong> Zanzibar Red Colobus Monkeys</strong> often come down to interact with visitors. These
                  endangered primates are found only in Zanzibar and are known for their distinctive red caps and
                  friendly nature.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-ocean text-xl mb-3 flex items-center gap-2">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                    2
                  </span>
                  Mangrove Boardwalk Experience
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Walk through the mangrove forest on specially built boardwalks, learning about this vital ecosystem
                  that protects Zanzibar's coastline and supports local marine life. Your guide will explain the unique
                  adaptations of mangrove trees and their importance to the island's ecology.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-ocean text-xl mb-3 flex items-center gap-2">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                    3
                  </span>
                  Indigenous Flora & Medicinal Plants
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Learn about the forest's history and its rare flora, including traditional medicinal plants still used
                  by local communities today. See towering mahogany and eucalyptus trees, and discover how the forest
                  ecosystem supports biodiversity unique to Zanzibar.
                </p>
              </div>
            </div>
          </div>

          {/* Inclusions & Pricing */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Tour Inclusions</h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-ocean mb-4">Tour Pricing</h3>
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <p className="text-gray-700">Please contact us for current pricing.</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-ocean mb-4 text-lg">The Tour Price Includes:</h3>
                <div className="space-y-3">
                  {[
                    "English-Speaking Guide (Local Expert)",
                    "All Required Entrance Fees (National Park Fees)",
                    "Mineral Drinking Water",
                    "All Government Fees and Taxes",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-golden">
                <h3 className="font-bold text-ocean mb-3">Important Note on Pricing</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  <strong>TRANSPORT IS EXCLUDED:</strong> The displayed price is exclusive of transport costs to Jozani
                  Forest (Chwaka Village, East Coast). The final price depends entirely on your hotel's location.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Please contact us via WhatsApp and we will provide you with the full price including hotel transfers.
                </p>
              </div>
            </div>
          </div>

          {/* Conservation Message */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">Conservation & Protection</h2>
            <p className="leading-relaxed">
              The Zanzibar Red Colobus Monkey is classified as <strong>endangered</strong> with only about 2,000
              individuals remaining. Your visit directly supports conservation efforts and helps protect this unique
              species and their habitat. By choosing this tour, you're contributing to the preservation of Zanzibar's
              natural heritage for future generations.
            </p>
          </div>

          {/* Final CTA */}
          <div className="bg-blue-600 text-white shadow-2xl rounded-lg p-10 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Visit Jozani Forest Today!</h2>
            <p className="text-xl text-white mb-8">
              A must-visit for nature lovers and a unique opportunity to interact with the world's rarest primates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <BookingModal
                tourName="Jozani Forest Walking Tour"
                trigger={
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-12 py-6 w-full sm:w-auto"
                  >
                    BOOK VIA WHATSAPP
                  </Button>
                }
              />
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
