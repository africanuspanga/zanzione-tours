import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plane, MapPin, Car, Clock, Users, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    id: 1,
    icon: Plane,
    title: "Airport Transfers",
    description: "Comfortable and reliable transportation from Zanzibar Airport to your accommodation and back.",
    features: [
      "Professional drivers",
      "Modern, air-conditioned vehicles",
      "Meet & greet service",
      "24/7 availability",
      "Fixed pricing",
      "Flight monitoring",
    ],
  },
  {
    id: 2,
    icon: MapPin,
    title: "Hotel Transfers",
    description: "Seamless transportation between hotels and tour destinations throughout your stay.",
    features: [
      "Door-to-door service",
      "Flexible scheduling",
      "Multiple destination stops",
      "Luggage assistance",
      "Local area knowledge",
      "Punctual service",
    ],
  },
  {
    id: 3,
    icon: Car,
    title: "Taxi Services",
    description: "Reliable taxi services for all your transportation needs throughout Zanzibar at competitive rates.",
    features: [
      "Professional licensed drivers",
      "Clean and comfortable vehicles",
      "Flexible hourly or daily rates",
      "Island-wide coverage",
      "Local expertise and recommendations",
      "Safe and reliable transportation",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url(/background images/istockphoto-1505391132-612x612.jpg)" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Comprehensive travel services to make your East African adventure seamless and worry-free
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-blue-season mb-6">Complete Travel Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From the moment you land until your departure, we handle every detail so you can focus on creating
              memories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <service.icon className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">{service.title}</p>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-display font-bold text-blue-season mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-6 flex-grow">
                    <h4 className="font-semibold text-blue-season mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-golden" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Link href="/contact" className="block">
                      <Button className="w-full bg-golden hover:bg-golden/90 text-white">LEARN MORE</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-blue-season mb-6">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We go beyond basic transportation and insurance to provide exceptional service that enhances your entire
              travel experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-golden" />
              </div>
              <h3 className="text-xl font-display font-semibold text-blue-season mb-3">Punctual & Reliable</h3>
              <p className="text-gray-600 text-sm">
                We understand the importance of timing in travel. Our services are always on time, every time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-golden" />
              </div>
              <h3 className="text-xl font-display font-semibold text-blue-season mb-3">Professional Staff</h3>
              <p className="text-gray-600 text-sm">
                Our drivers and staff are trained professionals who prioritize your safety and comfort.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-golden" />
              </div>
              <h3 className="text-xl font-display font-semibold text-blue-season mb-3">Fully Insured</h3>
              <p className="text-gray-600 text-sm">
                All our vehicles and services are fully insured for your peace of mind and protection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-golden" />
              </div>
              <h3 className="text-xl font-display font-semibold text-blue-season mb-3">Local Knowledge</h3>
              <p className="text-gray-600 text-sm">
                Our team knows Zanzibar inside out, providing valuable local insights during your transfers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-blue-season mb-6">Service Coverage Areas</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display font-semibold text-blue-season mb-2">Zanzibar Island</h3>
                  <p className="text-gray-600">
                    Complete coverage across Zanzibar Island including Stone Town, Nungwi, Kendwa, Paje, Jambiani, and
                    all major hotels and resorts.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-blue-season mb-2">Airport Services</h3>
                  <p className="text-gray-600">
                    Abeid Amani Karume International Airport (ZNZ) pickup and drop-off services with flight monitoring
                    and meet & greet options.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-blue-season mb-2">Tour Destinations</h3>
                  <p className="text-gray-600">
                    Transportation to all major tour destinations including spice farms, Jozani Forest, Prison Island
                    departure points, and cultural sites.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-blue-season mb-2">Taxi Services</h3>
                  <p className="text-gray-600">
                    Reliable taxi services for all your transportation needs throughout Zanzibar at competitive rates.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/service-coverage.jpg"
                alt="Beautiful tropical resort with overwater bungalows in crystal clear turquoise waters"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 bg-blue-season text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Simple Booking Process</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Booking our services is quick and easy. Here's how it works:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Contact Us</h3>
              <p className="text-blue-100 text-sm">
                Reach out via WhatsApp, email, or phone with your travel details and service needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Get Quote</h3>
              <p className="text-blue-100 text-sm">
                Receive a detailed quote with transparent pricing and service inclusions within hours.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Confirm Booking</h3>
              <p className="text-blue-100 text-sm">
                Confirm your booking with a simple deposit and receive confirmation details.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Enjoy Service</h3>
              <p className="text-blue-100 text-sm">
                Relax and enjoy professional, punctual service throughout your stay in Zanzibar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-golden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-white mb-6">Need Our Services?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let us handle the logistics while you focus on enjoying your Zanzibar adventure. Contact us for a
            personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-season hover:bg-blue-season/90 text-white font-semibold px-8 py-4">
                Get Quote Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-golden font-semibold px-8 py-4 bg-transparent"
              >
                Call Us Direct
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
