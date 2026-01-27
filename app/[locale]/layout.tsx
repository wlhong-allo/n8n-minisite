import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aitivate.com"),
  title: {
    default: "Aitivate - Agentic AI Solutions for Hong Kong Business",
    template: "%s | Aitivate",
  },
  description: "Automate your Hong Kong business workflows with AI-native precision. Aitivate delivers intelligent automation for finance, HR, and operations.",
  keywords: [
    "AI automation",
    "Hong Kong business",
    "workflow automation",
    "FPS QR code",
    "OCR document",
    "payroll automation",
    "MPF automation",
    "n8n",
    "business automation HK",
  ],
  authors: [{ name: "Aitivate" }],
  creator: "Aitivate",
  publisher: "Aitivate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_HK",
    alternateLocale: "zh_HK",
    url: "https://aitivate.com",
    siteName: "Aitivate",
    title: "Aitivate - Agentic AI Solutions for Hong Kong Business",
    description: "Automate your Hong Kong business workflows with AI-native precision.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aitivate - AI Automation for Hong Kong Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aitivate - Agentic AI Solutions for Hong Kong Business",
    description: "Automate your Hong Kong business workflows with AI-native precision.",
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
  alternates: {
    canonical: "https://aitivate.com",
    languages: {
      "en": "https://aitivate.com/en",
      "zh-HK": "https://aitivate.com/zh-HK",
    },
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {/* Hreflang tags for SEO */}
        <link rel="alternate" hrefLang="en" href="https://aitivate.com/en" />
        <link rel="alternate" hrefLang="zh-HK" href="https://aitivate.com/zh-HK" />
        <link rel="alternate" hrefLang="x-default" href="https://aitivate.com/en" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
