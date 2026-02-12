"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const len = testimonials.length;

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % len), 6000);
    return () => clearInterval(t);
  }, [len]);

  return (
    <section
      id="testimonials"
      className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h2 id="testimonials-heading" className="font-display text-3xl font-bold text-gray-900 sm:text-4xl">
            Отзывы
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Что говорят клиенты о работе с нами.
          </p>
        </motion.div>

        <div className="mt-14 relative min-h-[280px]">
          <AnimatePresence mode="wait">
            {testimonials.map((t, i) =>
              i === index ? (
                <motion.blockquote
                  key={t.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute inset-0 rounded-3xl border border-white/60 bg-surface-card p-8 shadow-soft backdrop-blur-sm sm:p-10"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan/30 to-brand-purple/30 text-xl font-bold text-gray-700"
                      aria-hidden
                    >
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <cite className="not-italic font-display font-semibold text-gray-900">
                        {t.name}
                      </cite>
                      <p className="text-sm text-gray-600">
                        {t.role}
                        {t.company && ` · ${t.company}`}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-1" aria-label={`Оценка: ${t.rating} из 5`}>
                    {Array.from({ length: 5 }).map((_, star) => (
                      <span
                        key={star}
                        className={cn(
                          "text-lg",
                          star < t.rating ? "text-amber-400" : "text-gray-300"
                        )}
                        aria-hidden
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 text-lg text-gray-700">&ldquo;{t.text}&rdquo;</p>
                </motion.blockquote>
              ) : null
            )}
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-all min-w-[44px] min-h-[44px] flex items-center justify-center sm:min-w-0 sm:min-h-0 sm:h-2.5 sm:w-2.5",
                i === index ? "bg-brand-cyan scale-125" : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Показать отзыв ${i + 1}`}
              aria-current={i === index}
            >
              <span className="sr-only">Отзыв {i + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
