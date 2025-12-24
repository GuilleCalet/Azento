'use client';

import { motion } from "framer-motion";
import SectionHeader from "../section-header";
import Surface from "../ui/surface";
import { siteContent } from "@/data/site";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="section-shell mt-16 space-y-8">
      <SectionHeader
        eyebrow="Testimonios"
        title="Clientes que disfrutan su casa dentro y fuera"
        description="Historias reales de proyectos ejecutados por nuestro equipo."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {siteContent.testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
          >
            <Surface className="h-full p-5">
              <Quote className="mb-3 h-6 w-6 text-primary" />
              <p className="text-base text-foreground md:text-lg">“{testimonial.quote}”</p>
              <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p>{testimonial.location}</p>
                </div>
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  {testimonial.projectType}
                </span>
              </div>
            </Surface>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
