"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks, studioName } from "@/lib/data";

const LOGO_PATH = "/brand/logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-br from-brand-lavender via-brand-pink to-brand-periwinkle border-b border-white/30",
        scrolled && "shadow-soft"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Главная навигация"
      >
        <Link
          href="#"
          className="flex min-h-[44px] min-w-0 items-center gap-2 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2"
          aria-label={`${studioName} — на главную`}
        >
          <span className="relative block h-9 w-9 shrink-0 overflow-hidden">
            <Image
              src={LOGO_PATH}
              alt=""
              width={36}
              height={36}
              className="object-contain p-0.5"
              unoptimized
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </span>
          <span className="hidden font-display text-lg font-semibold text-gray-800 sm:inline">
            {studioName}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-white/50 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="btn-primary hidden shrink-0 sm:inline-flex"
          >
            Заказать проект
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl bg-white/60 text-gray-700 hover:bg-white/80 md:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/30 bg-white/40 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-gray-800 hover:bg-white/60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary mt-2 inline-flex w-full justify-center"
                >
                  Заказать проект
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
