import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mountain, Clock, Users, TrendingUp } from 'lucide-react'
import Link from "next/link"
import type { Metadata } from "next"

const routes = [
  {
    id: 1,
    name: "Machame Route",
    nickname: "Whiskey Route",
    duration: "6-7 Days",
    difficulty: "Moderate to Challenging",
    successRate: "85%",
    image: "/images/machame-route.jpg",
    imageCaption: "Climbers traversing the high-altitude volcanic terrain with Kilimanjaro's snow-capped peak in view",
    description:
      "The most scenic and popular route, offering diverse landscapes from rainforest to alpine desert. Known for its 'climb high, sleep low' profile.",
    highlights: [
      "Barranco Wall climb",
      "Stunning sunrise views",
      "Diverse ecosystems",
      "High success rate",
      "Scenic camping spots",
    ],
  },
  {
    id: 2,
    name: "Marangu Route",
    nickname: "Coca-Cola Route",
    duration: "5-6 Days",
    difficulty: "Moderate",
    successRate: "65%",
    image: "/images/marangu-route.jpg",
    imageCaption: "The classic Marangu trail winding toward Kilimanjaro's majestic peak under clear blue skies",
    description:
      "The only route with hut accommodation, making it popular with those preferring beds over tents. Gradual ascent through beautiful rainforest.",
    highlights: [
      "Hut accommodation",
      "Gradual ascent",
      "Rainforest beauty",
      "Less camping gear needed",
      "Historical route",
    ],
  },
  {
    id: 3,
    name: "Lemosho Route",
    nickname: "Western Approach",
    duration: "7-8 Days",
    difficulty: "Moderate to Challenging",
    successRate: "90%",
    image: "/images/lemosho-route.jpg",
    imageCaption: "Trekkers navigating through the lush, moss-covered forest terrain of the pristine Lemosho route",
    description:
      "Considered the most beautiful route with excellent acclimatization profile. Approaches from the west through pristine wilderness.",
    highlights: [
      "Highest success rate",
      "Pristine wilderness",
      "Excellent acclimatization",
      "Shira Plateau crossing",
      "Barranco Wall adventure",
    ],
  },
  {
    id: 4,
    name: "Rongai Route",
    nickname: "Northern Approach",
    duration: "6-7 Days",
    difficulty: "Moderate",
    successRate: "75%",
    image: "/images/rongai-route.jpg",
    imageCaption:
      "Climbers in colorful gear ascending the northern slopes with Kilimanjaro's dramatic glaciated summit ahead",
    description:
      "The only route approaching from the north, offering a different perspective and typically drier conditions. Less crowded than southern routes.",
    highlights: [
      "Northern perspective",
      "Drier conditions",
      "Less crowded",
      "Wildlife encounters",
      "Unique landscapes",
    ],
  },
]

export const metadata: Metadata = {
  title: "Kilimanjaro Climbing Tours - Summit Africa's Highest Peak with Expert Guides",
  description:
    "Conquer Mount Kilimanjaro (5,895m) with ZANZIONE TOURS. Choose from Machame, Lemosho, Rongai, or Marangu routes. Experienced mountain guides, quality equipment, and 85% success rate. 5-8 day climbing packages available.",
  keywords:
    "Kilimanjaro climbing, Mount Kilimanjaro trek, Machame route, Lemosho route, Rongai route, Marangu route, Uhuru Peak, Tanzania mountain climbing, Africa highest peak, Kilimanjaro expedition",
  openGraph: {
    title: "Climb Mount Kilimanjaro - Reach the Roof of Africa",
    description:
      "Summit Africa's highest peak at 5,895m with expert guides and comprehensive support. Multiple routes for all experience levels.",
    url: "https://www.zanzionetours.com/kilimanjaro",
    images: [
      {
        url: "/images/kilimanjaro-mountain.jpg",
        width: 1200,
        height: 630,
        alt: "Mount Kilimanjaro Peak",
      },
    ],
  },
  alternates: {
    canonical: "https://www.zanzionetours.com/kilimanjaro",
  },
}

export default function KilimanjaroPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url(/background images/istockphoto-1131949134-612x612.jpg)" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Kilimanjaro Climbing</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Conquer Africa's highest peak with expert guides and comprehensive support
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-blue-season mb-6">Reach the Roof of Africa</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Mount Kilimanjaro stands at 5,895 meters (19,341 feet) as Africa's highest peak and the world's tallest
              free-standing mountain. Our experienced guides and comprehensive support ensure you have the best chance
              of reaching Uhuru Peak safely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto">
                <Mountain className="w-8 h-8 text-golden" />
              </div>
              <h3 className="text-xl font-display font-semibold text-blue-season">5,895m Peak</h3>
              <p className="text-gray-600">Africa's highest mountain and world's tallest free-standing peak</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-golden" />
              </div>
              <h3 className="text-xl font-display font-semibold text-blue-season">85% Success Rate</h3>
              <p className="text-gray-600">High success rate with our experienced guides and proper acclimatization</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-golden" />
              </div>
              <h3 className="text-xl font-display font-semibold text-blue-season">Expert Guides</h3>
              <p className="text-gray-600">Certified mountain guides with years of Kilimanjaro experience</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-golden" />
              </div>
              <h3 className="text-xl font-display font-semibold text-blue-season">5-8 Days</h3>
              <p className="text-gray-600">Multiple route options to suit different fitness levels and preferences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-blue-season mb-6">Choose Your Route</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each route offers a unique perspective and challenge. Our experts will help you choose the best route
              based on your experience and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {routes.map((route) => (
              <Card key={route.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={route.image || "/placeholder.svg"}
                    alt={route.imageCaption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-xs leading-tight">{route.imageCaption}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-display font-bold text-blue-season">{route.name}</h3>
                    <span className="bg-golden/10 text-golden px-2 py-1 rounded text-sm font-semibold">
                      {route.successRate}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{route.nickname}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="font-semibold text-blue-season">Duration:</span>
                      <p className="text-gray-600">{route.duration}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-season">Difficulty:</span>
                      <p className="text-gray-600">{route.difficulty}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{route.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-blue-season mb-2 text-sm">Route Highlights:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {route.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-golden rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-golden hover:bg-golden/90 text-white">Choose This Route</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-blue-season mb-6">Complete Climbing Package</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide everything you need for a safe and successful climb, from professional guides to quality
              equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-blue-season rounded-lg flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold text-blue-season">Professional Guides</h3>
                <p className="text-gray-600 text-sm">
                  Certified mountain guides with extensive Kilimanjaro experience and wilderness first aid training.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-blue-season rounded-lg flex items-center justify-center mx-auto">
                  <Mountain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold text-blue-season">Quality Equipment</h3>
                <p className="text-gray-600 text-sm">
                  High-quality tents, sleeping bags, and climbing equipment provided for your safety and comfort.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-blue-season rounded-lg flex items-center justify-center mx-auto">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold text-blue-season">Full Support</h3>
                <p className="text-gray-600 text-sm">
                  Porters, cook, and support staff to handle logistics so you can focus on the climb.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Preparation Guide */}
      <section className="py-20 bg-blue-season text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Preparation Guidelines</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Proper preparation is key to a successful climb. We provide comprehensive guidance to help you prepare
              physically and mentally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Physical Training</h3>
              <p className="text-blue-100 text-sm">
                Build cardiovascular endurance and leg strength with hiking, running, and stair climbing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Altitude Preparation</h3>
              <p className="text-blue-100 text-sm">
                Consider altitude training or arrive early to acclimatize in Tanzania's highlands.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Mental Preparation</h3>
              <p className="text-blue-100 text-sm">
                Prepare mentally for the challenge with visualization and positive mindset training.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Gear Preparation</h3>
              <p className="text-blue-100 text-sm">
                We provide a comprehensive packing list and can arrange gear rental if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-golden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-white mb-6">Ready to Climb Kilimanjaro?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of successful climbers who have reached Uhuru Peak with ZANZIONE TOURS & TRAVELS. Let us
            guide you to the roof of Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-season hover:bg-blue-season/90 text-white font-semibold px-8 py-4">
                Start Planning
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-golden font-semibold px-8 py-4 bg-transparent"
              >
                Climbing Consultation
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
