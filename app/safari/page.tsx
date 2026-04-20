import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

const safariDestinations = [
  {
    id: 1,
    name: "Serengeti National Park",
    location: "Northern Tanzania",
    bestTime: "Year-round",
    image: "/images/safari/serengeti.jpg",
    description:
      "Witness the Great Migration and endless plains teeming with wildlife. Home to the Big Five and one of Africa's most iconic safari destinations.",
    highlights: [
      "Great Migration spectacle",
      "Big Five encounters",
      "Endless savanna plains",
      "Hot air balloon safaris",
      "Luxury tented camps",
    ],
  },
  {
    id: 2,
    name: "Ngorongoro Crater",
    location: "Northern Tanzania",
    bestTime: "Year-round",
    image: "/images/safari/ngorongoro.jpg",
    description:
      "Explore the world's largest intact volcanic caldera, often called 'Africa's Eden' for its incredible concentration of wildlife.",
    highlights: [
      "Volcanic caldera exploration",
      "High wildlife density",
      "Black rhino sightings",
      "Maasai cultural encounters",
      "Crater rim lodges",
    ],
  },
  {
    id: 3,
    name: "Tarangire National Park",
    location: "Northern Tanzania",
    bestTime: "June - October",
    image: "/images/safari/tarangire.jpg",
    description:
      "Famous for its massive elephant herds and iconic baobab trees. A photographer's paradise with diverse landscapes and wildlife.",
    highlights: [
      "Massive elephant herds",
      "Ancient baobab trees",
      "Diverse bird species",
      "Tarangire River wildlife",
      "Tree-climbing lions",
    ],
  },
  {
    id: 4,
    name: "Lake Manyara National Park",
    location: "Northern Tanzania",
    bestTime: "Year-round",
    image: "/images/safari/manyara.jpg",
    description:
      "Discover tree-climbing lions and vast flocks of flamingos in this compact park with incredible biodiversity and stunning landscapes.",
    highlights: [
      "Tree-climbing lions",
      "Flamingo populations",
      "Groundwater forest",
      "Hot springs",
      "Rift Valley escarpment",
    ],
  },
  {
    id: 5,
    name: "Ruaha National Park",
    location: "Central Tanzania",
    bestTime: "May - December",
    image: "/images/safari/ruaha.jpg",
    description:
      "Tanzania's largest national park offers remote wilderness experiences with large predator populations and diverse ecosystems.",
    highlights: [
      "Remote wilderness",
      "Large predator populations",
      "Great Ruaha River",
      "Baobab landscapes",
      "Wild dog encounters",
    ],
  },
  {
    id: 6,
    name: "Selous Game Reserve",
    location: "Southern Tanzania",
    bestTime: "June - October",
    image: "/images/safari/selous.jpg",
    description:
      "One of Africa's largest game reserves, offering boat safaris, walking safaris, and incredible wildlife diversity in pristine wilderness.",
    highlights: [
      "Boat safari adventures",
      "Walking safari experiences",
      "Rufiji River system",
      "Wild dog populations",
      "Pristine wilderness",
    ],
  },
]

export const metadata: Metadata = {
  title: "Tanzania Safari Tours - Serengeti, Ngorongoro, Tarangire & More Wildlife Adventures",
  description:
    "Experience Tanzania's premier wildlife safaris: witness the Great Migration in Serengeti, explore Ngorongoro Crater's Big Five, encounter elephant herds in Tarangire, and discover remote wilderness in Ruaha & Selous. Expert safari guides and luxury camping.",
  keywords:
    "Tanzania safari, Serengeti National Park, Ngorongoro Crater safari, Tarangire elephants, Lake Manyara tree-climbing lions, Ruaha National Park, Selous Game Reserve, Big Five safari, Great Migration, African wildlife",
  openGraph: {
    title: "Tanzania Safari Adventures - Witness Africa's Greatest Wildlife",
    description:
      "Encounter the Big Five, witness the Great Migration, and explore Tanzania's world-renowned national parks with expert guides.",
    url: "https://www.zanzionetours.com/safari",
    images: [
      {
        url: "/images/safari-sunset.jpg",
        width: 1200,
        height: 630,
        alt: "Tanzania Safari Adventure",
      },
    ],
  },
  alternates: {
    canonical: "https://www.zanzionetours.com/safari",
  },
}

export default function SafariPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url(/background-images/bg-safari-elephant.jpg)" }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Tanzania Safari Adventures</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Experience the Big Five and witness nature's greatest spectacles in Africa's premier safari destinations
          </p>
        </div>
      </section>

      {/* Safari Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-blue-season mb-6">Premier Safari Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore Tanzania's world-renowned national parks and game reserves, each offering unique wildlife
              experiences and breathtaking landscapes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safariDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-display font-bold text-blue-season mb-3">{destination.name}</h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{destination.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Best: {destination.bestTime}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{destination.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-blue-season mb-3">Experience Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {destination.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-golden rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact">
                    <Button className="w-full bg-golden hover:bg-golden/90 text-white">Plan Safari Here</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-season text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold mb-6">Begin Your Safari Adventure</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our expert guides show you the wonders of Tanzania's wilderness. Every safari is tailored to your
            interests and comfort level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-golden hover:bg-golden/90 text-white font-semibold px-8 py-4">
                Plan My Safari
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-season font-semibold px-8 py-4 bg-transparent"
              >
                Safari Consultation
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
