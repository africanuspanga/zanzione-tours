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
  title: "Salaam Cave Tour - Sea Turtle Sanctuary & Natural Swimming Pool | ZANZIONE TOURS",
  description:
    "Visit Salaam Cave in Kizimkazi - a unique sea turtle sanctuary and natural coral grotto. Swim with turtles, learn about conservation, and explore crystal-clear saltwater pools in this unforgettable Zanzibar experience.",
  keywords:
    "Salaam Cave Zanzibar, Kizimkazi turtle sanctuary, sea turtle experience, cave swimming Zanzibar, conservation tour",
}

export default function SalaamCavePage() {
  const whatsappNumber = "255710885320"
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi, I'm interested in booking the Salaam Cave tour. Can you provide more details?`

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-teal-600 to-cyan-500">
        <div className="absolute inset-0">
          <Image
            src="/images/salam-20cave.jpeg"
            alt="Salaam Cave - Sea Turtle Sanctuary"
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
              <span className="text-sm font-semibold">Conservation Experience</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Salaam Cave</h1>
            <p className="text-2xl md:text-3xl font-light mb-6">The Sea Turtle Haven of Kizimkazi</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>1-2 Hours</span>
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
                <h2 className="text-3xl font-display font-bold text-ocean mb-4">Book Your Salaam Cave Adventure</h2>
                <p className="text-gray-600 mb-6 text-lg">Swim with sea turtles and support conservation</p>
                <BookingModal tourName="Salaam Cave Tour" />
                <p className="text-sm text-gray-500 mt-4">
                  ✓ Best Price Guarantee | ✓ Easy Online Booking | ✓ Book Now & Pay Later
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Overview Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Overview & Experience</h2>
            <h3 className="text-2xl font-bold text-blue-season mb-4">The Sea Turtle Haven of Kizimkazi</h3>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Tucked away in the coastal region of <strong>Kizimkazi</strong>, Salaam Cave is a natural coral grotto
                famous for housing and caring for <strong>sea turtles in a safe, clear-water sanctuary</strong>. It
                offers an incredible opportunity to interact with these magnificent creatures while supporting vital
                conservation efforts.
              </p>
              <p>
                This unique experience combines marine wildlife encounters with education about turtle rehabilitation
                and the importance of protecting Zanzibar's precious marine ecosystems.
              </p>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">What You Will Experience</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Swim with sea turtles in their protected habitat",
                "Feed and interact with turtles up close",
                "Meet local guides caring for the turtles daily",
                "Learn about turtle life cycles and rehabilitation",
                "Explore natural limestone cave structures",
                "Support vital marine conservation efforts",
              ].map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
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
              Please contact us for current pricing. We offer excellent value for families and friends.
            </p>
            <Link href="/contact" className="inline-block">
              <Button className="bg-golden hover:bg-golden/90 text-white font-semibold px-8">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Inclusions Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {[
                  "Professional Tour Guide",
                  "Entrance Fees to Salaam Cave Sanctuary",
                  "Opportunity to swim with and feed sea turtles",
                  "Conservation briefing and education",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-golden rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-golden">
                <h3 className="font-bold text-ocean mb-3">Important Information</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  <strong>Location:</strong> Kizimkazi, South Coast of Unguja Island
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  <strong>Duration:</strong> Typically 1-2 hours at the cave site
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>TRANSPORT IS EXCLUDED:</strong> Hotel transfers vary by location. Contact us for the full
                  price including transfers from your accommodation.
                </p>
              </div>
            </div>
          </div>

          {/* Conservation Impact */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Conservation Impact</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                By visiting Salaam Cave, you directly support the <strong>local conservation efforts</strong> that
                protect and rehabilitate sea turtles in Zanzibar. The sanctuary provides a safe haven for injured or
                young turtles, preparing them for eventual release back into the wild.
              </p>
              <p>
                Learn about the challenges facing marine wildlife, including plastic pollution and habitat loss, and
                discover how your visit helps fund ongoing protection and education programs in the local community.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-blue-600 text-white shadow-2xl rounded-lg p-10 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Meet the Sea Turtles?</h2>
            <p className="text-xl text-white mb-8">Book your unforgettable turtle sanctuary experience today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <BookingModal tourName="Salaam Cave Tour" />
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
