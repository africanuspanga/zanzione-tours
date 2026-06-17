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
  title: "7 Days Tanzania Safari Package - Tarangire, Serengeti, Ngorongoro & Lake Manyara | ZANZIONE TOURS",
  description:
    "Thrilling 7-day Tanzania Safari through Africa's most renowned parks. Experience the iconic Serengeti, Great Migration, Tarangire, Lake Manyara, and stunning Ngorongoro Crater.",
}

export default function TanzaniaSafari7Days() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2140549925-612x612-xqVFbqqrcJxrD746BZh8NSB62q3K61.jpg"
          alt="7 Days Tanzania Safari"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold mb-4 leading-tight">
            7 Days Tanzania Safari
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
            Tarangire, Serengeti, Ngorongoro & Lake Manyara
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
              <p className="text-gray-600">7 Days / 6 Nights</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-blue-season mb-2" />
              <p className="font-semibold text-gray-900">Group Size</p>
              <p className="text-gray-600">Private Safari</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-season mb-2" />
              <p className="font-semibold text-gray-900">Parks Visited</p>
              <p className="text-gray-600">4 National Parks</p>
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
              Embark on a thrilling 7-day Tanzania Safari, where you'll explore some of Africa's most renowned national
              parks and encounter breathtaking wildlife and natural wonders. From the moment you arrive in Tanzania to the
              day you depart, this unforgettable adventure takes you through the iconic Serengeti National Park, Tarangire,
              Lake Manyara, and the stunning Ngorongoro Crater. Prepare for a once-in-a-lifetime experience!
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
                  yourself in the vibrant atmosphere of Africa. Next day marks the beginning of your safari adventure!
                </p>
              </CardContent>
            </Card>

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

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 3: Serengeti National Park</h3>
                <p className="text-gray-600 leading-relaxed">
                  Around day time you will arrive at Serengeti National Park. Enjoy an exhilarating half day game drive as
                  you drive to the park's breathtaking landscapes. Known for its incredible wildlife spectacle, the
                  Serengeti is known for its migration of over 1.5 million wildebeest and countless zebras. Witness the raw
                  beauty of nature as these animals bravely cross crocodile-infested waters, giving birth to over 8,000
                  calves each day.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 4: Serengeti National Park (Full Day)</h3>
                <p className="text-gray-600 leading-relaxed">
                  Following another delicious african breakfast, dive deeper into the wilderness with a full day of game
                  driving along the Great Migration trails. This is mostly when you visit during migration time. Your
                  knowledgeable driver-guide will share captivating insights into this extraordinary phenomenon, solidifying
                  Tanzania's reputation as Africa's best safari destination. This UNESCO World Heritage site is alive with
                  the sounds of over six million hooves echoing across the plains.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 5: Ngorongoro Crater</h3>
                <p className="text-gray-600 leading-relaxed">
                  Travel to the worldwide known Ngorongoro Crater, a UNESCO World Heritage Site and one of Africa's greatest
                  wildlife havens. Descend into the crater, home to a rich variety of animals including lions, zebras,
                  buffalo, and the rare black rhino. With its stunning scenery and dense concentration of wildlife, the
                  Ngorongoro Crater offers an exceptional safari experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 6: Lake Manyara National Park</h3>
                <p className="text-gray-600 leading-relaxed">
                  Explore the diverse ecosystems of Lake Manyara National Park, nestled along the Great Rift Valley. The
                  park offers a rich variety of experiences, from spotting elephants in the woodlands to admiring the
                  playful primates in the dense rainforest. Don't miss the famous Manyara hippo pool, where you'll see these
                  giants basking in the water all day long.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 7: Departure</h3>
                <p className="text-gray-600 leading-relaxed">
                  After breakfast and some leisure time at the lodge, your guide will escort you to Kilimanjaro
                  International Airport for your journey home. If you're not ready to leave yet, consider extending your
                  adventure with a trip to the pristine beaches of Zanzibar Islands for a relaxing island escape.
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
            Contact us today to reserve your 7-day Tanzania Safari adventure. Our team is ready to help you plan the
            perfect wildlife experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal 
              tourName="7 Days Tanzania Safari Package" 
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
