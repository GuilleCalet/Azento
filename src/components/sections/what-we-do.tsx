'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../section-header";
import Surface from "../ui/surface";
import { siteContent } from "@/data/site";

const WhatWeDo = () => {
  return (
    <section className="section-shell mt-16 space-y-10">
      <SectionHeader
        eyebrow="Qué hacemos"
        title="Interiorismo + exteriorismo + fabricación a medida"
        description="Conectamos interior y exterior con madera, luz y piezas propias."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {siteContent.whatWeDo.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <Surface className="h-full overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 320px, 100vw"
                />
              </div>
              <div className="space-y-2 px-5 py-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Surface>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
