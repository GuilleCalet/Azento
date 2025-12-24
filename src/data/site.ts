import siteJson from "../../content/site.json";

export type SiteContent = typeof siteJson;
export type Service = SiteContent["services"][number];
export type Project = SiteContent["projects"][number];
export type Testimonial = SiteContent["testimonials"][number];

export const siteContent: SiteContent = siteJson;

export const getProjectBySlug = (slug: string): Project | undefined =>
  siteContent.projects.find((project) => project.slug === slug);

export const getServiceBySlug = (slug: string): Service | undefined =>
  siteContent.services.find((service) => service.slug === slug);

export const projectFilters = siteContent.projectFilters ?? [
  "Todos",
  ...new Set(siteContent.projects.map((project) => project.category)),
];
