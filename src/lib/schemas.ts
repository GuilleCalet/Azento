import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Añade tu nombre"),
  emailOrPhone: z.string().min(5, "Incluye email o teléfono"),
  projectType: z.string().min(2, "Selecciona un tipo de proyecto"),
  message: z.string().min(10, "Cuéntanos un poco más"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Necesitamos tu consentimiento para responder." })
  })
});

export type ContactPayload = z.infer<typeof contactSchema>;
