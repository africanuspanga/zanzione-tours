import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import BookingModal from "@/components/booking-modal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

const zanzibarTours = [
  {
    id: 1,
    title: "Safari Blue Day Trip",
    image: "/images/tours/safari-blue-day.jpg",
    duration: "Full Day",
    groupSize: "4-20 people",
    price: "$40",
    slug: "SafariBlueTour", // Added slug for Safari Blue detail page
    description:
      "Sail on traditional dhows to pristine sandbanks and enjoy the ultimate marine adventure with snorkeling, swimming, and a seafood feast.",
    highlights: [
      "Traditional dhow sailing",
      "Sandbank exploration",
      "Snorkeling adventures",
      "Fresh seafood feast",
      "Sunset sailing",
    ],
  },
  {
    id: 2,
    title: "Stone Town Tour",
    image: "/images/tours/stone-town-tour.jpg",
    duration: "Half Day",
    groupSize: "2-12 people",
    price: "$25",
    slug: "StoneTownTour",
    description:
      "Explore the UNESCO World Heritage site with its narrow alleys, historic buildings, and vibrant markets. Discover the cultural heart of Zanzibar.",
    highlights: [
      "UNESCO World Heritage exploration",
      "Historic architecture",
      "Spice market visits",
      "Cultural storytelling",
      "Local artisan workshops",
    ],
  },
  {
    id: 3,
    title: "Prison Island Boat Trip",
    image: "/images/tours/prison-island.jpg",
    duration: "Half Day",
    groupSize: "2-15 people",
    price: "$30",
    slug: "PrisonIslandTour",
    description:
      "Visit the historic Changuu Island to learn about its fascinating past and meet the famous giant Aldabra tortoises, some over 100 years old.",
    highlights: [
      "Giant tortoise encounters",
      "Historical prison ruins",
      "Peacock spotting",
      "Island beach time",
      "Cultural history lessons",
    ],
  },
  {
    id: 4,
    title: "Nakupenda Sandbank Tour",
    image: "/images/tours/nakupenda-sandbank.jpg",
    duration: "Half Day",
    groupSize: "4-20 people",
    price: "$49",
    slug: "NakupendaSandbankTour",
    description:
      "Escape to a pristine white sand paradise in the middle of the ocean. Perfect for relaxation, swimming, and enjoying fresh seafood.",
    highlights: [
      "Pristine white sandbank",
      "Crystal-clear waters",
      "Snorkeling opportunities",
      "Fresh seafood barbecue",
      "Tropical paradise experience",
    ],
  },
  {
    id: 5,
    title: "Spice Farm Tour",
    image: "/images/tours/spice-tour.jpg",
    duration: "Half Day",
    groupSize: "2-15 people",
    price: "$25",
    slug: "SpiceFarmTour",
    description:
      "Discover why Zanzibar is called the 'Spice Island' with visits to working spice plantations where you'll see, smell, and taste exotic spices.",
    highlights: [
      "Exotic spice tasting",
      "Plantation walks",
      "Traditional farming methods",
      "Spice cooking demonstrations",
      "Fresh tropical fruits",
    ],
  },
  {
    id: 6,
    title: "Jozani Forest Tour",
    image: "/images/tours/jozani-forest.jpg",
    duration: "Half Day",
    groupSize: "2-15 people",
    price: "$30",
    slug: "JozaniForestTour", // Added slug for Jozani Forest detail page
    description:
      "Explore Zanzibar's indigenous forest and meet the rare Red Colobus monkeys found nowhere else on Earth. A nature lover's paradise with guided forest walks.",
    highlights: [
      "Red Colobus monkey encounters",
      "Indigenous forest exploration",
      "Medicinal plant learning",
      "Bird watching",
      "Nature photography",
    ],
  },
  {
    id: 7,
    title: "Salaam Cave",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Salam%20Cave-maSMMXqzhTperq8CvQZOv47LUaKQYl.jpeg",
    duration: "Half Day",
    groupSize: "2-25 people",
    price: "$25",
    slug: "SalaamCave", // Added slug for detail page
    description:
      "Experience the unique sea turtle sanctuary in this natural coral grotto. Swim alongside rescued sea turtles in crystal-clear saltwater pools and support vital conservation efforts.",
    highlights: [
      "Swim with sea turtles",
      "Turtle interaction & feeding",
      "Conservation education",
      "Natural cave pool",
      "Marine sanctuary experience",
    ],
  },
  {
    id: 8,
    title: "Kizimkazi Dolphins Tour",
    image: "/images/tours/kizimkazi-dolphin.jpg",
    duration: "Half Day",
    groupSize: "2-12 people",
    price: "$35",
    slug: "KizimkaziDolphinsTour",
    description:
      "Swim with wild dolphins in their natural habitat at Kizimkazi. An unforgettable wildlife encounter in the warm waters of the Indian Ocean.",
    highlights: [
      "Wild dolphin swimming",
      "Marine wildlife encounters",
      "Kizimkazi village visit",
      "Snorkeling opportunities",
      "Wildlife photography",
    ],
  },
  {
    id: 9,
    title: "Mtende Beach",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mtende%20Beach-6BjUwLXrLo6prVoiEffWsirJQT11vW.jpeg",
    duration: "Half Day",
    groupSize: "2-25 people",
    price: "$15",
    slug: "MtendeBeach",
    description:
      "Discover Zanzibar's secret, picturesque cove with dramatic rock formations and extreme tidal displays. Perfect for those seeking authentic, tranquil atmosphere away from the crowds.",
    highlights: [
      "Dramatic rock formations & scenery",
      "Tide pool exploration",
      "High tide swimming",
      "The iconic rock swing",
      "Authentic local village culture",
    ],
  },
  {
    id: 10,
    title: "Maalum Cave",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Maalum%20Cave-7PuunGmAhTkHZ7MtEO0Mzjuf7H5N4x.jpeg",
    duration: "Half Day",
    groupSize: "2-25 people",
    price: "$27",
    slug: "MaalumCave", // Added slug for detail page
    description:
      "Discover Zanzibar's hidden oasis featuring a stunning natural limestone cave with crystal-clear freshwater pools. Perfect for swimming and geological exploration in a serene jungle setting.",
    highlights: [
      "Natural cave pool swimming",
      "Crystal-clear mineral waters",
      "Stunning stalactites & stalagmites",
      "Lounge and relaxation area",
      "Local legends and stories",
    ],
  },
  {
    id: 11,
    title: "The Rock Restaurant",
    image: "/images/tours/the-rock-restaurant.jpg",
    duration: "Half Day",
    groupSize: "2-8 people",
    price: "$45",
    slug: "TheRockRestaurant", // Added slug for The Rock Restaurant detail page
    description:
      "Dine at the world-famous restaurant built on a rock in the Indian Ocean. An iconic Zanzibar experience combining great food with stunning views.",
    highlights: [
      "Iconic rock restaurant",
      "Ocean dining experience",
      "Fresh seafood cuisine",
      "Stunning photo opportunities",
      "Unique architectural marvel",
    ],
  },
  {
    id: 12,
    title: "Mnemba Island Tour",
    image: "/images/tours/mnemba-island.jpg",
    duration: "Half Day",
    groupSize: "2-12 people",
    price: "$42",
    slug: "MnembaIslandTour",
    description:
      "Discover pristine coral reefs and swim in crystal-clear waters around this protected marine sanctuary. Perfect for snorkeling enthusiasts and marine life lovers.",
    highlights: [
      "Pristine coral reef snorkeling",
      "Tropical fish encounters",
      "Dolphin spotting",
      "Beach relaxation",
      "Marine sanctuary experience",
    ],
  },
  {
    id: 13,
    title: "Sunset Dhow Cruise",
    image: "/images/tours/sunset-dhow.jpg",
    duration: "Half Day",
    groupSize: "2-20 people",
    price: "$35",
    slug: "SunsetDhowCruise",
    description:
      "Sail into the golden hour aboard a traditional dhow and watch the spectacular Zanzibar sunset paint the sky in brilliant colors.",
    highlights: [
      "Traditional dhow sailing",
      "Spectacular sunset views",
      "Romantic atmosphere",
      "Light refreshments",
      "Photography opportunities",
    ],
  },
]

export const metadata: Metadata = {
  title: "Zanzibar Island Tours - Stone Town, Safari Blue, Spice Tours & Dolphin Adventures",
  description:
    "Explore Zanzibar's best experiences: UNESCO Stone Town tours, Safari Blue trips, pristine sandbanks, dolphin swimming, spice farm visits, Jozani Forest, and sunset dhow cruises. Book authentic island adventures with local expert guides.",
  keywords:
    "Zanzibar tours, Stone Town tour, Safari Blue, Nakupenda sandbank, Prison Island, spice tour, Jozani Forest, Kizimkazi dolphins, sunset cruise, Mnemba Island snorkeling, The Rock Restaurant",
  openGraph: {
    title: "Zanzibar Island Tours - Experience the Spice Island",
    description:
      "From Stone Town's historic alleys to pristine beaches and vibrant marine life - discover authentic Zanzibar experiences.",
    url: "https://www.zanzionetours.com/zanzibar",
    images: [
      {
        url: "/images/zanzibar-beach.jpg",
        width: 1200,
        height: 630,
        alt: "Zanzibar Island Paradise",
      },
    ],
  },
  alternates: {
    canonical: "https://www.zanzionetours.com/zanzibar",
  },
}

export default function ZanzibarPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url(/background images/istockphoto-1252332178-612x612.jpg)" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Zanzibar Island Tours</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Discover the magic of the Spice Island with our carefully curated experiences
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-blue-season mb-6">Unique Zanzibar Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From pristine beaches to cultural treasures, each tour offers a unique window into Zanzibar's incredible
              diversity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {zanzibarTours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-bold text-blue-season mb-3">{tour.title}</h3>
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{tour.groupSize}</span>
                    </div>
                  </div>
                  {tour.price && (
                    <div className="mb-3">
                      <p className="text-lg font-semibold text-golden">From {tour.price}</p>
                    </div>
                  )}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{tour.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-blue-season mb-2 text-sm">Highlights:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {tour.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-golden rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    {tour.slug ? (
                      <>
                        <Link href={`/zanzibar/${tour.slug}`} scroll={true} className="flex-1">
                          <Button variant="outline" className="w-full border-ocean text-ocean hover:bg-ocean hover:text-white">
                            View Details
                          </Button>
                        </Link>
                        <div className="flex-1">
                          <BookingModal 
                            tourName={tour.title} 
                            trigger={
                              <Button className="w-full bg-[#F5A623] hover:bg-[#F5A623]/90 text-white font-bold">
                                BOOK NOW
                              </Button>
                            }
                          />
                        </div>
                      </>
                    ) : (
                      <div className="w-full">
                        <BookingModal 
                          tourName={tour.title} 
                          trigger={
                            <Button className="w-full bg-[#F5A623] hover:bg-[#F5A623]/90 text-white font-bold">
                              BOOK NOW
                            </Button>
                          }
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-season text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold mb-6">Ready to Explore Zanzibar?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us create a personalized Zanzibar experience that matches your interests and schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-golden hover:bg-golden/90 text-white font-semibold px-8 py-4">
                Customize Your Tour
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-season font-semibold px-8 py-4 bg-transparent"
              >
                Contact Our Experts
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
