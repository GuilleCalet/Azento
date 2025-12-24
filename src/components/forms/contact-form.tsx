'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import Surface from "@/components/ui/surface";
import { contactSchema, type ContactPayload } from "@/lib/schemas";

const ContactForm = ({ consentLabel }: { consentLabel: string }) => {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactPayload>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      emailOrPhone: "",
      projectType: "",
      message: "",
      consent: false
    }
  });

  const onSubmit = async (values: ContactPayload) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("ok");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <Surface className="p-6 shadow-card">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm font-semibold">Nombre</label>
          <input
            className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Nombre y apellidos"
            {...register("name")}
          />
          {errors.name && <p className="text-xs text-secondary">{errors.name.message}</p>}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold">Email o teléfono</label>
            <input
              className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="tu@email.com / +34..."
              {...register("emailOrPhone")}
            />
            {errors.emailOrPhone && (
              <p className="text-xs text-secondary">{errors.emailOrPhone.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold">Tipo de proyecto</label>
            <select
              className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/50"
              {...register("projectType")}
            >
              <option value="">Selecciona una opción</option>
              <option>Interiorismo y decoración</option>
              <option>Jardín / Terraza / Patio</option>
              <option>Pérgolas / Iluminación</option>
              <option>Fabricación a medida</option>
              <option>Otro</option>
            </select>
            {errors.projectType && (
              <p className="text-xs text-secondary">{errors.projectType.message}</p>
            )}
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold">Mensaje</label>
          <textarea
            className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/50"
            rows={4}
            placeholder="Cuéntanos plazos, medidas, uso que quieres darle..."
            {...register("message")}
          />
          {errors.message && <p className="text-xs text-secondary">{errors.message.message}</p>}
        </div>
        <label className="flex items-start gap-2 text-sm text-muted-foreground">
          <input type="checkbox" className="mt-1" {...register("consent")} />
          <span>{consentLabel}</span>
        </label>
        {errors.consent && <p className="text-xs text-secondary">{errors.consent.message}</p>}
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Enviando..." : "Enviar mensaje"}
        </Button>
        {status === "ok" && (
          <p className="text-sm text-primary">¡Gracias! Hemos recibido tu mensaje.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-secondary">
            Hubo un error al enviar. Inténtalo de nuevo o escríbenos a hola@azento-home.com
          </p>
        )}
      </form>
    </Surface>
  );
};

export default ContactForm;
