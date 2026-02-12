"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { works, workCategories, type WorkCategory } from "@/lib/data";
import { getVideoUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";

function WorkCard({
  item,
  index,
}: {
  item: (typeof works)[0];
  index: number;
}) {
  const [videoError, setVideoError] = useState(false);
  const videoPath = getVideoUrl(item.slug);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative overflow-hidden rounded-3xl bg-white/70 shadow-soft backdrop-blur-sm transition-all hover:shadow-soft-lg hover:shadow-glow/50 border border-white/60"
    >
      <div className="aspect-video relative bg-gradient-to-br from-brand-lavender via-brand-pink to-brand-periwinkle">
        {!videoError ? (
          <video
            src={videoPath}
            poster=""
            controls
            className="absolute inset-0 h-full w-full object-cover"
            preload="metadata"
            onError={() => setVideoError(true)}
            aria-label={`Видео: ${item.title}`}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-brand-cyan">
              <svg className="h-7 w-7 ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </span>
            <span className="text-center text-sm text-gray-600">Видео недоступно</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3">
          <span className="text-xs font-medium text-white/90">{item.duration}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display font-semibold text-gray-900">{item.title}</h3>
        <p className="mt-1 text-sm text-gray-600">{item.category}</p>
      </div>
    </motion.article>
  );
}

export function Works() {
  const [filter, setFilter] = useState<WorkCategory>("Все");

  const filteredWorks = useMemo(() => {
    if (filter === "Все") return works;
    return works.filter((w) => w.category === filter);
  }, [filter]);

  return (
    <section
      id="works"
      className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="works-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h2 id="works-heading" className="font-display text-3xl font-bold text-gray-900 sm:text-4xl">
            Работы
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Шоурил и кейсы: реклама, love story, Reels, explainer-ролики.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          {workCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 min-h-[44px]",
                filter === cat
                  ? "bg-brand-cyan text-white shadow-soft"
                  : "bg-white/70 text-gray-700 hover:bg-white/90 hover:shadow-soft"
              )}
              aria-pressed={filter === cat}
              aria-label={`Фильтр: ${cat}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((item, i) => (
              <li key={item.id}>
                <WorkCard item={item} index={i} />
              </li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}
