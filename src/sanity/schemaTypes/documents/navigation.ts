import { defineType, defineField } from "sanity";

// Singleton — header navigation labels. Hrefs, order, and item count are
// fixed in Navbar.tsx (route-driven); only the visible labels are editable
// here. Mirrors the Home Services `navigation` schema pattern.
export default defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({ name: "homeLabel", title: "1. Home", type: "string", initialValue: "HOME", validation: (r) => r.required() }),
    defineField({ name: "projectsLabel", title: "2. Projects", type: "string", initialValue: "PROJECTS", validation: (r) => r.required() }),
    defineField({ name: "aboutLabel", title: "3. About", type: "string", initialValue: "ABOUT US", validation: (r) => r.required() }),
    defineField({ name: "careersLabel", title: "4. Careers", type: "string", initialValue: "CAREERS", validation: (r) => r.required() }),
    defineField({ name: "contactLabel", title: "5. Contact", type: "string", initialValue: "CONTACT US", validation: (r) => r.required() }),
  ],
  preview: {
    prepare() {
      return { title: "Navigation", subtitle: "Header navigation labels" };
    },
  },
});
