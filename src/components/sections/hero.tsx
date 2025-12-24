'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteContent } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import { track } from "@/lib/analytics";

const Hero = () => {
  const { hero } = siteContent;

  return (
    <section className="section-shell relative overflow-hidden rounded-3xl border border-border/70 bg-card/80 px-6 py-12 shadow-card md:px-10 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/20 to-primary/10" aria-hidden />
      <div className="relative grid gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Pill>{hero.pill}</Pill>
          <motion.h1
            className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {hero.title}
          </motion.h1>
          <motion.p
            className="max-w-xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          >
            {hero.subtitle}
          </motion.p>
          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button
              asChild
              size="lg"
              onClick={() => track("cta_click", { source: "hero_primary" })}
            >
              <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              onClick={() => track("cta_click", { source: "hero_secondary" })}
            >
              <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
            </Button>
          </motion.div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            <div className="rounded-xl border border-border/70 bg-white/70 px-4 py-3">
              <p className="font-semibold text-foreground">Llave en mano</p>
              <p>Diseño · fabricación · iluminación</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-white/70 px-4 py-3">
              <p className="font-semibold text-foreground">Interior + exterior</p>
              <p>Terrazas, patios y viviendas</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-white/70 px-4 py-3">
              <p className="font-semibold text-foreground">Madrid</p>
              <p>Visita y propuesta rápida</p>
            </div>
          </div>
        </div>

        <motion.div
          className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/60 bg-muted shadow-card"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Image
            src={hero.image}
            alt="Proyecto de AZento Home"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 520px, 100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/10" aria-hidden />
          <div className="absolute bottom-4 left-4 rounded-full bg-white/85 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground shadow-soft">
            Hogar + exterior
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
