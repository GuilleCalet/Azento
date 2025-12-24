import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/components/forms/contact-form";
import SectionHeader from "@/components/section-header";
import Surface from "@/components/ui/surface";
import { siteContent } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | AZento Home",
  description: "Pide presupuesto o agenda una visita para tu proyecto de interiorismo o exterior."
};

export default function ContactPage() {
  const { contact, branding } = siteContent;
  return (
    <div className="space-y-12 pb-16">
      <section className="section-shell space-y-6">
        <SectionHeader
          eyebrow="Contacto"
          title={contact.heading}
          description={contact.description}
        />
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <ContactForm consentLabel={contact.consentLabel} />
          <div className="space-y-4">
            <Surface className="p-6">
              <h3 className="text-lg font-semibold">Detalle de contacto</h3>
              <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                <Link
                  href={`mailto:${branding.email}`}
                  className="flex items-center gap-2 text-foreground hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  {branding.email}
                </Link>
                <Link
                  href={`tel:${branding.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-foreground hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  {branding.phone}
                </Link>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{branding.location}</span>
                </div>
                <p>{contact.hours}</p>
                <p>{contact.areas}</p>
                <Button asChild variant="outline" className="mt-2 w-fit">
                  <Link href={branding.whatsappLink}>WhatsApp directo</Link>
                </Button>
              </div>
            </Surface>
            <div className="overflow-hidden rounded-2xl border border-border/70 shadow-soft">
              <iframe
                src={contact.mapEmbed}
                title="Mapa"
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
