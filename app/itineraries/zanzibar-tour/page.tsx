import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Star, Clock } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import BookingModal from "@/components/booking-modal"

export const metadata: Metadata = {
  title: "Zanzibar 5-Day Tour Package | ZANZIONE TOURS",
  description:
    "Complete 5-day Zanzibar experience including Safari Blue, Jozani Forest, Stone Town, Prison Island, spice farms, and The Rock Restaurant. All-inclusive beach and culture tour package.",
  alternates: {
    canonical: "https://www.zanzionetours.com/itineraries/zanzibar-tour",
  },
}

export default function ZanzibarTourPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <Image src="/images/packages/zanzibar-tour.jpg" alt="Zanzibar Tour" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-golden">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold mb-4 leading-tight">
            Zanzibar 5-Day Tour Package
          </h1>
          <p className="text-xl sm:text-2xl mb-6">Complete Island Experience</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>5 Days</span>
            </div>
          </div>
        </div>
      </section>

      {/* Package Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-forest-dark mb-6">Package Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Discover the magic of Zanzibar with our comprehensive 5-day tour package. Experience pristine beaches,
              rich history, vibrant culture, and exotic wildlife. This all-inclusive package combines the best of
              Zanzibar's attractions for an unforgettable island adventure.
            </p>
          </div>

          {/* Day-by-Day Itinerary */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-forest-dark mb-6">Day-by-Day Itinerary</h3>

            {/* Day 1 */}
            <div className="border-l-4 border-golden pl-6">
              <h4 className="text-xl font-bold text-forest-dark mb-2">Day 1: Safari Blue Trip</h4>
              <p className="text-gray-700 mb-4">
                Embark on a full-day boat adventure exploring the beautiful Menai Bay Conservation Area. Swim in
                crystal-clear waters, snorkel among colorful fish, relax on a pristine sandbank, and enjoy a fresh
                seafood BBQ lunch on Kwale Island. This is Zanzibar's most popular marine excursion.
              </p>
              <p className="text-sm text-gray-600">Activities: Boat cruise, snorkeling, swimming, seafood lunch</p>
            </div>

            {/* Day 2 */}
            <div className="border-l-4 border-golden pl-6">
              <h4 className="text-xl font-bold text-forest-dark mb-2">Day 2: Jozani Forest Walking Tour</h4>
              <p className="text-gray-700 mb-4">
                Explore the indigenous Jozani Chwaka Bay National Park, home to the rare Red Colobus monkeys found only
                in Zanzibar. Walk through lush forest trails, spot diverse wildlife, and learn about the unique
                ecosystem and conservation efforts protecting this natural treasure.
              </p>
              <p className="text-sm text-gray-600">
                Activities: Guided forest walk, wildlife viewing, nature photography
              </p>
            </div>

            {/* Day 3 */}
            <div className="border-l-4 border-golden pl-6">
              <h4 className="text-xl font-bold text-forest-dark mb-2">Day 3: Stone Town Walking Tour</h4>
              <p className="text-gray-700 mb-4">
                Discover the UNESCO World Heritage Site of Stone Town with its narrow winding streets, historic
                buildings, and vibrant bazaars. Visit the House of Wonders, Old Fort, Sultan's Palace, and the famous
                Freddie Mercury House. Immerse yourself in centuries of Swahili, Arab, Persian, and European influences.
              </p>
              <p className="text-sm text-gray-600">
                Activities: Historical walking tour, market visits, cultural exploration
              </p>
            </div>

            {/* Day 4 */}
            <div className="border-l-4 border-golden pl-6">
              <h4 className="text-xl font-bold text-forest-dark mb-2">Day 4: Prison Island Tour</h4>
              <p className="text-gray-700 mb-4">
                Take a short boat ride to Changuu Island (Prison Island) to meet the giant Aldabra tortoises, some over
                100 years old. Explore the historical prison ruins, relax on beautiful beaches, and snorkel in the
                turquoise waters surrounding the island.
              </p>
              <p className="text-sm text-gray-600">
                Activities: Boat trip, tortoise encounter, snorkeling, beach relaxation
              </p>
            </div>

            {/* Day 5 */}
            <div className="border-l-4 border-golden pl-6">
              <h4 className="text-xl font-bold text-forest-dark mb-2">Day 5: Spice Farm Tour + The Rock Restaurant</h4>
              <p className="text-gray-700 mb-4">
                Experience Zanzibar as the "Spice Island" with a guided tour of aromatic spice plantations. See, smell,
                and taste exotic spices like cloves, vanilla, cinnamon, and nutmeg. End your tour with a memorable lunch
                at The Rock Restaurant, an iconic dining spot perched on a rock in the Indian Ocean.
              </p>
              <p className="text-sm text-gray-600">
                Activities: Spice farm tour, tropical fruit tasting, lunch at The Rock Restaurant
              </p>
            </div>
          </div>

          {/* What's Included */}
          <div className="mt-12 bg-sand-light p-8 rounded-lg">
            <h3 className="text-2xl font-display font-bold text-forest-dark mb-6">What's Included</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-golden mt-1">✓</span>
                <span>Professional English-speaking guide</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-golden mt-1">✓</span>
                <span>All entrance fees and park fees</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-golden mt-1">✓</span>
                <span>Transportation throughout the tour</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-golden mt-1">✓</span>
                <span>Lunch at The Rock Restaurant</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-golden mt-1">✓</span>
                <span>BBQ seafood lunch on Safari Blue</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-golden mt-1">✓</span>
                <span>Snorkeling equipment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-golden mt-1">✓</span>
                <span>Bottled water and refreshments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-golden mt-1">✓</span>
                <span>Hotel pickup and drop-off</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <BookingModal 
              tourName="Zanzibar 5-Day Tour Package" 
              trigger={
                <Button size="lg" className="bg-golden hover:bg-golden/90 text-white text-lg px-12 py-6">
                  BOOK THIS TRIP
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* Footer and WhatsAppFloat components */}
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
