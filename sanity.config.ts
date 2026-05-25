import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { schemaTypes } from "./src/sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const SINGLETONS = [
  "navigation",
  "heroSection",
  "servicesSection",
  "aboutPage",
  "careersPage",
  "contactPage",
  "footerConfig",
  "siteSettings",
] as const;

const SINGLETON_TITLES: Record<(typeof SINGLETONS)[number], string> = {
  navigation: "Navigation",
  heroSection: "Hero Section",
  servicesSection: "Services Section",
  aboutPage: "About Page",
  careersPage: "Careers Page",
  contactPage: "Contact Page",
  footerConfig: "Footer",
  siteSettings: "Site Settings",
};

// Types shown as drag-and-drop orderable lists (via @sanity/orderable-document-list).
const ORDERABLE = ["faqItem", "client", "testimonial", "office", "howWeWorkStep"] as const;

const ORDERABLE_TITLES: Record<(typeof ORDERABLE)[number], string> = {
  faqItem: "FAQs",
  client: "Clients",
  testimonial: "Testimonials",
  office: "Offices",
  howWeWorkStep: "How We Work Steps",
};

export default defineConfig({
  name: "eram-soft",
  title: "Eram Soft CMS",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title("Content")
          .items([
            ...SINGLETONS.map((type) =>
              S.listItem()
                .title(SINGLETON_TITLES[type])
                .id(type)
                .child(
                  S.document().schemaType(type).documentId(type)
                )
            ),
            S.divider(),
            ...ORDERABLE.map((type) =>
              orderableDocumentListDeskItem({
                type,
                title: ORDERABLE_TITLES[type],
                S,
                context,
              })
            ),
            S.divider(),
            ...S.documentTypeListItems().filter((item) => {
              const id = item.getId() ?? "";
              return (
                !SINGLETONS.includes(id as (typeof SINGLETONS)[number]) &&
                !ORDERABLE.includes(id as (typeof ORDERABLE)[number])
              );
            }),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    // Hide singletons from the global "new document" menu
    templates: (templates) =>
      templates.filter(
        (t) => !SINGLETONS.includes(t.schemaType as (typeof SINGLETONS)[number])
      ),
  },
  document: {
    // Disable Duplicate / Delete actions for singleton documents
    actions: (input, context) =>
      SINGLETONS.includes(context.schemaType as (typeof SINGLETONS)[number])
        ? input.filter(
            ({ action }) => action !== "duplicate" && action !== "delete"
          )
        : input,
  },
  basePath: "/studio",
});
