import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import BookingModal from "@/components/booking-modal"

export const metadata: Metadata = {
  title: "Safari & Tour Packages - Serengeti, Zanzibar & Mikumi | ZANZIONE TOURS",
  description:
    "Explore our curated tour packages including 2-day Serengeti safari with the Great Migration, 5-day Zanzibar beach and culture tour, and Mikumi day trip safari. All-inclusive itineraries with expert guides, accommodation, meals, and unforgettable wildlife experiences in Tanzania.",
  openGraph: {
    title: "Complete Tour Packages - ZANZIONE TOURS & TRAVELS",
    description:
      "Choose from our carefully crafted safari and beach tour packages. From the Serengeti plains to Zanzibar beaches.",
    url: "https://www.zanzionetours.com/itineraries",
  },
  alternates: {
    canonical: "https://www.zanzionetours.com/itineraries",
  },
}

const packages = [
  {
    id: "mikumi-safari",
    title: "Mikumi Day Trip Safari",
    price: "$430",
    priceNote: "Per Person",
    duration: "1 Day",
    image: "/images/packages/mikumi-safari.jpg",
    description:
      "Full-day flying safari to Mikumi National Park. Experience incredible wildlife viewing including elephants, giraffes, lions, zebras, and more in this accessible Tanzania park.",
    highlights: [
      "Round-trip flights included",
      "Full-day guided game drive",
      "Bush lunch in the park",
      "Perfect for day trippers",
    ],
  },
  {
    id: "zanzibar-tour",
    title: "Zanzibar 5-Day Tour Package",
    price: "$390",
    priceNote: "Per Person",
    duration: "5 Days / 4 Nights",
    image: "/images/packages/zanzibar-tour.jpg",
    description:
      "Comprehensive exploration of Zanzibar's culture, nature, and beaches. Includes Safari Blue, Jozani Forest, Stone Town tour, Prison Island, spice farms, and The Rock Restaurant.",
    highlights: ["Safari Blue adventure", "Jozani Forest & monkeys", "Stone Town UNESCO site", "Beach relaxation time"],
  },
  {
    id: "serengeti-safari",
    title: "Serengeti 2 Days 1 Night Safari Package",
    price: "$1,676",
    priceNote: "Per Adult",
    duration: "2 Days / 1 Night",
    image: "/images/packages/serengeti-safari.jpg",
    description:
      "Experience the magic of Serengeti with a fly-in safari. Witness the Great Migration, spot the Big Five, and enjoy game drives across endless plains. Includes flights from Zanzibar.",
    highlights: [
      "Fly-in/Fly-out from Zanzibar",
      "Game drives in Serengeti",
      "Possible Big Five sightings",
      "Accommodation included",
    ],
  },
  {
    id: "mikumi-day-trip",
    title: "Mikumi Day Trip Safari from Zanzibar",
    price: "$430",
    priceNote: "Per Person",
    duration: "1 Day",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mikumi-bxYBdPwmmPNbzzdU2RvasPGdoZnptH.jpg",
    description:
      "Escape to wild Africa with a day trip to Mikumi National Park. Witness giraffes, elephants, wildebeests, lions, zebras, African buffalo in Tanzania's fourth-largest park, just 50 minutes from Zanzibar.",
    highlights: [
      "Round-trip flights included",
      "Full-day guided safari",
      "Bush lunch in the park",
      "Private vehicle option available",
    ],
  },
  {
    id: "selous-day-trip",
    title: "Selous Day Trip Safari from Zanzibar",
    price: "$450",
    priceNote: "Per Person",
    duration: "1 Day",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/selous-PLPCwmHRaGPCeRtGO4YFWqPzgbbLuj.jpg",
    description:
      "Unforgettable day trip to Selous Game Reserve (Nyerere National Park), Africa's largest reserve. Experience remarkable wildlife diversity including lions, elephants, giraffes, and stunning Rufiji River landscapes.",
    highlights: [
      "Flight to Selous included",
      "Experienced safari guide",
      "Lunch amidst nature",
      "Sharing or private options",
    ],
  },
  {
    id: "serengeti-3-days",
    title: "3 Days 2 Nights Serengeti Safari from Zanzibar",
    price: "$2,048",
    priceNote: "Per Adult",
    duration: "3 Days / 2 Nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/serengeti%20-lSPfjdMgugUtgqOQjyHFkanjYQCjbI.jpg",
    description:
      "Experience the magic of Serengeti National Park with this 3-day safari from Zanzibar. World-renowned for breathtaking landscapes and the Big Five, with multiple game drives across diverse ecosystems.",
    highlights: [
      "Round-trip flights included",
      "2 nights accommodation",
      "Multiple game drives",
      "All meals & park fees",
    ],
  },
  {
    id: "serengeti-balloon-safari",
    title: "3 Days Serengeti Safari & Hot Air Balloon from Zanzibar",
    price: "$2,793",
    priceNote: "Per Adult",
    duration: "3 Days / 2 Nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/serengeti-VUxSGtAmLFsVZH7cx67afMN8rT2oBn.jpg",
    description:
      "Ultimate Serengeti adventure combining game drives with a magical hot air balloon safari at sunrise. Witness wildlife from the sky, enjoy bush breakfast, and experience unforgettable encounters including night game drives.",
    highlights: [
      "Hot air balloon safari",
      "Bush breakfast included",
      "Night game drive",
      "Round-trip flights & accommodation",
    ],
  },
  {
    id: "zanzibar-3-days",
    title: "Zanzibar 3 Days 2 Nights Package",
    price: "$398",
    priceNote: "Per Person",
    duration: "3 Days / 2 Nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-mGZVMQ2iZK1EpkoVsQUYgGmAH9CwNP.jpg",
    description:
      "Perfect short getaway to Zanzibar. Includes accommodation with breakfast & dinner, Stone Town cultural tour, Spice Farm experience, Prison Island visit, and airport transfers.",
    highlights: [
      "2 nights accommodation included",
      "Stone Town & Prison Island",
      "Authentic spice farm tour",
      "All transfers included",
    ],
  },
  {
    id: "zanzibar-4-days",
    title: "Zanzibar 4 Days 3 Nights Package",
    price: "$617",
    priceNote: "Per Person",
    duration: "4 Days / 3 Nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-b94hGpun4A1YdQW2nQ8PHk6WqCkm8k.jpg",
    description:
      "Extended Zanzibar experience with dolphin encounters. Includes 3 nights accommodation, Stone Town tour, Spice Farm, Prison Island, Mnemba dolphin swimming & snorkeling.",
    highlights: [
      "3 nights accommodation",
      "Swim with dolphins at Mnemba",
      "Cultural & historical tours",
      "Breakfast & dinner daily",
    ],
  },
  {
    id: "zanzibar-5-days",
    title: "Zanzibar 5 Days 4 Nights Package",
    price: "$740",
    priceNote: "Per Person",
    duration: "5 Days / 4 Nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-pkDJR7WXf4YSlGOacUsAnIpo2RGvl7.jpg",
    description:
      "Comprehensive Zanzibar adventure featuring Safari Blue full-day trip, dolphin encounters, cultural tours, and relaxation. Perfect balance of activities and beach time.",
    highlights: [
      "Full-day Safari Blue adventure",
      "Dolphin swimming & snorkeling",
      "Stone Town & Spice Farm",
      "4 nights with meals included",
    ],
  },
  {
    id: "zanzibar-7-days",
    title: "Zanzibar 7 Days 6 Nights Package",
    price: "$1,298",
    priceNote: "Per Person",
    duration: "7 Days / 6 Nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-DY5HqYR6uOcnDpyE0cfBG2gUwBTPIU.jpg",
    description:
      "Ultimate Zanzibar vacation with everything included. Safari Blue, dolphins, Jozani Forest, The Rock Restaurant, cultural tours, plus free beach relaxation days.",
    highlights: [
      "6 nights accommodation",
      "Safari Blue & dolphin tours",
      "Jozani Forest & The Rock",
      "Beach relaxation days included",
    ],
  },
  {
    id: "zanzibar-8-days",
    title: "Zanzibar 8 Days 7 Nights Package",
    price: "$1,340",
    priceNote: "Per Person",
    duration: "8 Days / 7 Nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-6eePncVQ8Op8dAB1gTA69IbyRlXwOx.jpg",
    description:
      "Extended Zanzibar escape with full-day Safari Blue, Jozani Forest tour, Stone Town, Prison Island, Spice Farm, Mnemba dolphin encounters, plus beach relaxation days.",
    highlights: [
      "7 nights accommodation",
      "Full-day Safari Blue adventure",
      "Mnemba dolphins & snorkeling",
      "Multiple relaxation days",
    ],
  },
  {
    id: "zanzibar-9-days",
    title: "Zanzibar 9 Days 8 Nights Package",
    price: "$1,430",
    priceNote: "Per Person",
    duration: "9 Days / 8 Nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-hguPTgqUvdnvQXLPvVHOBq7ruQNM8U.jpg",
    description:
      "Comprehensive Zanzibar experience featuring Safari Blue, Mangrove Bay Kayaking, Stone Town, Prison Island, Spice Farm, Jozani Forest, Mnemba dolphins with ample beach time.",
    highlights: [
      "8 nights accommodation",
      "Mangrove Bay Kayaking",
      "Safari Blue & dolphin tours",
      "Cultural & adventure activities",
    ],
  },
  {
    id: "zanzibar-10-days",
    title: "Zanzibar 10 Days 9 Nights Package",
    price: "$1,590",
    priceNote: "Per Person",
    duration: "10 Days / 9 Nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-Z4TldhxGWRDyxKK89AKFzO1b4FyrP5.jpg",
    description:
      "Ultimate 10-day Zanzibar vacation with Safari Blue, Mangrove Kayaking, Nakupenda Sandbank, Prison Island, Jozani Forest, Mnemba dolphins, and multiple free beach days.",
    highlights: [
      "9 nights accommodation",
      "Nakupenda Sandbank experience",
      "Safari Blue & Mangrove Kayaking",
      "Multiple free days for relaxation",
    ],
  },
  {
    id: "tanzania-safari-5-days",
    title: "5 Days Tanzania Safari Package",
    price: "$1,770",
    priceNote: "Per Person",
    duration: "5 Days / 4 Nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2164403934-612x612-HdABUcJJ5XjxbXARXyQB7coV71ddDx.jpg",
    description:
      "Immerse yourself in Tanzania's incredible wildlife on this unforgettable 5-day safari. Discover vast elephant herds of Tarangire, diverse ecosystems of Lake Manyara, and breathtaking Ngorongoro Crater.",
    highlights: [
      "Tarangire & Lake Manyara parks",
      "Ngorongoro Crater descent",
      "Private safari vehicle & guide",
      "All park fees & accommodation",
    ],
  },
  {
    id: "tanzania-safari-7-days",
    title: "7 Days Tanzania Safari Package",
    price: "$2,480",
    priceNote: "Per Person",
    duration: "7 Days / 6 Nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2140549925-612x612-xqVFbqqrcJxrD746BZh8NSB62q3K61.jpg",
    description:
      "Thrilling 7-day Tanzania Safari through Africa's most renowned national parks. Experience the iconic Serengeti, Tarangire, Lake Manyara, and stunning Ngorongoro Crater with breathtaking wildlife encounters.",
    highlights: [
      "Serengeti National Park",
      "Great Migration viewing",
      "Ngorongoro Crater & Big Five",
      "Tarangire elephant herds",
    ],
  },
  {
    id: "tanzania-safari-8-days",
    title: "8 Days Tanzania Safari Package",
    price: "$2,600",
    priceNote: "Per Person",
    duration: "8 Days / 7 Nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1136053333-612x612-qGo4tXLLhliU6LP9YpvviF7vAU9Om4.jpg",
    description:
      "Book directly with locals for authentic 8-day Tanzania safari. Journey through Tarangire, Ngorongoro Crater, legendary Serengeti, plus unique cultural immersion with the Hadzabe tribe at Lake Eyasi.",
    highlights: [
      "Serengeti & Ngorongoro Crater",
      "Hadzabe tribe cultural experience",
      "Lake Eyasi visit",
      "All meals & accommodations",
    ],
  },
  {
    id: "tanzania-safari-10-days",
    title: "10 Days Tanzania Safari Package",
    price: "$3,720",
    priceNote: "Per Person",
    duration: "10 Days / 9 Nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-93469821-612x612-QhIAeWpzjALB7ZnlEHegynJmpCGhfS.jpg",
    description:
      "Unforgettable 10-day safari across Tanzania's breathtaking northern parks. From Tarangire and Lake Manyara to expansive Serengeti and majestic Ngorongoro Crater with Wildebeest Migration viewing.",
    highlights: [
      "Arusha & Tarangire National Parks",
      "2 days in Serengeti",
      "Ngorongoro Crater & Lake Eyasi",
      "Hadzabe tribe cultural tour",
    ],
  },
]

export default function ItinerariesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/safari-sunset.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold mb-4 leading-tight">
            Tour & Safari Packages
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
            Carefully curated experiences combining the best of Tanzania and Zanzibar
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-season mb-4">Choose Your Adventure</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              All-inclusive packages designed for unforgettable East African experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-golden">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">(4.0)</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-blue-season mb-3">{pkg.title}</h3>

                  <div className="flex items-center gap-4 mb-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{pkg.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{pkg.description}</p>

                  <div className="border-t pt-4 mb-4">
                    <p className="text-sm font-semibold text-blue-season mb-2">Package Highlights:</p>
                    <ul className="space-y-1">
                      {pkg.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-golden mt-1">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <Link href={`/itineraries/${pkg.id}`}>
                      <Button className="w-full bg-blue-season hover:bg-blue-season/90 text-white">
                        View Full Itinerary
                      </Button>
                    </Link>
                    <BookingModal 
                      tourName={pkg.title} 
                      trigger={
                        <Button className="w-full bg-golden hover:bg-golden/90 text-white">BOOK THIS TRIP</Button>
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-blue-season text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">Need a Custom Package?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Can't find exactly what you're looking for? Let us create a personalized itinerary tailored to your
            preferences, budget, and schedule.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-golden hover:bg-golden/90 text-white font-semibold px-8 py-4">
              Contact Us for Custom Package
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
