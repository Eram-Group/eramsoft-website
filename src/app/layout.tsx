import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { sanityFetch } from "@/sanity/lib/fetch";
import { siteSettingsQuery } from "@/sanity/lib/queries";
import type { SanitySiteSettings } from "@/sanity/lib/types";
import "./globals.css";

const FALLBACK_SITE_NAME = "EramSoft — Software Development & Digital Solutions";
const FALLBACK_SITE_DESCRIPTION =
  "EramSoft delivers end-to-end software development, mobile apps, web platforms, and digital transformation solutions. Based in the UAE with global reach.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch<SanitySiteSettings | null>({
    query: siteSettingsQuery,
    tags: ["siteSettings"],
  });
  const siteName = settings?.siteName || FALLBACK_SITE_NAME;
  const siteDescription = settings?.siteDescription || FALLBACK_SITE_DESCRIPTION;

  return {
  metadataBase: new URL("https://www.eramsoft.com"),
  title: {
    default: siteName,
    template: "%s | EramSoft",
  },
  description: siteDescription,
  keywords: [
    "software development",
    "mobile app development",
    "web development",
    "digital solutions",
    "UAE software company",
    "EramSoft",
    "custom software",
    "IT consulting",
  ],
  authors: [{ name: "EramSoft", url: "https://www.eramsoft.com" }],
  creator: "EramSoft",
  publisher: "EramSoft",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.eramsoft.com",
    siteName: "EramSoft",
    title: siteName,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.eramsoft.com",
  },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
