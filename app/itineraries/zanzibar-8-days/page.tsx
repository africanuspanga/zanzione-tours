import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Utensils, Car, Check } from 'lucide-react'
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import BookingModal from "@/components/booking-modal"

export default function Zanzibar8DaysPackage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-6eePncVQ8Op8dAB1gTA69IbyRlXwOx.jpg"
            alt="Zanzibar Beach Paradise with Traditional Boats"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Zanzibar 8 Days 7 Nights Package
              </h1>
              <div className="flex flex-wrap gap-4 text-white/90 text-lg">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>7 Nights</span>
                </div>
                <div className="flex items-center gap-2">
                  <Utensils className="w-5 h-5" />
                  <span>Breakfast & Dinner</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5" />
                  <span>Activities & Transfers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Package Overview */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Package Overview</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This package suits you if you will visit Zanzibar for 8 days. The package includes Hotels, Airport transfers, adventurous activities. We make sure you are stress-free to plan your Zanzibar vacation in terms of tours and activities for your 8 days.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    To book this package is simple! Just send us an inquiry, and we'll promptly get back to you with three distinct package options: five-star, four-star, and three-star hotel selections. From there, you can pick the perfect package that aligns with your budget.
                  </p>
                </CardContent>
              </Card>

              {/* Itinerary */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Itinerary</h2>
                  
                  <div className="space-y-6">
                    {/* Day 1 */}
                    <div className="border-l-4 border-blue-500 pl-6 py-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">DAY 1: Transfer to Hotel</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>In this day you will arrive at Zanzibar International Airport</p>
                        <p>Upon arrival, you will meet our driver just outside of the arrival area</p>
                        <p>Driver will be showing your name on the sign board. Pick up will depend on your flight details</p>
                        <p>You will send flight details when you confirm the package. No extra costs for the transfer to Hotel</p>
                      </div>
                    </div>

                    {/* Day 2 */}
                    <div className="border-l-4 border-blue-500 pl-6 py-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">DAY 2: Full-Day Safari Blue Trip</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>This will be full day sailing around mangroves and snorkeling along Menai bay, which is one of the best coral reefs in Zanzibar.</p>
                        <p>Sailing to Kwale Island, Sandbank relaxing, Swimming & Snorkeling.</p>
                        <p>Enjoy the best fresh seafood barbeque; Octopus, Lobsters, squids, Calamari, Fish and so on.</p>
                        <p>Exotic fresh fruit tasting like Banana, Watermelon, Pineapple, Mangoes.</p>
                      </div>
                    </div>

                    {/* Day 3 */}
                    <div className="border-l-4 border-blue-500 pl-6 py-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">DAY 3: Half day Jozani Forest Tour</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>Delight in playful encounters with the unique Red Colobus Monkey, exclusive to the Zanzibar Islands</p>
                        <p>Uncover the historical significance of Jozani Forest, exploring its rich flora and fauna and the stories they hold</p>
                        <p>Gain insight into the utilization of herbs in Zanzibari culture and traditions</p>
                        <p>Wander through the expansive expanse of the largest forest in Zanzibar</p>
                      </div>
                    </div>

                    {/* Day 4 */}
                    <div className="border-l-4 border-blue-500 pl-6 py-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">DAY 4: Tour – Spice Farm, Prison Island & Stone Town</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>Feeding and taking stunning photos with giant Aldabra tortoises at Prison Island</p>
                        <p>Explore historical sites in Stone Town, including the House of Wonders and Freddie Mercury House</p>
                        <p>Delight in tropical fruits such as mangoes, bananas, pineapple, and watermelon</p>
                        <p>Savor a delectable Spiced Rice Pilau lunch amidst the lush surroundings of the spice farm</p>
                      </div>
                    </div>

                    {/* Day 5 */}
                    <div className="border-l-4 border-blue-500 pl-6 py-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">DAY 5: Pick up to your next Hotel in Nungwi Beach</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>In this day, you will change Hotel from South coast Hotel to another Hotel in Nungwi Beach (North)</p>
                        <p>Your next Hotel will be in Nungwi beach or Kendwa beach depending on availability and timing.</p>
                        <p>You can check our Hotel options in the last page of this itinerary.</p>
                      </div>
                    </div>

                    {/* Day 6 */}
                    <div className="border-l-4 border-blue-500 pl-6 py-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">DAY 6: Chilling day!</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>On this day you will have enough time for relaxation on the resort; Sun bathing, enjoying the sunset from the beach.</p>
                      </div>
                    </div>

                    {/* Day 7 */}
                    <div className="border-l-4 border-blue-500 pl-6 py-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">DAY 7: Half Day – Mnemba Dolphins & Snorkeling</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>Swimming with Dolphins and taking stunning photos</p>
                        <p>Snorkeling and witnessing a variety of colorful tropical fishes, corals and other marine creatures</p>
                        <p>Explore the coral reefs and marine life around Mnemba Island</p>
                        <p>This half day will show you the other part of North coast of Zanzibar, Matemwe beach</p>
                      </div>
                    </div>

                    {/* Day 8 */}
                    <div className="border-l-4 border-blue-500 pl-6 py-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">DAY 8: Transfer to the Airport, Goodbye!</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>After eight days of your Zanzibar vacation, this day you will take your flight back home.</p>
                        <p>Driver will take you from the Hotel based on your flight timings.</p>
                        <p>Hope you end up with a lot of memories and a few souvenirs too!</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Includes */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Package Includes</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Accommodation",
                      "Return airport to hotel transfers",
                      "Breakfast & Dinner",
                      "Transport during excursions",
                      "Entrances",
                      "Drinking water while on excursions",
                      "A professional driver/guide",
                      "All Taxes and VAT",
                      "Local SIM Cards"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Pricing Card */}
                <Card className="border-2 border-blue-500">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <p className="text-blue-season font-semibold mb-2">Contact for Current Pricing</p>
                      <p className="text-gray-500 text-sm">Price on request</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Calendar className="w-5 h-5 text-blue-500" />
                        <span>7 Nights / 8 Days</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Utensils className="w-5 h-5 text-blue-500" />
                        <span>Breakfast & Dinner Included</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Users className="w-5 h-5 text-blue-500" />
                        <span>Professional Guide</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Car className="w-5 h-5 text-blue-500" />
                        <span>Airport Transfers</span>
                      </div>
                    </div>

                    <BookingModal 
                      tourName="Zanzibar 8 Days 7 Nights Package" 
                      className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6"
                    />
                  </CardContent>
                </Card>

                {/* Quick Info */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Need Help?</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Have questions about this package? Our team is here to help you plan the perfect Zanzibar vacation.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-blue-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready for Your 8-Day Zanzibar Adventure?
          </h2>
          <p className="text-lg sm:text-xl mb-8 leading-relaxed">
            Book your extended Zanzibar package today and experience the ultimate tropical getaway. 
            From Safari Blue to dolphin encounters, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal 
              tourName="Zanzibar 8 Days 7 Nights Package" 
              className="bg-white text-blue-500 hover:bg-gray-100 font-semibold px-8 py-6 text-lg"
            />
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-500 font-semibold px-8 py-6 text-lg bg-transparent"
              asChild
            >
              <Link href="/itineraries">View All Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
