import { groq } from "next-sanity";

// ── Services ──
export const servicesQuery = groq`
  *[_type == "service"] | order(orderRank asc) {
    number,
    title,
    description,
    tags,
    image,
    orderRank
  }
`;

// ── Projects ──
// Sort by priority bucket (Featured → High → Normal → Low), then newest first
// within each bucket. `_priorityOrder` is a projected numeric rank used only
// for ordering — clients never read it.
export const projectsListQuery = groq`
  *[_type == "project"] {
    title,
    "slug": slug.current,
    category,
    description,
    tech,
    image,
    year,
    tagline,
    platform,
    duration,
    teamSize,
    status,
    priority,
    "_priorityOrder": select(
      priority == "featured" => 0,
      priority == "high" => 1,
      priority == "normal" => 2,
      priority == "low" => 3,
      2
    )
  } | order(_priorityOrder asc, _createdAt desc)
`;

// ── Projects (lightweight — for MosaicCTA) ──
export const projectsMosaicQuery = groq`
  *[_type == "project"] {
    title,
    "slug": slug.current,
    image,
    "_priorityOrder": select(
      priority == "featured" => 0,
      priority == "high" => 1,
      priority == "normal" => 2,
      priority == "low" => 3,
      2
    )
  } | order(_priorityOrder asc, _createdAt desc)
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    category,
    description,
    tech,
    image,
    heroImage,
    year,
    tagline,
    platform,
    duration,
    teamSize,
    status,
    priority,
    websiteUrl,
    appStoreUrl,
    playStoreUrl,
    challenge,
    solution,
    client,
    features,
    gallery,
    galleryType,
    testimonial
  }
`;

// ── Clients ──
export const clientsQuery = groq`
  *[_type == "client"] | order(orderRank asc) {
    name,
    icon,
    color,
    type,
    logo,
    orderRank
  }
`;

// ── Testimonials ──
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(orderRank asc) {
    name,
    role,
    company,
    rating,
    comment,
    avatar,
    color,
    orderRank
  }
`;

// ── Offices ──
export const officesQuery = groq`
  *[_type == "office"] | order(orderRank asc) {
    city,
    label,
    address,
    phone,
    hours,
    image,
    mapLink,
    orderRank
  }
`;

// ── FAQs ──
export const faqsQuery = groq`
  *[_type == "faqItem" && (context == $context || context == "both")] | order(orderRank asc) {
    question,
    answer,
    context,
    orderRank
  }
`;

// ── How We Work Steps ──
export const howWeWorkStepsQuery = groq`
  *[_type == "howWeWorkStep"] | order(orderRank asc) {
    number,
    title,
    description,
    iconKey,
    orderRank
  }
`;

// ── Hero Section (singleton) ──
export const heroSectionQuery = groq`
  *[_type == "heroSection"][0] {
    rotatingWords,
    headingPrefix,
    headingSuffix,
    bodyText,
    ctaPrimaryText,
    ctaPrimaryLink,
    ctaSecondaryText,
    ctaSecondaryLink
  }
`;

// ── About Page (singleton) ──
export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    heroTagline,
    heroTitle,
    heroAccent,
    heroDescription,
    heroImage,
    stats,
    values,
    visionTitle,
    visionText,
    missionTitle,
    missionText,
    foundedYear,
    clientRetention,
    portfolioTag,
    portfolioTitle,
    portfolioAccent,
    portfolioDescription,
    portfolioButtonText,
    "portfolioFile": portfolioFile.asset->{ _ref, url }
  }
`;

// ── Careers Page (singleton) ──
export const careersPageQuery = groq`
  *[_type == "careersPage"][0] {
    perks,
    positions
  }
`;

// ── Contact Page (singleton) ──
export const contactPageQuery = groq`
  *[_type == "contactPage"][0] {
    heroTitle,
    heroAccent,
    heroSubtitle,
    serviceOptions
  }
`;

// ── Footer (singleton) ──
export const footerConfigQuery = groq`
  *[_type == "footerConfig"][0] {
    brandDescription,
    columns,
    copyrightText
  }
`;

// ── Legal Pages ──
export const legalPageQuery = groq`
  *[_type == "legalPage" && pageType == $pageType][0] {
    title,
    pageType,
    lastUpdated,
    subtitle,
    content
  }
`;

// ── Site Settings (singleton) ──
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    siteDescription,
    socialLinks,
    contactEmail,
    contactPhone
  }
`;
