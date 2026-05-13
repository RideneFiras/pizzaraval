"use client";

import { motion } from "framer-motion";
import { T } from "@/lib/i18n";
import { fadeUp, inViewProps, stagger } from "@/lib/motion";

export function OrderReserve() {
  return (
    <section className="relative bg-bone text-ink py-24 md:py-32">
      <div className="absolute inset-0 paper opacity-[0.03] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.header variants={stagger()} {...inViewProps} className="mb-14 text-center">
          <motion.p variants={fadeUp} className="font-head text-tomato tracking-[0.32em] text-xs uppercase mb-4">
            <T es="Pide o reserva" en="Order or book" />
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display italic display-italic text-5xl md:text-7xl leading-[0.95]">
            <T es="Pide o reserva." en="Order or book." />
          </motion.h2>
        </motion.header>

        <motion.div variants={stagger(0.08, 0.12)} {...inViewProps} className="grid md:grid-cols-2 gap-6">
          <motion.article
            variants={fadeUp}
            className="bg-white border border-ink/8 rounded-2xl p-9 md:p-11 transition hover:-translate-y-1 shadow-[0_30px_60px_-50px_rgb(15_14_12_/_0.45)]"
          >
            <span className="text-4xl block">🛵</span>
            <h3 className="font-display italic display-italic text-4xl mt-4 leading-none">
              <T es="Pedido a domicilio" en="Delivery" /> <span className="text-ink/55"><T es="/ Takeaway" en="/ Takeaway" /></span>
            </h3>
            <p className="mt-5 text-ink/72 leading-relaxed">
              <T es="Pizza Raval · Joaquín Costa 18. Pide por WhatsApp y recoge en el local, o te lo llevamos."
                 en="Pizza Raval · Joaquín Costa 18. Order on WhatsApp and pick up, or we deliver." />
            </p>
            <p className="mt-5 font-head uppercase tracking-[0.16em] text-[11px] text-tomato">
              <T es="Todos los días · 12:30 — 00:00" en="Every day · 12:30 — 00:00" />
            </p>
            <a
              href="https://wa.me/34611688588?text=Hola!%20Quiero%20hacer%20un%20pedido%20para%20llevar"
              target="_blank" rel="noopener"
              className="btn-magnet mt-8 inline-flex items-center gap-2 bg-wapp text-white font-head uppercase tracking-[0.14em] text-sm px-6 py-3.5 rounded-full hover:-translate-y-0.5"
            >
              <T es="Pedir por WhatsApp →" en="Order on WhatsApp →" />
            </a>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="bg-white border border-ink/8 rounded-2xl p-9 md:p-11 transition hover:-translate-y-1 shadow-[0_30px_60px_-50px_rgb(15_14_12_/_0.45)]"
          >
            <span className="text-4xl block">🍷</span>
            <h3 className="font-display italic display-italic text-4xl mt-4 leading-none">
              <T es="Reserva en el bar" en="Book at the bar" />
            </h3>
            <p className="mt-5 text-ink/72 leading-relaxed">
              <T es="Pizza Raval Bar · Sitges 6. Para grupos o asegurarte mesa en las noches de más ambiente."
                 en="Pizza Raval Bar · Sitges 6. For groups or to lock in a table on the busiest nights." />
            </p>
            <p className="mt-5 font-head uppercase tracking-[0.16em] text-[11px] text-tomato">
              <T es="Jue · Vie · Sáb · Dom" en="Thu · Fri · Sat · Sun" />
            </p>
            <a
              href="https://wa.me/34611688588?text=Hola!%20Quiero%20reservar%20una%20mesa"
              target="_blank" rel="noopener"
              className="btn-magnet mt-8 inline-flex items-center gap-2 bg-tomato text-bone font-head uppercase tracking-[0.14em] text-sm px-6 py-3.5 rounded-full hover:-translate-y-0.5"
            >
              <T es="Reservar por WhatsApp →" en="Book on WhatsApp →" />
            </a>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
