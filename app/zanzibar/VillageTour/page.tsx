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
  title: "Village Tour Zanzibar - Authentic Swahili Cultural Experience | ZANZIONE TOURS",
  description:
    "Experience authentic village life in Zanzibar with our Village Tour. Visit rural Swahili communities, meet locals, learn traditional crafts, cooking, and daily customs for a meaningful cultural immersion.",
  keywords:
    "Village Tour Zanzibar, Zanzibar cultural tour, Swahili village experience, Jambiani village tour, Paje village tour, Nungwi fishing village, Zanzibar community tour",
}

export default function VillageTourPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-amber-600 to-orange-500">
        <div className="absolute inset-0">
          <Image
            src="/village-tour-zanzibar.jpeg"
            alt="Village Tour Zanzibar - Authentic Cultural Experience"
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
              <span className="text-sm font-semibold">Cultural Immersion</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Village Tour</h1>
            <p className="text-2xl md:text-3xl font-light mb-6">Authentic Swahili Life Beyond the Beach</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>3-5 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>2-20 People</span>
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
                <h2 className="text-3xl font-display font-bold text-ocean mb-4">Book Your Village Tour</h2>
                <p className="text-gray-600 mb-6 text-lg">Experience the real Zanzibar through its people and traditions</p>
                <BookingModal tourName="Village Tour Zanzibar" />
                <p className="text-sm text-gray-500 mt-4">
                  ✓ Best Price Guarantee | ✓ Easy Online Booking | ✓ Book Now & Pay Later
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Overview Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Overview & Experience</h2>
            <h3 className="text-2xl font-bold text-blue-season mb-4">A Village Tour in Zanzibar</h3>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                A Village Tour in Zanzibar offers an authentic glimpse into local island life, taking you beyond the
                beaches to experience the rich culture and traditions of Zanzibar communities.
              </p>
              <p>
                We take you deep into a traditional Zanzibar village, where life moves at a peaceful, natural rhythm.
                No touristy gimmicks—just real people, real culture, and real moments.
              </p>
              <p>
                You’ll meet locals, see how they live, and even get hands-on with daily activities. Lasting 3-5 hours,
                this experience includes interactions with residents, hands-on activities like weaving and cooking,
                and market visits.
              </p>
            </div>
          </div>

          {/* What You Will Do */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">What You’ll Do</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Walk through the village and feel the warm welcome as we explore narrow paths lined with mud houses, coconut trees, and smiling faces.",
                "Visit a local home and learn how traditional Swahili homes are built, decorated, and maintained.",
                "Experience daily life: watch or try coconut husking, weaving, or grinding spices the old-fashioned way.",
                "Learn about traditional cooking as you smell the rich aromas of Zanzibar cuisine.",
                "Interact with villagers: meet the elders, chat with the kids, and feel genuine island hospitality.",
                "Explore local crafts: see how artisans make baskets, pottery, and handmade mats—great for souvenirs!",
              ].map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Best Villages */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Which Villages Are Best?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Zanzibar has many villages, but not all are suitable for respectful tourism. The best village tours
              happen in communities already open to visitors and guided by locals.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Jambiani – Seaweed farming and authentic coastal life",
                "Paje – Youth culture, farming, and daily routines",
                "Nungwi – Fishing traditions and dhow building",
                "Villages near Stone Town – Urban-local lifestyle mix",
              ].map((village, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{village}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-6 leading-relaxed">
              We select villages where tourism benefits locals and avoids disrupting daily life.
            </p>
          </div>

          {/* Itinerary */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Village Tour Itinerary</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Pickup from Your Hotel",
                  desc: "Our friendly guide will pick you up from your hotel in a comfortable, air-conditioned vehicle. Enjoy a scenic drive through the island, passing lush landscapes and local villages.",
                },
                {
                  title: "Arrival at the Village & Warm Welcome",
                  desc: "Meet the village elders and locals, who will greet you with genuine Zanzibari hospitality. Learn a bit about the history and culture of the village before starting your adventure.",
                },
                {
                  title: "Village Walking Tour",
                  desc: "Stroll through the village pathways, taking in the daily life of the locals. Visit traditional Swahili homes and see how they are built using natural materials.",
                },
                {
                  title: "Traditional Skills & Activities",
                  desc: "Watch or participate in coconut husking, weaving, and pottery making. See how locals grind spices, extract coconut milk, and make handmade mats.",
                },
                {
                  title: "Cooking & Tasting Experience",
                  desc: "Step into a local kitchen and see how traditional dishes are prepared. Enjoy a tasting session of fresh seasonal fruits, cassava, and other Swahili treats.",
                },
                {
                  title: "Cultural Interaction & Storytelling",
                  desc: "Chat with village elders and hear fascinating stories about Zanzibar’s history and traditions. If available, enjoy a short performance of traditional Swahili songs or drumming.",
                },
                {
                  title: "Local Crafts & Souvenirs",
                  desc: "Browse handmade crafts, baskets, and pottery made by local artisans. A chance to support the community by purchasing authentic, handmade souvenirs.",
                },
                {
                  title: "Return Journey",
                  desc: "Say goodbye to your new village friends and head back to your hotel. Enjoy a relaxing drive with time to reflect on this unforgettable experience.",
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

          {/* Packages */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Village Tour Packages</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Village tour packages in Zanzibar range from basic half-day outings to full immersions with add-ons.
              The best ones balance authenticity, comfort, and value. Contact us for current pricing tailored to your
              group size and interests.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Basic half-day package: 3-4 hours with guide, activities, and water",
                "Full-day package with lunch: 5-7 hours including meals, crafts, and transport",
                "Combined packages: village + spice farm or village + Stone Town tour",
                "Private custom packages: flexible durations and personalized itineraries",
                "Community-focused packages: include donations to the village",
              ].map((pkg, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{pkg}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mistakes to Avoid */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Common Mistakes to Avoid</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Dress modestly—cover shoulders and knees to honor local customs, especially in Muslim-majority areas.",
                "Always ask before photographing people—it’s polite and avoids discomfort.",
                "Prepare for weather; skip rainy seasons without rain gear as paths get slippery.",
                "Greet with ‘Jambo’ or ‘As-Salaam Alaikum’ and avoid public affection.",
                "Tip your guide for great service.",
                "Bring small bills for souvenirs or donations; ATMs are rare.",
              ].map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking & Transport */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Booking & Transportation</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We make it super easy to book your Village Tour in Zanzibar! You can reserve your spot online, via
              WhatsApp, or just give us a quick call. We offer flexible payment options including credit cards, bank
              transfers, or cash. To keep things hassle-free, we provide comfortable transportation to and from your
              hotel.
            </p>
            <Link href="/contact" className="inline-block">
              <Button className="bg-golden hover:bg-golden/90 text-white font-semibold px-8">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">FAQs</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-blue-season mb-2">How long does the village tour last?</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Half-day tour: approximately 4-5 hours. Full-day tour: around 6-7 hours (includes a traditional local lunch).
                </p>
              </div>
              <div>
                <h4 className="font-bold text-blue-season mb-2">Is this tour suitable for families with kids?</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Yes, village tours are very family-friendly and offer meaningful cultural learning for all ages.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-blue-600 text-white shadow-2xl rounded-lg p-10 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready for an Authentic Village Experience?</h2>
            <p className="text-xl text-white mb-8">Book your Village Tour today and connect with the heart of Zanzibar</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <BookingModal tourName="Village Tour Zanzibar" />
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
