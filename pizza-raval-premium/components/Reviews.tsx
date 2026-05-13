"use client";

import { motion } from "framer-motion";
import { T } from "@/lib/i18n";
import { fadeUp, inViewProps, stagger } from "@/lib/motion";

const QUOTES = [
  {
    quote: { es: "Beautiful, very cozy place. Delicious empanadas and the pizza margarita were 10/10.", en: "Beautiful, very cozy place. Delicious empanadas and the pizza margarita were 10/10." },
    who: "Meiling M.",
    where: "TheFork",
  },
  {
    quote: { es: "Beautiful place, staff so friendly and welcoming. Food was a 10/10. Will definitely return.", en: "Beautiful place, staff so friendly and welcoming. Food was a 10/10. Will definitely return." },
    who: "Deirdre O.",
    where: "TheFork",
  },
  {
    quote: { es: "Very friendly staff and amazing pizza!", en: "Very friendly staff and amazing pizza!" },
    who: "Anna S.",
    where: "TheFork",
  },
  {
    quote: {
      es: "Pizzas, empanadas y milanesas muy buenas a un precio excelente. Mario, el dueño, siempre tiene una sonrisa. Uno de mis lugares favoritos.",
      en: "Pizzas, empanadas and milanesas — really good and great prices. Mario, the owner, always has a smile. One of my favorite spots.",
    },
    who: "Foursquare",
    where: "local tip",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative bg-ink text-bone py-24 md:py-32">
      <div className="absolute inset-0 grain opacity-[0.06] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.header variants={stagger()} {...inViewProps} className="mb-14 text-center">
          <motion.p variants={fadeUp} className="font-head text-brass tracking-[0.32em] text-xs uppercase mb-4">
            <T es="Lo que dicen" en="What people say" />
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display italic display-italic text-5xl md:text-7xl leading-[0.95]">
            <T es="Lo que dicen." en="Word of mouth." />
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 font-body italic text-base text-bone/65">
            <T es="8.7/10 en TheFork  ·  4.7/5 en Restaurant Guru" en="8.7/10 on TheFork  ·  4.7/5 on Restaurant Guru" />
          </motion.p>
        </motion.header>

        <motion.div variants={stagger(0.06, 0.1)} {...inViewProps} className="grid md:grid-cols-2 gap-5">
          {QUOTES.map((q) => (
            <motion.figure
              key={q.who}
              variants={fadeUp}
              className="relative bg-bone/[0.03] border border-bone/10 rounded-2xl p-9 pt-12"
            >
              <span className="absolute -top-2 left-6 text-brass/60 font-display italic text-7xl leading-none select-none" aria-hidden>"</span>
              <p className="text-brass tracking-[0.2em] text-xs mb-4">★★★★★</p>
              <blockquote className="text-bone/95 leading-relaxed italic font-body text-[17px]">
                <T es={q.quote.es} en={q.quote.en} />
              </blockquote>
              <figcaption className="mt-5 font-head text-sm text-bone/80 tracking-wide">
                {q.who} <span className="opacity-50 ml-1">· {q.where}</span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <motion.div
          variants={stagger(0.05, 0.08)}
          {...inViewProps}
          className="mt-14 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-center"
        >
          {[
            { num: "8.7/10", label: "TheFork" },
            { num: "4.7/5",  label: "Restaurant Guru" },
            { num: "300+",   labelEs: "reseñas verificadas", labelEn: "verified reviews" },
          ].map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-brass/[0.06] border border-brass/20 rounded-xl py-6">
              <div className="font-display italic text-3xl text-brass tabular-nums">{s.num}</div>
              <div className="font-head uppercase tracking-[0.15em] text-[10px] mt-1 text-bone/65">
                {s.labelEs ? <T es={s.labelEs} en={s.labelEn!} /> : s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
