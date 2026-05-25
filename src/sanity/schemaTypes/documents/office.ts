import { defineType, defineField } from "sanity";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export default defineType({
  name: "office",
  title: "Office",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    defineField({ name: "city", title: "City", type: "string", validation: (r) => r.required() }),
    defineField({ name: "label", title: "Label", type: "string", description: 'e.g. "UAE — Head Office"' }),
    defineField({ name: "address", title: "Address", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "hours", title: "Hours", type: "string" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "mapLink", title: "Google Maps Link", type: "url" }),
    orderRankField({ type: "office" }),
  ],
  preview: {
    select: { title: "city", subtitle: "label", media: "image" },
  },
});
