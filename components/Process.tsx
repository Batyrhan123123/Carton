"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Process() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const sections = processSteps.map((_, i) => document.getElementById(`process-step-${i}`));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("data-step");
          if (id != null) setActiveStep(Number(id));
        });
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h2 id="process-heading" className="font-display text-3xl font-bold text-gray-900 sm:text-4xl">
            Как мы работаем
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Прозрачный процесс от брифа до сдачи проекта.
          </p>
        </motion.div>

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-cyan via-brand-purple to-brand-lime rounded-full sm:left-1/2 sm:-translate-x-px"
            aria-hidden
          />
          <ul className="space-y-12 sm:space-y-16">
            {processSteps.map((step, i) => (
              <li
                key={step.step}
                id={`process-step-${i}`}
                data-step={i}
                className="relative flex gap-8 sm:gap-12 sm:odd:flex-row-reverse"
              >
                <div className="absolute left-6 w-4 h-4 -translate-x-1/2 rounded-full bg-white border-2 border-brand-cyan shadow-soft sm:left-1/2 z-10" />
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={cn(
                    "flex-1 pl-12 pt-2 sm:pt-0 sm:pl-0",
                    i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:text-left"
                  )}
                >
                  <div
                    className={cn(
                      "rounded-3xl border bg-surface-card p-6 shadow-soft backdrop-blur-sm transition-all",
                      activeStep === i
                        ? "border-brand-cyan shadow-glow/30"
                        : "border-white/60"
                    )}
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue text-sm font-bold text-white">
                      {step.step}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
                <div className="hidden sm:block flex-1" aria-hidden />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
