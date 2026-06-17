import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, MapPin, Check, ArrowLeft } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import BookingModal from "@/components/booking-modal"

export const metadata: Metadata = {
  title: "10 Days Tanzania Safari Package - Complete Northern Circuit Tour | ZANZIONE TOURS",
  description:
    "Unforgettable 10-day safari across Tanzania's breathtaking northern parks. From Tarangire and Lake Manyara to expansive Serengeti and majestic Ngorongoro Crater with Wildebeest Migration viewing.",
}

export default function TanzaniaSafari10Days() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-93469821-612x612-QhIAeWpzjALB7ZnlEHegynJmpCGhfS.jpg"
          alt="10 Days Tanzania Safari"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold mb-4 leading-tight">
            10 Days Tanzania Safari
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
            Complete Northern Circuit Adventure
          </p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-blue-season mb-2" />
              <p className="font-semibold text-gray-900">Duration</p>
              <p className="text-gray-600">10 Days / 9 Nights</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-blue-season mb-2" />
              <p className="font-semibold text-gray-900">Group Size</p>
              <p className="text-gray-600">Private Safari</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-season mb-2" />
              <p className="font-semibold text-gray-900">Parks Visited</p>
              <p className="text-gray-600">5 Parks + Cultural Tour</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold text-blue-season mb-1">Contact for Pricing</p>
              <p className="font-semibold text-gray-900">Price</p>
              <p className="text-gray-600">On Request</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/itineraries">
              <Button variant="outline" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                View All Packages
              </Button>
            </Link>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-season mb-6">Safari Overview</h2>
          <div className="prose max-w-none text-gray-600 leading-relaxed space-y-4">
            <p className="text-lg">
              Embark on an unforgettable 10-day safari across Tanzania's most breathtaking northern parks. From the
              breathtaking landscapes of Tarangire and Lake Manyara to the expansive plains of the Serengeti and the
              majestic Ngorongoro Crater, this journey immerses you in nature's greatest spectacles, including the
              awe-inspiring Wildebeest Migration. With a private guide and vehicle, this safari package offers you the
              freedom to explore at your own pace.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Itinerary */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-season mb-8 text-center">
            Day-by-Day Itinerary
          </h2>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 1: Arrival in Tanzania</h3>
                <p className="text-gray-600 leading-relaxed">
                  Upon your arrival at Kilimanjaro International Airport, your friendly guide will meet you with a big
                  welcome! From there, you'll be picked up from the Airport to your hotel, where you can unwind and immerse
                  yourself in the vibrant atmosphere of Africa.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 2: Arusha National Park</h3>
                <p className="text-gray-600 leading-relaxed">
                  Begin your safari with a game drive through Arusha National Park, renowned for its stunning views and
                  diverse wildlife. Keep an eye out for the rare black and white Colobus monkey, colorful birds like the
                  Silvery Cheeked Hornbill, and even albino baboons.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 3: Tarangire National Park</h3>
                <p className="text-gray-600 leading-relaxed">
                  Head to Tarangire National Park, famous for its massive herds of elephants and iconic baobab trees.
                  During the dry season, animals flock to the Tarangire River, the park's lifeline. Watch as elephants
                  skillfully tap water from the baobabs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 4: Lake Manyara National Park</h3>
                <p className="text-gray-600 leading-relaxed">
                  Explore Lake Manyara National Park, nestled along the Great Rift Valley. Its diverse ecosystems attract a
                  variety of animals, from monkeys in the lush rainforests to flamingos on the shimmering lake. Don't miss
                  the hippo pool visit.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 5: Serengeti National Park</h3>
                <p className="text-gray-600 leading-relaxed">
                  After breakfast, drive to Serengeti National Park, passing through the Ngorongoro Conservation Area. The
                  four-hour journey brings you to the main gate where you'll enjoy a packed lunch before an exciting game
                  drive in central Serengeti.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 6: Full Day in Serengeti</h3>
                <p className="text-gray-600 leading-relaxed">
                  Start early to maximize game-viewing opportunities. Your guide will take you to the best locations for
                  wildlife sightings. Spend time at the Hippo Pool and witness lions, wildebeest, zebras, and other animals
                  navigating the diverse landscape.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 7: Serengeti to Ngorongoro Crater</h3>
                <p className="text-gray-600 leading-relaxed">
                  Wake up early for a sunrise game drive, catching the Serengeti's wildlife at its most active. Return to
                  camp for brunch before heading to Ngorongoro Crater. Spend the night near the crater, preparing for
                  tomorrow's descent.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 8: Ngorongoro Crater</h3>
                <p className="text-gray-600 leading-relaxed">
                  Descend into the worldwide known Ngorongoro Crater, a UNESCO World Heritage Site. Home to lions, zebras,
                  buffalo, and the rare black rhino, this crater offers an exceptional safari experience with stunning
                  scenery and dense wildlife concentration.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 9: Lake Eyasi & The Hadzabe Tribe</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rise early for an extraordinary day with the Hadzabe tribe, one of Africa's last true hunter gatherer
                  communities. Immerse yourself in their daily activities and visit the tranquil Lake Eyasi before returning
                  to Arusha city.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 10: Departure</h3>
                <p className="text-gray-600 leading-relaxed">
                  After breakfast and leisure time at the lodge, your guide will escort you to Kilimanjaro International
                  Airport. Consider extending your adventure with a trip to Zanzibar Islands for a relaxing beach escape.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-season mb-8 text-center">
            Package Pricing
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-season mb-4">Lodge Safari</h3>
                <p className="text-lg font-semibold text-blue-season mb-2">Contact for Current Pricing</p>
                <p className="text-gray-600 mb-4">Price on request</p>
                <p className="text-sm text-gray-500 italic">
                  Rates vary by group size and season. Contact us for a personalized quote.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-season mb-4">Camping Safari</h3>
                <p className="text-lg font-semibold text-blue-season mb-2">Contact for Current Pricing</p>
                <p className="text-gray-600 mb-4">Price on request</p>
                <p className="text-sm text-gray-500 italic">
                  Rates vary by group size and season. Contact us for a personalized quote.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-8 text-center">
            What's Included
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-season mb-4">Package Includes</h3>
                <ul className="space-y-3">
                  {[
                    "All Park fees",
                    "All activities (unless labeled as optional)",
                    "Bush lunch during safari",
                    "Professional driver/guide",
                    "Safari Jeep (open roof vehicle)",
                    "Airport Pick up & Drop off",
                    "Accommodation as per itinerary",
                    "All Taxes/VAT",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-season mb-4">Not Included</h3>
                <ul className="space-y-3">
                  {[
                    "International flights",
                    "Travel insurance",
                    "Visa fees",
                    "Personal items",
                    "Tips and gratuities",
                    "Additional accommodation before/after safari",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-red-500 flex-shrink-0 mt-0.5">✗</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-blue-season text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">Ready to Book Your Safari?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Contact us today to reserve your 10-day Tanzania Safari adventure. Our team is ready to help you plan the
            ultimate wildlife and cultural experience across Tanzania's northern circuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Replaced WhatsApp link with BookingModal */}
            <BookingModal 
              tourName="10 Days Tanzania Safari Package" 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 w-full sm:w-auto"
            />
            <Link href="/itineraries">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-season hover:bg-gray-100 font-semibold px-8 py-4 w-full sm:w-auto"
              >
                View All Packages
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
