import { defineType, defineField } from "sanity";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export default defineType({
  name: "client",
  title: "Client",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "icon", title: "Icon Letter", type: "string", description: "Single letter for avatar fallback" }),
    defineField({ name: "color", title: "Color", type: "string", description: 'Tailwind color name (e.g. "green", "purple")' }),
    defineField({ name: "type", title: "Industry Type", type: "string" }),
    defineField({ name: "logo", title: "Logo", type: "image", description: "Optional company logo" }),
    orderRankField({ type: "client" }),
  ],
  preview: {
    select: { title: "name", subtitle: "type" },
  },
});
