/**
 * Regenerates public/sitemap.xml by walking the App Router tree.
 *
 * Run with `pnpm sitemap` (or `node scripts/generate-sitemap.mjs`). Walking the
 * filesystem rather than hand-maintaining the list means a new page can never
 * be silently missing from the sitemap.
 */

import { readdirSync, statSync, writeFileSync } from "node:fs"
import { join, relative, sep } from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..")
const APP_DIR = join(ROOT, "app")
const SITE_URL = "https://www.zanzionetours.com"

/** Routes that exist but should never be indexed. */
const EXCLUDED = new Set(["/admin", "/admin-login"])

/** Priority + change frequency by route shape, most specific rule first. */
const RULES = [
  { test: (r) => r === "/", priority: "1.0", changefreq: "weekly" },
  { test: (r) => ["/zanzibar", "/safari", "/itineraries", "/transfers"].includes(r), priority: "0.9", changefreq: "weekly" },
  { test: (r) => ["/about", "/contact", "/services", "/kilimanjaro"].includes(r), priority: "0.8", changefreq: "monthly" },
  { test: (r) => r.startsWith("/zanzibar/"), priority: "0.8", changefreq: "monthly" },
  { test: (r) => r.startsWith("/itineraries/"), priority: "0.7", changefreq: "monthly" },
]

function collectRoutes(dir, base = "") {
  const routes = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (!statSync(full).isDirectory()) continue
    // Skip route groups, private folders and dynamic segments.
    if (entry.startsWith("_") || entry.startsWith("(") || entry.startsWith("[")) continue

    const route = `${base}/${entry}`
    if (readdirSync(full).includes("page.tsx")) routes.push(route)
    routes.push(...collectRoutes(full, route))
  }
  return routes
}

const hasRootPage = readdirSync(APP_DIR).includes("page.tsx")
const routes = [...(hasRootPage ? ["/"] : []), ...collectRoutes(APP_DIR)]
  .filter((r) => !EXCLUDED.has(r))
  .sort((a, b) => a.localeCompare(b))

const today = new Date().toISOString().slice(0, 10)

const urls = routes
  .map((route) => {
    const rule = RULES.find((r) => r.test(route)) ?? { priority: "0.6", changefreq: "monthly" }
    // trailingSlash: true in next.config.mjs — the canonical URL carries the slash.
    const loc = route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}/`
    return [
      "  <url>",
      `    <loc>${loc}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      `    <changefreq>${rule.changefreq}</changefreq>`,
      `    <priority>${rule.priority}</priority>`,
      "  </url>",
    ].join("\n")
  })
  .join("\n")

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

const outPath = join(ROOT, "public", "sitemap.xml")
writeFileSync(outPath, xml)
console.log(`Wrote ${routes.length} URLs to ${relative(ROOT, outPath).split(sep).join("/")}`)
