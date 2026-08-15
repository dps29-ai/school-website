import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Dashboard } from "@/components/Dashboard";
import { school } from "@/data/school";

export const metadata: Metadata = {
  metadataBase: new URL("https://doonpresidencyschool.edu.in"),
  title: {
    default: `${school.name} — ${school.sloganTranslation}`,
    template: `%s — ${school.name}`,
  },
  description: `${school.name} (${school.shortName}), Premnagar, Dehradun — a co-educational English-medium day school affiliated to ICSE/ISC, offering classes from Play Group to Class XII. ${school.slogan} — ${school.sloganTranslation}.`,
  keywords: [
    "Doon Presidency School",
    "DPS Dehradun",
    "ICSE school Dehradun",
    "ISC school Premnagar",
    "best school in Dehradun",
    "English medium school Dehradun",
    "co-ed school Uttarakhand",
    "ज्ञानेन मुक्तिः",
  ],
  authors: [{ name: school.name }],
  creator: school.name,
  publisher: school.name,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://doonpresidencyschool.edu.in",
    title: `${school.name} — ${school.sloganTranslation}`,
    description: `ICSE/ISC co-educational day school in Premnagar, Dehradun. ${school.slogan} — ${school.sloganTranslation}.`,
    siteName: school.name,
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: school.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: school.name,
    description: school.sloganTranslation,
    images: ["/images/logo.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/images/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Tiro+Devanagari+Hindi&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Dashboard />
      </body>
    </html>
  );
}
