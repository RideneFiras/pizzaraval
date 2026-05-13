"use client";

import { motion } from "framer-motion";
import { T } from "@/lib/i18n";
import { fadeUp, inViewProps, stagger } from "@/lib/motion";

export function Events() {
  return (
    <section className="relative bg-tomato text-bone overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 grain opacity-[0.07] pointer-events-none" />
      <div className="absolute -left-32 -bottom-32 w-[36rem] h-[36rem] rounded-full bg-ink/30 blur-3xl pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 md:px-12">
        <motion.header variants={stagger()} {...inViewProps} className="text-center max-w-3xl mx-auto">
          <motion.p variants={fadeUp} className="font-head text-bone/70 tracking-[0.32em] text-xs uppercase mb-4">
            <T es="Más que una pizzería" en="More than a pizza place" />
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display italic display-italic text-5xl md:text-7xl leading-[0.95]">
            <T es="Más que una pizzería." en="More than pizza." />
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-7 text-lg md:text-xl text-bone/90 leading-relaxed">
            <T
              es="Pizza Raval Bar es un punto de encuentro del barrio: música en directo, exposiciones, noches temáticas, y una energía que mezcla lo mejor del Raval con el espíritu argentino."
              en="Pizza Raval Bar is a neighborhood meeting point: live music, art shows, themed nights, and an energy that mixes the best of El Raval with Argentine spirit."
            />
          </motion.p>
        </motion.header>

        <motion.div variants={stagger(0.05, 0.08)} {...inViewProps} className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            { emoji: "🎵", es: "Música en directo", en: "Live music" },
            { emoji: "🎨", es: "Arte y exposiciones", en: "Art & shows" },
            { emoji: "🛹", es: "Cultura urbana", en: "Street culture" },
          ].map((b) => (
            <motion.span
              key={b.es}
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-ink/40 border border-bone/15 rounded-full px-5 py-3 font-head tracking-[0.06em] text-sm"
            >
              {b.emoji} <T es={b.es} en={b.en} />
            </motion.span>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} {...inViewProps} className="mt-12 text-center">
          <a
            href="https://www.instagram.com/pizzaravalbar/"
            target="_blank" rel="noopener"
            className="btn-magnet inline-flex items-center gap-2 bg-ink hover:bg-ink/85 text-bone font-head uppercase tracking-[0.14em] text-sm px-7 py-4 rounded-full"
          >
            <T es="Ver eventos en Instagram →" en="See events on Instagram →" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
