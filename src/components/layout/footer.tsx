import Link from "next/link";
import Logo from "../logo";
import { Button } from "../ui/button";
import { siteContent } from "@/data/site";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Footer = () => {
  const { branding, navigation, footer } = siteContent;

  return (
    <footer className="mt-20 border-t border-border/70 bg-card/60">
      <div className="section-shell grid grid-cols-1 gap-10 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground">{footer.miniDescription}</p>
          <Button asChild size="sm" variant="outline">
            <Link href="/contacto">
              <Send className="mr-2 h-4 w-4" />
              {branding.ctaLabel}
            </Link>
          </Button>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Contacto</h3>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link href={`mailto:${branding.email}`} className="flex items-center gap-2 hover:text-primary">
              <Mail className="h-4 w-4" />
              {branding.email}
            </Link>
            <Link href={`tel:${branding.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-primary">
              <Phone className="h-4 w-4" />
              {branding.phone}
            </Link>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{branding.location}</span>
            </div>
            <Link
              href={branding.whatsappLink}
              className="inline-flex items-center gap-2 text-sm text-primary underline-offset-4 hover:underline"
            >
              WhatsApp rápido
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Enlaces</h3>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Redes</h3>
          <p className="text-sm text-muted-foreground">
            {footer.ctaText}
          </p>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link
              href={branding.instagram}
              className="rounded-full border border-border px-3 py-2 text-muted-foreground hover:border-primary hover:text-primary"
            >
              Instagram
            </Link>
            <Link
              href={branding.whatsappLink}
              className="rounded-full border border-border px-3 py-2 text-muted-foreground hover:border-primary hover:text-primary"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="section-shell flex flex-col justify-between gap-3 py-4 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} AZento Home. Todos los derechos reservados.</span>
          <div className="flex flex-wrap gap-4">
            {footer.legal.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
