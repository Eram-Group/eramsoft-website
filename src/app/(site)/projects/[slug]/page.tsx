import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/fetch";
import { projectBySlugQuery, projectsMosaicQuery } from "@/sanity/lib/queries";
import type { SanityProject, SanityProjectListItem } from "@/sanity/lib/types";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(
    groq`*[_type == "project"]{ "slug": slug.current }`
  );
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await sanityFetch<SanityProject | null>({
    query: projectBySlugQuery,
    params: { slug },
    tags: ["project"],
  });

  if (!project) return {};

  const ogSource = project.heroImage ?? project.image;
  const ogImage = ogSource
    ? urlFor(ogSource).width(1200).height(630).url()
    : undefined;

  return {
    title: project.title,
    description: project.tagline || project.description,
    alternates: {
      canonical: `https://www.eramsoft.com/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} — EramSoft`,
      description: project.tagline || project.description,
      url: `https://www.eramsoft.com/projects/${slug}`,
      siteName: "EramSoft",
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630, alt: project.title }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — EramSoft`,
      description: project.tagline || project.description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [project, allProjects] = await Promise.all([
    sanityFetch<SanityProject | null>({
      query: projectBySlugQuery,
      params: { slug },
      tags: ["project"],
    }),
    sanityFetch<SanityProjectListItem[]>({
      query: projectsMosaicQuery,
      tags: ["project"],
    }),
  ]);

  if (!project) notFound();

  return <ProjectDetailClient project={project} allProjects={allProjects} />;
}
