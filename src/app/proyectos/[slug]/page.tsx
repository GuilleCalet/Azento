import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, siteContent } from "@/data/site";
import SectionHeader from "@/components/section-header";
import Surface from "@/components/ui/surface";
import { Button } from "@/components/ui/button";

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return siteContent.projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  return {
    title: project ? `${project.title} | AZento Home` : "Proyecto | AZento Home",
    description: project?.summary
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="space-y-10 pb-16">
      <section className="section-shell space-y-6">
        <SectionHeader
          eyebrow={project.category}
          title={project.title}
          description={project.summary}
        />
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="rounded-full bg-muted px-3 py-1">{project.location}</span>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-4">
        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/70 bg-muted shadow-card">
            <Image
              src={project.images[0] ?? project.cover}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 720px, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <Surface className="flex flex-col gap-3 p-6">
            <h3 className="text-xl font-semibold">Reto y solución</h3>
            <p className="text-sm text-muted-foreground">{project.challenge}</p>
            <p className="text-sm text-muted-foreground">{project.solution}</p>
            <div>
              <p className="text-sm font-semibold text-foreground">Materiales</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {project.materials.map((material) => (
                  <li key={material}>{material}</li>
                ))}
              </ul>
            </div>
            <p className="text-sm font-semibold text-foreground">
              Tiempo estimado: <span className="font-normal">{project.timeline}</span>
            </p>
            <Button asChild className="mt-auto">
              <Link href={`/contacto?proyecto=${project.slug}`}>Quiero algo similar</Link>
            </Button>
          </Surface>
        </div>
      </section>

      <section className="section-shell space-y-4">
        <h3 className="text-lg font-semibold">Galería</h3>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {project.images.map((image) => (
            <div
              key={image}
              className="relative h-64 min-w-[280px] overflow-hidden rounded-2xl border border-border/70 shadow-soft"
            >
              <Image
                src={image}
                alt={`${project.title} imagen`}
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <Surface className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.14em] text-muted-foreground">
              ¿Algo parecido?
            </p>
            <h4 className="text-xl font-semibold">Diseñamos la versión para tu espacio</h4>
            <p className="text-sm text-muted-foreground">
              Agenda una llamada y revisamos medidas, materiales y plazo.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contacto">Pedir presupuesto</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/proyectos">Ver más proyectos</Link>
            </Button>
          </div>
        </Surface>
      </section>
    </div>
  );
}
