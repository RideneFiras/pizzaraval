"use client";

import { motion } from "framer-motion";
import { T } from "@/lib/i18n";
import { fadeUp, inViewProps, stagger } from "@/lib/motion";

const LOCATIONS = [
  {
    emoji: "🍕",
    name: "Pizza Raval",
    sub: { es: "Takeaway", en: "Takeaway" },
    addr: ["Carrer de Joaquín Costa, 18", "El Raval · 08001 Barcelona"],
    phone: "+34 611 688 588",
    hours: { es: "Todos los días · 12:30 — 00:00", en: "Every day · 12:30 — 00:00" },
    mapsQuery: "Carrer+de+Joaquin+Costa,+18,+08001+Barcelona",
  },
  {
    emoji: "🍷",
    name: "Pizza Raval Bar",
    sub: { es: "Bar & eventos", en: "Bar & events" },
    addr: ["Carrer de les Sitges, 6", "El Raval · 08001 Barcelona"],
    phone: "+34 611 688 588",
    hours: { es: "Ver Instagram para horarios", en: "See Instagram for event nights" },
    mapsQuery: "Carrer+de+les+Sitges,+6,+08001+Barcelona",
  },
];

export function FindUs() {
  return (
    <section id="find" className="relative bg-ink text-bone py-24 md:py-32">
      <div className="absolute inset-0 grain opacity-[0.06] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.header variants={stagger()} {...inViewProps} className="mb-14 text-center">
          <motion.p variants={fadeUp} className="font-head text-brass tracking-[0.32em] text-xs uppercase mb-4">
            <T es="Dónde estamos" en="Find us" />
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display italic display-italic text-5xl md:text-7xl leading-[0.95]">
            <T es="Dónde estamos." en="Find us." />
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 font-body text-base text-bone/65">
            Metro Liceu <span className="text-bone/40">L3</span> · 4 min &nbsp;·&nbsp; Universitat <span className="text-bone/40">L1/L2</span> · 8 min
          </motion.p>
        </motion.header>

        <motion.div variants={stagger(0.08, 0.12)} {...inViewProps} className="grid md:grid-cols-2 gap-7">
          {LOCATIONS.map((loc) => (
            <motion.article
              key={loc.name}
              variants={fadeUp}
              className="bg-bone/[0.03] border border-bone/10 rounded-2xl p-7"
            >
              <h3 className="font-display italic display-italic text-4xl leading-none">
                <span className="mr-2">{loc.emoji}</span> {loc.name}
                <span className="font-head text-base ml-3 text-bone/55 not-italic tracking-wide">
                  <T es={loc.sub.es} en={loc.sub.en} />
                </span>
              </h3>
              <p className="mt-5 text-bone/85 leading-relaxed">
                {loc.addr.map((line, i) => (
                  <span key={i}>{line}{i < loc.addr.length - 1 ? <br /> : null}</span>
                ))}
              </p>
              <p className="mt-3 text-bone/80">📞 {loc.phone}</p>
              <p className="mt-1 text-bone/80">🕐 <T es={loc.hours.es} en={loc.hours.en} /></p>
              <div className="mt-6 rounded-xl overflow-hidden border border-bone/10 aspect-[16/10] [filter:grayscale(0.4)_contrast(1.05)]">
                <iframe
                  loading="lazy"
                  src={`https://maps.google.com/maps?q=${loc.mapsQuery}&output=embed`}
                  title={`Map: ${loc.name}`}
                  className="w-full h-full border-0"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
