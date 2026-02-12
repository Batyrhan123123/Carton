"use client";

import { motion } from "framer-motion";
import { pricingTiers } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h2 id="pricing-heading" className="font-display text-3xl font-bold text-gray-900 sm:text-4xl">
            Цены
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Точная стоимость рассчитывается после брифа. Ниже — ориентиры по пакетам.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={cn(
                "relative flex flex-col rounded-3xl border bg-surface-card p-6 shadow-soft backdrop-blur-sm lg:p-8",
                tier.highlighted
                  ? "border-brand-cyan shadow-soft-lg shadow-glow/40 ring-2 ring-brand-cyan/30 scale-[1.02]"
                  : "border-white/60"
              )}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-cyan px-3 py-1 text-xs font-semibold text-white">
                  Популярный
                </span>
              )}
              <h3 className="font-display text-2xl font-bold text-gray-900">{tier.name}</h3>
              <p className="mt-1 text-gray-600">{tier.tagline}</p>
              <p className="mt-4 text-2xl font-semibold text-brand-purple">{tier.priceNote}</p>
              <ul className="mt-6 flex-1 space-y-3" role="list">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-gray-700">
                    <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-brand-lime/60 flex items-center justify-center" aria-hidden>
                      <svg className="h-3 w-3 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  "mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-full font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2",
                  tier.highlighted
                    ? "btn-primary"
                    : "border-2 border-brand-cyan/60 bg-white/70 text-gray-800 hover:bg-white/90"
                )}
              >
                Заказать
              </a>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-500">
          Итоговая цена зависит от длительности, количества персонажей и сложности сцен.
        </p>
      </div>
    </section>
  );
}
