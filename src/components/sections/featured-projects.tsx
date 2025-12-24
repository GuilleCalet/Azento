'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "../section-header";
import Surface from "../ui/surface";
import { siteContent } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

const FeaturedProjects = () => {
  const projects = siteContent.projects.slice(0, 6);

  return (
    <section className="section-shell mt-16 space-y-8">
      <SectionHeader
        eyebrow="Proyectos destacados"
        title="Materiales nobles, luz cálida y detalles a medida"
        description="Seleccionamos madera tecnológica, vegetación e iluminación para prolongar la casa hacia el exterior."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
          >
            <Link href={`/proyectos/${project.slug}`}>
              <Surface className="group h-full overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 360px, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent opacity-90" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-foreground">
                    {project.category}
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.location}</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition group-hover:border-primary group-hover:text-primary">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Surface>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
