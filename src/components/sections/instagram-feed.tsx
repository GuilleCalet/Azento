'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "../section-header";
import { siteContent } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

const InstagramFeed = () => {
  const { instagram } = siteContent;
  return (
    <section className="section-shell mt-16 space-y-8">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <SectionHeader
          eyebrow="Instagram"
          title={instagram.heading}
          description={instagram.description}
        />
        <Link
          href={instagram.link}
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-primary hover:text-primary"
        >
          Ver en Instagram <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
        {instagram.images.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.03 }}
            className="relative aspect-square overflow-hidden rounded-2xl border border-border/70"
          >
            <Image
              src={image}
              alt={`Instagram ${index + 1}`}
              fill
              sizes="200px"
              className="object-cover transition duration-700 hover:scale-[1.08]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;
