import { defineType, defineField } from "sanity";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "company", title: "Company", type: "string" }),
    defineField({ name: "rating", title: "Rating", type: "number", validation: (r) => r.min(1).max(5) }),
    defineField({ name: "comment", title: "Comment", type: "text", rows: 4 }),
    defineField({ name: "avatar", title: "Avatar Initials", type: "string", description: 'e.g. "SM"' }),
    defineField({ name: "color", title: "Color", type: "string" }),
    orderRankField({ type: "testimonial" }),
  ],
  preview: {
    select: { title: "name", subtitle: "company" },
  },
});
