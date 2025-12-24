'use client';

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/site";
import Surface from "@/components/ui/surface";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";
import { ArrowUpRight } from "lucide-react";

type ProjectGalleryProps = {
  projects: Project[];
  filters: string[];
};

const ProjectGallery = ({ projects, filters }: ProjectGalleryProps) => {
  const [activeFilter, setActiveFilter] = useState(filters[0] ?? "Todos");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Todos") return projects;
    return projects.filter(
      (project) =>
        project.category === activeFilter || project.tags.includes(activeFilter)
    );
  }, [projects, activeFilter]);

  return (
    <section className="section-shell space-y-8">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = filter === activeFilter;
          return (
            <Button
              key={filter}
              variant={isActive ? "default" : "outline"}
              size="pill"
              onClick={() => {
                setActiveFilter(filter);
                track("project_filter", { filter });
              }}
            >
              {filter}
            </Button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <Surface key={project.slug} className="group overflow-hidden">
              <Link href={`/proyectos/${project.slug}`}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 360px, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                  <div className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.location}</p>
                    </div>
                    <span className="rounded-full border border-border p-2 text-foreground transition group-hover:border-primary group-hover:text-primary">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
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
              </Link>
            </Surface>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ProjectGallery;
