import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import { sanityFetch } from "@/sanity/lib/fetch";
import { footerConfigQuery, siteSettingsQuery, navigationQuery } from "@/sanity/lib/queries";
import type { SanityFooterConfig, SanitySiteSettings, SanityNavigation } from "@/sanity/lib/types";

async function SiteNavbar() {
  const navigation = await sanityFetch<SanityNavigation | null>({
    query: navigationQuery,
    tags: ["navigation"],
  });
  return <Navbar navigation={navigation} />;
}

async function SiteFooter() {
  const [footerData, siteSettings] = await Promise.all([
    sanityFetch<SanityFooterConfig>({ query: footerConfigQuery, tags: ["footerConfig"] }),
    sanityFetch<SanitySiteSettings>({ query: siteSettingsQuery, tags: ["siteSettings"] }),
  ]);
  return <Footer data={footerData} socialLinks={siteSettings?.socialLinks} />;
}

async function SiteFloatingContact() {
  const siteSettings = await sanityFetch<SanitySiteSettings>({
    query: siteSettingsQuery,
    tags: ["siteSettings"],
  });
  return <FloatingContact contactEmail={siteSettings?.contactEmail} />;
}

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Suspense fallback={<Navbar />}>
        <SiteNavbar />
      </Suspense>
      {children}
      <Suspense fallback={null}>
        <SiteFooter />
      </Suspense>
      <Suspense fallback={null}>
        <SiteFloatingContact />
      </Suspense>
    </>
  );
}
