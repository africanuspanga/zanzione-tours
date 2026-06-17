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
  title: "8 Days Tanzania Safari Package - Serengeti, Ngorongoro & Hadzabe Tribe | ZANZIONE TOURS",
  description:
    "Book directly with locals for authentic 8-day Tanzania safari. Journey through Tarangire, Ngorongoro Crater, legendary Serengeti, plus unique cultural immersion with the Hadzabe tribe at Lake Eyasi.",
}

export default function TanzaniaSafari8Days() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1136053333-612x612-qGo4tXLLhliU6LP9YpvviF7vAU9Om4.jpg"
          alt="8 Days Tanzania Safari"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold mb-4 leading-tight">
            8 Days Tanzania Safari
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
            Serengeti, Ngorongoro & Hadzabe Tribe Experience
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
              <p className="text-gray-600">8 Days / 7 Nights</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-blue-season mb-2" />
              <p className="font-semibold text-gray-900">Group Size</p>
              <p className="text-gray-600">Private Safari</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-season mb-2" />
              <p className="font-semibold text-gray-900">Parks Visited</p>
              <p className="text-gray-600">4 Parks + Cultural Tour</p>
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
              Book your 8-day Tanzania safari adventure directly with the locals for an authentic experience. This
              thrilling journey will take you through Tanzania's most iconic national parks, including Tarangire, the
              majestic Ngorongoro Crater, and the legendary Serengeti National Park. In addition to exploring these
              renowned wildlife havens, you'll also have the unique opportunity to immerse yourself in the vibrant culture
              of the Hadzabe tribe at Lake Eyasi.
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
                  witness wildlife flocking to the Tarangire River, especially during the dry season.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 3: Serengeti National Park</h3>
                <p className="text-gray-600 leading-relaxed">
                  Around day time you will arrive at Serengeti National Park. Enjoy an exhilarating half day game drive as
                  you drive to the park's breathtaking landscapes. Known for its incredible wildlife spectacle, the
                  Serengeti is known for its migration of over 1.5 million wildebeest and countless zebras.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 4: Serengeti National Park (Full Day)</h3>
                <p className="text-gray-600 leading-relaxed">
                  Following another delicious african breakfast, dive deeper into the wilderness with a full day of game
                  driving along the Great Migration trails. Your knowledgeable driver-guide will share captivating insights
                  into this extraordinary phenomenon, solidifying Tanzania's reputation as Africa's best safari destination.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 5: Serengeti to Ngorongoro Crater</h3>
                <p className="text-gray-600 leading-relaxed">
                  Wake up early for a sunrise game drive, catching the Serengeti's wildlife at its most active time.
                  Afterward, return to camp for brunch before heading to Ngorongoro Crater. This UNESCO World Heritage Site
                  is home to nearly all of East Africa's wildlife, including the elusive black rhino. Spend the night near
                  the crater.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 6: Ngorongoro Crater</h3>
                <p className="text-gray-600 leading-relaxed">
                  Travel to the worldwide known Ngorongoro Crater, a UNESCO World Heritage Site and one of Africa's greatest
                  wildlife havens. Descend into the crater, home to a rich variety of animals including lions, zebras,
                  buffalo, and the rare black rhino. With its stunning scenery and dense concentration of wildlife.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 7: Lake Eyasi & The Hadzabe Tribe</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rise early for an extraordinary day with the Hadzabe tribe, one of Africa's last true hunter gatherer
                  communities. Immerse yourself in their daily activities, whether it's joining the men in hunting or the
                  women in foraging. After this incredible cultural experience, visit the tranquil Lake Eyasi before
                  returning to Arusha city.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-season mb-4">Day 8: Departure</h3>
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
            Contact us today to reserve your 8-day Tanzania Safari adventure with Hadzabe tribe experience. Our team is
            ready to help you plan the perfect cultural and wildlife journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal 
              tourName="8 Days Tanzania Safari Package" 
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
