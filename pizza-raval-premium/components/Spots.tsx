"use client";

import { motion } from "framer-motion";
import { T } from "@/lib/i18n";
import { fadeUp, inViewProps, stagger } from "@/lib/motion";

export function Spots() {
  return (
    <section id="spots" className="relative bg-bone text-ink py-24 md:py-32">
      <div className="absolute inset-0 paper opacity-[0.03] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.header
          variants={stagger(0.1, 0.08)}
          {...inViewProps}
          className="mb-14 md:mb-20 max-w-3xl"
        >
          <motion.p variants={fadeUp} className="font-head text-tomato tracking-[0.32em] text-xs uppercase mb-4">
            <T es="Dos locales · Un mismo espíritu" en="Two spots · One spirit" />
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display italic display-italic text-5xl md:text-7xl leading-[0.95]">
            <T es={<>Dos formas de vivir<br /><span className="text-tomato">Pizza Raval</span>.</>}
               en={<>Two ways to live<br /><span className="text-tomato">Pizza Raval</span>.</>} />
          </motion.h2>
        </motion.header>

        <motion.div variants={stagger(0.1, 0.15)} {...inViewProps} className="grid md:grid-cols-2 gap-5 md:gap-7">
          <motion.article variants={fadeUp} className="group relative bg-ink text-bone rounded-2xl p-9 md:p-11 overflow-hidden transition hover:-translate-y-1">
            <span className="absolute top-7 right-7 font-head text-brass/70 text-[11px] uppercase tracking-[0.25em]">
              01 · Takeaway
            </span>
            <h3 className="font-display italic display-italic text-4xl md:text-5xl mt-12">Pizza Raval</h3>
            <p className="font-head text-brass tracking-wider text-sm mt-2 uppercase">Joaquín Costa, 18</p>
            <p className="mt-7 text-bone/80 leading-relaxed">
              <T es="Pizzas enteras y por porciones, empanadas, milanesas. Para llevar o comer aquí mismo. Pedidos por WhatsApp."
                 en="Whole pizzas and slices, empanadas, milanesas. Takeaway or eat in. Orders via WhatsApp." />
            </p>
            <p className="mt-6 font-body text-base">
              <span className="font-head uppercase text-brass tracking-[0.2em] text-xs mr-2"><T es="Abierto" en="Open" /></span>
              <T es="todos los días · 12:30 — 00:00" en="every day · 12:30 — 00:00" />
            </p>
            <a
              href="https://wa.me/34611688588?text=Hola!%20Quiero%20pedir%20para%20llevar"
              target="_blank" rel="noopener"
              className="mt-9 inline-flex items-center gap-2 font-head uppercase tracking-[0.14em] text-sm border-b border-tomato pb-1 hover:text-brass hover:border-brass transition"
            >
              <T es="Pedir ahora →" en="Order now →" />
            </a>
          </motion.article>

          <motion.article variants={fadeUp} className="group relative bg-tomato text-bone rounded-2xl p-9 md:p-11 overflow-hidden transition hover:-translate-y-1">
            <span className="absolute top-7 right-7 font-head text-bone/60 text-[11px] uppercase tracking-[0.25em]">
              02 · Bar
            </span>
            <h3 className="font-display italic display-italic text-4xl md:text-5xl mt-12">Pizza Raval Bar</h3>
            <p className="font-head text-brass tracking-wider text-sm mt-2 uppercase">Sitges, 6</p>
            <p className="mt-7 text-bone/90 leading-relaxed">
              <T es="El bar: pasta artesanal, cócteles, buena música, eventos y cultura. Reserva por WhatsApp o ven directamente."
                 en="The bar: artisanal pasta, cocktails, great music, events and culture. Book via WhatsApp or just walk in." />
            </p>
            <p className="mt-6 font-body text-base">
              <span className="font-head uppercase text-brass tracking-[0.2em] text-xs mr-2"><T es="Noches" en="Nights" /></span>
              <T es="Jue · Vie · Sáb · Dom" en="Thu · Fri · Sat · Sun" />
            </p>
            <a
              href="https://wa.me/34611688588?text=Hola!%20Quiero%20reservar%20una%20mesa"
              target="_blank" rel="noopener"
              className="mt-9 inline-flex items-center gap-2 font-head uppercase tracking-[0.14em] text-sm border-b border-bone pb-1 hover:text-brass hover:border-brass transition"
            >
              <T es="Reservar mesa →" en="Book a table →" />
            </a>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
