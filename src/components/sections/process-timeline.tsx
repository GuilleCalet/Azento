'use client';

import SectionHeader from "../section-header";
import Surface from "../ui/surface";
import { siteContent } from "@/data/site";
import { motion } from "framer-motion";

const ProcessTimeline = () => {
  return (
    <section className="section-shell mt-16 space-y-8">
      <SectionHeader
        eyebrow="Proceso"
        title="Brief → Propuesta → Ejecución → Entrega"
        description="Un único equipo coordina diseño, fabricación e instalación. Sin sobresaltos."
      />
      <div className="grid gap-5 md:grid-cols-4">
        {siteContent.process.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <Surface className="flex h-full flex-col gap-3 p-4">
              <div className="flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
                Paso {index + 1}
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </Surface>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessTimeline;
