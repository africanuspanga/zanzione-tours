import { zanzibarTours, formatPrice } from "@/lib/tours"

const SITE_URL = "https://www.zanzionetours.com"

/**
 * Organisation, website and catalogue schema for the site root.
 *
 * Emitted once from the root layout so every page inherits the business
 * identity; individual pages add their own Product/TouristTrip nodes.
 */
export default function StructuredData() {
  const organization = {
    "@type": "TravelAgency",
    "@id": `${SITE_URL}/#organization`,
    name: "ZANZIONE TOURS & SAFARIS",
    alternateName: ["Zanzione Tours & Travel LTD", "Zanzione Tours"],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/brand/zanzione-logo.png`,
      width: 640,
      height: 536,
    },
    image: `${SITE_URL}/videos/hero-poster.jpg`,
    description:
      "Zanzibar-based tour operator offering island excursions, Tanzania safaris, Kilimanjaro climbing expeditions, airport transfers and taxi services.",
    telephone: "+255773929583",
    email: "info@zanzionetours.com",
    priceRange: "$$",
    currenciesAccepted: "USD, TZS",
    paymentAccepted: "Visa, Mastercard, Discover, M-Pesa, Airtel Money, Mixx by Yas, PesaPal, Cash",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shangani, Stone Town",
      addressLocality: "Zanzibar City",
      addressRegion: "Zanzibar Urban/West",
      addressCountry: "TZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.1622,
      longitude: 39.1875,
    },
    areaServed: [
      { "@type": "Place", name: "Zanzibar" },
      { "@type": "Country", name: "Tanzania" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "22:00",
    },
    sameAs: [
      "https://www.facebook.com/share/17Wn8GXrd8/",
      "https://www.instagram.com/zanzione_tours",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+255710885320",
        contactType: "reservations",
        availableLanguage: ["English", "Swahili", "German", "French", "Italian", "Spanish", "Russian"],
        areaServed: "TZ",
      },
    ],
  }

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "ZANZIONE TOURS & SAFARIS",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  }

  const tourCatalogue = {
    "@type": "ItemList",
    "@id": `${SITE_URL}/zanzibar#catalogue`,
    name: "Zanzibar Day Tours & Excursions",
    numberOfItems: zanzibarTours.length,
    itemListElement: zanzibarTours.map((tour, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristTrip",
        name: tour.title,
        url: `${SITE_URL}/zanzibar/${tour.slug}/`,
        image: `${SITE_URL}${tour.image}`,
        description: tour.description,
        touristType: "Leisure travellers",
        provider: { "@id": `${SITE_URL}/#organization` },
        ...(tour.price !== null && {
          offers: {
            "@type": "Offer",
            price: tour.price,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/zanzibar/${tour.slug}/`,
          },
        }),
      },
    })),
  }

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, website, tourCatalogue],
  }

  return (
    <script
      type="application/ld+json"
      // Static, author-controlled JSON — no user input reaches this string.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}

/** Per-page breadcrumb trail. Pass the trail without the "Home" root. */
export function Breadcrumbs({ trail }: { trail: { name: string; href: string }[] }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      ...trail.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: crumb.name,
        item: `${SITE_URL}${crumb.href}`,
      })),
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
}

export { formatPrice }
