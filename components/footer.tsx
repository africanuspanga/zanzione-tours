"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube, Send, ArrowUp } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-[#1e2a3a] text-white overflow-hidden">
      {/* Background watermark logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Image src="/images/logo-zanzione.png" alt="" width={600} height={600} className="w-[600px] h-auto" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Column 1: Company Info */}
          <div>
            <div className="mb-6">
              <Image src="/images/logo-zanzione.png" alt="ZANZIONE TOURS" width={80} height={80} className="h-20 w-auto mb-4" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Zanzione Tours & Travel LTD is a premier travel and tour operator company located in the heart of Zanzibar. We have grown to become one of the leading companies in the travel industry.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300 text-sm">+255 773 929 583 / +255 710 885 320</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300 text-sm">Zanzibar, Tanzania</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300 text-sm">zanzionetoursandtravel@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (replacing World Visitors) */}
          <div>
            <h4 className="text-lg font-display font-bold mb-2">Quick Links</h4>
            <div className="w-12 h-0.5 bg-golden mb-6"></div>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Tour Packages", href: "/itineraries" },
                { label: "Zanzibar Tours", href: "/zanzibar" },
                { label: "Safari Adventures", href: "/safari" },
                { label: "Kilimanjaro", href: "/kilimanjaro" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-golden text-sm flex items-center gap-2 transition-colors">
                    <span className="text-golden">&#9654;</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support Center */}
          <div>
            <h4 className="text-lg font-display font-bold mb-2">Support Center</h4>
            <div className="w-12 h-0.5 bg-golden mb-6"></div>
            <ul className="space-y-3">
              {[
                { label: "FAQ's", href: "/services" },
                { label: "Our Services", href: "/services" },
                { label: "Transfers", href: "/transfers" },
                { label: "Review our service", href: "/contact" },
                { label: "Book A Ride", href: "/contact" },
                { label: "Contact Us", href: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-300 hover:text-golden text-sm flex items-center gap-2 transition-colors">
                    <span className="text-golden">&#9654;</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-lg font-display font-bold mb-2">Newsletter</h4>
            <div className="w-12 h-0.5 bg-golden mb-6"></div>
            <p className="text-gray-300 text-sm mb-6">
              Subscribe Our Newsletter To Get Latest Update And News
            </p>
            <div className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full h-12 px-4 bg-white text-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-golden"
              />
              <button className="w-full h-12 bg-golden hover:bg-golden/90 text-white font-bold rounded-full flex items-center justify-center gap-2 text-sm transition-colors">
                SUBSCRIBE NOW <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-gray-700">
        {/* Orange triangle decoration */}
        <div className="absolute right-0 bottom-0 w-0 h-0 border-l-[100px] border-l-transparent border-b-[60px] border-b-golden"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; Copyright 2026 <span className="text-golden">Zanzione Travel</span> All Rights Reserved.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/share/17Wn8GXrd8/" },
                { Icon: Twitter, href: "/" },
                { Icon: Linkedin, href: "/" },
                { Icon: Youtube, href: "/" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="w-10 h-10 bg-golden rounded-full flex items-center justify-center text-white hover:bg-golden/80 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-10 h-10 bg-golden text-white rounded-md flex items-center justify-center shadow-lg hover:bg-golden/90 transition-colors z-40"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}
