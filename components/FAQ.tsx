"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section
      id="faq"
      className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h2 id="faq-heading" className="font-display text-3xl font-bold text-gray-900 sm:text-4xl">
            FAQ
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Частые вопросы о производстве и сроках.
          </p>
        </motion.div>

        <ul className="mt-14 space-y-3" role="list">
          {faqItems.map((item) => (
            <li key={item.id}>
              <div
                className={cn(
                  "rounded-2xl border bg-surface-card shadow-soft backdrop-blur-sm overflow-hidden transition-colors",
                  openId === item.id ? "border-brand-cyan/60" : "border-white/60"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display font-semibold text-gray-900 hover:bg-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-inset min-h-[56px]"
                  aria-expanded={openId === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                >
                  {item.question}
                  <span
                    className={cn(
                      "shrink-0 text-brand-cyan transition-transform",
                      openId === item.id && "rotate-180"
                    )}
                    aria-hidden
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openId === item.id && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 pt-0 text-gray-600">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
