import type { Metadata } from "next";
import SectionHeader from "@/components/section-header";
import ProjectGallery from "@/components/sections/project-gallery";
import { projectFilters, siteContent } from "@/data/site";

export const metadata: Metadata = {
  title: "Proyectos | AZento Home",
  description:
    "Selección de terrazas, patios e interiores diseñados y construidos por AZento Home."
};

export default function ProjectsPage() {
  return (
    <div className="space-y-12 pb-16">
      <section className="section-shell space-y-4">
        <SectionHeader
          eyebrow="Portfolio"
          title="Proyectos que conectan interior y exterior"
          description="Explora terrazas, jardines, pérgolas e interiores ejecutados con nuestro equipo."
        />
      </section>
      <ProjectGallery projects={siteContent.projects} filters={projectFilters} />
    </div>
  );
}
