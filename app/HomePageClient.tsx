"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Navigation from "@/components/navigation"

import Footer from "@/components/footer"
import {
  Star,
  Users,
  MapPin,
  ChevronDown,
  ChevronUp,
  Headphones,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Car,
  DollarSign,
  Wifi,
  Calendar,
  Clock,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BookingModal from "@/components/booking-modal"
import TourCard from "@/components/tour-card"
import { zanzibarTours } from "@/lib/tours"
import { sendEnquiry, openWhatsApp } from "@/lib/send-enquiry"
import PromoSlider from "@/components/promo-slider"

// ─── Scroll Animation Hook ───
function useScrollAnimation() {
  useEffect(() => {
    const reveal = (el: HTMLElement, animate: boolean) => {
      el.style.animationDelay = animate ? `${el.dataset.delay || "0"}ms` : "0ms"
      el.classList.add("is-visible")
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement
          if (entry.isIntersecting) {
            reveal(el, true)
            observer.unobserve(el)
          } else if (entry.boundingClientRect.bottom < 0) {
            // Already scrolled past without ever intersecting — happens when the
            // page is jumped (End key, anchor link, restored scroll position).
            // Without this the element would stay at opacity 0 forever.
            reveal(el, false)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )
    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ─── Transfer Routes Data ───
const highlightTransfers = [
  { from: "Airport / Ferry", to: "Stone Town", price: 20, image: "/toyota-alphard.jpeg" },
  { from: "Airport / Ferry", to: "Nungwi - Kendwa", price: 40, image: "/toyota-alphard.jpeg" },
  { from: "Airport / Ferry", to: "Paje", price: 40, image: "/toyota-alphard.jpeg" },
  { from: "Airport / Ferry", to: "Nungwi", price: 55, image: "/new-van-image.jpeg" },
  { from: "Airport / Ferry", to: "Nungwi", price: 75, image: "/new-coaster-image.jpeg" },
  { from: "Airport / Ferry", to: "Jambiani", price: 40, image: "/toyota-alphard.jpeg" },
]

// ─── Translation System ───
type Lang = "en" | "ar" | "da" | "no" | "sv" | "de" | "it" | "es" | "fr" | "ru"

const translations: Record<Lang, Record<string, string>> = {
  en: {
    welcome: "WELCOME TO ZANZIONE!",
    yourName: "Your Name",
    yourNamePlaceholder: "Full name",
    yourEmail: "Your Email",
    yourEmailPlaceholder: "you@example.com",
    yourPhone: "Phone (optional)",
    yourPhonePlaceholder: "+255 ...",
    heroTitle1: "DISCOVER",
    heroHighlight: "ZANZIBAR",
    heroTitle2: "YOUR WAY",
    heroDesc: "Island excursions, Tanzania safaris and airport transfers with trusted local guides.",
    selectLanguage: "Select Language",
    aboutMore: "ABOUT MORE",
    taxiBooking: "TAXI BOOKING",
    bookYourRide: "Book Your Ride",
    pickupLocation: "Pick Up Location",
    pickupPlaceholder: "Type Pickup Location",
    dropoffLocation: "Drop Off Location",
    dropoffPlaceholder: "Type Drop Off Location",
    passengers: "Passengers",
    pickupDate: "Pick Up Date",
    pickupTime: "Pick Up Time",
    bookTaxi: "BOOK TAXI",
    aboutUs: "ABOUT US",
    aboutTitle1: "We Provide Trusted",
    aboutHighlight: "Airport Taxi Service",
    aboutTitle2: "In Zanzibar",
    aboutMission: "Mission: Providing exceptional travel experiences exceeding client expectations with reliable, safe tours and transfers. Fostering cultural connections, promoting sustainability, and ensuring the best of destinations. Zanzione offers diverse services for all travelers. Services include:",
    aboutS1: "Airport Transfers: Reliable, punctual, and comfortable transfers from the airport to your accommodation or other destinations.",
    aboutS2: "Excursions & Day Tours: Explore the hidden gems of Zanzibar with our guided excursions, from historical sites to scenic natural wonders.",
    aboutS3: "Customized Tour Packages: Tailored tours for culture enthusiasts, nature lovers, and adventure seekers.",
    aboutS4: "Safari Tours & Wildlife Experiences: Curated safari experiences across Mikumi National Park, Serengeti National Park, Selous Game Reserve.",
    discoverMore: "DISCOVER MORE",
    yearsLabel: "Years Of\nQuality Service",
    zanzTours: "ZANZIBAR TOURS & EXCURSIONS",
    dailyAct: "Our Daily Activities",
    readMore: "READ MORE",
    tanzSafari: "TANZANIA WILD SAFARI",
    bestPkg: "Best Packages",
    forYou: "For You",
    viewPkg: "VIEW PACKAGE",
    pkgIncludes: "Package Includes: Entry Fees, Professional Guide, Transport, Meal & Accommodation",
    feature: "FEATURE",
    awesomeFeat: "Our Awesome Feature",
    privTransfer: "Private Transfer",
    privTransferDesc: "Enjoy exclusive, private transfers with professional drivers. Comfortable vehicles for a seamless journey from airport to hotel and beyond.",
    welcomeServ: "Welcoming service",
    welcomeServDesc: "Our friendly team greets you with warm Zanzibar hospitality. Personalized service from the moment you arrive until you depart.",
    affordRate: "Affordable Rate",
    affordRateDesc: "Transparent, competitive pricing with no hidden fees. Get the best value for premium taxi and transfer services in Zanzibar.",
    support247: "24/7 Support",
    support247Desc: "Round-the-clock assistance for all your travel needs. Our support team is always ready to help, day or night.",
    bookCta1: "Booking Your Cab With Zanzione Travel It's Simple And Affordable",
    bookCtaDesc: "Experience seamless taxi booking in Zanzibar. Our fleet of modern, comfortable vehicles ensures you travel in style at the most competitive rates on the island.",
    bookAirport: "BOOK YOUR AIRPORT TAXI",
    drivers: "DRIVERS",
    expertTeam: "Our Expert Team",
    expertDriver: "Expert Driver",
    faqLabel: "FAQ'S",
    faqTitle: "General",
    faqHighlight: "Frequently",
    faqTitle2: "Asked Questions",
    faqDesc: "Welcome to the help collection! This section is your go-to resource for all the essential information you need to begin your journey with Zanzione Tours. Whether you're a first-time traveler to Zanzibar looking to book your initial transfer, or someone seeking guidance on how to navigate our services, we have meticulously compiled articles, guides, and FAQs to help make your start as smooth as possible.",
    faq1q: "How Long Does A Booking Take ?",
    faq1a: "Booking with Zanzione Tours is quick and easy. Once you submit your booking request via our website or WhatsApp, our team typically confirms within 1-2 hours during business hours. For airport transfers, we recommend booking at least 24 hours in advance.",
    faq2q: "How Can I Become A Member ?",
    faq2a: "After your first booking, you are automatically enrolled in our loyalty program. Members enjoy priority booking, exclusive discounts, and personalized travel recommendations.",
    faq3q: "What Payment Gateway You Support ?",
    faq3a: "We support bank transfers, mobile money (M-Pesa, Tigo Pesa), cash payments, and WhatsApp booking with confirmation via email.",
    faq4q: "How Can I Cancel My Request ?",
    faq4a: "Contact us via WhatsApp or email at least 12 hours before your scheduled service for a full refund. Cancellations within 12 hours may incur a small fee.",
    testimonials: "TESTIMONIALS",
    clientSays: "What Our Client Say's",
    customer: "Customer",
    discoverTitle: "TIME TO DISCOVER THE BEAUTY OF",
    tanzania: "TANZANIA",
    unforgettable: "Unforgettable Experience",
    discoverDesc: "Here at Zanzione we genuinely care about all of our clients. Impeccable service is what sets one company apart from the other. We are prepared to go the extra mile for you, so don't hesitate to contact us with any questions you might have, no strings attached!",
  },
  ar: { welcome: "!مرحباً بكم في زنزيوني", heroTitle1: "اكتشف", heroHighlight: "زنجبار", heroTitle2: "بطريقتك", heroDesc: "رحلات جزيرة وسفاري تنزانيا ونقل المطار مع مرشدين محليين موثوقين.", selectLanguage: "اختر اللغة", bookYourRide: "احجز رحلتك", pickupLocation: "موقع الاستلام", pickupPlaceholder: "اكتب موقع الاستلام", dropoffLocation: "موقع التوصيل", dropoffPlaceholder: "اكتب موقع التوصيل", passengers: "الركاب", pickupDate: "تاريخ", pickupTime: "وقت", bookTaxi: "احجز", aboutUs: "معلومات عنا", aboutTitle1: "نقدم خدمة موثوقة", aboutHighlight: "تاكسي المطار", aboutTitle2: "في زنجبار", aboutMission: "تقديم تجارب سفر استثنائية.", aboutS1: "نقل المطار", aboutS2: "الرحلات والجولات", aboutS3: "حزم سياحية مخصصة", aboutS4: "جولات السفاري", discoverMore: "اكتشف المزيد", yearsLabel: "سنوات من\nالخدمة الجيدة", zanzTours: "جولات زنجبار", dailyAct: "أنشطتنا اليومية", readMore: "اقرأ المزيد", tanzSafari: "سفاري تنزانيا", bestPkg: "أفضل الباقات", forYou: "لك", viewPkg: "عرض الباقة", pkgIncludes: "تشمل الباقة: رسوم الدخول، مرشد، النقل، الوجبات", feature: "الميزات", awesomeFeat: "ميزاتنا الرائعة", privTransfer: "نقل خاص", privTransferDesc: "نقل خاص حصري مع سائقين محترفين.", welcomeServ: "خدمة ترحيبية", welcomeServDesc: "فريقنا الودود يرحب بكم.", affordRate: "أسعار معقولة", affordRateDesc: "أسعار شفافة وتنافسية.", support247: "دعم 24/7", support247Desc: "مساعدة على مدار الساعة.", bookCta1: "حجز سيارتك مع زنزيوني بسيط ومعقول", bookCtaDesc: "تجربة حجز تاكسي سلسة.", bookAirport: "احجز تاكسي المطار", drivers: "السائقون", expertTeam: "فريقنا المتخصص", expertDriver: "سائق خبير", faqLabel: "الأسئلة الشائعة", faqTitle: "أسئلة", faqHighlight: "شائعة", faqTitle2: "عامة", faqDesc: "مرحباً بكم في مجموعة المساعدة!", faq1q: "كم يستغرق الحجز؟", faq1a: "الحجز سريع وسهل.", faq2q: "كيف أصبح عضواً؟", faq2a: "بعد حجزك الأول.", faq3q: "ما هي بوابات الدفع؟", faq3a: "نحن ندعم طرق دفع متعددة.", faq4q: "كيف يمكنني إلغاء طلبي؟", faq4a: "عبر واتساب أو البريد الإلكتروني.", testimonials: "الشهادات", clientSays: "ماذا يقول عملاؤنا", customer: "عميل", discoverTitle: "اكتشف جمال", tanzania: "تنزانيا", unforgettable: "تجربة لا تُنسى", discoverDesc: "نحن نهتم حقاً بجميع عملائنا." },
  da: { welcome: "VELKOMMEN TIL ZANZIONE!", heroTitle1: "OPLEV", heroHighlight: "ZANZIBAR", heroTitle2: "PÅ DIN MÅDE", heroDesc: "Ø-udflugter, Tanzania-safarier og lufthavnstransfers med betroede lokale guider.", selectLanguage: "Vælg Sprog", bookYourRide: "Book Din Tur", pickupLocation: "Afhentning", pickupPlaceholder: "Indtast sted", dropoffLocation: "Aflevering", dropoffPlaceholder: "Indtast sted", passengers: "Passagerer", pickupDate: "Dato", pickupTime: "Tid", bookTaxi: "BOOK TAXI", aboutUs: "OM OS", aboutTitle1: "Vi Tilbyder", aboutHighlight: "Lufthavnstaxi", aboutTitle2: "I Zanzibar", aboutMission: "Vi leverer enestående rejseoplevelser.", aboutS1: "Lufthavnstransfer", aboutS2: "Udflugter", aboutS3: "Turpakker", aboutS4: "Safariture", discoverMore: "OPDAG MERE", yearsLabel: "Års\nKvalitetsservice", zanzTours: "ZANZIBAR TURE", dailyAct: "Vores Daglige Aktiviteter", readMore: "LÆS MERE", tanzSafari: "TANZANIA SAFARI", bestPkg: "Bedste Pakker", forYou: "Til Dig", viewPkg: "SE PAKKE", pkgIncludes: "Inkluderer: Entré, Guide, Transport, Måltider", feature: "FUNKTION", awesomeFeat: "Vores Funktioner", privTransfer: "Privat Transfer", privTransferDesc: "Eksklusive private transfers.", welcomeServ: "Indbydende Service", welcomeServDesc: "Varm gæstfrihed.", affordRate: "Overkommelige Priser", affordRateDesc: "Gennemsigtige priser.", support247: "24/7 Support", support247Desc: "Assistanse døgnet rundt.", bookCta1: "Book Din Taxi Med Zanzione - Simpelt Og Overkommeligt", bookCtaDesc: "Problemfri taxibooking i Zanzibar.", bookAirport: "BOOK LUFTHAVNSTAXI", drivers: "CHAUFFØRER", expertTeam: "Vores Ekspertteam", expertDriver: "Ekspert Chauffør", faqLabel: "FAQ", faqTitle: "Generelle", faqHighlight: "Ofte Stillede", faqTitle2: "Spørgsmål", faqDesc: "Velkommen til hjælpesamlingen!", faq1q: "Hvor Lang Tid?", faq1a: "Hurtigt og nemt.", faq2q: "Hvordan Bliver Jeg Medlem?", faq2a: "Automatisk tilmeldt.", faq3q: "Betalingsmetoder?", faq3a: "Flere metoder.", faq4q: "Annullering?", faq4a: "Via WhatsApp.", testimonials: "ANMELDELSER", clientSays: "Hvad Kunderne Siger", customer: "Kunde", discoverTitle: "OPDAG SKØNHEDEN I", tanzania: "TANZANIA", unforgettable: "Uforglemmelig Oplevelse", discoverDesc: "Hos Zanzione går vi genuint op i vores kunder." },
  no: { welcome: "VELKOMMEN TIL ZANZIONE!", heroTitle1: "OPPDAG", heroHighlight: "ZANZIBAR", heroTitle2: "PÅ DIN MÅTE", heroDesc: "Øyutflukter, Tanzania-safarier og flyplasstransport med pålitelige lokale guider.", selectLanguage: "Velg Språk", bookYourRide: "Bestill Din Tur", pickupLocation: "Hentested", pickupPlaceholder: "Skriv sted", dropoffLocation: "Leveringssted", dropoffPlaceholder: "Skriv sted", passengers: "Passasjerer", pickupDate: "Dato", pickupTime: "Tid", bookTaxi: "BESTILL TAXI", aboutUs: "OM OSS", aboutTitle1: "Vi Tilbyr", aboutHighlight: "Flyplass Taxi", aboutTitle2: "I Zanzibar", aboutMission: "Eksepsjonelle reiseopplevelser.", aboutS1: "Flytransfer", aboutS2: "Utflukter", aboutS3: "Turpakker", aboutS4: "Safariutflukter", discoverMore: "OPPDAG MER", yearsLabel: "Års\nKvalitetsservice", zanzTours: "ZANZIBAR TURER", dailyAct: "Våre Aktiviteter", readMore: "LES MER", tanzSafari: "TANZANIA SAFARI", bestPkg: "Beste Pakker", forYou: "For Deg", viewPkg: "SE PAKKE", pkgIncludes: "Inkluderer: Inngangsbilletter, Guide, Transport", feature: "FUNKSJON", awesomeFeat: "Våre Funksjoner", privTransfer: "Privat Transfer", privTransferDesc: "Eksklusive private transferer.", welcomeServ: "Service", welcomeServDesc: "Varm gjestfrihet.", affordRate: "Priser", affordRateDesc: "Gjennomsiktige priser.", support247: "24/7 Støtte", support247Desc: "Døgnet rundt.", bookCta1: "Bestill Din Taxi Med Zanzione - Enkelt Og Rimelig", bookCtaDesc: "Sømløs taxibestilling.", bookAirport: "BESTILL TAXI", drivers: "SJÅFØRER", expertTeam: "Vårt Team", expertDriver: "Ekspert Sjåfør", faqLabel: "FAQ", faqTitle: "Generelle", faqHighlight: "Ofte Stilte", faqTitle2: "Spørsmål", faqDesc: "Velkommen!", faq1q: "Hvor Lang Tid?", faq1a: "Raskt og enkelt.", faq2q: "Bli Medlem?", faq2a: "Automatisk.", faq3q: "Betalingsmetoder?", faq3a: "Flere metoder.", faq4q: "Kansellere?", faq4a: "Via WhatsApp.", testimonials: "ATTESTER", clientSays: "Hva Kundene Sier", customer: "Kunde", discoverTitle: "OPPDAGE SKJØNNHETEN I", tanzania: "TANZANIA", unforgettable: "Uforglemmelig", discoverDesc: "Vi bryr oss om våre kunder." },
  sv: { welcome: "VÄLKOMMEN TILL ZANZIONE!", heroTitle1: "UPPTÄCK", heroHighlight: "ZANZIBAR", heroTitle2: "PÅ DITT SÄTT", heroDesc: "Öutflykter, Tanzania-safarier och flygplatstransfer med pålitliga lokala guider.", selectLanguage: "Välj Språk", bookYourRide: "Boka Din Resa", pickupLocation: "Hämtning", pickupPlaceholder: "Skriv plats", dropoffLocation: "Avlämning", dropoffPlaceholder: "Skriv plats", passengers: "Passagerare", pickupDate: "Datum", pickupTime: "Tid", bookTaxi: "BOKA TAXI", aboutUs: "OM OSS", aboutTitle1: "Vi Erbjuder", aboutHighlight: "Flygplatstaxi", aboutTitle2: "I Zanzibar", aboutMission: "Exceptionella reseupplevelser.", aboutS1: "Flygplatstransfer", aboutS2: "Utflykter", aboutS3: "Turpaket", aboutS4: "Safariutflykter", discoverMore: "UPPTÄCK MER", yearsLabel: "Års\nKvalitetsservice", zanzTours: "ZANZIBAR TURER", dailyAct: "Våra Aktiviteter", readMore: "LÄS MER", tanzSafari: "TANZANIA SAFARI", bestPkg: "Bästa Paketen", forYou: "För Dig", viewPkg: "VISA PAKET", pkgIncludes: "Inkluderar: Inträde, Guide, Transport", feature: "FUNKTION", awesomeFeat: "Våra Funktioner", privTransfer: "Privat Transfer", privTransferDesc: "Exklusiva transferer.", welcomeServ: "Service", welcomeServDesc: "Varm gästfrihet.", affordRate: "Priser", affordRateDesc: "Transparenta priser.", support247: "24/7 Support", support247Desc: "Dygnet runt.", bookCta1: "Boka Din Taxi Med Zanzione - Enkelt Och Överkomligt", bookCtaDesc: "Sömlös taxibokning.", bookAirport: "BOKA TAXI", drivers: "CHAUFFÖRER", expertTeam: "Vårt Team", expertDriver: "Expert Chaufför", faqLabel: "FAQ", faqTitle: "Allmänna", faqHighlight: "Vanliga", faqTitle2: "Frågor", faqDesc: "Välkommen!", faq1q: "Hur Lång Tid?", faq1a: "Snabbt och enkelt.", faq2q: "Bli Medlem?", faq2a: "Automatiskt.", faq3q: "Betalningsmetoder?", faq3a: "Flera metoder.", faq4q: "Avboka?", faq4a: "Via WhatsApp.", testimonials: "OMDÖMEN", clientSays: "Vad Kunderna Säger", customer: "Kund", discoverTitle: "UPPTÄCK SKÖNHETEN I", tanzania: "TANZANIA", unforgettable: "Oförglömlig", discoverDesc: "Vi bryr oss om våra kunder." },
  de: { welcome: "WILLKOMMEN BEI ZANZIONE!", heroTitle1: "ENTDECKEN SIE", heroHighlight: "ZANZIBAR", heroTitle2: "", heroDesc: "Inselausflüge, Tansania-Safaris und Flughafentransfers mit vertrauten lokalen Guides.", selectLanguage: "Sprache Wählen", bookYourRide: "Fahrt Buchen", pickupLocation: "Abholort", pickupPlaceholder: "Ort eingeben", dropoffLocation: "Zielort", dropoffPlaceholder: "Ort eingeben", passengers: "Passagiere", pickupDate: "Datum", pickupTime: "Zeit", bookTaxi: "TAXI BUCHEN", aboutUs: "ÜBER UNS", aboutTitle1: "Wir Bieten", aboutHighlight: "Flughafentaxi", aboutTitle2: "In Zanzibar", aboutMission: "Außergewöhnliche Reiseerlebnisse.", aboutS1: "Flughafentransfers", aboutS2: "Ausflüge", aboutS3: "Tourpakete", aboutS4: "Safari-Touren", discoverMore: "MEHR ENTDECKEN", yearsLabel: "Jahre\nQualitätsservice", zanzTours: "ZANZIBAR TOUREN", dailyAct: "Unsere Aktivitäten", readMore: "MEHR LESEN", tanzSafari: "TANZANIA SAFARI", bestPkg: "Beste Pakete", forYou: "Für Sie", viewPkg: "PAKET ANSEHEN", pkgIncludes: "Enthält: Eintritt, Guide, Transport", feature: "FEATURE", awesomeFeat: "Unsere Features", privTransfer: "Privater Transfer", privTransferDesc: "Exklusive Transfers.", welcomeServ: "Willkommensservice", welcomeServDesc: "Warme Gastfreundschaft.", affordRate: "Erschwingliche Preise", affordRateDesc: "Transparente Preise.", support247: "24/7 Support", support247Desc: "Rund um die Uhr.", bookCta1: "Buchen Sie Ihr Taxi Mit Zanzione - Einfach Und Erschwinglich", bookCtaDesc: "Nahtlose Taxibuchung.", bookAirport: "FLUGHAFENTAXI BUCHEN", drivers: "FAHRER", expertTeam: "Unser Team", expertDriver: "Experte Fahrer", faqLabel: "FAQ", faqTitle: "Allgemeine", faqHighlight: "Häufig Gestellte", faqTitle2: "Fragen", faqDesc: "Willkommen!", faq1q: "Wie Lange Dauert Es?", faq1a: "Schnell und einfach.", faq2q: "Wie Werde Ich Mitglied?", faq2a: "Automatisch.", faq3q: "Zahlungsmethoden?", faq3a: "Mehrere Methoden.", faq4q: "Stornieren?", faq4a: "Per WhatsApp.", testimonials: "BEWERTUNGEN", clientSays: "Was Kunden Sagen", customer: "Kunde", discoverTitle: "ENTDECKEN SIE DIE SCHÖNHEIT VON", tanzania: "TANSANIA", unforgettable: "Unvergesslich", discoverDesc: "Wir kümmern uns aufrichtig um unsere Kunden." },
  it: { welcome: "BENVENUTI A ZANZIONE!", heroTitle1: "SCOPRI", heroHighlight: "ZANZIBAR", heroTitle2: "A MODO TUO", heroDesc: "Escursioni sull'isola, safari in Tanzania e transfer con guide locali.", selectLanguage: "Seleziona Lingua", bookYourRide: "Prenota", pickupLocation: "Ritiro", pickupPlaceholder: "Inserisci luogo", dropoffLocation: "Consegna", dropoffPlaceholder: "Inserisci luogo", passengers: "Passeggeri", pickupDate: "Data", pickupTime: "Ora", bookTaxi: "PRENOTA TAXI", aboutUs: "CHI SIAMO", aboutTitle1: "Offriamo", aboutHighlight: "Taxi Aeroportuale", aboutTitle2: "A Zanzibar", aboutMission: "Esperienze di viaggio eccezionali.", aboutS1: "Transfer Aeroportuali", aboutS2: "Escursioni", aboutS3: "Pacchetti Tour", aboutS4: "Tour Safari", discoverMore: "SCOPRI DI PIÙ", yearsLabel: "Anni di\nServizio", zanzTours: "TOUR ZANZIBAR", dailyAct: "Attività Quotidiane", readMore: "LEGGI DI PIÙ", tanzSafari: "SAFARI TANZANIA", bestPkg: "Migliori Pacchetti", forYou: "Per Te", viewPkg: "VEDI PACCHETTO", pkgIncludes: "Include: Ingresso, Guida, Trasporto", feature: "CARATTERISTICHE", awesomeFeat: "Le Nostre Caratteristiche", privTransfer: "Transfer Privato", privTransferDesc: "Trasferimenti esclusivi.", welcomeServ: "Servizio Accogliente", welcomeServDesc: "Calda ospitalità.", affordRate: "Tariffe Accessibili", affordRateDesc: "Prezzi trasparenti.", support247: "Supporto 24/7", support247Desc: "Assistenza 24 ore.", bookCta1: "Prenota il Taxi Con Zanzione - Semplice E Accessibile", bookCtaDesc: "Prenotazione senza problemi.", bookAirport: "PRENOTA TAXI", drivers: "AUTISTI", expertTeam: "Il Nostro Team", expertDriver: "Autista Esperto", faqLabel: "FAQ", faqTitle: "Domande", faqHighlight: "Frequenti", faqTitle2: "Generali", faqDesc: "Benvenuti!", faq1q: "Quanto Tempo?", faq1a: "Rapido e semplice.", faq2q: "Diventare Membro?", faq2a: "Automaticamente.", faq3q: "Pagamenti?", faq3a: "Diversi metodi.", faq4q: "Annullare?", faq4a: "Via WhatsApp.", testimonials: "TESTIMONIANZE", clientSays: "Cosa Dicono I Clienti", customer: "Cliente", discoverTitle: "SCOPRI LA BELLEZZA DELLA", tanzania: "TANZANIA", unforgettable: "Indimenticabile", discoverDesc: "Ci preoccupiamo dei nostri clienti." },
  es: { welcome: "¡BIENVENIDO A ZANZIONE!", heroTitle1: "DESCUBRE", heroHighlight: "ZANZIBAR", heroTitle2: "A TU MANERA", heroDesc: "Excursiones por la isla, safaris en Tanzania y traslados con guías locales.", selectLanguage: "Seleccionar Idioma", bookYourRide: "Reserva Tu Viaje", pickupLocation: "Recogida", pickupPlaceholder: "Escriba lugar", dropoffLocation: "Destino", dropoffPlaceholder: "Escriba lugar", passengers: "Pasajeros", pickupDate: "Fecha", pickupTime: "Hora", bookTaxi: "RESERVAR TAXI", aboutUs: "SOBRE NOSOTROS", aboutTitle1: "Ofrecemos", aboutHighlight: "Taxi Aeroportuario", aboutTitle2: "En Zanzibar", aboutMission: "Experiencias de viaje excepcionales.", aboutS1: "Traslados al Aeropuerto", aboutS2: "Excursiones", aboutS3: "Paquetes de Tours", aboutS4: "Tours Safari", discoverMore: "DESCUBRIR MÁS", yearsLabel: "Años de\nServicio", zanzTours: "TOURS ZANZIBAR", dailyAct: "Actividades Diarias", readMore: "LEER MÁS", tanzSafari: "SAFARI TANZANIA", bestPkg: "Mejores Paquetes", forYou: "Para Ti", viewPkg: "VER PAQUETE", pkgIncludes: "Incluye: Entrada, Guía, Transporte", feature: "CARACTERÍSTICAS", awesomeFeat: "Nuestras Características", privTransfer: "Traslado Privado", privTransferDesc: "Traslados exclusivos.", welcomeServ: "Servicio Acogedor", welcomeServDesc: "Cálida hospitalidad.", affordRate: "Tarifas Accesibles", affordRateDesc: "Precios transparentes.", support247: "Soporte 24/7", support247Desc: "Asistencia 24 horas.", bookCta1: "Reserva Tu Taxi Con Zanzione - Simple Y Accesible", bookCtaDesc: "Reserva sin problemas.", bookAirport: "RESERVAR TAXI", drivers: "CONDUCTORES", expertTeam: "Nuestro Equipo", expertDriver: "Conductor Experto", faqLabel: "FAQ", faqTitle: "Preguntas", faqHighlight: "Frecuentes", faqTitle2: "Generales", faqDesc: "¡Bienvenido!", faq1q: "¿Cuánto Tarda?", faq1a: "Rápido y fácil.", faq2q: "¿Ser Miembro?", faq2a: "Automáticamente.", faq3q: "¿Pagos?", faq3a: "Varios métodos.", faq4q: "¿Cancelar?", faq4a: "Via WhatsApp.", testimonials: "TESTIMONIOS", clientSays: "Lo Que Dicen Los Clientes", customer: "Cliente", discoverTitle: "DESCUBRE LA BELLEZA DE", tanzania: "TANZANIA", unforgettable: "Inolvidable", discoverDesc: "Nos preocupamos por nuestros clientes." },
  fr: { welcome: "BIENVENUE CHEZ ZANZIONE !", heroTitle1: "DÉCOUVREZ", heroHighlight: "ZANZIBAR", heroTitle2: "À VOTRE FAÇON", heroDesc: "Excursions sur l'île, safaris en Tanzanie et transferts avec guides locaux.", selectLanguage: "Choisir la Langue", bookYourRide: "Réservez Votre Trajet", pickupLocation: "Prise en Charge", pickupPlaceholder: "Tapez le lieu", dropoffLocation: "Dépose", dropoffPlaceholder: "Tapez le lieu", passengers: "Passagers", pickupDate: "Date", pickupTime: "Heure", bookTaxi: "RÉSERVER TAXI", aboutUs: "À PROPOS", aboutTitle1: "Nous Offrons", aboutHighlight: "Taxi Aéroportuaire", aboutTitle2: "À Zanzibar", aboutMission: "Expériences de voyage exceptionnelles.", aboutS1: "Transferts Aéroportuaires", aboutS2: "Excursions", aboutS3: "Forfaits Tours", aboutS4: "Tours Safari", discoverMore: "EN DÉCOUVRIR PLUS", yearsLabel: "Années de\nService", zanzTours: "TOURS ZANZIBAR", dailyAct: "Nos Activités", readMore: "LIRE LA SUITE", tanzSafari: "SAFARI TANZANIE", bestPkg: "Meilleurs Forfaits", forYou: "Pour Vous", viewPkg: "VOIR FORFAIT", pkgIncludes: "Comprend: Entrée, Guide, Transport", feature: "CARACTÉRISTIQUES", awesomeFeat: "Nos Caractéristiques", privTransfer: "Transfert Privé", privTransferDesc: "Transferts exclusifs.", welcomeServ: "Service Accueillant", welcomeServDesc: "Chaleureuse hospitalité.", affordRate: "Tarifs Abordables", affordRateDesc: "Prix transparents.", support247: "Support 24/7", support247Desc: "Assistance 24h/24.", bookCta1: "Réservez Votre Taxi Avec Zanzione - Simple Et Abordable", bookCtaDesc: "Réservation sans tracas.", bookAirport: "RÉSERVER TAXI", drivers: "CHAUFFEURS", expertTeam: "Notre Équipe", expertDriver: "Chauffeur Expert", faqLabel: "FAQ", faqTitle: "Questions", faqHighlight: "Fréquemment", faqTitle2: "Posées", faqDesc: "Bienvenue !", faq1q: "Combien de Temps ?", faq1a: "Rapide et facile.", faq2q: "Devenir Membre ?", faq2a: "Automatiquement.", faq3q: "Paiements ?", faq3a: "Plusieurs méthodes.", faq4q: "Annuler ?", faq4a: "Via WhatsApp.", testimonials: "TÉMOIGNAGES", clientSays: "Ce Que Disent Nos Clients", customer: "Client", discoverTitle: "DÉCOUVREZ LA BEAUTÉ DE LA", tanzania: "TANZANIE", unforgettable: "Inoubliable", discoverDesc: "Nous nous soucions de nos clients." },
  ru: { welcome: "ДОБРО ПОЖАЛОВАТЬ В ЗАНЦИОНЕ!", heroTitle1: "ОТКРОЙТЕ", heroHighlight: "ЗАНЗИБАР", heroTitle2: "ПО-СВОЕМУ", heroDesc: "Экскурсии по острову, сафари в Танзании и трансферы с местными гидами.", selectLanguage: "Выберите Язык", bookYourRide: "Забронируйте Поездку", pickupLocation: "Место Посадки", pickupPlaceholder: "Введите место", dropoffLocation: "Место Высадки", dropoffPlaceholder: "Введите место", passengers: "Пассажиры", pickupDate: "Дата", pickupTime: "Время", bookTaxi: "ЗАБРОНИРОВАТЬ", aboutUs: "О НАС", aboutTitle1: "Мы Предоставляем", aboutHighlight: "Такси Аэропорт", aboutTitle2: "На Занзибаре", aboutMission: "Исключительные впечатления от путешествия.", aboutS1: "Трансферы", aboutS2: "Экскурсии", aboutS3: "Турпакеты", aboutS4: "Сафари", discoverMore: "УЗНАТЬ БОЛЬШЕ", yearsLabel: "Лет\nСервиса", zanzTours: "ТУРЫ ЗАНЗИБАР", dailyAct: "Наши Активности", readMore: "ЧИТАТЬ ДАЛЕЕ", tanzSafari: "САФАРИ ТАНЗАНИЯ", bestPkg: "Лучшие Пакеты", forYou: "Для Вас", viewPkg: "СМОТРЕТЬ ПАКЕТ", pkgIncludes: "Включает: Билеты, Гид, Транспорт", feature: "ОСОБЕННОСТИ", awesomeFeat: "Наши Особенности", privTransfer: "Частный Трансфер", privTransferDesc: "Эксклюзивные трансферы.", welcomeServ: "Гостеприимный Сервис", welcomeServDesc: "Тёплое гостеприимство.", affordRate: "Доступные Цены", affordRateDesc: "Прозрачные цены.", support247: "Поддержка 24/7", support247Desc: "Круглосуточная помощь.", bookCta1: "Забронируйте Такси С Zanzione - Просто И Доступно", bookCtaDesc: "Удобное бронирование.", bookAirport: "ЗАБРОНИРОВАТЬ ТАКСИ", drivers: "ВОДИТЕЛИ", expertTeam: "Наша Команда", expertDriver: "Эксперт Водитель", faqLabel: "FAQ", faqTitle: "Общие", faqHighlight: "Частые", faqTitle2: "Вопросы", faqDesc: "Добро пожаловать!", faq1q: "Сколько Времени?", faq1a: "Быстро и просто.", faq2q: "Стать Участником?", faq2a: "Автоматически.", faq3q: "Способы Оплаты?", faq3a: "Несколько методов.", faq4q: "Отменить?", faq4a: "Через WhatsApp.", testimonials: "ОТЗЫВЫ", clientSays: "Что Говорят Клиенты", customer: "Клиент", discoverTitle: "ОТКРОЙТЕ КРАСОТУ", tanzania: "ТАНЗАНИИ", unforgettable: "Незабываемо", discoverDesc: "Мы заботимся о наших клиентах." },
}

const langNames: Record<Lang, string> = { en: "English", ar: "Arabic", da: "Danish", no: "Norway", sv: "Swedish", de: "German", it: "Italian", es: "Spanish", fr: "French", ru: "Russian" }
const langFlags: Record<Lang, string> = { en: "🇬🇧", ar: "🇦🇱", da: "🇩🇰", no: "🇳🇴", sv: "🇸🇻", de: "🇩🇪", it: "🇮🇹", es: "🇪🇸", fr: "🇫🇷", ru: "🇷🇺" }

// ─── Location Data ───
const PLACES = ["Zanzibar International Airport (ZNZ)","Pongwe","Nungwi North Coast","Riu Jambo Nungwi","Riu Palace Nungwi","Makunduchi","Bwejuu","Zanzibar City","Paje","Uroa","Kilimani","Mangapwani","Kama","Michenzani","Forodhani","Shangani","Vuga","Mkunazini","Maisara","Darajani","Baghani","Kokoni","Kidichi Spice Farm","Ras Nungwi","Mnemba Island","Blue Safari Fumba","Fuoni","Fumba Town Bakhresa","Chukwani","Mazizini","Mlandege","Zanzibar Port","Mtoni","Maruhubi","Bububu","Matemwe","Pwani Mchangani","Kiwengwa","Kizimkazi","Jozani Forest","Fumba","Jambiani","Nungwi","Safari Blue Fumba","Michamvi","Kendwa","Malindi","Stone Town","Pongwe Beach Hotel","Flame Tree Cottages","Royal Zanzibar Beach Resort","MyBlue Hotel Zanzibar","DoubleTree Resort by Hilton Hotel Zanzibar Nungwi","Essque Zalu Zanzibar","The Z Hotel","Hideaway of Nungwi Resort & Spa Zanzibar","Gold Zanzibar Beach House & Spa","Amaan Bungalows Beach Resort","Sultan Sand Island Resort","Zanzibar White Sand Luxury Villas & Spa","Kisiwa On The Beach Zanzibar","Zanzibar Bahari Villas","Abuso Inn","Africa House Hotel","Al Johari Hotel","Alminar Hotel","Anex II Hotel","Asmin Palace Hotel","Beyt Al Salaam Hotel","Dhow Palace Hotel","Forodhani Park Hotel","Funguni Palace Hotel","Hiliki House Zanzibar","Maru Maru Hotel Stone Town","The Residence Zanzibar","Dongwe","Chwaka","Kigomane","Kigunda","Kigomani"]

// ─── Autocomplete Component ───
function LocationInput({ id, placeholder, value, onChange }: { id?: string; placeholder: string; value: string; onChange: (v: string) => void }) {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [show, setShow] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setShow(false) }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value; onChange(v)
    if (v.length > 0) { const f = PLACES.filter(p => p.toLowerCase().includes(v.toLowerCase())).slice(0, 6); setSuggestions(f); setShow(f.length > 0) }
    else setShow(false)
  }
  return (
    <div ref={ref} className="relative">
      <input id={id} type="text" required value={value} onChange={handleChange} onFocus={() => value.length > 0 && suggestions.length > 0 && setShow(true)} placeholder={placeholder}
        autoComplete="off"
        className="w-full h-[52px] pl-4 pr-10 border border-border rounded-[26px] text-sm text-ink bg-white focus:outline-none focus:border-aqua focus:ring-2 focus:ring-aqua/20 placeholder:text-slate-ink/70" />
      <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-ink/50" />
      {show && (
        <ul className="absolute z-50 w-full bg-white border border-border rounded-xl mt-1 max-h-44 overflow-y-auto shadow-xl">
          {suggestions.map((p, i) => (
            <li key={i} className="px-4 py-2.5 hover:bg-golden/5 cursor-pointer text-sm text-ink/85 flex items-center gap-2" onMouseDown={() => { onChange(p); setShow(false) }}>
              <MapPin className="w-3 h-3 text-golden flex-shrink-0" />{p}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

// ─── Main Component ───
export default function HomePageClient() {
  const [lang, setLang] = useState<Lang>("en")
  const [showLang, setShowLang] = useState(false)
  const [pickup, setPickup] = useState("")
  const [dropoff, setDropoff] = useState("")
  const [pax, setPax] = useState("2")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [riderName, setRiderName] = useState("")
  const [riderEmail, setRiderEmail] = useState("")
  const [riderPhone, setRiderPhone] = useState("")
  const [bookStatus, setBookStatus] = useState<"idle" | "sending" | "sent" | "email-failed">("idle")
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const t = useCallback((k: string) => translations[lang]?.[k] || translations.en[k] || k, [lang])
  const heroVideoRef = useRef<HTMLVideoElement>(null)
  useScrollAnimation()

  // Belt-and-braces autoplay: React does not always reflect `muted` onto the DOM
  // property, and an unmuted video is blocked from autoplaying.
  useEffect(() => {
    const video = heroVideoRef.current
    if (!video) return
    video.muted = true
    video.play().catch(() => {
      /* Autoplay refused (e.g. data-saver mode) — the poster frame stands in. */
    })
  }, [])

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault()
    setBookStatus("sending")

    const msg = `*New Taxi Booking*\n*Name:* ${riderName}\n*Email:* ${riderEmail}\n*Phone:* ${riderPhone || "—"}\n*From:* ${pickup}\n*To:* ${dropoff}\n*Passengers:* ${pax}\n*Date:* ${date}\n*Time:* ${time}`

    // Email the office a copy; WhatsApp opens regardless so a mail failure
    // never costs the booking.
    const result = await sendEnquiry({
      formType: "Taxi Booking",
      fullName: riderName,
      email: riderEmail,
      phone: riderPhone,
      pickupLocation: pickup,
      dropoffLocation: dropoff,
      passengers: pax,
      pickupDate: date,
      pickupTime: time,
    })

    openWhatsApp(msg)
    setBookStatus(result.ok ? "sent" : "email-failed")
    setTimeout(() => setBookStatus("idle"), 5000)
  }

  const safaris = [
    { name: "MIKUMI DAY TRIP SAFARI", dur: "1 Day", img: "/images/packages/mikumi-safari.jpg", desc: "Full-day flying safari to Mikumi National Park. Experience incredible wildlife viewing including elephants, giraffes, lions, zebras." },
    { name: "SERENGETI 2 DAYS SAFARI", dur: "2 Days / 1 Night", img: "/images/packages/serengeti-safari.jpg", desc: "Experience the magic of Serengeti with a fly-in safari. Witness the Great Migration, spot the Big Five across endless plains." },
    { name: "SELOUS DAY TRIP SAFARI", dur: "1 Day", img: "/images/safari/selous.jpg", desc: "Day trip to Selous Game Reserve (Nyerere National Park), Africa's largest reserve. Experience remarkable wildlife diversity." },
    { name: "3 DAYS SERENGETI SAFARI", dur: "3 Days / 2 Nights", img: "/images/safari/serengeti.jpg", desc: "Experience the magic of Serengeti National Park with multiple game drives across diverse ecosystems. Big Five viewing." },
    { name: "5 DAYS TANZANIA SAFARI", dur: "5 Days / 4 Nights", img: "/images/safari/tarangire.jpg", desc: "Discover vast elephant herds of Tarangire, diverse ecosystems of Lake Manyara, and breathtaking Ngorongoro Crater." },
    { name: "7 DAYS TANZANIA SAFARI", dur: "7 Days / 6 Nights", img: "/images/safari/ngorongoro.jpg", desc: "Thrilling safari through Africa's most renowned national parks. Serengeti, Tarangire, Lake Manyara, and Ngorongoro Crater." },
  ]
  const waterSports = [
    { name: "Jet Ski Adventure", img: "/water-sports-images/jet-ski-1.jpeg", desc: "Feel the pure adrenaline rush as you race across the crystal-clear turquoise waters of Zanzibar! Our powerful jet skis deliver an unforgettable thrill with breathtaking coastal views and ocean spray." },
    { name: "Jet Car Experience", img: "/water-sports-images/jet-car.jpeg", desc: "Drive on water! Experience the ultimate aquatic adventure in our sleek jet car. Glide effortlessly across the Indian Ocean and make memories that will last a lifetime." },
    { name: "Jet Car Rolls Royce", img: "/water-sports-images/rolls-royce.png", desc: "Luxury meets the ocean. Cruise the Zanzibar coastline in style aboard our exclusive Rolls Royce jet car — the most glamorous way to experience the Indian Ocean!" },
    { name: "Kayak Exploration", img: "/water-sports-images/kayaking-1.jpeg", desc: "Paddle through calm, shallow lagoons and explore Zanzibar's stunning shoreline at your own pace. Perfect for couples and families seeking a peaceful yet exciting ocean adventure." },
    { name: "Drone Photography", img: "/water-sports-images/kayaking-2.jpeg", desc: "Capture your once-in-a-lifetime water sports adventure from the sky! Our professional drone service films your experience in stunning quality — because every epic moment deserves to be remembered." },
  ]
  const carHire = [
    { name: "Toyota Coaster", price: 50, img: "/rent-a-car-images/rent-a-coaster.jpeg", desc: "Spacious, comfortable, and perfect for large groups. Our Toyota Coaster seats up to 28 passengers with air conditioning and ample luggage space — ideal for group tours, events, and corporate travel across Zanzibar.", seats: "Up to 28 seats" },
    { name: "Toyota Alphard", price: 45, img: "/rent-a-car-images/rent-alphard.jpeg", desc: "Travel in executive comfort with our premium Toyota Alphard. This luxury van offers plush leather seating, extra legroom, and a smooth ride — perfect for families and VIP transfers who demand the best.", seats: "Up to 7 seats" },
    { name: "Toyota Voxy", price: 40, img: "/rent-a-car-images/renta-a-toyota-voxy.webp", desc: "Versatile, reliable, and family-friendly. The Toyota Voxy combines practicality with comfort, offering flexible seating configurations and generous cargo space for all your Zanzibar adventures.", seats: "Up to 7 seats" },
    { name: "Toyota RAV4", price: 30, img: "/rent-a-car-images/Toyota-RAV4-5-door-min-510x383-1.webp", desc: "Explore Zanzibar with confidence in our rugged yet refined Toyota RAV4. This compact SUV handles every terrain with ease, giving you the freedom to discover hidden beaches and off-the-beaten-path gems.", seats: "Up to 5 seats" },
    { name: "Toyota IST", price: 30, img: "/rent-a-car-images/rent-ist.jpeg", desc: "Compact, economical, and fun to drive! The Toyota IST is perfect for solo travelers and couples who want an agile, fuel-efficient ride for cruising around Stone Town and the island's scenic coastal roads.", seats: "Up to 5 seats" },
  ]
  const reviews = [
    { name: "Carlos Bazan", text: "After 3 changes in flight arrival times due to the airline, and with constant contacts with the person in charge, we had a driver waiting for us at the airport at 4 am, ten hours later than the first scheduled one. Thank you very much for all your efforts. I highly recommend them. very great professionalism.", rating: 5 },
    { name: "Harris", text: "It was an incredibly easy process, with step by step guide for airport collection. We had some delay issues but Benjamin our driver was very understanding, we didn't feel rushed. His information was very helpful and accurate.", rating: 5 },
    { name: "Carlos Bazan", text: "After 3 changes in flight arrival times due to the airline, and with constant contacts with the person in charge, we had a driver waiting for us at the airport at 4 am, ten hours later than the first scheduled one. Thank you very much for all your efforts. I highly recommend them. very great professionalism.", rating: 5 },
    { name: "Harris", text: "It was an incredibly easy process, with step by step guide for airport collection. We had some delay issues but Benjamin our driver was very understanding, we didn't feel rushed. His information was very helpful and accurate.", rating: 5 },
  ]
  const drivers = [
    { name: "Nassor Ally", img: "/taxi drivers/istockphoto-1443611203-612x612.jpg" },
    { name: "Ramadhani Mdeme", img: "/taxi drivers/istockphoto-1465685300-612x612.jpg" },
    { name: "Saleh Mohammed", img: "/taxi drivers/istockphoto-2242801371-612x612.jpg" },
    { name: "John Lucas", img: "/taxi drivers/istockphoto-2256614070-612x612.jpg" },
  ]
  const faqs = [{ q: t("faq1q"), a: t("faq1a") }, { q: t("faq2q"), a: t("faq2a") }, { q: t("faq3q"), a: t("faq3a") }, { q: t("faq4q"), a: t("faq4a") }]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[560px] sm:min-h-[640px] lg:min-h-[calc(100vh-152px)] flex items-center overflow-hidden bg-ink">
        {/* Background video */}
        <video
          ref={heroVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/hero-poster.jpg"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Legibility scrims: a deep navy wash plus a stronger left-side ramp */}
        <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(100deg, rgba(2,47,106,0.92) 0%, rgba(2,47,106,0.72) 35%, rgba(7,29,53,0.30) 65%, rgba(7,29,53,0.15) 100%)",
          }}
        />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-[760px] animate-on-scroll fade-up is-visible">
            <p className="inline-flex items-center gap-2 text-white/90 font-display font-semibold tracking-[0.22em] uppercase text-[11px] sm:text-xs mb-5 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-lagoon" aria-hidden="true" />
              {t("welcome")}
            </p>

            <h1 className="font-display font-extrabold text-white text-[2.15rem] sm:text-[3.1rem] lg:text-[4rem] leading-[1.06] mb-6 text-balance">
              {t("heroTitle1")} <span className="text-gradient-ocean">{t("heroHighlight")}</span> {t("heroTitle2")}
            </h1>

            <p className="text-white/80 text-[15px] sm:text-[18px] leading-[1.65] max-w-[560px] mb-9">
              {t("heroDesc")}
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <Link href="/zanzibar">
                <button className="bg-golden hover:bg-sand text-ink font-bold px-7 py-3.5 rounded-full flex items-center gap-2.5 text-[14.5px] transition-colors shadow-lg shadow-golden/20">
                  Explore Zanzibar Tours <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <BookingModal
                tourName="Airport Taxi Booking"
                trigger={
                  <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold px-7 py-3.5 rounded-full flex items-center gap-2.5 text-[14.5px] transition-colors">
                    {t("taxiBooking")} <ArrowRight className="w-4 h-4" />
                  </button>
                }
              />
            </div>

            {/* Trust strip */}
            <dl className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-12 pt-8 border-t border-white/15">
              {[
                { value: "10+", label: "Years on the island" },
                { value: "16", label: "Zanzibar excursions" },
                { value: "24/7", label: "Traveller support" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display font-extrabold text-white text-2xl sm:text-3xl leading-none">
                      {stat.value}
                    </span>
                    <span className="block text-white/60 text-[12.5px] mt-1.5">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Language selector. Anchored inside the hero rather than fixed to the
            viewport: a fixed corner control collided with the hero stats, the
            first tour card and the footer copyright as the page scrolled. */}
        <div className="absolute top-5 right-4 sm:right-6 z-30">
          <button
            onClick={() => setShowLang(!showLang)}
            aria-expanded={showLang}
            aria-haspopup="listbox"
            aria-label={t("selectLanguage")}
            className="bg-ink/45 hover:bg-ink/70 backdrop-blur-sm text-white pl-2.5 pr-3.5 py-2 rounded-full shadow-lg flex items-center gap-2 text-[13px] font-bold transition-colors border border-white/25"
          >
            <span className="text-base leading-none">{langFlags[lang]}</span>
            <span>{langNames[lang]}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showLang ? "rotate-180" : ""}`} />
          </button>
          {showLang && (
            <div
              role="listbox"
              className="absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-card-hover py-2 w-52 max-h-[55vh] overflow-y-auto border border-border"
            >
              {(Object.keys(langNames) as Lang[]).map((c) => (
                <button
                  key={c}
                  role="option"
                  aria-selected={lang === c}
                  onClick={() => {
                    setLang(c)
                    setShowLang(false)
                  }}
                  className={`w-full text-left px-4 py-2.5 hover:bg-mist flex items-center gap-3 text-sm transition-colors ${
                    lang === c ? "bg-aqua/10 text-ocean font-bold" : "text-ink"
                  }`}
                >
                  <span className="text-base">{langFlags[c]}</span>
                  {langNames[c]}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
      {/* ═══════ BOOKING FORM ═══════ */}
      <section className="relative z-20 -mt-10 sm:-mt-14 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <form onSubmit={handleBook} className="bg-white rounded-[20px] shadow-2xl p-6 sm:p-8 lg:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-ink mb-6 sm:mb-8">{t("bookYourRide")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mb-4">
              <div>
                <label htmlFor="taxi-pickup" className="block text-sm font-bold text-ink mb-2">{t("pickupLocation")}</label>
                <LocationInput id="taxi-pickup" placeholder={t("pickupPlaceholder")} value={pickup} onChange={setPickup} />
              </div>
              <div>
                <label htmlFor="taxi-dropoff" className="block text-sm font-bold text-ink mb-2">{t("dropoffLocation")}</label>
                <LocationInput id="taxi-dropoff" placeholder={t("dropoffPlaceholder")} value={dropoff} onChange={setDropoff} />
              </div>
              <div>
                <label htmlFor="taxi-pax" className="block text-sm font-bold text-ink mb-2">{t("passengers")}</label>
                <div className="relative">
                  <input id="taxi-pax" type="number" min="1" max="20" value={pax} onChange={e => setPax(e.target.value)}
                    className="w-full h-[52px] pl-4 pr-10 border border-border rounded-[26px] text-sm text-ink bg-white focus:outline-none focus:border-aqua focus:ring-2 focus:ring-aqua/20" />
                  <Users className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-ink/50" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mb-4">
              <div>
                <label htmlFor="taxi-date" className="block text-sm font-bold text-ink mb-2">{t("pickupDate")}</label>
                <input id="taxi-date" type="date" required value={date} onChange={e => setDate(e.target.value)}
                  className="w-full h-[52px] pl-4 pr-4 border border-border rounded-[26px] text-sm text-ink bg-white focus:outline-none focus:border-aqua focus:ring-2 focus:ring-aqua/20" />
              </div>
              <div>
                <label htmlFor="taxi-time" className="block text-sm font-bold text-ink mb-2">{t("pickupTime")}</label>
                <input id="taxi-time" type="time" required value={time} onChange={e => setTime(e.target.value)}
                  className="w-full h-[52px] pl-4 pr-4 border border-border rounded-[26px] text-sm text-ink bg-white focus:outline-none focus:border-aqua focus:ring-2 focus:ring-aqua/20" />
              </div>
              <div>
                <label htmlFor="taxi-name" className="block text-sm font-bold text-ink mb-2">{t("yourName")}</label>
                <input id="taxi-name" type="text" required autoComplete="name" value={riderName} onChange={e => setRiderName(e.target.value)}
                  placeholder={t("yourNamePlaceholder")}
                  className="w-full h-[52px] px-4 border border-border rounded-[26px] text-sm text-ink bg-white placeholder:text-slate-ink/70 focus:outline-none focus:border-aqua focus:ring-2 focus:ring-aqua/20" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 items-end">
              <div>
                <label htmlFor="taxi-email" className="block text-sm font-bold text-ink mb-2">{t("yourEmail")}</label>
                <input id="taxi-email" type="email" required autoComplete="email" value={riderEmail} onChange={e => setRiderEmail(e.target.value)}
                  placeholder={t("yourEmailPlaceholder")}
                  className="w-full h-[52px] px-4 border border-border rounded-[26px] text-sm text-ink bg-white placeholder:text-slate-ink/70 focus:outline-none focus:border-aqua focus:ring-2 focus:ring-aqua/20" />
              </div>
              <div>
                <label htmlFor="taxi-phone" className="block text-sm font-bold text-ink mb-2">{t("yourPhone")}</label>
                <input id="taxi-phone" type="tel" autoComplete="tel" value={riderPhone} onChange={e => setRiderPhone(e.target.value)}
                  placeholder={t("yourPhonePlaceholder")}
                  className="w-full h-[52px] px-4 border border-border rounded-[26px] text-sm text-ink bg-white placeholder:text-slate-ink/70 focus:outline-none focus:border-aqua focus:ring-2 focus:ring-aqua/20" />
              </div>
              <button type="submit" disabled={bookStatus === "sending"}
                className="h-[52px] bg-golden hover:bg-sand disabled:opacity-70 text-ink font-extrabold rounded-[26px] flex items-center justify-center gap-2 text-sm tracking-wider transition-colors shadow-md">
                {bookStatus === "sending" ? "Sending…" : <>{t("bookTaxi")} <ArrowRight className="w-4 h-4" /></>}
              </button>
            </div>

            <p className="mt-4 text-[13px] text-slate-ink" role="status" aria-live="polite">
              {bookStatus === "sent" && <span className="text-island font-semibold">Sent to our team — WhatsApp is opening now.</span>}
              {bookStatus === "email-failed" && <span className="text-sea font-semibold">WhatsApp is opening — please send the message to confirm your ride.</span>}
              {bookStatus === "idle" && "We confirm every ride on WhatsApp and by email."}
            </p>
          </form>
        </div>
      </section>

      {/* ═══════ PROMO SLIDER ═══════ */}
      <PromoSlider />

      {/* ═══════ ABOUT US ═══════ */}
      <section className="py-12 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - car image with decorations */}
            <div className="relative flex justify-center animate-on-scroll fade-left">
              {/* Decorative dots top-left */}
              <div className="absolute top-0 left-4 grid grid-cols-3 gap-1.5 opacity-40">
                {[...Array(9)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-golden rounded-full" />)}
              </div>
              {/* Decorative zigzag lines */}
              <div className="absolute top-8 left-0 text-golden text-2xl font-bold opacity-30 tracking-widest">///</div>
              <div className="absolute bottom-8 right-4 text-golden text-2xl font-bold opacity-30 tracking-widest">///</div>
              {/* Decorative dots bottom-right */}
              <div className="absolute bottom-0 right-8 grid grid-cols-3 gap-1.5 opacity-40">
                {[...Array(9)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-golden rounded-full" />)}
              </div>

              <div className="relative">
                <Image src="/toyota-alphard.jpeg" alt="Zanzione Tours" width={460} height={320} className="rounded-xl object-cover w-full max-w-[460px]" />
                {/* 10 Years badge */}
                <div className="absolute -left-4 sm:-left-6 top-1/3 bg-golden text-ink rounded-full w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center shadow-xl border-4 border-white z-10">
                  <span className="text-2xl sm:text-3xl font-black leading-none">10</span>
                  <span className="text-[9px] sm:text-[10px] text-center leading-tight mt-0.5 font-semibold whitespace-pre-line">{t("yearsLabel")}</span>
                </div>
              </div>
            </div>

            {/* Right - text */}
            <div className="animate-on-scroll fade-right" data-delay="200">
              <p className="text-sea font-display font-bold tracking-[0.2em] uppercase text-xs mb-3">{t("aboutUs")}</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-ink leading-tight mb-5">
                {t("aboutTitle1")}<br />
                <span className="text-sea italic">{t("aboutHighlight")}</span> {t("aboutTitle2")}
              </h2>
              <p className="text-slate-ink text-[13px] sm:text-sm leading-relaxed mb-5">{t("aboutMission")}</p>
              <ul className="space-y-3 mb-6">
                {[t("aboutS1"), t("aboutS2"), t("aboutS3"), t("aboutS4")].map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2.5 h-2.5 bg-golden rounded-full flex-shrink-0"></span>
                    <span className="text-slate-ink text-[13px] sm:text-sm leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <button className="bg-golden hover:bg-sand text-ink font-black px-6 py-3 rounded-lg flex items-center gap-2 text-sm tracking-wide transition-colors">
                  {t("discoverMore")} <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ ZANZIBAR DAILY ACTIVITIES ═══════ */}
      <section className="py-12 sm:py-20 bg-mist">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-on-scroll fade-up">
            <p className="text-aqua font-display font-bold tracking-[0.2em] uppercase text-xs mb-2">{t("zanzTours")}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-ink">{t("dailyAct")}</h2>
            <div className="zn-rule" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
            {zanzibarTours.slice(0, 8).map((tour, i) => (
              <div key={tour.slug} className="animate-on-scroll fade-up" data-delay={((i % 4) * 90).toString()}>
                <TourCard tour={tour} />
              </div>
            ))}
          </div>
          <div className="text-center mt-10 animate-on-scroll fade-up" data-delay="300">
            <Link href="/zanzibar">
              <button className="bg-navy hover:bg-ocean text-white font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2.5 text-sm tracking-wide transition-colors shadow-md">
                See All {zanzibarTours.length} Excursions <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* ═══════ TRANSFER SERVICES ═══════ */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-on-scroll fade-up">
            <p className="text-aqua font-display font-bold tracking-[0.2em] uppercase text-xs mb-2">TRANSFER SERVICES</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-ink">
              Airport & Hotel <span className="text-sea italic">Transfers</span>
            </h2>
            <div className="zn-rule" aria-hidden="true" />
            <p className="text-slate-ink text-sm sm:text-base mt-4 max-w-2xl mx-auto">Reliable, comfortable, and affordable transfers across Zanzibar Island with professional drivers and modern vehicles.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {highlightTransfers.map((route, i) => (
              <div key={i} className="animate-on-scroll fade-up group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-border hover:-translate-y-1" data-delay={i * 100}>
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <Image src={route.image} alt={`Transfer to ${route.to}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px)100vw,(max-width:1024px)50vw,33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <div>
                      <p className="text-white/80 text-xs">From</p>
                      <p className="text-white font-bold text-sm">{route.from}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-golden mb-1" />
                    <div className="text-right">
                      <p className="text-white/80 text-xs">To</p>
                      <p className="text-white font-bold text-sm">{route.to}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-extrabold text-ocean">${route.price}</p>
                    <p className="text-slate-ink/75 text-xs">per vehicle</p>
                  </div>
                  <BookingModal tourName={`Transfer: ${route.from} → ${route.to}`} trigger={
                    <button className="bg-golden hover:bg-sand text-ink font-bold px-5 py-2.5 rounded-full text-sm transition-colors">
                      Book Now
                    </button>
                  } />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 animate-on-scroll fade-up" data-delay="300">
            <Link href="/transfers">
              <button className="bg-blue-season hover:bg-blue-season/90 text-white font-bold px-8 py-3.5 rounded-full flex items-center gap-2.5 text-sm tracking-wide transition-colors mx-auto shadow-md">
                See More Transfer Routes <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ WATER SPORTS ═══════ */}
      <section className="py-12 sm:py-20 bg-aqua/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-on-scroll fade-up">
            <p className="text-aqua font-display font-bold tracking-[0.2em] uppercase text-xs mb-2">WATER SPORTS</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-ink">
              Thrilling <span className="text-sea italic">Ocean Adventures</span>
            </h2>
            <div className="zn-rule" aria-hidden="true" />
            <p className="text-slate-ink text-sm sm:text-base mt-4 max-w-2xl mx-auto">Dive into adrenaline-pumping water activities across Zanzibar's crystal-clear turquoise lagoons. From high-speed jet skis to luxury jet cars — make waves on your vacation!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {waterSports.map((sport, i) => (
              <div key={i} className="animate-on-scroll fade-up bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1" data-delay={((i % 3) * 100).toString()}>
                <div className="relative p-4 pb-0">
                  <div className="relative h-52 sm:h-56 rounded-xl overflow-hidden">
                    <Image src={sport.img} alt={sport.name} fill className="object-cover" sizes="(max-width:768px)100vw,(max-width:1024px)50vw,33vw" />
                  </div>
                </div>
                <div className="p-5 pt-6 sm:p-6 sm:pt-7">
                  <h3 className="text-lg font-display font-black text-ink mb-2">{sport.name}</h3>
                  <p className="text-slate-ink/75 text-[13px] leading-relaxed mb-5 line-clamp-3">{sport.desc}</p>
                  <BookingModal tourName={sport.name} trigger={
                    <button className="bg-golden hover:bg-sand text-ink font-bold px-6 py-2.5 rounded-full flex items-center gap-2 text-sm tracking-wide transition-colors">
                      Book via WhatsApp <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  } />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ QUAD BIKING ADVENTURE ═══════ */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-on-scroll fade-up">
            <p className="text-aqua font-display font-bold tracking-[0.2em] uppercase text-xs mb-2">OFF-ROAD ADVENTURE</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-ink">
              Explore Zanzibar by <span className="text-sea italic">Quad 4H</span>
            </h2>
            <div className="zn-rule" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Images */}
            <div className="animate-on-scroll fade-left relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image src="/quad-biking.webp" alt="Quad Biking Zanzibar" width={560} height={380} className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden lg:block">
                <Image src="/quad-biking-2.jpg" alt="Quad Biking Adventure" fill className="object-cover" sizes="200px" />
              </div>

            </div>

            {/* Right - Content */}
            <div className="animate-on-scroll fade-right" data-delay="200">
              <p className="text-slate-ink text-[13px] sm:text-sm leading-relaxed mb-6">
                Unleash your inner adventurer and conquer Zanzibar's stunning northern coastline on a thrilling 4-hour quad bike expedition! Feel the wind in your hair as you ride through hidden trails, untouched villages, and pristine beaches that most tourists never get to see.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 bg-golden rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-xs">1</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-ink text-sm mb-1">Private Beach – Kaskazini</h4>
                    <p className="text-slate-ink text-[13px] leading-relaxed">Escape to a secluded paradise where turquoise waves kiss powdery white sand. Bask in warm sunshine, listen to the soothing melody of the ocean, and let the chirping birds serenade you in this untouched haven of tranquility.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 bg-golden rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-xs">2</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-ink text-sm mb-1">Authentic Village Experience – Kidotti</h4>
                    <p className="text-slate-ink text-[13px] leading-relaxed">Immerse yourself in genuine Zanzibari culture! The warm-hearted locals of Kidotti village welcome you like family. Roll up your sleeves and join traditional cooking sessions, savoring authentic dishes that tell the story of generations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 bg-golden rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-xs">3</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-ink text-sm mb-1">World-Famous Kendwa Beach</h4>
                    <p className="text-slate-ink text-[13px] leading-relaxed">Wind down at Kendwa — ranked among the world's most breathtaking beaches. Sip on fresh coconut juice as you watch the sun melt into the horizon, stroll past fishermen hauling their daily catch, and feel the magic of Zanzibar's coastal life.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-6 p-4 bg-mist rounded-xl">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-golden" />
                  <span className="text-ink/85 text-sm font-semibold">4 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-golden" />
                  <span className="text-ink/85 text-sm font-semibold">Nungwi – Kendwa</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-golden" />
                  <span className="text-ink/85 text-sm font-semibold">Up to 2 people per quad</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="bg-golden/10 rounded-xl px-5 py-3">
                  <p className="text-ink/85 text-sm font-semibold">Morning: 9:00 AM – 1:00 PM | Afternoon: 2:00 PM – 6:00 PM</p>
                </div>
                <BookingModal tourName="Quad Biking 4H Adventure" trigger={
                  <button className="bg-golden hover:bg-sand text-ink font-bold px-7 py-3.5 rounded-full flex items-center gap-2 text-sm tracking-wide transition-colors shadow-md">
                    Book via WhatsApp <ArrowRight className="w-4 h-4" />
                  </button>
                } />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ TANZANIA SAFARI PACKAGES ═══════ */}
      <section className="py-12 sm:py-20 relative bg-cover bg-center" style={{ backgroundImage: "url(/images/safari-sunset.jpg)" }}>
        <div className="absolute inset-0 bg-ink/92"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-on-scroll fade-up">
            <p className="text-aqua font-display font-bold tracking-[0.2em] uppercase text-xs mb-2">{t("tanzSafari")}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white">
              {t("bestPkg")} <span className="text-golden italic">{t("forYou")}</span>
            </h2>
            <div className="flex justify-center gap-1 mt-4">
              <div className="w-10 h-1.5 bg-white rounded-full"></div>
              <div className="w-3 h-1.5 bg-golden rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {safaris.map((s, i) => (
              <div key={i} className="animate-on-scroll scale-in rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1" data-delay={((i % 3) * 120).toString()}>
                {/* TOP: White section */}
                <div className="bg-white relative pb-8">
                  {/* Padded rounded image */}
                  <div className="p-4 pb-5">
                    <div className="relative h-48 sm:h-52 rounded-xl overflow-hidden">
                      <Image src={s.img} alt={s.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px)100vw,(max-width:1024px)50vw,33vw" />
                    </div>
                  </div>
                  {/* Title & Duration centered */}
                  <div className="text-center px-5 pb-4">
                    <h3 className="font-display font-black text-ink text-base sm:text-lg tracking-wide">{s.name}</h3>
                    <p className="text-sea font-semibold text-sm mt-1">{s.dur}</p>
                  </div>
                </div>
                {/* BOTTOM: Dark navy section */}
                <div className="bg-ink relative pt-8 pb-5 px-5">
                  {/* Decorative swirl/wave SVG pattern */}
                  <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden opacity-10">
                    <svg viewBox="0 0 400 30" className="w-full h-full" preserveAspectRatio="none">
                      <path d="M0,15 Q50,0 100,15 Q150,30 200,15 Q250,0 300,15 Q350,30 400,15" fill="none" stroke="white" strokeWidth="1.5" />
                      <path d="M0,20 Q50,5 100,20 Q150,35 200,20 Q250,5 300,20 Q350,35 400,20" fill="none" stroke="white" strokeWidth="1" />
                    </svg>
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed text-center mb-4">{t("pkgIncludes")}</p>
                  <Link href="/itineraries" className="block">
                    <button className="w-full bg-golden hover:bg-sand text-ink font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-sm tracking-wide transition-colors">
                      {t("viewPkg")} <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DISCOVER TANZANIA BANNER ═══════ */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="animate-on-scroll scale-in relative bg-white rounded-2xl overflow-hidden shadow-xl" style={{ backgroundImage: "url('/images/safari-sunset.jpg')", backgroundSize: "cover", backgroundPosition: "right center" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>
            <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[280px] sm:min-h-[320px]">
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <p className="text-ink font-display font-black text-lg sm:text-xl mb-1">{t("discoverTitle")}</p>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-ink tracking-tight mb-2">{t("tanzania")}</h2>
                <div className="bg-golden inline-block px-4 py-1 mb-4 max-w-fit">
                  <span className="text-white text-sm italic tracking-[0.15em]">{t("unforgettable")}</span>
                </div>
                <p className="text-slate-ink text-[13px] leading-relaxed max-w-md">{t("discoverDesc")}</p>
              </div>
            </div>
            {/* Vertical text */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block">
              <p className="text-slate-ink text-xs tracking-[0.3em] font-bold" style={{ writingMode: "vertical-rl" }}>WWW.ZANZIONETOURS.COM</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CAR HIRE ═══════ */}
      <section className="py-12 sm:py-20 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-on-scroll fade-up">
            <p className="text-aqua font-display font-bold tracking-[0.2em] uppercase text-xs mb-2">RENTAL FLEET</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-ink">
              Car <span className="text-sea italic">Hire</span> Per Day
            </h2>
            <div className="zn-rule" aria-hidden="true" />
            <p className="text-slate-ink text-sm sm:text-base mt-4 max-w-2xl mx-auto">Explore Zanzibar at your own pace with our well-maintained, air-conditioned rental fleet. From compact city cars to spacious group vans — we have the perfect ride for every adventure.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {carHire.map((car, i) => (
              <div key={i} className="animate-on-scroll fade-up bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1" data-delay={((i % 3) * 100).toString()}>
                <div className="relative p-4 pb-0">
                  <div className="relative h-48 sm:h-52 rounded-xl overflow-hidden bg-mist">
                    <Image src={car.img} alt={car.name} fill className="object-contain" sizes="(max-width:768px)100vw,(max-width:1024px)50vw,33vw" />
                  </div>
                  <div className="absolute bottom-0 right-6 translate-y-1/2 w-[64px] h-[64px] bg-golden rounded-full flex flex-col items-center justify-center text-ink font-black text-sm shadow-lg z-10 border-[3px] border-white">
                    <span className="text-lg leading-none">${car.price}</span>
                    <span className="text-[9px] font-semibold">/ day</span>
                  </div>
                </div>
                <div className="p-5 pt-7 sm:p-6 sm:pt-8">
                  <h3 className="text-lg font-display font-black text-ink mb-1">{car.name}</h3>
                  <p className="text-sea text-xs font-semibold mb-3">{car.seats}</p>
                  <p className="text-slate-ink/75 text-[13px] leading-relaxed mb-5 line-clamp-3">{car.desc}</p>
                  <BookingModal tourName={`Car Hire: ${car.name}`} trigger={
                    <button className="w-full bg-golden hover:bg-sand text-ink font-bold px-6 py-2.5 rounded-full flex items-center justify-center gap-2 text-sm tracking-wide transition-colors">
                      Rent This Car <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  } />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FEATURES ═══════ */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-on-scroll fade-up">
            <p className="text-aqua font-display font-bold tracking-[0.2em] uppercase text-xs mb-2">{t("feature")}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-ink">{t("awesomeFeat")}</h2>
            <div className="zn-rule" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {[
              { icon: <Car className="w-10 h-10" />, title: t("privTransfer"), desc: t("privTransferDesc") },
              { icon: <Wifi className="w-10 h-10" />, title: t("welcomeServ"), desc: t("welcomeServDesc") },
              { icon: <DollarSign className="w-10 h-10" />, title: t("affordRate"), desc: t("affordRateDesc") },
              { icon: <Headphones className="w-10 h-10" />, title: t("support247"), desc: t("support247Desc") },
            ].map((f, i) => (
              <div key={i} className="animate-on-scroll fade-up bg-mist rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-delay={(i * 100).toString()}>
                <div className="w-[80px] h-[80px] mx-auto mb-5 rounded-full border-2 border-white/10 flex items-center justify-center bg-golden/10 text-ink">
                  {f.icon}
                </div>
                <h3 className="text-lg font-display font-black text-ink mb-3">{f.title}</h3>
                <p className="text-slate-ink text-[13px] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BOOKING CTA ═══════ */}
      <section className="relative bg-gradient-ocean py-14 sm:py-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        {/* Soft aqua glow anchoring the right side */}
        <div
          aria-hidden="true"
          className="absolute -right-40 -top-32 w-[520px] h-[520px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--zn-lagoon) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white leading-tight mb-4">
                {t("bookCta1")}
              </h2>
              <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed max-w-xl">{t("bookCtaDesc")}</p>
            </div>
            <div className="lg:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-5 lg:justify-end">
              <a href="tel:+255710885320" className="flex items-center gap-3 border-l-2 border-lagoon pl-4 group">
                <Headphones className="w-7 h-7 text-lagoon" />
                <span className="text-white text-xl sm:text-2xl font-display font-extrabold group-hover:text-lagoon transition-colors">
                  +255 710 885 320
                </span>
              </a>
              <BookingModal
                tourName="Airport Taxi Booking"
                trigger={
                  <button className="bg-golden hover:bg-sand text-ink font-bold px-6 py-3.5 rounded-full transition-colors flex items-center gap-2 text-xs sm:text-sm tracking-wider whitespace-nowrap shadow-lg shadow-black/10">
                    {t("bookAirport")} <ArrowRight className="w-4 h-4" />
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ DRIVERS ═══════ */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-on-scroll fade-up">
            <p className="text-aqua font-display font-bold tracking-[0.2em] uppercase text-xs mb-2">{t("drivers")}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-ink">{t("expertTeam")}</h2>
            <div className="zn-rule" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {drivers.map((d, i) => (
              <div key={i} className="animate-on-scroll fade-up bg-white rounded-2xl shadow-md p-4 sm:p-5 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-delay={(i * 100).toString()}>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden border-[3px] border-golden/40 mb-4">
                  <Image src={d.img} alt={d.name} fill className="object-cover" sizes="(max-width:640px)50vw,25vw" />
                </div>
                <h3 className="font-display font-black text-ink text-sm sm:text-base">{d.name}</h3>
                <p className="text-sea text-xs sm:text-sm mb-3">{t("expertDriver")}</p>
                <div className="flex justify-center gap-1.5 sm:gap-2">
                  {[Facebook, Twitter, Linkedin, Youtube].map((Icon, j) => (
                    <Link key={j} href="/">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-golden rounded-full flex items-center justify-center text-ink hover:bg-golden/80 transition-colors">
                        <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="py-12 sm:py-20 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <p className="text-sea font-display font-bold tracking-[0.2em] uppercase text-xs mb-3 animate-on-scroll fade-left">{t("faqLabel")}</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-ink leading-tight mb-5">
                {t("faqTitle")} <span className="text-sea">{t("faqHighlight")}</span><br />{t("faqTitle2")}
              </h2>
              <p className="text-slate-ink text-[13px] sm:text-sm leading-relaxed mb-6">{t("faqDesc")}</p>
              <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden">
                <Image src="/toyota-alphard.jpeg" alt="Taxi service" fill className="object-cover" sizes="(max-width:1024px)100vw,50vw" />
              </div>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 text-left hover:bg-mist/50 transition-colors">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-golden rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-sm">?</span>
                    </div>
                    <span className="font-display font-bold text-ink text-sm sm:text-base flex-1">{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="w-5 h-5 text-slate-ink/75 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-ink/75 flex-shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 ml-12 sm:ml-14">
                      <p className="text-slate-ink text-[13px] sm:text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="py-12 sm:py-20 relative bg-cover bg-center" style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}>
        <div className="absolute inset-0 bg-black/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-on-scroll fade-up">
            <p className="text-aqua font-display font-bold tracking-[0.2em] uppercase text-xs mb-2">{t("testimonials")}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white">
              What Our Client <span className="text-golden italic">Say&apos;s</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="animate-on-scroll fade-up bg-white rounded-2xl p-5 sm:p-6 shadow-lg border-t-[3px] border-golden" data-delay={(i * 100).toString()}>
                <div className="flex items-center gap-3 mb-4">
                  <Image src="/images/logo-zanzione.png" alt="" width={32} height={32} className="rounded-full" />
                  <div>
                    <p className="font-display font-black text-ink text-sm">{r.name}</p>
                    <p className="text-sea text-xs">{t("customer")}</p>
                  </div>
                </div>
                <p className="text-slate-ink text-xs leading-relaxed mb-4 line-clamp-[8]">{r.text}</p>
                <div className="flex items-center gap-0.5">
                  {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-4 h-4 text-golden fill-golden" />)}
                  <span className="text-slate-ink/75 text-xs ml-1.5">({r.rating})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
