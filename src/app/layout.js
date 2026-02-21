import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* ---------------- Fonts ---------------- */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* ---------------- SEO Metadata ---------------- */
export const metadata = {
  metadataBase: new URL("https://www.thailaenterprises.com"), // change to your domain

  title: {
    default: "Haarsham Farms & Developers | Premium Real Estate & Farm Lands",
    template: "%s | Haarsham Farms & Developers",
  },

  description:
    "Haarsham Farms & Developers is a trusted real estate company offering premium residential layouts, gated communities, and farm land projects with modern infrastructure.",

  keywords: [
    "Haarsham Farms",
    "Real Estate Developers",
    "Farm Land Projects",
    "Gated Communities",
    "Residential Layouts",
    "Plots for Sale",
    "Land Developers India",
  ],

  authors: [{ name: "Haarsham Farms & Developers" }],
  creator: "Haarsham Farms & Developers",

  openGraph: {
    title: "Haarsham Farms & Developers | Premium Real Estate & Farm Lands",
    description:
      "Explore premium gated communities, residential plots, and farm land projects developed by Haarsham Farms & Developers.",
    url: "https://www.thailaenterprises.com",
    siteName: "Haarsham Farms & Developers",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Haarsham Farms & Developers",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Haarsham Farms & Developers",
    description:
      "Premium real estate & farm land developments with modern infrastructure.",
    images: ["/logo.png"],
  },

  icons: {
    icon: [
      { url: "/logo.png", sizes: "any" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/logo.png",
  },

  robots: {
    index: true,
    follow: true,
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

/* ---------------- Layout ---------------- */
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased text-slate-800 bg-slate-50 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}