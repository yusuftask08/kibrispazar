import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KıbrısPazar – KKTC’nin İlan ve Alım-Satım Platformu",
  description:
    "KıbrısPazar, Kuzey Kıbrıs’ta satılık ev, kiralık daire, ikinci el araba, telefon, beyaz eşya ve iş ilanlarını bir araya getiren modern bir ilan platformudur.",
  keywords: [
    "Kıbrıs ikinci el",
    "KKTC ilan",
    "kktc arabam",
    "kktc sahibinden",
    "kıbrıs araba ilanları",
    "girne satılık ev",
    "gazimağusa kiralık",
    "lefkosa iş ilanı",
    "kıbrıspazar",
  ],
  metadataBase: new URL("https://kibrispazar.com"),
  openGraph: {
    title: "KıbrısPazar – KKTC İlan Platformu",
    description:
      "KKTC genelinde ilan vermenin en kolay yolu. Satılık evler, arabalar, telefonlar, ikinci el ürünler – hepsi burada!",
    url: "https://kibrispazar.com",
    siteName: "KıbrısPazar",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "KıbrısPazar Logo",
      },
    ],
    locale: "tr_CY",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "KıbrısPazar",
    description:
      "Kıbrıs’ın ilan ve ikinci el platformu – Satılık ev, araba, iş, telefon, her şey burada.",
    images: ["/favicon.png"],
    creator: "@kibrispazar",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <meta name="google-site-verification" content="FANpaIpB7lvxiwuPTMMORSaMoDdP5cXrfD8bTyr1z54" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
