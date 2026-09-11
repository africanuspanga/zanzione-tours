import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Zanzibar 4 Days 3 Nights Package",
  description:
    "Stone Town heritage, Prison Island and a full beach day on Zanzibar's north coast. 3 nights in Zanzibar from $617 per person, including accommodation, breakfast & dinner, transfers and guided excursions.",
  keywords: [
    "Zanzibar 4 days package",
    "Zanzibar 3 nights holiday",
    "Zanzibar holiday package",
    "Zanzibar all inclusive tour",
    "Zanzibar beach holiday",
    "Zanzibar tour operator",
  ],
  openGraph: {
    title: "Zanzibar 4 Days 3 Nights Package | Zanzione Tours & Safaris",
    description:
      "Stone Town heritage, Prison Island and a full beach day on Zanzibar's north coast. 3 nights in Zanzibar from $617 per person, including accommodation, breakfast & dinner, transfers and guided excursions.",
    url: "https://www.zanzionetours.com/itineraries/zanzibar-4-days",
    images: [
      {
        url: "/new-zanzi-tours-images/nakupenda-island.jpeg",
        width: 1200,
        height: 630,
        alt: "Zanzibar 4 Days 3 Nights Package — turquoise water and white sand in Zanzibar",
      },
    ],
  },
  alternates: {
    canonical: "https://www.zanzionetours.com/itineraries/zanzibar-4-days",
  },
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Utensils, Car, Check } from 'lucide-react'
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BookingModal from "@/components/booking-modal"

export default function Zanzibar4DaysPackage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-b94hGpun4A1YdQW2nQ8PHk6WqCkm8k.jpg"
            alt="Dolphins Swimming in Zanzibar Waters"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Zanzibar 4 Days 3 Nights Package
              </h1>
              <div className="flex flex-wrap gap-4 text-white/90 text-lg">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>3 Nights</span>
                </div>
                <div className="flex items-center gap-2">
                  <Utensils className="w-5 h-5" />
                  <span>Breakfast & Dinner</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5" />
                  <span>Airport Transfers</span>
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
                  <h2 className="text-3xl font-bold text-ink mb-4">Package Overview</h2>
                  <p className="text-ink/85 leading-relaxed mb-4">
                    This package suits you if you will visit Zanzibar for 4 days. The package includes Hotels, Airport transfers, and adventurous activities. We make sure you are stress-free to plan your Zanzibar vacation in terms of tours and activities for your 4 days.
                  </p>
                  <p className="text-ink/85 leading-relaxed">
                    To book this package is simple! Just send us an inquiry, and we'll promptly get back to you with three distinct package options: five-star, four-star, and three-star hotel selections. From there, you can pick the perfect package that aligns with your budget.
                  </p>
                </CardContent>
              </Card>

              {/* Itinerary */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-3xl font-bold text-ink mb-6">Detailed Itinerary</h2>
                  
                  <div className="space-y-6">
                    {/* Day 1 */}
                    <div className="border-l-4 border-aqua pl-6 py-2">
                      <h3 className="text-xl font-bold text-ink mb-2">DAY 1: Transfer to Hotel</h3>
                      <div className="space-y-2 text-ink/85">
                        <p>In this day you will arrive at Zanzibar International Airport</p>
                        <p>Upon arrival, you will meet our driver just outside of the arrival area</p>
                        <p>Driver will be showing your name on the sign board. Pick up will depend on your flight details</p>
                        <p>You will send flight details when you confirm the package. No extra costs for the transfer to Hotel</p>
                      </div>
                    </div>

                    {/* Day 2 */}
                    <div className="border-l-4 border-aqua pl-6 py-2">
                      <h3 className="text-xl font-bold text-ink mb-2">DAY 2: Stone Town, Spice Farms & Prison Island</h3>
                      <div className="space-y-2 text-ink/85">
                        <p>On this day, you will explore by testing and smelling different spices grown and used in Zanzibar cuisines; Cardamom, Cinnamon, Black peppers, Cloves and so on.</p>
                        <p>Learn the History & culture of Zanzibar locals with a local professional tour guide in Stone Town by visiting most iconic places.</p>
                        <p>Enjoy delicious local made Spiced rice lunch in the farm with fresh fishes and fruits like banana, Mangoes, Pineapple and so on.</p>
                        <p>Witness and take photos of the Aldabra giant tortoises in the Prison Island. And learn the short history of the Prison island.</p>
                      </div>
                    </div>

                    {/* Day 3 */}
                    <div className="border-l-4 border-aqua pl-6 py-2">
                      <h3 className="text-xl font-bold text-ink mb-2">DAY 3: Half Day – Mnemba Dolphins & Snorkeling</h3>
                      <div className="space-y-2 text-ink/85">
                        <p>Swimming with Dolphins and taking stunning photos</p>
                        <p>Snorkeling and witnessing a variety of colorful tropical fishes, corals and other marine creatures</p>
                        <p>Explore the coral reefs and marine life around Mnemba Island</p>
                        <p>This half day will show you the other part of North coast of Zanzibar, Matemwe beach</p>
                      </div>
                    </div>

                    {/* Day 4 */}
                    <div className="border-l-4 border-aqua pl-6 py-2">
                      <h3 className="text-xl font-bold text-ink mb-2">DAY 4: Transfer to the Airport, Goodbye!</h3>
                      <div className="space-y-2 text-ink/85">
                        <p>After four days of your Zanzibar vacation, this day you will take your flight back home.</p>
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
                  <h2 className="text-3xl font-bold text-ink mb-6">Package Includes</h2>
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
                        <Check className="w-5 h-5 text-island flex-shrink-0 mt-0.5" />
                        <span className="text-ink/85">{item}</span>
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
                <Card className="border-2 border-ocean">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <p className="text-blue-season font-semibold mb-2">Contact for Current Pricing</p>
                      <p className="text-slate-ink text-sm">Price on request</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-ink/85">
                        <Calendar className="w-5 h-5 text-ocean" />
                        <span>3 Nights / 4 Days</span>
                      </div>
                      <div className="flex items-center gap-2 text-ink/85">
                        <Utensils className="w-5 h-5 text-ocean" />
                        <span>Breakfast & Dinner Included</span>
                      </div>
                      <div className="flex items-center gap-2 text-ink/85">
                        <Users className="w-5 h-5 text-ocean" />
                        <span>Professional Guide</span>
                      </div>
                      <div className="flex items-center gap-2 text-ink/85">
                        <Car className="w-5 h-5 text-ocean" />
                        <span>Airport Transfers</span>
                      </div>
                    </div>

                    <BookingModal 
                      tourName="Zanzibar 4 Days 3 Nights Package" 
                      className="w-full bg-golden hover:bg-sand text-ink text-lg py-6"
                    />
                  </CardContent>
                </Card>

                {/* Quick Info */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Need Help?</h3>
                    <p className="text-slate-ink text-sm mb-4">
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

      <section className="py-12 sm:py-20 bg-ocean text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Zanzibar Adventure?
          </h2>
          <p className="text-lg sm:text-xl mb-8 leading-relaxed">
            Book your 4-day Zanzibar package today and experience the best of this tropical paradise. 
            Let us take care of all the details while you enjoy your vacation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal 
              tourName="Zanzibar 4 Days 3 Nights Package" 
              className="bg-white text-ocean hover:bg-mist font-semibold px-8 py-6 text-lg"
            />
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-ocean font-semibold px-8 py-6 text-lg bg-transparent"
              asChild
            >
              <Link href="/itineraries">View All Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
