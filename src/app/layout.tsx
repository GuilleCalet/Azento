import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/data/site";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://azento-home.example.com";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  keywords: siteContent.meta.keywords,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    siteName: "AZento Home",
    locale: "es_ES",
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${playfair.variable} bg-background text-foreground antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pt-24 md:pt-28">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
