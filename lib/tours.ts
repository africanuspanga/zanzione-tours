/**
 * Single source of truth for the Zanzibar excursion catalogue.
 *
 * Feeds the tour cards, the navigation search index and the sitemap so the
 * three never drift apart. Prices are the published per-person rates from the
 * company price list; tours that are quoted case-by-case carry `price: null`
 * and render as "On Request" rather than showing an invented figure.
 */

export type Tour = {
  slug: string
  title: string
  /** Short label used on cards, where the full title would wrap badly. */
  cardTitle: string
  image: string
  location: string
  duration: string
  groupSize: string
  /** Per-person price in USD, or null when the tour is quoted on request. */
  price: number | null
  badge?: "Hot Sale!" | "Best Seller" | "New"
  description: string
  /** Bullet list shown under the card's "Experience" disclosure. */
  highlights: string[]
  /** Bullet list shown under the card's "Inclusion" disclosure. */
  inclusions: string[]
}

const STANDARD_INCLUSIONS = [
  "Professional English-speaking guide",
  "Hotel pick-up & drop-off",
  "Entrance fees & permits",
  "Bottled water",
]

export const zanzibarTours: Tour[] = [
  {
    slug: "SafariBlueTour",
    title: "Safari Blue Day Trip",
    cardTitle: "Safari Blue",
    image: "/images/tours/safari-blue-day.jpg",
    location: "Zanzibar",
    duration: "Full Day",
    groupSize: "4-20 people",
    price: 40,
    badge: "Hot Sale!",
    description:
      "Sail on traditional dhows to pristine sandbanks and enjoy the ultimate marine adventure with snorkeling, swimming, and a seafood feast.",
    highlights: [
      "Traditional dhow sailing",
      "Sandbank exploration",
      "Snorkeling adventures",
      "Fresh seafood feast",
      "Sunset sailing",
    ],
    inclusions: [...STANDARD_INCLUSIONS, "Seafood lunch & tropical fruit", "Snorkeling equipment"],
  },
  {
    slug: "StoneTownTour",
    title: "Stone Town Tour",
    cardTitle: "Stone Town",
    image: "/images/tours/stone-town-tour.jpg",
    location: "Zanzibar",
    duration: "Half Day",
    groupSize: "2-12 people",
    price: 25,
    badge: "Best Seller",
    description:
      "Explore the UNESCO World Heritage site with its narrow alleys, historic buildings, and vibrant markets. Discover the cultural heart of Zanzibar.",
    highlights: [
      "UNESCO World Heritage exploration",
      "Historic architecture",
      "Spice market visits",
      "Cultural storytelling",
      "Local artisan workshops",
    ],
    inclusions: [...STANDARD_INCLUSIONS, "House of Wonders & Old Fort visit", "Former Slave Market entry"],
  },
  {
    slug: "PrisonIslandTour",
    title: "Prison Island Boat Trip",
    cardTitle: "Prison Island",
    image: "/new-zanzi-tours-images/prison-island.jpeg",
    location: "Zanzibar",
    duration: "Half Day",
    groupSize: "2-15 people",
    price: 30,
    badge: "Hot Sale!",
    description:
      "Visit the historic Changuu Island to learn about its fascinating past and meet the famous giant Aldabra tortoises, some over 100 years old.",
    highlights: [
      "Giant tortoise encounters",
      "Historical prison ruins",
      "Peacock spotting",
      "Island beach time",
      "Cultural history lessons",
    ],
    inclusions: [...STANDARD_INCLUSIONS, "Return boat transfer", "Tortoise sanctuary entry"],
  },
  {
    slug: "NakupendaSandbankTour",
    title: "Nakupenda Sandbank Tour",
    cardTitle: "Nakupenda Sandbank",
    image: "/new-zanzi-tours-images/nakupenda-island.jpeg",
    location: "Zanzibar",
    duration: "Half Day",
    groupSize: "4-20 people",
    price: 49,
    badge: "Hot Sale!",
    description:
      "Escape to a pristine white sand paradise in the middle of the ocean. Perfect for relaxation, swimming, and enjoying fresh seafood.",
    highlights: [
      "Pristine white sandbank",
      "Crystal-clear waters",
      "Snorkeling opportunities",
      "Fresh seafood barbecue",
      "Tropical paradise experience",
    ],
    inclusions: [...STANDARD_INCLUSIONS, "Seafood barbecue lunch", "Marine park fees", "Snorkeling gear"],
  },
  {
    slug: "SpiceFarmTour",
    title: "Spice Farm Tour",
    cardTitle: "Spice Farm",
    image: "/new-zanzi-tours-images/spice-farm.jpeg",
    location: "Zanzibar",
    duration: "Half Day",
    groupSize: "2-15 people",
    price: 25,
    description:
      "Discover why Zanzibar is called the 'Spice Island' with visits to working spice plantations where you'll see, smell, and taste exotic spices.",
    highlights: [
      "Exotic spice tasting",
      "Plantation walks",
      "Traditional farming methods",
      "Spice cooking demonstrations",
      "Fresh tropical fruits",
    ],
    inclusions: [...STANDARD_INCLUSIONS, "Spice tasting session", "Seasonal tropical fruit platter"],
  },
  {
    slug: "JozaniForestTour",
    title: "Jozani Forest Tour",
    cardTitle: "Jozani Forest",
    image: "/images/tours/jozani-forest.jpg",
    location: "Zanzibar",
    duration: "Half Day",
    groupSize: "2-15 people",
    price: 25,
    description:
      "Explore Zanzibar's indigenous forest and meet the rare Red Colobus monkeys found nowhere else on Earth. A nature lover's paradise with guided forest walks.",
    highlights: [
      "Red Colobus monkey encounters",
      "Indigenous forest exploration",
      "Medicinal plant learning",
      "Bird watching",
      "Nature photography",
    ],
    inclusions: [...STANDARD_INCLUSIONS, "National park entry", "Mangrove boardwalk walk"],
  },
  {
    slug: "MnembaIslandTour",
    title: "Mnemba Island & Dolphin Tour",
    cardTitle: "Mnemba Island",
    image: "/new-zanzi-tours-images/mnemba-islandd.jpeg",
    location: "Zanzibar",
    duration: "Half Day",
    groupSize: "2-20 people",
    price: 35,
    badge: "Best Seller",
    description:
      "Discover pristine coral reefs and swim in crystal-clear waters around this protected marine sanctuary. Perfect for snorkeling enthusiasts.",
    highlights: [
      "Protected marine sanctuary",
      "Coral reef snorkeling",
      "Dolphin spotting",
      "Crystal-clear turquoise water",
      "White sand beach time",
    ],
    inclusions: [...STANDARD_INCLUSIONS, "Boat transfer & marine park fees", "Snorkeling equipment"],
  },
  {
    slug: "KizimkaziDolphinsTour",
    title: "Kizimkazi Dolphin Tour",
    cardTitle: "Kizimkazi Dolphins",
    image: "/new-zanzi-tours-images/kizimkazi-dolphins.jpeg",
    location: "Zanzibar",
    duration: "Half Day",
    groupSize: "2-15 people",
    price: 40,
    description:
      "Swim with wild dolphins in their natural habitat at Kizimkazi. An unforgettable wildlife encounter in the warm waters of the Indian Ocean.",
    highlights: [
      "Wild dolphin encounters",
      "Traditional boat excursion",
      "Snorkeling in open water",
      "Historic Kizimkazi mosque",
      "Southern coast scenery",
    ],
    inclusions: [...STANDARD_INCLUSIONS, "Boat excursion", "Snorkeling equipment"],
  },
  {
    slug: "SunsetDhowCruise",
    title: "Sunset Dhow Cruise",
    cardTitle: "Sunset Dhow Cruise",
    image: "/images/tours/sunset-dhow.jpg",
    location: "Stone Town",
    duration: "2-3 Hours",
    groupSize: "2-20 people",
    price: 45,
    description:
      "Sail into the golden hour aboard a traditional dhow and watch the spectacular Zanzibar sunset paint the sky in brilliant colors.",
    highlights: [
      "Traditional dhow sailing",
      "Golden-hour sunset views",
      "Stone Town skyline",
      "Onboard refreshments",
      "Romantic evening setting",
    ],
    inclusions: ["Hotel pick-up & drop-off", "Dhow cruise with crew", "Soft drinks & snacks onboard"],
  },
  {
    slug: "TheRockRestaurant",
    title: "The Rock Restaurant",
    cardTitle: "The Rock Restaurant",
    image: "/new-zanzi-tours-images/the-rock.jpeg",
    location: "Michamvi",
    duration: "Half Day",
    groupSize: "2-10 people",
    price: 35,
    description:
      "Visit Zanzibar's iconic restaurant perched on a rock in the ocean. Enjoy fresh seafood and stunning panoramic views of the Indian Ocean.",
    highlights: [
      "Iconic ocean-set restaurant",
      "Fresh seafood dining",
      "Panoramic Indian Ocean views",
      "Michamvi coastline",
      "Unmissable photo spot",
    ],
    inclusions: ["Hotel pick-up & drop-off", "Professional driver-guide", "Bottled water"],
  },
  {
    slug: "MaalumCave",
    title: "Maalum Cave Natural Pool",
    cardTitle: "Maalum Cave",
    image: "/new-zanzi-tours-images/maalum-cave.jpeg",
    location: "Paje",
    duration: "Half Day",
    groupSize: "2-15 people",
    price: null,
    description:
      "Discover the enchanting natural swimming pool hidden inside a limestone cave. A magical spot surrounded by lush tropical vegetation.",
    highlights: [
      "Natural limestone swimming pool",
      "Crystal-clear cave water",
      "Lush tropical setting",
      "Guided cave access",
      "Photography paradise",
    ],
    inclusions: STANDARD_INCLUSIONS,
  },
  {
    slug: "SalaamCave",
    title: "Salaam Cave",
    cardTitle: "Salaam Cave",
    image: "/new-zanzi-tours-images/salaam-cave.jpeg",
    location: "Zanzibar",
    duration: "Half Day",
    groupSize: "2-25 people",
    price: null,
    description:
      "Explore the mysterious underground caves of Zanzibar with stunning rock formations and crystal-clear natural pools hidden beneath the surface.",
    highlights: [
      "Underground cave exploration",
      "Dramatic rock formations",
      "Natural swimming pool",
      "Guided descent",
      "Cool escape from the sun",
    ],
    inclusions: STANDARD_INCLUSIONS,
  },
  {
    slug: "MtendeBeach",
    title: "Mtende Beach Escape",
    cardTitle: "Mtende Beach",
    image: "/new-zanzi-tours-images/mtende-beach.jpeg",
    location: "Mtende",
    duration: "Half Day",
    groupSize: "2-15 people",
    price: null,
    description:
      "Relax on one of Zanzibar's most serene and untouched beaches. Enjoy crystal-clear waters, soft white sand, and breathtaking coastal views.",
    highlights: [
      "Secluded untouched beach",
      "Dramatic cliff viewpoints",
      "Crystal-clear swimming",
      "Soft white sand",
      "Quiet, uncrowded setting",
    ],
    inclusions: ["Hotel pick-up & drop-off", "Professional driver-guide", "Bottled water"],
  },
  {
    slug: "KendwaSeawalk",
    title: "Kendwa Sea Walk",
    cardTitle: "Kendwa Sea Walk",
    image: "/kendwa-seawalk.jpeg",
    location: "Kendwa",
    duration: "2 Hours",
    groupSize: "1-10 people",
    price: null,
    badge: "New",
    description:
      "Walk along the ocean floor wearing a specialised helmet and come face to face with Zanzibar's reef life — no diving experience required.",
    highlights: [
      "Walk on the ocean floor",
      "No swimming skill required",
      "Close-up reef life",
      "Certified safety crew",
      "Underwater photos included",
    ],
    inclusions: ["Hotel pick-up & drop-off", "Sea walk equipment & briefing", "Certified instructor", "Underwater photos"],
  },
  {
    slug: "CookingClass",
    title: "Zanzibari Cooking Class",
    cardTitle: "Cooking Class",
    image: "/cooking-class-zanzibar.jpeg",
    location: "Stone Town",
    duration: "Half Day",
    groupSize: "2-10 people",
    price: null,
    description:
      "Cook alongside a local family and master the Swahili spice blends behind Zanzibar's best-loved dishes, then share the meal you have made.",
    highlights: [
      "Hands-on Swahili cooking",
      "Local market spice shopping",
      "Traditional family kitchen",
      "Share the meal you cook",
      "Take-home recipe cards",
    ],
    inclusions: ["Hotel pick-up & drop-off", "All ingredients & market visit", "Full meal", "Recipe cards"],
  },
  {
    slug: "VillageTour",
    title: "Local Village Tour",
    cardTitle: "Village Tour",
    image: "/village-tour-zanzibar.jpeg",
    location: "Zanzibar",
    duration: "Half Day",
    groupSize: "2-15 people",
    price: null,
    description:
      "Meet the people behind the island. Walk through a working Zanzibari village, visit a local school and see daily island life up close.",
    highlights: [
      "Authentic village life",
      "Local school visit",
      "Traditional crafts & trades",
      "Community-supported tourism",
      "Warm local hospitality",
    ],
    inclusions: ["Hotel pick-up & drop-off", "Local guide", "Community contribution", "Bottled water"],
  },
]

export function formatPrice(price: number | null): string {
  return price === null ? "On Request" : `$${price.toFixed(2)}`
}

export function getTour(slug: string): Tour | undefined {
  return zanzibarTours.find((t) => t.slug === slug)
}
