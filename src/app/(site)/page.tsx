import type { Metadata } from "next";
import Hero2 from "@/components/sections/Hero2";

export const metadata: Metadata = {
  title: "EramSoft — Software Development & Digital Solutions",
  description:
    "EramSoft delivers end-to-end software development, mobile apps, web platforms, and digital transformation solutions. Based in the UAE with global reach.",
  alternates: { canonical: "https://www.eramsoft.com" },
  openGraph: {
    title: "EramSoft — Software Development & Digital Solutions",
    description:
      "End-to-end software development, mobile apps, web platforms, and digital transformation solutions. Based in the UAE.",
    url: "https://www.eramsoft.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "EramSoft — Software Development & Digital Solutions",
    description:
      "End-to-end software development, mobile apps, and digital transformation solutions.",
  },
};
import ServicesOrbital from "@/components/sections/ServicesOrbital";
import Clients from "@/components/sections/Clients";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import HowWeWork from "@/components/sections/HowWeWork";
import Testimonials2 from "@/components/sections/Testimonials2";
import Offices from "@/components/sections/Offices";
import Faqs from "@/components/sections/Faqs";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
  servicesQuery,
  servicesSectionQuery,
  projectsListQuery,
  clientsQuery,
  testimonialsQuery,
  officesQuery,
  faqsQuery,
  heroSectionQuery,
  howWeWorkStepsQuery,
} from "@/sanity/lib/queries";
import type {
  SanityService,
  SanityServicesSection,
  SanityProjectListItem,
  SanityClient as SanityClientType,
  SanityTestimonial,
  SanityOffice,
  SanityFaqItem,
  SanityHeroSection,
  SanityHowWeWorkStep,
} from "@/sanity/lib/types";

export default async function Home() {
  const [services, servicesSection, projects, clients, testimonials, offices, faqs, hero, steps] =
    await Promise.all([
      sanityFetch<SanityService[]>({ query: servicesQuery, tags: ["service"] }),
      sanityFetch<SanityServicesSection | null>({ query: servicesSectionQuery, tags: ["servicesSection"] }),
      sanityFetch<SanityProjectListItem[]>({ query: projectsListQuery, tags: ["project"] }),
      sanityFetch<SanityClientType[]>({ query: clientsQuery, tags: ["client"] }),
      sanityFetch<SanityTestimonial[]>({ query: testimonialsQuery, tags: ["testimonial"] }),
      sanityFetch<SanityOffice[]>({ query: officesQuery, tags: ["office"] }),
      sanityFetch<SanityFaqItem[]>({ query: faqsQuery, params: { context: "homepage" }, tags: ["faqItem"] }),
      sanityFetch<SanityHeroSection>({ query: heroSectionQuery, tags: ["heroSection"] }),
      sanityFetch<SanityHowWeWorkStep[]>({ query: howWeWorkStepsQuery, tags: ["howWeWorkStep"] }),
    ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "EramSoft",
        url: "https://www.eramsoft.com",
        logo: "https://www.eramsoft.com/logo.svg",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+971548882484",
          email: "info@eramsoft.com",
          contactType: "customer service",
        },
        sameAs: [],
      },
      ...(faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <main className="page-canvas">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero2 data={hero} />
      <ProjectsGallery projects={projects} />
      <div className="section-divider" aria-hidden="true" />
      <ServicesOrbital services={services} header={servicesSection} />
      <div className="section-divider" aria-hidden="true" />
      <HowWeWork steps={steps} />
      <div className="section-divider" aria-hidden="true" />
      <Clients clients={clients} />
      <div className="section-divider" aria-hidden="true" />
      <Testimonials2 testimonials={testimonials} />
      <div className="section-divider" aria-hidden="true" />
      <Offices offices={offices} />
      <div className="section-divider" aria-hidden="true" />
      <Faqs faqs={faqs} />
    </main>
  );
}
