import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatWhatsappUrl = (raw: string) => {
  if (!raw) return "";
  const digits = raw.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
};
