"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, ChevronDown, Clock, Facebook, Twitter, Instagram, Linkedin, LogIn, UserPlus } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="sticky top-0 z-50">
      {/* Top bar - golden/orange - slides away on scroll */}
      <div
        className="bg-golden text-white overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: scrolled ? "0px" : "50px",
          opacity: scrolled ? 0 : 1,
          padding: scrolled ? "0 16px" : "8px 16px",
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center gap-4 sm:gap-8">
            <a href="mailto:zanzionetoursandtravel@gmail.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">zanzionetoursandtravel@gmail.com</span>
            </a>
            <a href="tel:+255773929583" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone className="w-3.5 h-3.5" />
              <span>+255 773 929 583</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Sun - Fri (08AM - 10PM)</span>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-5">
            <Link href="/contact" className="hidden md:flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <LogIn className="w-3.5 h-3.5" />
              <span>Login</span>
            </Link>
            <Link href="/contact" className="hidden md:flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <UserPlus className="w-3.5 h-3.5" />
              <span>Register</span>
            </Link>
            <span className="hidden lg:inline text-white/80">Follow Us:</span>
            <div className="flex items-center gap-2.5">
              <a href="https://www.facebook.com/share/17Wn8GXrd8/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity"><Facebook className="w-4 h-4" /></a>
              <a href="/" className="hover:opacity-80 transition-opacity"><Twitter className="w-4 h-4" /></a>
              <a href="/" className="hover:opacity-80 transition-opacity"><Instagram className="w-4 h-4" /></a>
              <a href="/" className="hover:opacity-80 transition-opacity"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation - white, always visible */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[70px] sm:h-[80px]">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/images/logo-zanzione.png"
                alt="ZANZIONE TOURS & TRAVELS"
                width={70}
                height={70}
                className="h-12 sm:h-16 w-auto"
              />
              <div className="ml-2 sm:ml-3">
                <h1 className="text-lg sm:text-xl font-display font-bold text-blue-season leading-tight">ZANZIONE</h1>
                <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-[0.15em]">Tours & Travel</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-7 xl:gap-9">
              <Link href="/" className="text-golden font-semibold text-[15px] transition-colors duration-200 hover:text-golden">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-golden font-medium text-[15px] transition-colors duration-200">
                About
              </Link>
              <Link href="/itineraries" className="text-gray-700 hover:text-golden font-medium text-[15px] transition-colors duration-200">
                Itineraries
              </Link>
              <Link href="/zanzibar" className="text-gray-700 hover:text-golden font-medium text-[15px] transition-colors duration-200">
                Zanzibar Tours
              </Link>

              {/* Safari dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="flex items-center text-gray-700 hover:text-golden font-medium text-[15px] transition-colors duration-200 gap-1">
                  Safari
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div
                  className={`absolute top-full left-0 mt-0 w-52 bg-white rounded-md shadow-xl border border-gray-100 py-2 z-50 transition-all duration-200 ${isDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"}`}
                >
                  <Link href="/safari" className="block px-5 py-2.5 text-gray-700 hover:bg-golden/5 hover:text-golden text-sm transition-colors duration-200">
                    Safari Tours
                  </Link>
                  <Link href="/kilimanjaro" className="block px-5 py-2.5 text-gray-700 hover:bg-golden/5 hover:text-golden text-sm transition-colors duration-200">
                    Kilimanjaro
                  </Link>
                </div>
              </div>

              <Link href="/services" className="text-gray-700 hover:text-golden font-medium text-[15px] transition-colors duration-200">
                Services
              </Link>

              <Link href="/contact">
                <Button className="bg-golden hover:bg-golden/90 text-white font-semibold px-7 py-2.5 rounded-lg text-[15px] h-auto shadow-sm">
                  Contact
                </Button>
              </Link>
            </div>

            {/* Hamburger icon - matches screenshot style */}
            <div className="lg:hidden flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-golden">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"}`}
          >
            <div className="flex flex-col space-y-1 border-t pt-4">
              {[
                { label: "Home", href: "/", active: true },
                { label: "About", href: "/about" },
                { label: "Itineraries", href: "/itineraries" },
                { label: "Zanzibar Tours", href: "/zanzibar" },
                { label: "Safari Tours", href: "/safari", indent: false },
                { label: "Kilimanjaro", href: "/kilimanjaro", indent: false },
                { label: "Services", href: "/services" },
              ].map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className={`py-3 px-3 rounded-lg text-[15px] font-medium transition-colors ${item.active ? "text-golden" : "text-gray-700 hover:text-golden hover:bg-golden/5"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="bg-golden hover:bg-golden/90 text-white font-semibold w-full py-3 rounded-lg text-[15px] mt-2">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
