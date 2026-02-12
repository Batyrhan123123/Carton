"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { studioName } from "@/lib/data";

const LOGO_PATH = "/brand/logo.png";

const trustBadges = [
  "1–3 дней",
  "4K рендер",
  "Сценарий + раскадровка",
  "Гарантия правок",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pt-28 pb-16 sm:px-6 sm:pt-36 sm:pb-24 lg:px-8 lg:pt-44 lg:pb-32"
      aria-labelledby="hero-heading"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand-cyan/30 blur-3xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-20 top-40 h-96 w-96 rounded-full bg-brand-purple/25 blur-3xl"
          animate={{
            x: [0, -25, 15, 0],
            y: [0, 20, -15, 0],
            scale: [1, 0.98, 1.02, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-brand-lime/20 blur-3xl"
          animate={{
            x: [0, 20, -25, 0],
            y: [0, -20, 25, 0],
            scale: [1, 1.02, 0.98, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <motion.h1
              id="hero-heading"
              className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Pixar-style 3D анимации для брендов и личных историй
            </motion.h1>
            <motion.p
              className="mt-6 max-w-xl text-lg text-gray-700 sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Ролики от 1 минуты: реклама, love-story. Мягкая 3D в духе Elemental и Big Hero 6 — для тех, кто хочет выделиться.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Link href="#works" className="btn-primary inline-flex">
                Смотреть шоурил
              </Link>
              <Link href="#contact" className="btn-secondary inline-flex">
                Заказать проект
              </Link>
            </motion.div>
            <motion.ul
              className="mt-12 flex flex-wrap gap-4 sm:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              role="list"
            >
              {trustBadges.map((badge) => (
                <li
                  key={badge}
                  className="flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-medium text-gray-700 shadow-soft backdrop-blur-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-brand-cyan" aria-hidden />
                  {badge}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* 3D badge with logo */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="relative flex h-56 w-56 items-center justify-center sm:h-72 sm:w-72 lg:h-80 lg:w-80"
              aria-hidden
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-cyan/40 via-brand-purple/30 to-brand-blue/40 blur-2xl" />
              {/* Plastic ring */}
              <div className="absolute inset-0 rounded-full border-4 border-white/60 bg-gradient-to-br from-white/40 to-white/10 shadow-plastic" />
              {/* Inner shadow for depth */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-brand-lavender/80 to-brand-periwinkle/80 shadow-inner" />
              {/* Highlight top-left */}
              <div
                className="absolute left-[15%] top-[15%] h-1/3 w-1/3 rounded-full bg-white/40 blur-xl"
                style={{ filter: "blur(20px)" }}
              />
              {/* Logo without white backing */}
              <div className="relative z-10 flex h-32 w-32 items-center justify-center sm:h-40 sm:w-40 lg:h-44 lg:w-44">
                <Image
                  src={LOGO_PATH}
                  alt=""
                  width={160}
                  height={160}
                  className="object-contain"
                  unoptimized
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
