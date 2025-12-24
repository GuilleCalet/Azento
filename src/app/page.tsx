import CtaBanner from "@/components/sections/cta-banner";
import FeaturedProjects from "@/components/sections/featured-projects";
import Hero from "@/components/sections/hero";
import InstagramFeed from "@/components/sections/instagram-feed";
import ProcessTimeline from "@/components/sections/process-timeline";
import Testimonials from "@/components/sections/testimonials";
import WhatWeDo from "@/components/sections/what-we-do";

export default function HomePage() {
  return (
    <div className="space-y-12 pb-16">
      <Hero />
      <WhatWeDo />
      <FeaturedProjects />
      <ProcessTimeline />
      <Testimonials />
      <InstagramFeed />
      <CtaBanner />
    </div>
  );
}
