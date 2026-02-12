import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getVideoUrl(filename: string): string {
  return `/works/${encodeURIComponent(filename)}`;
}

export function getPosterUrl(slug: string): string {
  return `/works/${slug}-poster.jpg`;
}
