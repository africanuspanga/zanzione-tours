import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Check, Star, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import BookingModal from "@/components/booking-modal"

export const metadata: Metadata = {
  title: "Zanzibar Traditional Cooking Class - Spice Farm & Market Tour | ZANZIONE TOURS",
  description:
    "Join our Zanzibar Traditional Cooking Class in Dole village. Harvest organic vegetables and spices from the farm, shop at Darajani market, and cook authentic Swahili dishes with a professional chef.",
  keywords:
    "Zanzibar cooking class, traditional Swahili cooking, spice farm tour Zanzibar, Dole village cooking class, Darajani market tour, Zanzibar food tour",
}

export default function CookingClassPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-green-600 to-emerald-500">
        <div className="absolute inset-0">
          <Image
            src="/cooking-class-zanzibar.jpeg"
            alt="Zanzibar Traditional Cooking Class"
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
              <span className="text-sm font-semibold">Culinary Experience</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Traditional Cooking Class</h1>
            <p className="text-2xl md:text-3xl font-light mb-6">Cook Authentic Swahili Flavors in Dole</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>3-4 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>All Ages Welcome</span>
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
                <h2 className="text-3xl font-display font-bold text-ocean mb-4">Book Your Cooking Class</h2>
                <p className="text-gray-600 mb-6 text-lg">A hands-on journey into Swahili cuisine, spices, and local markets</p>
                <BookingModal tourName="Zanzibar Traditional Cooking Class" />
                <p className="text-sm text-gray-500 mt-4">
                  ✓ Best Price Guarantee | ✓ Easy Online Booking | ✓ Book Now & Pay Later
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Warmly welcome to join our Zanzibar traditional cooking class, with originality from our ancestors.
                All the cooking tools are copied from old times when our grandparents enjoyed good days with food
                around the coastal villages of Zanzibar.
              </p>
              <p>
                The cooking class includes vegetable and spice harvesting in the farm, giving you insight into the
                uses of spices in food and also as medicines. The lessons are extremely informative and full of
                learning and practical time.
              </p>
              <p>
                This experience is designed for those who want to create delicious Swahili meals while learning about
                local herbs, origins, and medicinal uses. Each session is followed by lunch or dinner, so you can
                enjoy the dishes you helped prepare.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Highlights</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Hands-on cooking lessons with a professional chef",
                "Suitable for individuals and groups of all ages",
                "Each session is followed by lunch or dinner",
                "Introduction to local spices grown on the island",
                "Walking tour of Zanzibar spice farms and plantations",
                "Learn to create delicious Swahili meals from scratch",
                "Learn about spices, local herbs, origins, and medicinal uses",
              ].map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What You Can Expect */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">What You Can Expect</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Take a tour with your chef through Darajani market and learn about our culture of buying. After
                shopping, enjoy a private transfer to Dole village in the central part of Zanzibar for the spice tour.
              </p>
              <p>
                A guided walking tour passes through villages and spice plantations where you will harvest some of the
                ingredients with the chef. Back at the class, we will cook together three courses and dessert.
              </p>
              <p>
                Walk through the farms as spice farm workers climb trees, seek out specific plants, and cut off various
                barks, letting you see, feel, and taste everything. You will be decorated with palm-leaf accessories
                such as ties, rings, bracelets, and glasses.
              </p>
              <p>
                At the spice farms you will have an opportunity to taste some of the exotic fruits of Zanzibar. At the
                end of the hands-on cooking session, we sit down together and enjoy the 4-course meal.
              </p>
            </div>
          </div>

          {/* Itinerary */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Cooking Class Itinerary</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Darajani Market Tour",
                  desc: "Meet your chef at Darajani market in Stone Town. Learn about local ingredients, bargaining culture, and how to select the freshest produce and seafood.",
                },
                {
                  title: "Transfer to Dole Village",
                  desc: "Private transfer to Dole village in central Zanzibar, where the cooking class and spice farm experience take place.",
                },
                {
                  title: "Spice Farm Walk & Harvesting",
                  desc: "Walk through villages and spice plantations. Harvest organic vegetables and spices with the chef while learning about their culinary and medicinal uses.",
                },
                {
                  title: "Hands-On Cooking Class",
                  desc: "Cook together three traditional Swahili courses plus dessert using traditional tools and techniques passed down through generations.",
                },
                {
                  title: "Enjoy Your Meal",
                  desc: "Sit down with the group and enjoy the 4-course meal you prepared, accompanied by refreshing drinks and great conversation.",
                },
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-golden rounded-full flex items-center justify-center text-white font-black">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-season mb-1">{step.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Included / Excluded */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Included & Excluded</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-blue-season mb-4 text-lg">Included</h3>
                <div className="space-y-3">
                  {[
                    "Experienced professional tour guide and chef",
                    "Pick up and drop off from your hotel in a private car",
                    "Bottled water",
                    "Entrance fees to the spice farm",
                    "Transport waiting charge",
                    "All taxes, fuel surcharges, and service fees",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-blue-season mb-4 text-lg">Excluded</h3>
                <div className="space-y-3">
                  {[
                    "Medical insurance",
                    "International flights",
                    "Visa",
                    "Airport taxes",
                    "Expenses of a personal nature",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <X className="w-5 h-5 text-red-500" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-amber-50 rounded-lg shadow-lg p-8 mb-8 border-l-4 border-golden">
            <h2 className="text-2xl font-display font-bold text-ocean mb-4">Additional Information</h2>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Location:</strong> Dole, Central Zanzibar (with Darajani market tour in Stone Town).</li>
              <li><strong>Duration:</strong> 3-4 hours.</li>
              <li><strong>Guide:</strong> Tour may be operated by a multi-lingual guide.</li>
              <li><strong>Physical level:</strong> A moderate amount of walking is involved.</li>
              <li><strong>What to bring:</strong> Good walking shoes, sun protection, and a curious appetite.</li>
              <li><strong>Age:</strong> Bookings can only be accepted for persons under 15 years of age when accompanied by an adult who will be responsible for them.</li>
            </ul>
          </div>

          {/* Final CTA */}
          <div className="bg-blue-600 text-white shadow-2xl rounded-lg p-10 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Cook Swahili Style?</h2>
            <p className="text-xl text-white mb-8">Book your Traditional Cooking Class today and taste the real Zanzibar</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <BookingModal tourName="Zanzibar Traditional Cooking Class" />
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
