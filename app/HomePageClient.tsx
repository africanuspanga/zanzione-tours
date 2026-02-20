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

// ─── Scroll Animation Hook ───
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = el.dataset.delay || "0"
            el.style.animationDelay = `${delay}ms`
            el.classList.add("is-visible")
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
  { from: "Airport / Ferry", to: "Stone Town", price: 15, image: "/images/vehicles/alphard-gold.jpg" },
  { from: "Airport / Ferry", to: "Nungwi - Kendwa", price: 35, image: "/images/vehicles/alphard-white-rear.jpg" },
  { from: "Airport / Ferry", to: "Paje", price: 35, image: "/images/vehicles/alphard-black.jpg" },
  { from: "Airport / Ferry", to: "Kiwengwa", price: 30, image: "/images/vehicles/alphard-black-2.jpg" },
  { from: "Airport / Ferry", to: "Matemwe", price: 30, image: "/images/vehicles/coaster-bus.jpg" },
  { from: "Airport / Ferry", to: "Jambiani", price: 35, image: "/images/vehicles/alphard-white.png" },
]

// ─── Translation System ───
type Lang = "en" | "ar" | "da" | "no" | "sv" | "de" | "it" | "es" | "fr" | "ru"

const translations: Record<Lang, Record<string, string>> = {
  en: {
    welcome: "WELCOME TO ZANZIONE!",
    heroTitle1: "BOOK",
    heroHighlight: "ZANZIBAR TAXI",
    heroTitle2: "FOR YOUR RIDE",
    heroDesc: "Reliable, Flawless, timely, convenient, and friendly airport taxis journey every time, all the time, and anywhere in Zanzibar. your trusted partner for seamless travel experiences in Zanzibar and Tanzania as a whole. Located in the heart of enchanting Zanzibar, Tanzania, we specialize in providing exceptional airport transfer services, captivating Zanzibar excursions, and unforgettable Tanzania wild safaris.",
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
  ar: { welcome: "!مرحباً بكم في زنزيوني", heroTitle1: "احجز", heroHighlight: "تاكسي زنجبار", heroTitle2: "لرحلتك", heroDesc: "تاكسي مطار موثوق في كل مكان في زنجبار.", selectLanguage: "اختر اللغة", bookYourRide: "احجز رحلتك", pickupLocation: "موقع الاستلام", pickupPlaceholder: "اكتب موقع الاستلام", dropoffLocation: "موقع التوصيل", dropoffPlaceholder: "اكتب موقع التوصيل", passengers: "الركاب", pickupDate: "تاريخ", pickupTime: "وقت", bookTaxi: "احجز", aboutUs: "معلومات عنا", aboutTitle1: "نقدم خدمة موثوقة", aboutHighlight: "تاكسي المطار", aboutTitle2: "في زنجبار", aboutMission: "تقديم تجارب سفر استثنائية.", aboutS1: "نقل المطار", aboutS2: "الرحلات والجولات", aboutS3: "حزم سياحية مخصصة", aboutS4: "جولات السفاري", discoverMore: "اكتشف المزيد", yearsLabel: "سنوات من\nالخدمة الجيدة", zanzTours: "جولات زنجبار", dailyAct: "أنشطتنا اليومية", readMore: "اقرأ المزيد", tanzSafari: "سفاري تنزانيا", bestPkg: "أفضل الباقات", forYou: "لك", viewPkg: "عرض الباقة", pkgIncludes: "تشمل الباقة: رسوم الدخول، مرشد، النقل، الوجبات", feature: "الميزات", awesomeFeat: "ميزاتنا الرائعة", privTransfer: "نقل خاص", privTransferDesc: "نقل خاص حصري مع سائقين محترفين.", welcomeServ: "خدمة ترحيبية", welcomeServDesc: "فريقنا الودود يرحب بكم.", affordRate: "أسعار معقولة", affordRateDesc: "أسعار شفافة وتنافسية.", support247: "دعم 24/7", support247Desc: "مساعدة على مدار الساعة.", bookCta1: "حجز سيارتك مع زنزيوني بسيط ومعقول", bookCtaDesc: "تجربة حجز تاكسي سلسة.", bookAirport: "احجز تاكسي المطار", drivers: "السائقون", expertTeam: "فريقنا المتخصص", expertDriver: "سائق خبير", faqLabel: "الأسئلة الشائعة", faqTitle: "أسئلة", faqHighlight: "شائعة", faqTitle2: "عامة", faqDesc: "مرحباً بكم في مجموعة المساعدة!", faq1q: "كم يستغرق الحجز؟", faq1a: "الحجز سريع وسهل.", faq2q: "كيف أصبح عضواً؟", faq2a: "بعد حجزك الأول.", faq3q: "ما هي بوابات الدفع؟", faq3a: "نحن ندعم طرق دفع متعددة.", faq4q: "كيف يمكنني إلغاء طلبي؟", faq4a: "عبر واتساب أو البريد الإلكتروني.", testimonials: "الشهادات", clientSays: "ماذا يقول عملاؤنا", customer: "عميل", discoverTitle: "اكتشف جمال", tanzania: "تنزانيا", unforgettable: "تجربة لا تُنسى", discoverDesc: "نحن نهتم حقاً بجميع عملائنا." },
  da: { welcome: "VELKOMMEN TIL ZANZIONE!", heroTitle1: "BOOK", heroHighlight: "ZANZIBAR TAXI", heroTitle2: "TIL DIN TUR", heroDesc: "Pålidelig, rettidig og venlig taxa overalt i Zanzibar.", selectLanguage: "Vælg Sprog", bookYourRide: "Book Din Tur", pickupLocation: "Afhentning", pickupPlaceholder: "Indtast sted", dropoffLocation: "Aflevering", dropoffPlaceholder: "Indtast sted", passengers: "Passagerer", pickupDate: "Dato", pickupTime: "Tid", bookTaxi: "BOOK TAXI", aboutUs: "OM OS", aboutTitle1: "Vi Tilbyder", aboutHighlight: "Lufthavnstaxi", aboutTitle2: "I Zanzibar", aboutMission: "Vi leverer enestående rejseoplevelser.", aboutS1: "Lufthavnstransfer", aboutS2: "Udflugter", aboutS3: "Turpakker", aboutS4: "Safariture", discoverMore: "OPDAG MERE", yearsLabel: "Års\nKvalitetsservice", zanzTours: "ZANZIBAR TURE", dailyAct: "Vores Daglige Aktiviteter", readMore: "LÆS MERE", tanzSafari: "TANZANIA SAFARI", bestPkg: "Bedste Pakker", forYou: "Til Dig", viewPkg: "SE PAKKE", pkgIncludes: "Inkluderer: Entré, Guide, Transport, Måltider", feature: "FUNKTION", awesomeFeat: "Vores Funktioner", privTransfer: "Privat Transfer", privTransferDesc: "Eksklusive private transfers.", welcomeServ: "Indbydende Service", welcomeServDesc: "Varm gæstfrihed.", affordRate: "Overkommelige Priser", affordRateDesc: "Gennemsigtige priser.", support247: "24/7 Support", support247Desc: "Assistanse døgnet rundt.", bookCta1: "Book Din Taxi Med Zanzione - Simpelt Og Overkommeligt", bookCtaDesc: "Problemfri taxibooking i Zanzibar.", bookAirport: "BOOK LUFTHAVNSTAXI", drivers: "CHAUFFØRER", expertTeam: "Vores Ekspertteam", expertDriver: "Ekspert Chauffør", faqLabel: "FAQ", faqTitle: "Generelle", faqHighlight: "Ofte Stillede", faqTitle2: "Spørgsmål", faqDesc: "Velkommen til hjælpesamlingen!", faq1q: "Hvor Lang Tid?", faq1a: "Hurtigt og nemt.", faq2q: "Hvordan Bliver Jeg Medlem?", faq2a: "Automatisk tilmeldt.", faq3q: "Betalingsmetoder?", faq3a: "Flere metoder.", faq4q: "Annullering?", faq4a: "Via WhatsApp.", testimonials: "ANMELDELSER", clientSays: "Hvad Kunderne Siger", customer: "Kunde", discoverTitle: "OPDAG SKØNHEDEN I", tanzania: "TANZANIA", unforgettable: "Uforglemmelig Oplevelse", discoverDesc: "Hos Zanzione går vi genuint op i vores kunder." },
  no: { welcome: "VELKOMMEN TIL ZANZIONE!", heroTitle1: "BESTILL", heroHighlight: "ZANZIBAR TAXI", heroTitle2: "FOR DIN TUR", heroDesc: "Pålitelig taxi overalt i Zanzibar.", selectLanguage: "Velg Språk", bookYourRide: "Bestill Din Tur", pickupLocation: "Hentested", pickupPlaceholder: "Skriv sted", dropoffLocation: "Leveringssted", dropoffPlaceholder: "Skriv sted", passengers: "Passasjerer", pickupDate: "Dato", pickupTime: "Tid", bookTaxi: "BESTILL TAXI", aboutUs: "OM OSS", aboutTitle1: "Vi Tilbyr", aboutHighlight: "Flyplass Taxi", aboutTitle2: "I Zanzibar", aboutMission: "Eksepsjonelle reiseopplevelser.", aboutS1: "Flytransfer", aboutS2: "Utflukter", aboutS3: "Turpakker", aboutS4: "Safariutflukter", discoverMore: "OPPDAG MER", yearsLabel: "Års\nKvalitetsservice", zanzTours: "ZANZIBAR TURER", dailyAct: "Våre Aktiviteter", readMore: "LES MER", tanzSafari: "TANZANIA SAFARI", bestPkg: "Beste Pakker", forYou: "For Deg", viewPkg: "SE PAKKE", pkgIncludes: "Inkluderer: Inngangsbilletter, Guide, Transport", feature: "FUNKSJON", awesomeFeat: "Våre Funksjoner", privTransfer: "Privat Transfer", privTransferDesc: "Eksklusive private transferer.", welcomeServ: "Service", welcomeServDesc: "Varm gjestfrihet.", affordRate: "Priser", affordRateDesc: "Gjennomsiktige priser.", support247: "24/7 Støtte", support247Desc: "Døgnet rundt.", bookCta1: "Bestill Din Taxi Med Zanzione - Enkelt Og Rimelig", bookCtaDesc: "Sømløs taxibestilling.", bookAirport: "BESTILL TAXI", drivers: "SJÅFØRER", expertTeam: "Vårt Team", expertDriver: "Ekspert Sjåfør", faqLabel: "FAQ", faqTitle: "Generelle", faqHighlight: "Ofte Stilte", faqTitle2: "Spørsmål", faqDesc: "Velkommen!", faq1q: "Hvor Lang Tid?", faq1a: "Raskt og enkelt.", faq2q: "Bli Medlem?", faq2a: "Automatisk.", faq3q: "Betalingsmetoder?", faq3a: "Flere metoder.", faq4q: "Kansellere?", faq4a: "Via WhatsApp.", testimonials: "ATTESTER", clientSays: "Hva Kundene Sier", customer: "Kunde", discoverTitle: "OPPDAGE SKJØNNHETEN I", tanzania: "TANZANIA", unforgettable: "Uforglemmelig", discoverDesc: "Vi bryr oss om våre kunder." },
  sv: { welcome: "VÄLKOMMEN TILL ZANZIONE!", heroTitle1: "BOKA", heroHighlight: "ZANZIBAR TAXI", heroTitle2: "FÖR DIN RESA", heroDesc: "Pålitlig taxi överallt i Zanzibar.", selectLanguage: "Välj Språk", bookYourRide: "Boka Din Resa", pickupLocation: "Hämtning", pickupPlaceholder: "Skriv plats", dropoffLocation: "Avlämning", dropoffPlaceholder: "Skriv plats", passengers: "Passagerare", pickupDate: "Datum", pickupTime: "Tid", bookTaxi: "BOKA TAXI", aboutUs: "OM OSS", aboutTitle1: "Vi Erbjuder", aboutHighlight: "Flygplatstaxi", aboutTitle2: "I Zanzibar", aboutMission: "Exceptionella reseupplevelser.", aboutS1: "Flygplatstransfer", aboutS2: "Utflykter", aboutS3: "Turpaket", aboutS4: "Safariutflykter", discoverMore: "UPPTÄCK MER", yearsLabel: "Års\nKvalitetsservice", zanzTours: "ZANZIBAR TURER", dailyAct: "Våra Aktiviteter", readMore: "LÄS MER", tanzSafari: "TANZANIA SAFARI", bestPkg: "Bästa Paketen", forYou: "För Dig", viewPkg: "VISA PAKET", pkgIncludes: "Inkluderar: Inträde, Guide, Transport", feature: "FUNKTION", awesomeFeat: "Våra Funktioner", privTransfer: "Privat Transfer", privTransferDesc: "Exklusiva transferer.", welcomeServ: "Service", welcomeServDesc: "Varm gästfrihet.", affordRate: "Priser", affordRateDesc: "Transparenta priser.", support247: "24/7 Support", support247Desc: "Dygnet runt.", bookCta1: "Boka Din Taxi Med Zanzione - Enkelt Och Överkomligt", bookCtaDesc: "Sömlös taxibokning.", bookAirport: "BOKA TAXI", drivers: "CHAUFFÖRER", expertTeam: "Vårt Team", expertDriver: "Expert Chaufför", faqLabel: "FAQ", faqTitle: "Allmänna", faqHighlight: "Vanliga", faqTitle2: "Frågor", faqDesc: "Välkommen!", faq1q: "Hur Lång Tid?", faq1a: "Snabbt och enkelt.", faq2q: "Bli Medlem?", faq2a: "Automatiskt.", faq3q: "Betalningsmetoder?", faq3a: "Flera metoder.", faq4q: "Avboka?", faq4a: "Via WhatsApp.", testimonials: "OMDÖMEN", clientSays: "Vad Kunderna Säger", customer: "Kund", discoverTitle: "UPPTÄCK SKÖNHETEN I", tanzania: "TANZANIA", unforgettable: "Oförglömlig", discoverDesc: "Vi bryr oss om våra kunder." },
  de: { welcome: "WILLKOMMEN BEI ZANZIONE!", heroTitle1: "BUCHEN SIE", heroHighlight: "ZANZIBAR TAXI", heroTitle2: "FÜR IHRE FAHRT", heroDesc: "Zuverlässiges Taxi überall in Zanzibar.", selectLanguage: "Sprache Wählen", bookYourRide: "Fahrt Buchen", pickupLocation: "Abholort", pickupPlaceholder: "Ort eingeben", dropoffLocation: "Zielort", dropoffPlaceholder: "Ort eingeben", passengers: "Passagiere", pickupDate: "Datum", pickupTime: "Zeit", bookTaxi: "TAXI BUCHEN", aboutUs: "ÜBER UNS", aboutTitle1: "Wir Bieten", aboutHighlight: "Flughafentaxi", aboutTitle2: "In Zanzibar", aboutMission: "Außergewöhnliche Reiseerlebnisse.", aboutS1: "Flughafentransfers", aboutS2: "Ausflüge", aboutS3: "Tourpakete", aboutS4: "Safari-Touren", discoverMore: "MEHR ENTDECKEN", yearsLabel: "Jahre\nQualitätsservice", zanzTours: "ZANZIBAR TOUREN", dailyAct: "Unsere Aktivitäten", readMore: "MEHR LESEN", tanzSafari: "TANZANIA SAFARI", bestPkg: "Beste Pakete", forYou: "Für Sie", viewPkg: "PAKET ANSEHEN", pkgIncludes: "Enthält: Eintritt, Guide, Transport", feature: "FEATURE", awesomeFeat: "Unsere Features", privTransfer: "Privater Transfer", privTransferDesc: "Exklusive Transfers.", welcomeServ: "Willkommensservice", welcomeServDesc: "Warme Gastfreundschaft.", affordRate: "Erschwingliche Preise", affordRateDesc: "Transparente Preise.", support247: "24/7 Support", support247Desc: "Rund um die Uhr.", bookCta1: "Buchen Sie Ihr Taxi Mit Zanzione - Einfach Und Erschwinglich", bookCtaDesc: "Nahtlose Taxibuchung.", bookAirport: "FLUGHAFENTAXI BUCHEN", drivers: "FAHRER", expertTeam: "Unser Team", expertDriver: "Experte Fahrer", faqLabel: "FAQ", faqTitle: "Allgemeine", faqHighlight: "Häufig Gestellte", faqTitle2: "Fragen", faqDesc: "Willkommen!", faq1q: "Wie Lange Dauert Es?", faq1a: "Schnell und einfach.", faq2q: "Wie Werde Ich Mitglied?", faq2a: "Automatisch.", faq3q: "Zahlungsmethoden?", faq3a: "Mehrere Methoden.", faq4q: "Stornieren?", faq4a: "Per WhatsApp.", testimonials: "BEWERTUNGEN", clientSays: "Was Kunden Sagen", customer: "Kunde", discoverTitle: "ENTDECKEN SIE DIE SCHÖNHEIT VON", tanzania: "TANSANIA", unforgettable: "Unvergesslich", discoverDesc: "Wir kümmern uns aufrichtig um unsere Kunden." },
  it: { welcome: "BENVENUTI A ZANZIONE!", heroTitle1: "PRENOTA", heroHighlight: "TAXI ZANZIBAR", heroTitle2: "PER IL TUO VIAGGIO", heroDesc: "Taxi affidabile ovunque a Zanzibar.", selectLanguage: "Seleziona Lingua", bookYourRide: "Prenota", pickupLocation: "Ritiro", pickupPlaceholder: "Inserisci luogo", dropoffLocation: "Consegna", dropoffPlaceholder: "Inserisci luogo", passengers: "Passeggeri", pickupDate: "Data", pickupTime: "Ora", bookTaxi: "PRENOTA TAXI", aboutUs: "CHI SIAMO", aboutTitle1: "Offriamo", aboutHighlight: "Taxi Aeroportuale", aboutTitle2: "A Zanzibar", aboutMission: "Esperienze di viaggio eccezionali.", aboutS1: "Transfer Aeroportuali", aboutS2: "Escursioni", aboutS3: "Pacchetti Tour", aboutS4: "Tour Safari", discoverMore: "SCOPRI DI PIÙ", yearsLabel: "Anni di\nServizio", zanzTours: "TOUR ZANZIBAR", dailyAct: "Attività Quotidiane", readMore: "LEGGI DI PIÙ", tanzSafari: "SAFARI TANZANIA", bestPkg: "Migliori Pacchetti", forYou: "Per Te", viewPkg: "VEDI PACCHETTO", pkgIncludes: "Include: Ingresso, Guida, Trasporto", feature: "CARATTERISTICHE", awesomeFeat: "Le Nostre Caratteristiche", privTransfer: "Transfer Privato", privTransferDesc: "Trasferimenti esclusivi.", welcomeServ: "Servizio Accogliente", welcomeServDesc: "Calda ospitalità.", affordRate: "Tariffe Accessibili", affordRateDesc: "Prezzi trasparenti.", support247: "Supporto 24/7", support247Desc: "Assistenza 24 ore.", bookCta1: "Prenota il Taxi Con Zanzione - Semplice E Accessibile", bookCtaDesc: "Prenotazione senza problemi.", bookAirport: "PRENOTA TAXI", drivers: "AUTISTI", expertTeam: "Il Nostro Team", expertDriver: "Autista Esperto", faqLabel: "FAQ", faqTitle: "Domande", faqHighlight: "Frequenti", faqTitle2: "Generali", faqDesc: "Benvenuti!", faq1q: "Quanto Tempo?", faq1a: "Rapido e semplice.", faq2q: "Diventare Membro?", faq2a: "Automaticamente.", faq3q: "Pagamenti?", faq3a: "Diversi metodi.", faq4q: "Annullare?", faq4a: "Via WhatsApp.", testimonials: "TESTIMONIANZE", clientSays: "Cosa Dicono I Clienti", customer: "Cliente", discoverTitle: "SCOPRI LA BELLEZZA DELLA", tanzania: "TANZANIA", unforgettable: "Indimenticabile", discoverDesc: "Ci preoccupiamo dei nostri clienti." },
  es: { welcome: "¡BIENVENIDO A ZANZIONE!", heroTitle1: "RESERVA", heroHighlight: "TAXI ZANZIBAR", heroTitle2: "PARA TU VIAJE", heroDesc: "Taxi confiable en todo Zanzibar.", selectLanguage: "Seleccionar Idioma", bookYourRide: "Reserva Tu Viaje", pickupLocation: "Recogida", pickupPlaceholder: "Escriba lugar", dropoffLocation: "Destino", dropoffPlaceholder: "Escriba lugar", passengers: "Pasajeros", pickupDate: "Fecha", pickupTime: "Hora", bookTaxi: "RESERVAR TAXI", aboutUs: "SOBRE NOSOTROS", aboutTitle1: "Ofrecemos", aboutHighlight: "Taxi Aeroportuario", aboutTitle2: "En Zanzibar", aboutMission: "Experiencias de viaje excepcionales.", aboutS1: "Traslados al Aeropuerto", aboutS2: "Excursiones", aboutS3: "Paquetes de Tours", aboutS4: "Tours Safari", discoverMore: "DESCUBRIR MÁS", yearsLabel: "Años de\nServicio", zanzTours: "TOURS ZANZIBAR", dailyAct: "Actividades Diarias", readMore: "LEER MÁS", tanzSafari: "SAFARI TANZANIA", bestPkg: "Mejores Paquetes", forYou: "Para Ti", viewPkg: "VER PAQUETE", pkgIncludes: "Incluye: Entrada, Guía, Transporte", feature: "CARACTERÍSTICAS", awesomeFeat: "Nuestras Características", privTransfer: "Traslado Privado", privTransferDesc: "Traslados exclusivos.", welcomeServ: "Servicio Acogedor", welcomeServDesc: "Cálida hospitalidad.", affordRate: "Tarifas Accesibles", affordRateDesc: "Precios transparentes.", support247: "Soporte 24/7", support247Desc: "Asistencia 24 horas.", bookCta1: "Reserva Tu Taxi Con Zanzione - Simple Y Accesible", bookCtaDesc: "Reserva sin problemas.", bookAirport: "RESERVAR TAXI", drivers: "CONDUCTORES", expertTeam: "Nuestro Equipo", expertDriver: "Conductor Experto", faqLabel: "FAQ", faqTitle: "Preguntas", faqHighlight: "Frecuentes", faqTitle2: "Generales", faqDesc: "¡Bienvenido!", faq1q: "¿Cuánto Tarda?", faq1a: "Rápido y fácil.", faq2q: "¿Ser Miembro?", faq2a: "Automáticamente.", faq3q: "¿Pagos?", faq3a: "Varios métodos.", faq4q: "¿Cancelar?", faq4a: "Via WhatsApp.", testimonials: "TESTIMONIOS", clientSays: "Lo Que Dicen Los Clientes", customer: "Cliente", discoverTitle: "DESCUBRE LA BELLEZA DE", tanzania: "TANZANIA", unforgettable: "Inolvidable", discoverDesc: "Nos preocupamos por nuestros clientes." },
  fr: { welcome: "BIENVENUE CHEZ ZANZIONE !", heroTitle1: "RÉSERVEZ", heroHighlight: "TAXI ZANZIBAR", heroTitle2: "POUR VOTRE TRAJET", heroDesc: "Taxi fiable partout à Zanzibar.", selectLanguage: "Choisir la Langue", bookYourRide: "Réservez Votre Trajet", pickupLocation: "Prise en Charge", pickupPlaceholder: "Tapez le lieu", dropoffLocation: "Dépose", dropoffPlaceholder: "Tapez le lieu", passengers: "Passagers", pickupDate: "Date", pickupTime: "Heure", bookTaxi: "RÉSERVER TAXI", aboutUs: "À PROPOS", aboutTitle1: "Nous Offrons", aboutHighlight: "Taxi Aéroportuaire", aboutTitle2: "À Zanzibar", aboutMission: "Expériences de voyage exceptionnelles.", aboutS1: "Transferts Aéroportuaires", aboutS2: "Excursions", aboutS3: "Forfaits Tours", aboutS4: "Tours Safari", discoverMore: "EN DÉCOUVRIR PLUS", yearsLabel: "Années de\nService", zanzTours: "TOURS ZANZIBAR", dailyAct: "Nos Activités", readMore: "LIRE LA SUITE", tanzSafari: "SAFARI TANZANIE", bestPkg: "Meilleurs Forfaits", forYou: "Pour Vous", viewPkg: "VOIR FORFAIT", pkgIncludes: "Comprend: Entrée, Guide, Transport", feature: "CARACTÉRISTIQUES", awesomeFeat: "Nos Caractéristiques", privTransfer: "Transfert Privé", privTransferDesc: "Transferts exclusifs.", welcomeServ: "Service Accueillant", welcomeServDesc: "Chaleureuse hospitalité.", affordRate: "Tarifs Abordables", affordRateDesc: "Prix transparents.", support247: "Support 24/7", support247Desc: "Assistance 24h/24.", bookCta1: "Réservez Votre Taxi Avec Zanzione - Simple Et Abordable", bookCtaDesc: "Réservation sans tracas.", bookAirport: "RÉSERVER TAXI", drivers: "CHAUFFEURS", expertTeam: "Notre Équipe", expertDriver: "Chauffeur Expert", faqLabel: "FAQ", faqTitle: "Questions", faqHighlight: "Fréquemment", faqTitle2: "Posées", faqDesc: "Bienvenue !", faq1q: "Combien de Temps ?", faq1a: "Rapide et facile.", faq2q: "Devenir Membre ?", faq2a: "Automatiquement.", faq3q: "Paiements ?", faq3a: "Plusieurs méthodes.", faq4q: "Annuler ?", faq4a: "Via WhatsApp.", testimonials: "TÉMOIGNAGES", clientSays: "Ce Que Disent Nos Clients", customer: "Client", discoverTitle: "DÉCOUVREZ LA BEAUTÉ DE LA", tanzania: "TANZANIE", unforgettable: "Inoubliable", discoverDesc: "Nous nous soucions de nos clients." },
  ru: { welcome: "ДОБРО ПОЖАЛОВАТЬ В ЗАНЦИОНЕ!", heroTitle1: "ЗАБРОНИРУЙТЕ", heroHighlight: "ТАКСИ ЗАНЗИБАР", heroTitle2: "ДЛЯ ВАШЕЙ ПОЕЗДКИ", heroDesc: "Надёжное такси везде на Занзибаре.", selectLanguage: "Выберите Язык", bookYourRide: "Забронируйте Поездку", pickupLocation: "Место Посадки", pickupPlaceholder: "Введите место", dropoffLocation: "Место Высадки", dropoffPlaceholder: "Введите место", passengers: "Пассажиры", pickupDate: "Дата", pickupTime: "Время", bookTaxi: "ЗАБРОНИРОВАТЬ", aboutUs: "О НАС", aboutTitle1: "Мы Предоставляем", aboutHighlight: "Такси Аэропорт", aboutTitle2: "На Занзибаре", aboutMission: "Исключительные впечатления от путешествия.", aboutS1: "Трансферы", aboutS2: "Экскурсии", aboutS3: "Турпакеты", aboutS4: "Сафари", discoverMore: "УЗНАТЬ БОЛЬШЕ", yearsLabel: "Лет\nСервиса", zanzTours: "ТУРЫ ЗАНЗИБАР", dailyAct: "Наши Активности", readMore: "ЧИТАТЬ ДАЛЕЕ", tanzSafari: "САФАРИ ТАНЗАНИЯ", bestPkg: "Лучшие Пакеты", forYou: "Для Вас", viewPkg: "СМОТРЕТЬ ПАКЕТ", pkgIncludes: "Включает: Билеты, Гид, Транспорт", feature: "ОСОБЕННОСТИ", awesomeFeat: "Наши Особенности", privTransfer: "Частный Трансфер", privTransferDesc: "Эксклюзивные трансферы.", welcomeServ: "Гостеприимный Сервис", welcomeServDesc: "Тёплое гостеприимство.", affordRate: "Доступные Цены", affordRateDesc: "Прозрачные цены.", support247: "Поддержка 24/7", support247Desc: "Круглосуточная помощь.", bookCta1: "Забронируйте Такси С Zanzione - Просто И Доступно", bookCtaDesc: "Удобное бронирование.", bookAirport: "ЗАБРОНИРОВАТЬ ТАКСИ", drivers: "ВОДИТЕЛИ", expertTeam: "Наша Команда", expertDriver: "Эксперт Водитель", faqLabel: "FAQ", faqTitle: "Общие", faqHighlight: "Частые", faqTitle2: "Вопросы", faqDesc: "Добро пожаловать!", faq1q: "Сколько Времени?", faq1a: "Быстро и просто.", faq2q: "Стать Участником?", faq2a: "Автоматически.", faq3q: "Способы Оплаты?", faq3a: "Несколько методов.", faq4q: "Отменить?", faq4a: "Через WhatsApp.", testimonials: "ОТЗЫВЫ", clientSays: "Что Говорят Клиенты", customer: "Клиент", discoverTitle: "ОТКРОЙТЕ КРАСОТУ", tanzania: "ТАНЗАНИИ", unforgettable: "Незабываемо", discoverDesc: "Мы заботимся о наших клиентах." },
}

const langNames: Record<Lang, string> = { en: "English", ar: "Arabic", da: "Danish", no: "Norway", sv: "Swedish", de: "German", it: "Italian", es: "Spanish", fr: "French", ru: "Russian" }
const langFlags: Record<Lang, string> = { en: "🇬🇧", ar: "🇦🇱", da: "🇩🇰", no: "🇳🇴", sv: "🇸🇻", de: "🇩🇪", it: "🇮🇹", es: "🇪🇸", fr: "🇫🇷", ru: "🇷🇺" }

// ─── Location Data ───
const PLACES = ["Zanzibar International Airport (ZNZ)","Pongwe","Nungwi North Coast","Riu Jambo Nungwi","Riu Palace Nungwi","Makunduchi","Bwejuu","Zanzibar City","Paje","Uroa","Kilimani","Mangapwani","Kama","Michenzani","Forodhani","Shangani","Vuga","Mkunazini","Maisara","Darajani","Baghani","Kokoni","Kidichi Spice Farm","Ras Nungwi","Mnemba Island","Blue Safari Fumba","Fuoni","Fumba Town Bakhresa","Chukwani","Mazizini","Mlandege","Zanzibar Port","Mtoni","Maruhubi","Bububu","Matemwe","Pwani Mchangani","Kiwengwa","Kizimkazi","Jozani Forest","Fumba","Jambiani","Nungwi","Safari Blue Fumba","Michamvi","Kendwa","Malindi","Stone Town","Pongwe Beach Hotel","Flame Tree Cottages","Royal Zanzibar Beach Resort","MyBlue Hotel Zanzibar","DoubleTree Resort by Hilton Hotel Zanzibar Nungwi","Essque Zalu Zanzibar","The Z Hotel","Hideaway of Nungwi Resort & Spa Zanzibar","Gold Zanzibar Beach House & Spa","Amaan Bungalows Beach Resort","Sultan Sand Island Resort","Zanzibar White Sand Luxury Villas & Spa","Kisiwa On The Beach Zanzibar","Zanzibar Bahari Villas","Abuso Inn","Africa House Hotel","Al Johari Hotel","Alminar Hotel","Anex II Hotel","Asmin Palace Hotel","Beyt Al Salaam Hotel","Dhow Palace Hotel","Forodhani Park Hotel","Funguni Palace Hotel","Hiliki House Zanzibar","Maru Maru Hotel Stone Town","The Residence Zanzibar","Dongwe","Chwaka","Kigomane","Kigunda","Kigomani"]

// ─── Autocomplete Component ───
function LocationInput({ placeholder, value, onChange }: { placeholder: string; value: string; onChange: (v: string) => void }) {
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
      <input type="text" value={value} onChange={handleChange} onFocus={() => value.length > 0 && suggestions.length > 0 && setShow(true)} placeholder={placeholder}
        className="w-full h-[52px] pl-4 pr-10 border border-gray-200 rounded-[26px] text-sm text-gray-700 bg-white focus:outline-none focus:border-golden placeholder:text-gray-400" />
      <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
      {show && (
        <ul className="absolute z-50 w-full bg-white border border-gray-100 rounded-xl mt-1 max-h-44 overflow-y-auto shadow-xl">
          {suggestions.map((p, i) => (
            <li key={i} className="px-4 py-2.5 hover:bg-golden/5 cursor-pointer text-sm text-gray-700 flex items-center gap-2" onMouseDown={() => { onChange(p); setShow(false) }}>
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
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const t = useCallback((k: string) => translations[lang]?.[k] || translations.en[k] || k, [lang])
  useScrollAnimation()

  const handleBook = () => {
    const msg = `*New Taxi Booking*\n*From:* ${pickup}\n*To:* ${dropoff}\n*Passengers:* ${pax}\n*Date:* ${date}\n*Time:* ${time}`
    window.open(`https://wa.me/255710885320?text=${encodeURIComponent(msg)}`, "_blank")
  }

  const tours = [
    { name: "Safari Blue Day Trip", price: 55, img: "/images/tours/safari-blue-day.jpg", desc: "Sail on traditional dhows to pristine sandbanks and enjoy the ultimate marine adventure with snorkeling, swimming, and a seafood feast.", link: "/zanzibar" },
    { name: "Stone Town Tour", price: 30, img: "/images/tours/stone-town-tour.jpg", desc: "Explore the UNESCO World Heritage site with its narrow alleys, historic buildings, and vibrant markets. Discover the cultural heart of Zanzibar.", link: "/zanzibar" },
    { name: "Prison Island Boat Trip", price: 50, img: "/images/tours/prison-island.jpg", desc: "Visit the historic Changuu Island to learn about its fascinating past and meet the famous giant Aldabra tortoises, some over 100 years old.", link: "/zanzibar" },
    { name: "Nakupenda Island", price: 80, img: "/images/tours/nakupenda-sandbank.jpg", desc: "Escape to a pristine white sand paradise in the middle of the ocean. Perfect for relaxation, swimming, and enjoying fresh seafood.", link: "/zanzibar" },
    { name: "Spice Farm Tour", price: 10, img: "/images/tours/spice-tour.jpg", desc: "Discover why Zanzibar is called the 'Spice Island' with visits to working spice plantations where you'll see, smell, and taste exotic spices.", link: "/zanzibar" },
    { name: "Jozani Forest Tour", price: 25, img: "/images/tours/jozani-forest.jpg", desc: "Explore Zanzibar's indigenous forest and meet the rare Red Colobus monkeys found nowhere else on Earth. A nature lover's paradise.", link: "/zanzibar" },
    { name: "Salaam Cave", price: 35, img: "/images/tours/salaam-cave.jpg", desc: "Explore the mysterious underground caves of Zanzibar with stunning rock formations and crystal-clear natural pools hidden beneath the surface.", link: "/zanzibar" },
    { name: "Kizimkazi Dolphins", price: 40, img: "/images/tours/kizimkazi-dolphin.jpg", desc: "Swim with wild dolphins in their natural habitat at Kizimkazi. An unforgettable wildlife encounter in the warm waters of the Indian Ocean.", link: "/zanzibar" },
    { name: "Mtende Beach", price: 15, img: "/images/tours/mtende-beach.jpg", desc: "Relax on one of Zanzibar's most serene and untouched beaches. Enjoy crystal-clear waters, soft white sand, and breathtaking coastal views.", link: "/zanzibar" },
    { name: "Maalum Cave", price: 35, img: "/images/tours/maalum-cave.jpg", desc: "Discover the enchanting natural swimming pool hidden inside a limestone cave. A magical spot surrounded by lush tropical vegetation.", link: "/zanzibar" },
    { name: "The Rock Restaurant", price: 45, img: "/images/tours/the-rock-restaurant.jpg", desc: "Visit Zanzibar's iconic restaurant perched on a rock in the ocean. Enjoy fresh seafood and stunning panoramic views of the Indian Ocean.", link: "/zanzibar" },
    { name: "Mnemba Island Tour", price: 55, img: "/images/tours/mnemba-island.jpg", desc: "Discover pristine coral reefs and swim in crystal-clear waters around this protected marine sanctuary. Perfect for snorkeling enthusiasts.", link: "/zanzibar" },
    { name: "Sunset Dhow Cruise", price: 35, img: "/images/tours/sunset-dhow.jpg", desc: "Sail into the golden hour aboard a traditional dhow and watch the spectacular Zanzibar sunset paint the sky in brilliant colors.", link: "/zanzibar" },
  ]
  const safaris = [
    { name: "MIKUMI DAY TRIP SAFARI", dur: "1 Day", price: 430, img: "/images/packages/mikumi-safari.jpg", desc: "Full-day flying safari to Mikumi National Park. Experience incredible wildlife viewing including elephants, giraffes, lions, zebras." },
    { name: "SERENGETI 2 DAYS SAFARI", dur: "2 Days / 1 Night", price: 1676, img: "/images/packages/serengeti-safari.jpg", desc: "Experience the magic of Serengeti with a fly-in safari. Witness the Great Migration, spot the Big Five across endless plains." },
    { name: "SELOUS DAY TRIP SAFARI", dur: "1 Day", price: 450, img: "/images/safari/selous.jpg", desc: "Day trip to Selous Game Reserve (Nyerere National Park), Africa's largest reserve. Experience remarkable wildlife diversity." },
    { name: "3 DAYS SERENGETI SAFARI", dur: "3 Days / 2 Nights", price: 2048, img: "/images/safari/serengeti.jpg", desc: "Experience the magic of Serengeti National Park with multiple game drives across diverse ecosystems. Big Five viewing." },
    { name: "5 DAYS TANZANIA SAFARI", dur: "5 Days / 4 Nights", price: 1770, img: "/images/safari/tarangire.jpg", desc: "Discover vast elephant herds of Tarangire, diverse ecosystems of Lake Manyara, and breathtaking Ngorongoro Crater." },
    { name: "7 DAYS TANZANIA SAFARI", dur: "7 Days / 6 Nights", price: 2480, img: "/images/safari/ngorongoro.jpg", desc: "Thrilling safari through Africa's most renowned national parks. Serengeti, Tarangire, Lake Manyara, and Ngorongoro Crater." },
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
      <section className="relative" style={{ background: "#fef7eb" }}>
        {/* Orange decorative triangle top-left */}
        <div className="absolute top-0 left-0 w-0 h-0 hidden lg:block" style={{ borderTop: "80px solid #f7a10d", borderRight: "80px solid transparent" }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-20 sm:pb-28 lg:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left text */}
            <div className="order-2 lg:order-1">
              <p className="text-golden font-display font-semibold tracking-[0.3em] uppercase text-xs sm:text-sm mb-5">{t("welcome")}</p>
              <h1 className="font-display font-black text-[2.2rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[4.2rem] leading-[1.08] mb-6">
                {t("heroTitle1")}{" "}
                <span className="text-golden italic">{t("heroHighlight")}</span>{" "}
                {t("heroTitle2")}
              </h1>
              <p className="text-gray-500 text-[13.5px] sm:text-[15px] leading-[1.8] max-w-[540px] mb-8">{t("heroDesc")}</p>
              {/* Two CTA buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/about">
                  <button className="bg-golden hover:bg-golden/90 text-white font-black px-7 py-3.5 rounded-full flex items-center gap-2.5 text-sm tracking-wider transition-colors shadow-md">
                    {t("aboutMore")} <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <BookingModal tourName="Airport Taxi Booking" trigger={
                  <button className="bg-white hover:bg-gray-50 text-gray-800 font-black px-7 py-3.5 rounded-full flex items-center gap-2.5 text-sm tracking-wider transition-colors shadow-md border-2 border-gray-200">
                    {t("taxiBooking")} <ArrowRight className="w-4 h-4" />
                  </button>
                } />
              </div>
            </div>
            {/* Right car image with orange L-bracket frame */}
            <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[520px]">
                {/* Orange frame - top segment (horizontal line + top-right rounded corner + right line going down ~60%) */}
                <div className="absolute pointer-events-none z-20" style={{ top: "-12px", right: "-12px", width: "70%", height: "65%", borderTop: "3px solid #f7a10d", borderRight: "3px solid #f7a10d", borderTopRightRadius: "24px" }}></div>
                {/* Orange frame - bottom-right segment (right line + bottom-right rounded corner + short bottom line) */}
                <div className="absolute pointer-events-none z-20" style={{ bottom: "-12px", right: "-12px", width: "35%", height: "45%", borderBottom: "3px solid #f7a10d", borderRight: "3px solid #f7a10d", borderBottomRightRadius: "24px" }}></div>
                {/* Car image with rounded corners */}
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg bg-gray-900/5">
                  <Image src="/images/vehicles/alphard-white.png" alt="Zanzione Tours Vehicle" width={520} height={380} className="w-full h-auto object-contain" priority />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom orange curve decoration */}
        <div className="absolute bottom-0 right-0 w-[180px] sm:w-[280px] h-[50px] sm:h-[70px] bg-golden z-10" style={{ borderTopLeftRadius: "100%" }}></div>

        {/* White wave transition at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-[5]">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>

        {/* Language selector - pixel-perfect golden pill */}
        <div className="fixed right-4 sm:right-5 bottom-24 sm:bottom-28 z-[60]">
          <button onClick={() => setShowLang(!showLang)}
            className="bg-golden hover:bg-golden/90 text-white pl-3.5 pr-5 py-3 sm:py-3.5 rounded-xl shadow-lg flex items-center gap-2.5 text-sm sm:text-[15px] font-bold transition-all"
          >
            {/* Translate icon matching reference A文 style */}
            <span className="w-7 h-7 sm:w-8 sm:h-8 bg-white/25 rounded-md flex items-center justify-center text-[11px] sm:text-xs font-black leading-none">
              A<span className="text-[9px] sm:text-[10px]">文</span>
            </span>
            {t("selectLanguage")}
          </button>
          {showLang && (
            <div className="absolute right-0 bottom-full mb-2 bg-white rounded-xl shadow-2xl py-2 w-48 max-h-[400px] overflow-y-auto border border-gray-100">
              {(Object.keys(langNames) as Lang[]).map(c => (
                <button key={c} onClick={() => { setLang(c); setShowLang(false) }}
                  className={`w-full text-left px-4 py-2.5 hover:bg-golden/10 flex items-center gap-3 text-sm transition-colors ${lang === c ? "bg-golden/10 text-golden font-bold" : "text-gray-700"}`}>
                  <span className="text-base">{langFlags[c]}</span>{langNames[c]}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ═══════ BOOKING FORM ═══════ */}
      <section className="relative z-20 -mt-10 sm:-mt-14 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-[20px] shadow-2xl p-6 sm:p-8 lg:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-gray-900 mb-6 sm:mb-8">{t("bookYourRide")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mb-4">
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">{t("pickupLocation")}</label>
                <LocationInput placeholder={t("pickupPlaceholder")} value={pickup} onChange={setPickup} />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">{t("dropoffLocation")}</label>
                <LocationInput placeholder={t("dropoffPlaceholder")} value={dropoff} onChange={setDropoff} />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">{t("passengers")}</label>
                <div className="relative">
                  <input type="number" min="1" max="20" value={pax} onChange={e => setPax(e.target.value)}
                    className="w-full h-[52px] pl-4 pr-10 border border-gray-200 rounded-[26px] text-sm text-gray-700 bg-white focus:outline-none focus:border-golden" />
                  <Users className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 items-end">
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">{t("pickupDate")}</label>
                <div className="relative">
                  <input type="date" value={date} onChange={e => setDate(e.target.value)}
                    className="w-full h-[52px] pl-4 pr-10 border border-gray-200 rounded-[26px] text-sm text-gray-700 bg-white focus:outline-none focus:border-golden" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">{t("pickupTime")}</label>
                <div className="relative">
                  <input type="time" value={time} onChange={e => setTime(e.target.value)}
                    className="w-full h-[52px] pl-4 pr-10 border border-gray-200 rounded-[26px] text-sm text-gray-700 bg-white focus:outline-none focus:border-golden" />
                </div>
              </div>
              <button onClick={handleBook}
                className="h-[52px] bg-golden hover:bg-golden/90 text-white font-black rounded-[26px] flex items-center justify-center gap-2 text-sm tracking-wider transition-colors shadow-md">
                {t("bookTaxi")} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

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
                <Image src="/images/vehicles/alphard-gold.jpg" alt="Zanzione Tours" width={460} height={320} className="rounded-xl object-cover w-full max-w-[460px]" />
                {/* 10 Years badge */}
                <div className="absolute -left-4 sm:-left-6 top-1/3 bg-golden text-white rounded-full w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center shadow-xl border-4 border-white z-10">
                  <span className="text-2xl sm:text-3xl font-black leading-none">10</span>
                  <span className="text-[9px] sm:text-[10px] text-center leading-tight mt-0.5 font-semibold whitespace-pre-line">{t("yearsLabel")}</span>
                </div>
              </div>
            </div>

            {/* Right - text */}
            <div className="animate-on-scroll fade-right" data-delay="200">
              <p className="text-golden font-display font-bold tracking-[0.2em] uppercase text-xs mb-3">{t("aboutUs")}</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-gray-900 leading-tight mb-5">
                {t("aboutTitle1")}<br />
                <span className="text-golden italic">{t("aboutHighlight")}</span> {t("aboutTitle2")}
              </h2>
              <p className="text-gray-500 text-[13px] sm:text-sm leading-relaxed mb-5">{t("aboutMission")}</p>
              <ul className="space-y-3 mb-6">
                {[t("aboutS1"), t("aboutS2"), t("aboutS3"), t("aboutS4")].map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2.5 h-2.5 bg-golden rounded-full flex-shrink-0"></span>
                    <span className="text-gray-500 text-[13px] sm:text-sm leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <button className="bg-golden hover:bg-golden/90 text-white font-black px-6 py-3 rounded-lg flex items-center gap-2 text-sm tracking-wide transition-colors">
                  {t("discoverMore")} <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ ZANZIBAR DAILY ACTIVITIES ═══════ */}
      <section className="py-12 sm:py-20 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-on-scroll fade-up">
            <p className="text-golden font-display font-bold tracking-[0.2em] uppercase text-xs mb-2">{t("zanzTours")}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-gray-900">{t("dailyAct")}</h2>
            <div className="flex justify-center gap-1 mt-4">
              <div className="w-10 h-1.5 bg-blue-season rounded-full"></div>
              <div className="w-3 h-1.5 bg-golden rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {tours.map((tour, i) => (
              <div key={i} className="animate-on-scroll fade-up bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1" data-delay={((i % 3) * 100).toString()}>
                {/* Image container with price badge */}
                <div className="relative p-4 pb-0">
                  <div className="relative h-52 sm:h-56 rounded-xl overflow-hidden">
                    <Image src={tour.img} alt={tour.name} fill className="object-cover" sizes="(max-width:768px)100vw,(max-width:1024px)50vw,33vw" />
                  </div>
                  {/* Orange price circle - overlapping bottom-right of image */}
                  <div className="absolute bottom-0 right-6 translate-y-1/2 w-[60px] h-[60px] bg-golden rounded-full flex items-center justify-center text-white font-black text-base shadow-lg z-10 border-[3px] border-white">
                    ${tour.price}
                  </div>
                </div>
                {/* Content */}
                <div className="p-5 pt-6 sm:p-6 sm:pt-7">
                  <h3 className="text-lg font-display font-black text-gray-900 mb-2">{tour.name}</h3>
                  <p className="text-gray-400 text-[13px] leading-relaxed mb-5 line-clamp-3">{tour.desc}</p>
                  <Link href={tour.link}>
                    <button className="bg-golden hover:bg-golden/90 text-white font-bold px-6 py-2.5 rounded-full flex items-center gap-2 text-sm tracking-wide transition-colors">
                      {t("readMore")} <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TRANSFER SERVICES ═══════ */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-on-scroll fade-up">
            <p className="text-golden font-display font-bold tracking-[0.2em] uppercase text-xs mb-2">TRANSFER SERVICES</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-gray-900">
              Airport & Hotel <span className="text-golden italic">Transfers</span>
            </h2>
            <div className="flex justify-center gap-1 mt-4">
              <div className="w-10 h-1.5 bg-blue-season rounded-full"></div>
              <div className="w-3 h-1.5 bg-golden rounded-full"></div>
            </div>
            <p className="text-gray-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">Reliable, comfortable, and affordable transfers across Zanzibar Island with professional drivers and modern vehicles.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {highlightTransfers.map((route, i) => (
              <div key={i} className="animate-on-scroll fade-up group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1" data-delay={i * 100}>
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
                    <p className="text-2xl font-black text-golden">${route.price}</p>
                    <p className="text-gray-400 text-xs">per vehicle</p>
                  </div>
                  <BookingModal tourName={`Transfer: ${route.from} → ${route.to}`} trigger={
                    <button className="bg-golden hover:bg-golden/90 text-white font-bold px-5 py-2.5 rounded-full text-sm transition-colors">
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

      {/* ═══════ TANZANIA SAFARI PACKAGES ═══════ */}
      <section className="py-12 sm:py-20 relative bg-cover bg-center" style={{ backgroundImage: "url(/images/safari-sunset.jpg)" }}>
        <div className="absolute inset-0 bg-[#0a1628]/92"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-on-scroll fade-up">
            <p className="text-golden font-display font-bold tracking-[0.2em] uppercase text-xs mb-2">{t("tanzSafari")}</p>
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
                  <div className="text-center px-5">
                    <h3 className="font-display font-black text-gray-900 text-base sm:text-lg tracking-wide">{s.name}</h3>
                    <p className="text-golden font-semibold text-sm mt-1">{s.dur}</p>
                  </div>
                  {/* Golden price circle with dashed border - straddling white/dark sections */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
                    <div className="w-[72px] h-[72px] rounded-full border-[3px] border-dashed border-golden bg-golden flex items-center justify-center shadow-lg">
                      <span className="text-white font-black text-lg">${s.price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                {/* BOTTOM: Dark navy section */}
                <div className="bg-[#1a2332] relative pt-12 pb-5 px-5">
                  {/* Decorative swirl/wave SVG pattern */}
                  <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden opacity-10">
                    <svg viewBox="0 0 400 30" className="w-full h-full" preserveAspectRatio="none">
                      <path d="M0,15 Q50,0 100,15 Q150,30 200,15 Q250,0 300,15 Q350,30 400,15" fill="none" stroke="white" strokeWidth="1.5" />
                      <path d="M0,20 Q50,5 100,20 Q150,35 200,20 Q250,5 300,20 Q350,35 400,20" fill="none" stroke="white" strokeWidth="1" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed text-center mb-4">{t("pkgIncludes")}</p>
                  <Link href="/itineraries" className="block">
                    <button className="w-full bg-golden hover:bg-golden/90 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-sm tracking-wide transition-colors">
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
                <p className="text-gray-800 font-display font-black text-lg sm:text-xl mb-1">{t("discoverTitle")}</p>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-gray-900 tracking-tight mb-2">{t("tanzania")}</h2>
                <div className="bg-golden inline-block px-4 py-1 mb-4 max-w-fit">
                  <span className="text-white text-sm italic tracking-[0.15em]">{t("unforgettable")}</span>
                </div>
                <p className="text-gray-500 text-[13px] leading-relaxed max-w-md">{t("discoverDesc")}</p>
              </div>
            </div>
            {/* Vertical text */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block">
              <p className="text-gray-300 text-xs tracking-[0.3em] font-bold" style={{ writingMode: "vertical-rl" }}>WWW.ZANZIONETOURS.COM</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FEATURES ═══════ */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-on-scroll fade-up">
            <p className="text-golden font-display font-bold tracking-[0.2em] uppercase text-xs mb-2">{t("feature")}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-gray-900">{t("awesomeFeat")}</h2>
            <div className="flex justify-center gap-1 mt-4">
              <div className="w-10 h-1.5 bg-blue-season rounded-full"></div>
              <div className="w-3 h-1.5 bg-golden rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {[
              { icon: <Car className="w-10 h-10" />, title: t("privTransfer"), desc: t("privTransferDesc") },
              { icon: <Wifi className="w-10 h-10" />, title: t("welcomeServ"), desc: t("welcomeServDesc") },
              { icon: <DollarSign className="w-10 h-10" />, title: t("affordRate"), desc: t("affordRateDesc") },
              { icon: <Headphones className="w-10 h-10" />, title: t("support247"), desc: t("support247Desc") },
            ].map((f, i) => (
              <div key={i} className="animate-on-scroll fade-up bg-[#f5f5f5] rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-delay={(i * 100).toString()}>
                <div className="w-[80px] h-[80px] mx-auto mb-5 rounded-full border-2 border-gray-800 flex items-center justify-center bg-golden/10 text-gray-800">
                  {f.icon}
                </div>
                <h3 className="text-lg font-display font-black text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CHECKERED CTA ═══════ */}
      <section className="relative bg-[#2d3a4a] py-14 sm:py-20">
        {/* Checkered top border */}
        <div className="absolute top-0 left-0 right-0 h-5 overflow-hidden">
          <div className="w-full h-full" style={{ backgroundImage: "repeating-conic-gradient(#1a1a1a 0% 25%, transparent 0% 50%)", backgroundSize: "20px 20px" }}></div>
        </div>
        {/* Checkered bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-5 overflow-hidden">
          <div className="w-full h-full" style={{ backgroundImage: "repeating-conic-gradient(#1a1a1a 0% 25%, transparent 0% 50%)", backgroundSize: "20px 20px" }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white leading-tight mb-4">{t("bookCta1")}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{t("bookCtaDesc")}</p>
            </div>
            <div className="lg:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-5 lg:justify-end">
              <div className="flex items-center gap-3 border-l-2 border-gray-500 pl-4">
                <Headphones className="w-7 h-7 text-white" />
                <span className="text-white text-xl sm:text-2xl font-black">+255 710 885 320</span>
              </div>
              <BookingModal tourName="Airport Taxi Booking" trigger={
                <button className="border-2 border-white text-white font-bold px-5 py-3 rounded-full hover:bg-white hover:text-[#2d3a4a] transition-colors flex items-center gap-2 text-xs sm:text-sm tracking-wider whitespace-nowrap">
                  {t("bookAirport")} <ArrowRight className="w-4 h-4" />
                </button>
              } />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ DRIVERS ═══════ */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-on-scroll fade-up">
            <p className="text-golden font-display font-bold tracking-[0.2em] uppercase text-xs mb-2">{t("drivers")}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-gray-900">{t("expertTeam")}</h2>
            <div className="flex justify-center gap-1 mt-4">
              <div className="w-10 h-1.5 bg-blue-season rounded-full"></div>
              <div className="w-3 h-1.5 bg-golden rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {drivers.map((d, i) => (
              <div key={i} className="animate-on-scroll fade-up bg-white rounded-2xl shadow-md p-4 sm:p-5 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-delay={(i * 100).toString()}>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden border-[3px] border-golden/40 mb-4">
                  <Image src={d.img} alt={d.name} fill className="object-cover" sizes="(max-width:640px)50vw,25vw" />
                </div>
                <h3 className="font-display font-black text-gray-900 text-sm sm:text-base">{d.name}</h3>
                <p className="text-golden text-xs sm:text-sm mb-3">{t("expertDriver")}</p>
                <div className="flex justify-center gap-1.5 sm:gap-2">
                  {[Facebook, Twitter, Linkedin, Youtube].map((Icon, j) => (
                    <Link key={j} href="/">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-golden rounded-full flex items-center justify-center text-white hover:bg-golden/80 transition-colors">
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
      <section className="py-12 sm:py-20 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <p className="text-golden font-display font-bold tracking-[0.2em] uppercase text-xs mb-3 animate-on-scroll fade-left">{t("faqLabel")}</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-gray-900 leading-tight mb-5">
                {t("faqTitle")} <span className="text-golden">{t("faqHighlight")}</span><br />{t("faqTitle2")}
              </h2>
              <p className="text-gray-500 text-[13px] sm:text-sm leading-relaxed mb-6">{t("faqDesc")}</p>
              <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden">
                <Image src="/images/vehicles/alphard-black-2.jpg" alt="Taxi service" fill className="object-cover" sizes="(max-width:1024px)100vw,50vw" />
              </div>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 text-left hover:bg-gray-50/50 transition-colors">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-golden rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-sm">?</span>
                    </div>
                    <span className="font-display font-bold text-gray-900 text-sm sm:text-base flex-1">{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 ml-12 sm:ml-14">
                      <p className="text-gray-500 text-[13px] sm:text-sm leading-relaxed">{faq.a}</p>
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
            <p className="text-golden font-display font-bold tracking-[0.2em] uppercase text-xs mb-2">{t("testimonials")}</p>
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
                    <p className="font-display font-black text-gray-900 text-sm">{r.name}</p>
                    <p className="text-golden text-xs">{t("customer")}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-[8]">{r.text}</p>
                <div className="flex items-center gap-0.5">
                  {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-4 h-4 text-golden fill-golden" />)}
                  <span className="text-gray-400 text-xs ml-1.5">({r.rating})</span>
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
