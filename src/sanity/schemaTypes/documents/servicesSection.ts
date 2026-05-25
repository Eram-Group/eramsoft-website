import { defineType, defineField } from "sanity";

// Singleton — header copy for the "Our Services" section on the home page.
// The service cards themselves still come from the `service` catalog. Title
// and accent word are kept separate so the accent styling on "Services"
// survives. Mirrors the Home Services `servicesSection` schema pattern.
export default defineType({
  name: "servicesSection",
  title: "Services Section",
  type: "document",
  fields: [
    defineField({ name: "label", title: "Eyebrow Label", type: "string", initialValue: "What We Do", validation: (r) => r.required() }),
    defineField({ name: "title", title: "Title", type: "string", initialValue: "Our", validation: (r) => r.required() }),
    defineField({ name: "accentWord", title: "Accent Word", type: "string", initialValue: "Services", validation: (r) => r.required() }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2, initialValue: "End-to-end digital solutions crafted with precision, from concept to deployment and beyond." }),
  ],
  preview: {
    prepare() {
      return { title: "Services Section", subtitle: "Heading + subtitle for the services section" };
    },
  },
});
