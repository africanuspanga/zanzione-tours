import type { Metadata } from "next"

// Client component pages cannot export metadata, so the noindex directive
// lives here. robots.txt disallows these paths too.
export const metadata: Metadata = {
  title: "Admin Login",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
}

export default function AdminLoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
