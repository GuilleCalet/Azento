import Image from "next/image";
import type { Metadata } from "next";
import SectionHeader from "@/components/section-header";
import Surface from "@/components/ui/surface";
import { siteContent } from "@/data/site";

export const metadata: Metadata = {
  title: "Sobre nosotros | AZento Home",
  description: "Equipo de interiorismo y exteriorismo con fabricación a medida en Madrid."
};

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <div className="space-y-12 pb-16">
      <section className="section-shell space-y-5">
        <SectionHeader
          eyebrow="Sobre nosotros"
          title={about.headline}
          description={about.story}
        />
      </section>

      <section className="section-shell grid gap-6 md:grid-cols-2">
        {about.values.map((value) => (
          <Surface key={value.title} className="p-6">
            <p className="text-sm uppercase tracking-[0.14em] text-muted-foreground">
              Valor
            </p>
            <h3 className="text-xl font-semibold">{value.title}</h3>
            <p className="text-sm text-muted-foreground">{value.description}</p>
          </Surface>
        ))}
      </section>

      <section className="section-shell space-y-6">
        <h3 className="text-lg font-semibold">Equipo</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {about.team.map((person) => (
            <Surface key={person.name} className="overflow-hidden">
              <div className="relative aspect-[4/5]">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(min-width: 640px) 320px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold">{person.name}</p>
                <p className="text-sm text-muted-foreground">{person.role}</p>
              </div>
            </Surface>
          ))}
        </div>
      </section>
    </div>
  );
}
