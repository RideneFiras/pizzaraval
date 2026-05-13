"use client";

import { motion } from "framer-motion";
import { T } from "@/lib/i18n";
import { fadeUp, inViewProps, stagger } from "@/lib/motion";

const CHIPS = [
  {
    emoji: "🌱",
    es: "Opciones veganas",
    en: "Vegan options",
    descEs: "Pizza, empanadas y milanesa veganas con queso vegano real.",
    descEn: "Vegan pizza, empanadas and milanesa with real vegan cheese.",
  },
  {
    emoji: "🌾",
    es: "Sin gluten",
    en: "Gluten-free",
    descEs: "Cerveza sin gluten disponible. Consulta opciones de comida.",
    descEn: "Gluten-free beer available. Ask about food options.",
  },
  {
    emoji: "🐾",
    es: "Pet-friendly",
    en: "Pet-friendly",
    descEs: "Los perros son bienvenidos en ambos locales.",
    descEn: "Dogs welcome at both locations.",
  },
];

export function ForEveryone() {
  return (
    <section className="relative bg-bone text-ink py-20 md:py-24">
      <div className="absolute inset-0 paper opacity-[0.03] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <motion.header variants={stagger()} {...inViewProps} className="mb-12 text-center max-w-2xl mx-auto">
          <motion.p variants={fadeUp} className="font-head text-tomato tracking-[0.32em] text-xs uppercase mb-4">
            <T es="Para todos" en="For everyone" />
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display italic display-italic text-4xl md:text-5xl leading-[0.95]">
            <T es="Opciones para todos" en="Options for everyone" />
          </motion.h2>
        </motion.header>

        <motion.div variants={stagger(0.05, 0.1)} {...inViewProps} className="grid md:grid-cols-3 gap-4">
          {CHIPS.map((c) => (
            <motion.div
              key={c.es}
              variants={fadeUp}
              className="bg-ink text-bone rounded-2xl p-7 transition hover:-translate-y-1"
            >
              <span className="text-3xl block mb-4">{c.emoji}</span>
              <h3 className="font-head uppercase tracking-[0.1em] text-brass text-base mb-2">
                <T es={c.es} en={c.en} />
              </h3>
              <p className="text-bone/75 text-sm leading-relaxed">
                <T es={c.descEs} en={c.descEn} />
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
