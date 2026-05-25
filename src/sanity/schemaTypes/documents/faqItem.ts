import { defineType, defineField } from "sanity";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export default defineType({
  name: "faqItem",
  title: "FAQ",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    defineField({ name: "question", title: "Question", type: "string", validation: (r) => r.required() }),
    defineField({ name: "answer", title: "Answer", type: "text", rows: 4 }),
    defineField({
      name: "context",
      title: "Context",
      type: "string",
      options: { list: ["homepage", "contact", "both"] },
      description: "Where this FAQ appears",
      validation: (r) => r.required(),
    }),
    orderRankField({ type: "faqItem" }),
  ],
  preview: {
    select: { title: "question", subtitle: "context" },
  },
});
