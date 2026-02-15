import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

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

export const metadata = {
  title: "Harsham Residences | Premium Real Estate & Farm Lands",
  description: "Harsham Residences / Harsham Farms - Trusted real estate development company offering premium residential layouts and farm land projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased text-slate-800 bg-slate-50">
        {children}
      </body>
    </html>
  );
}
