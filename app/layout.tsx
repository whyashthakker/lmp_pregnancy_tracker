import type { Metadata } from "next";
import "./globals.css";
import { PostHogProvider } from "../components/PostHogProvider";
import { Navigation } from "../components/ui/navigation";
import { Footer } from "../components/ui/footer";

export const metadata: Metadata = {
  title: {
    default: "Pregnancy Tracker - Track Your Journey Week by Week",
    template: "%s | Pregnancy Tracker",
  },
  description: "Simple and intuitive pregnancy tracking app. Monitor your baby's growth, track symptoms, and stay informed about your pregnancy journey week by week.",
  keywords: [
    "pregnancy tracker",
    "pregnancy app",
    "baby tracker",
    "pregnancy calendar",
    "prenatal tracker",
    "pregnancy journal",
    "baby development",
    "pregnancy symptoms",
    "pregnancy week by week",
    "expecting mother",
    "maternity app"
  ],
  authors: [{ name: "Pregnancy Tracker" }],
  creator: "Pregnancy Tracker",
  publisher: "Pregnancy Tracker",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.egspect.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.egspect.com",
    title: "Pregnancy Tracker - Track Your Journey Week by Week",
    description: "Simple and intuitive pregnancy tracking app. Monitor your baby's growth, track symptoms, and stay informed about your pregnancy journey.",
    siteName: "Pregnancy Tracker",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pregnancy Tracker App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pregnancy Tracker - Track Your Journey Week by Week",
    description: "Simple and intuitive pregnancy tracking app. Monitor your baby's growth, track symptoms, and stay informed about your pregnancy journey.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pregnancy Tracker",
    description: "Simple and intuitive pregnancy tracking app. Monitor your baby's growth, track symptoms, and stay informed about your pregnancy journey week by week.",
    url: "https://www.egspect.com",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Pregnancy timeline tracking",
      "Baby development milestones",
      "Symptom tracking",
      "Weekly pregnancy insights",
      "Partner tips",
      "Medical records",
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Pregnancy Tracker" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="antialiased">
        <PostHogProvider>
          <Navigation />
          {children}
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}