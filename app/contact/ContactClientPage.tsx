"use client"
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react"

export default function ContactClientPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url(/background images/istockphoto-2190771792-612x612.jpg)" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Ready to start your East African adventure? We're here to help plan your perfect journey
          </p>
        </div>
      </section>

      {/* Contact Information & Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-display font-bold text-blue-season mb-8">Get in Touch</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're based in the heart of Shangani, Stone Town, Zanzibar, and we're always ready to help you plan your
                perfect East African adventure. Reach out to us through any of the channels below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-blue-season mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      Shangani, Stone Town
                      <br />
                      Zanzibar, Tanzania
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-blue-season mb-1">Phone & WhatsApp</h3>
                    <p className="text-gray-600">WhatsApp: +255 710 885 320</p>
                    <p className="text-gray-600">Call: +255 773 929 583</p>
                    <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-blue-season mb-1">Email</h3>
                    <p className="text-gray-600">zanzionetoursandtravel@gmail.com</p>
                    <p className="text-sm text-gray-500">We respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-blue-season mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday - Sunday: 7:00 AM - 9:00 PM</p>
                    <p className="text-sm text-gray-500">East Africa Time (EAT)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center">
                    <Facebook className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-blue-season mb-1">Follow Us</h3>
                    <a
                      href="https://www.facebook.com/share/17Wn8GXrd8/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-golden transition-colors"
                    >
                      Facebook: ZANZIONE TOURS
                    </a>
                    <p className="text-sm text-gray-500">Stay updated with our latest tours</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="h-96 bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: "url(/images/contact-resort.jpg)" }}
            >
              <div className="h-full bg-black/20 rounded-lg flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-display font-bold mb-2">Paradise Awaits</h3>
                  <p className="text-lg">Experience the luxury and beauty of East Africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-blue-season mb-6">Find Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Shangani, Stone Town, Zanzibar
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.234567!2d39.1843491!3d-6.1629685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185cd05b4305b1d9%3A0x7e0b39b965cb54d9!2sShangani%2C%20Zanzibar!5e0!3m2!1sen!2stz!4v1699999999999!5m2!1sen!2stz"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shangani, Stone Town, Zanzibar Location"
            />
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-20 bg-blue-season text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Prefer to Talk Directly?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Sometimes it's easier to just have a conversation. Choose your preferred way to connect with us instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-golden" />
                <h3 className="text-xl font-display font-semibold mb-3">Call Us Now</h3>
                <p className="text-blue-100 mb-4">Speak directly with our travel experts</p>
                <Button className="bg-golden hover:bg-golden/90 text-white w-full">+255 773 929 583</Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">WhatsApp Chat</h3>
                <p className="text-blue-100 mb-4">Quick responses via WhatsApp</p>
                <Button
                  className="bg-green-500 hover:bg-green-600 text-white w-full"
                  onClick={() => window.open("https://wa.me/255710885320", "_blank")}
                >
                  Start WhatsApp Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 mx-auto mb-4 text-golden" />
                <h3 className="text-xl font-display font-semibold mb-3">Email Us</h3>
                <p className="text-blue-100 mb-4">Detailed inquiries and planning</p>
                <Button
                  className="bg-golden hover:bg-golden/90 text-white w-full"
                  onClick={() => (window.location.href = "mailto:zanzionetoursandtravel@gmail.com")}
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
