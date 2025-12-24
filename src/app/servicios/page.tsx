import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import Surface from "@/components/ui/surface";
import { siteContent } from "@/data/site";

export const metadata: Metadata = {
  title: "Servicios | AZento Home",
  description: "Interiorismo, terrazas, jardines y fabricación a medida con madera, iluminación y vegetación."
};

export default function ServicesPage() {
  const { services, branding } = siteContent;
  return (
    <div className="space-y-12 pb-16">
      <section className="section-shell space-y-6">
        <SectionHeader
          eyebrow="Servicios"
          title="Diseñamos y ejecutamos espacios que conectan interior y exterior"
          description="Proyectos llave en mano con visualización previa, fabricación a medida e instalación por nuestro equipo."
        />
        <Button asChild size="lg">
          <Link href="/contacto">{branding.ctaLabel}</Link>
        </Button>
      </section>

      <section className="section-shell grid gap-8">
        {services.map((service) => (
          <Surface
            key={service.slug}
            className="grid gap-6 overflow-hidden rounded-3xl border border-border/70 bg-card/80 shadow-card md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="relative min-h-[260px]">
              <Image
                src={service.images[0]}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 540px, 100vw"
              />
              <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {service.title}
              </div>
            </div>
            <div className="flex flex-col gap-3 p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">
                Ideal para
              </p>
              <h2 className="text-2xl font-semibold text-foreground">{service.title}</h2>
              <p className="text-base text-muted-foreground">{service.description}</p>
              <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                <div>
                  <p className="font-semibold text-foreground">Beneficios</p>
                  <ul className="mt-2 space-y-1">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-2">
                        <span aria-hidden>•</span> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Ideal para</p>
                  <ul className="mt-2 space-y-1">
                    {service.idealFor.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span aria-hidden>•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {service.images.slice(1).map((img) => (
                  <div
                    key={img}
                    className="relative h-24 w-28 overflow-hidden rounded-xl border border-border/70"
                  >
                    <Image
                      src={img}
                      alt={`${service.title} detalle`}
                      fill
                      className="object-cover"
                      sizes="150px"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-3">
                <Button asChild variant="outline">
                  <Link href="/contacto">Quiero saber más</Link>
                </Button>
              </div>
            </div>
          </Surface>
        ))}
      </section>
    </div>
  );
}
