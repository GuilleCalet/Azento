'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/data/site";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Surface from "@/components/ui/surface";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";
import { Instagram, Menu, Phone, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const { navigation, branding } = siteContent;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell">
        <Surface className="glass mt-4 flex items-center justify-between rounded-full px-4 py-3 shadow-soft">
          <div className="flex items-center gap-3">
            <Logo />
            <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
              <span>{branding.tagline}</span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contacto" className="hidden sm:inline-flex">
              <Button size="sm" onClick={() => track("cta_click", { source: "header" })}>
                {branding.ctaLabel}
              </Button>
            </Link>
            <div className="hidden items-center gap-2 md:flex">
              <Link
                href={`tel:${branding.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4" aria-hidden />
                <span>{branding.phone}</span>
              </Link>
              <Link
                href={branding.instagram}
                className="text-muted-foreground hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground md:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Surface>
      </div>
      {open ? (
        <Surface className="glass section-shell mt-3 flex flex-col gap-3 rounded-2xl px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-2 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 hover:bg-muted",
                  pathname === item.href ? "text-primary" : "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2">
            <Link href="/contacto">
              <Button className="w-full" onClick={() => track("cta_click", { source: "mobile_menu" })}>
                {branding.ctaLabel}
              </Button>
            </Link>
            <Link
              href={branding.instagram}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground hover:bg-muted/70"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </Link>
            <Link
              href={`tel:${branding.phone.replace(/\s/g, "")}`}
              className="text-center text-sm text-foreground underline-offset-4 hover:underline"
            >
              {branding.phone}
            </Link>
          </div>
        </Surface>
      ) : null}
    </header>
  );
};

export default Header;
