import { defineType, defineField } from "sanity";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export default defineType({
  name: "howWeWorkStep",
  title: "How We Work Step",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    defineField({ name: "number", title: "Step Number", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({
      name: "iconKey",
      title: "Icon Key",
      type: "string",
      description: 'Maps to SVG icon in code (e.g. "discovery", "design", "development", "testing", "launch")',
    }),
    orderRankField({ type: "howWeWorkStep" }),
  ],
  preview: {
    select: { title: "title", subtitle: "number" },
  },
});
