import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import WhatsAppFloat from "@/components/whatsapp-float"
import StructuredData from "@/components/structured-data"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
})

const SITE_URL = "https://www.zanzionetours.com"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#022f6a" },
    { media: "(prefers-color-scheme: dark)", color: "#071d35" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zanzione Tours & Safaris — Zanzibar Excursions, Tanzania Safaris & Airport Transfers",
    template: "%s | Zanzione Tours & Safaris",
  },
  description:
    "Zanzibar tour operator based in Shangani, Stone Town. Book island excursions, Tanzania safaris, Kilimanjaro climbs, airport transfers and taxi services with expert local guides.",
  applicationName: "Zanzione Tours & Safaris",
  keywords: [
    "Zanzibar tours",
    "Zanzibar excursions",
    "Zanzibar day trips",
    "Tanzania safari",
    "Serengeti safari from Zanzibar",
    "Kilimanjaro climbing",
    "Stone Town tour",
    "Safari Blue Zanzibar",
    "Nakupenda sandbank",
    "Prison Island tour",
    "spice farm tour",
    "Jozani forest",
    "Zanzibar airport transfer",
    "Zanzibar taxi",
    "Zanzibar tour operator",
    "Shangani Stone Town",
  ],
  authors: [{ name: "Zanzione Tours & Safaris", url: SITE_URL }],
  creator: "Zanzione Tours & Safaris",
  publisher: "Zanzione Tours & Travel LTD",
  category: "travel",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Zanzione Tours & Safaris",
    title: "Zanzione Tours & Safaris — Zanzibar Excursions, Tanzania Safaris & Transfers",
    description:
      "Island excursions, Tanzania safaris, Kilimanjaro climbs and airport transfers run by local guides in Stone Town, Zanzibar.",
    images: [
      {
        url: "/videos/hero-poster.jpg",
        width: 1600,
        height: 900,
        alt: "Aerial view of turquoise water and an overwater restaurant on the Zanzibar coast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zanzione Tours & Safaris — Zanzibar Excursions & Tanzania Safaris",
    description: "Book Zanzibar day tours, Tanzania safaris and airport transfers with expert local guides.",
    images: ["/videos/hero-poster.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <head>
        <StructuredData />
      </head>
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
}
