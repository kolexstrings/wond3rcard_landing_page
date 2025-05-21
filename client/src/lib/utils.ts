import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000) {
    const k = num / 1000;
    return `${k.toFixed(1)}k`.replace('.0', '');
  }
  return num.toString();
}
