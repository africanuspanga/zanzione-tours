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
  title: "5 Days Tanzania Safari Package - Tarangire, Lake Manyara & Ngorongoro | ZANZIONE TOURS",
  description:
    "Experience Tanzania's incredible wildlife on this 5-day safari. Discover vast elephant herds of Tarangire, diverse ecosystems of Lake Manyara, and breathtaking Ngorongoro Crater with private guide and vehicle.",
}

export default function TanzaniaSafari5Days() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2164403934-612x612-HdABUcJJ5XjxbXARXyQB7coV71ddDx.jpg"
          alt="5 Days Tanzania Safari"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold mb-4 leading-tight">
            5 Days Tanzania Safari
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
            Tarangire, Lake Manyara & Ngorongoro Crater
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
              <p className="text-gray-600">5 Days / 4 Nights</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-blue-season mb-2" />
              <p className="font-semibold text-gray-900">Group Size</p>
              <p className="text-gray-600">Private Safari</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-season mb-2" />
              <p className="font-semibold text-gray-900">Parks Visited</p>
              <p className="text-gray-600">3 National Parks</p>
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
              Immerse yourself in Tanzania's incredible wildlife on this unforgettable 5-day safari. Discover the vast
              elephant herds of Tarangire, the diverse ecosystems of Lake Manyara, and the breathtaking Ngorongoro
              Crater. This private safari offers flexibility and personalized attention, with your own safari vehicle and
              an experienced English-speaking guide.
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
            {/* Day 1 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 1: Arrival in Tanzania</h3>
                <p className="text-gray-600 leading-relaxed">
                  Welcome to Tanzania! Upon arrival at Kilimanjaro International Airport, you'll be greeted by your
                  private guide and transferred to your hotel. Take time to relax and soak in the peaceful surroundings as
                  you prepare for your wildlife adventure starting the next day. We will need your flight details here.
                </p>
              </CardContent>
            </Card>

            {/* Day 2 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 2: Tarangire National Park</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your adventure begins with a visit to Tarangire National Park, famous for its massive elephant herds and
                  ancient baobab trees. As you explore, you'll see elephants using the baobab trunks as water sources and
                  witness wildlife flocking to the Tarangire River, especially during the dry season. Be prepared to see
                  large gatherings of elephants, zebras, wildebeest, and more in this picturesque, rugged landscape.
                </p>
              </CardContent>
            </Card>

            {/* Day 3 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 3: Lake Manyara National Park</h3>
                <p className="text-gray-600 leading-relaxed">
                  Today, you'll journey to Lake Manyara National Park, set against the dramatic backdrop of the Great Rift
                  Valley. This park is known for its diverse landscapes, ranging from dense forests teeming with monkeys
                  and birds to the expansive lake frequented by hippos. Explore the woodlands where elephants roam and
                  visit the famous hippo pool, where you can observe these large creatures lounging in the water.
                </p>
              </CardContent>
            </Card>

            {/* Day 4 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 4: Ngorongoro Crater</h3>
                <p className="text-gray-600 leading-relaxed">
                  Travel to the worldwide known Ngorongoro Crater, a UNESCO World Heritage Site and one of Africa's
                  greatest wildlife havens. Descend into the crater, home to a rich variety of animals including lions,
                  zebras, buffalo, and the rare black rhino. With its stunning scenery and dense concentration of wildlife,
                  the Ngorongoro Crater offers an exceptional safari experience, you will have time to check the crater
                  outside and inside with a safari vehicle.
                </p>
              </CardContent>
            </Card>

            {/* Day 5 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 5: Departure</h3>
                <p className="text-gray-600 leading-relaxed">
                  On your final morning, enjoy a leisurely breakfast before transferring to Kilimanjaro International
                  Airport for your departure. If you're not quite ready to say goodbye to Tanzania, consider extending your
                  trip with a beach escape to Zanzibar, where you can unwind on the island's beautiful, white-sand beaches.
                  You can contact us for the extension of your vacation to Zanzibar islands.
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
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-season mb-8 text-center">
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
            Contact us today to reserve your 5-day Tanzania Safari adventure. Our team is ready to help you plan the
            perfect wildlife experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal 
              tourName="5 Days Tanzania Safari Package" 
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
