"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { T } from "@/lib/i18n";
import { fadeUp, inViewProps, stagger } from "@/lib/motion";

const TILES = [
  { src: "/assets/food-1.png", caption: { es: "Pizza del día", en: "Pizza of the day" } },
  { src: "/assets/food-2.jpg", caption: { es: "Empanadas a cuchillo", en: "Hand-cut empanadas" } },
  { src: "/assets/food-3.png", caption: { es: "Pasta artesanal", en: "Artisanal pasta" } },
  { src: "/assets/food-4.jpg", caption: { es: "Noche en el bar", en: "Bar night" } },
  { src: "/assets/food-5.png", caption: { es: "Opciones veganas", en: "Vegan options" } },
  { src: "/assets/food-6.jpg", caption: { es: "Cócteles de la casa", en: "House cocktails" } },
];

export function FollowUs() {
  return (
    <section className="relative bg-bone text-ink py-24 md:py-32">
      <div className="absolute inset-0 paper opacity-[0.03] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.header variants={stagger()} {...inViewProps} className="mb-14 text-center">
          <motion.p variants={fadeUp} className="font-head text-tomato tracking-[0.32em] text-xs uppercase mb-4">
            <T es="Síguenos" en="Follow us" />
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display italic display-italic text-5xl md:text-7xl leading-[0.95]">
            <T es="Síguenos." en="Follow us." />
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 font-body italic text-base">
            <a href="https://www.instagram.com/pizzaraval/" target="_blank" rel="noopener" className="text-ink/70 hover:text-tomato transition">@pizzaraval</a>
            <span className="text-ink/30 mx-3">·</span>
            <a href="https://www.instagram.com/pizzaravalbar/" target="_blank" rel="noopener" className="text-ink/70 hover:text-tomato transition">@pizzaravalbar</a>
          </motion.p>
        </motion.header>

        <motion.div variants={stagger(0.04, 0.08)} {...inViewProps} className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {TILES.map((t, i) => (
            <motion.figure
              key={i}
              variants={fadeUp}
              className="group relative aspect-square rounded-xl overflow-hidden bg-ink"
            >
              <Image
                src={t.src}
                alt={t.caption.en}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-ink/85 to-transparent text-bone font-head uppercase tracking-[0.1em] text-[12px]">
                <T es={t.caption.es} en={t.caption.en} />
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
