import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"

export const metadata: Metadata = {
  title: "Home - Premium Zanzibar Taxi, Tours, Tanzania Safari & Kilimanjaro Climbing",
  description:
    "Book Zanzibar taxi for your ride. Reliable, flawless, timely, convenient, and friendly airport taxis. ZANZIONE TOURS & TRAVELS - your trusted partner for seamless travel experiences in Zanzibar and Tanzania.",
  openGraph: {
    title: "ZANZIONE TOURS & TRAVELS - Your Gateway to East African Adventures",
    description:
      "Book Zanzibar taxi, premium tours, authentic experiences, and unforgettable adventures in Zanzibar, Tanzania, and Mount Kilimanjaro.",
    url: "https://www.zanzionetours.com",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Zanzibar Beach Paradise",
      },
    ],
  },
  alternates: {
    canonical: "https://www.zanzionetours.com",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
