import type { Metadata } from "next"
import ContactClientPage from "./ContactClientPage"

export const metadata: Metadata = {
  title: "Contact Us - Book Your Zanzibar Tour or Tanzania Safari",
  description:
    "Contact ZANZIONE TOURS & TRAVELS in Shangani, Stone Town, Zanzibar. WhatsApp: +255 710 885 320, Call: +255 773 929 583, Email: info@zanzionetours.com. Available 24/7 for tour bookings and travel planning.",
  keywords:
    "contact Zanzibar tours, book Tanzania safari, Shangani Stone Town, Zanzibar travel agency, tour booking, safari inquiry",
  openGraph: {
    title: "Contact ZANZIONE TOURS & TRAVELS",
    description: "Get in touch to plan your perfect East African adventure. Based in Shangani, Stone Town, Zanzibar.",
    url: "https://www.zanzionetours.com/contact",
  },
  alternates: {
    canonical: "https://www.zanzionetours.com/contact",
  },
}

export default function ContactPage() {
  return <ContactClientPage />
}
