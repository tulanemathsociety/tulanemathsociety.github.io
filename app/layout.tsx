import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const SITE_NAME = "Tulane Math Club";
const SITE_DESC =
  "Undergraduate math community at Tulane University for puzzles, Putnam prep, talks, resources, and social events.";

export const metadata: Metadata = {
  metadataBase: new URL("https://tulanemathsociety.github.io"),
  title: {
    default: SITE_NAME,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESC,
  keywords: [
    "Tulane",
    "Math Club",
    "Putnam",
    "mathematics",
    "undergraduate",
    "New Orleans",
    "competitions",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: "Tulane Math Club" }],
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESC,
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESC,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#255C4E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-tulane-charcoal antialiased">
        <Navbar />
        <main id="main" className="focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
