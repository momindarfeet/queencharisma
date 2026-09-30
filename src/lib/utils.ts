import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function whatsappUrl(text: string) {
  return `https://wa.me/447955425707?text=${encodeURIComponent(text)}`;
}

export function formatMoney(n: number) {
  return `$${n}`;
}
