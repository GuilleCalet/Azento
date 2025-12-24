'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { siteContent } from "@/data/site";
import { Button } from "@/components/ui/button";
import Surface from "@/components/ui/surface";
import { track } from "@/lib/analytics";

const CtaBanner = () => {
  const { cta } = siteContent;
  return (
    <section className="section-shell mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
      >
        <Surface className="flex flex-col gap-4 rounded-3xl bg-gradient-to-r from-card via-card/90 to-white/70 px-6 py-10 shadow-card md:flex-row md:items-center md:justify-between md:px-10">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Agenda una visita
            </p>
            <h3 className="text-2xl font-semibold leading-tight md:text-3xl">
              {cta.title}
            </h3>
            <p className="max-w-2xl text-base text-muted-foreground">
              {cta.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              onClick={() => track("cta_click", { source: "cta_banner_primary" })}
            >
              <Link href={cta.primary.href}>{cta.primary.label}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              onClick={() => track("cta_click", { source: "cta_banner_secondary" })}
            >
              <Link href={cta.secondary.href}>{cta.secondary.label}</Link>
            </Button>
          </div>
        </Surface>
      </motion.div>
    </section>
  );
};

export default CtaBanner;
