"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { T } from "@/lib/i18n";
import { ease } from "@/lib/motion";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative isolate h-[100svh] min-h-[760px] w-full overflow-hidden text-bone"
    >
      {/* Full-bleed background photo */}
      <motion.div
        style={{ scale: imageScale }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/assets/food-5.png"
          alt="Pizza Raval pizza on a wooden board"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Tinted overlay (parallax-driven darkness) */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 -z-10 bg-ink"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 grain opacity-[0.06]" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink via-ink/70 to-transparent"
        aria-hidden
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative h-full flex flex-col justify-end pt-24 pb-12 md:pb-16 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="font-head text-brass tracking-[0.4em] text-[11px] md:text-xs uppercase mb-5"
        >
          <T es="El Raval · Barcelona · 2020" en="El Raval · Barcelona · est. 2020" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.45 }}
          className="font-display italic display-italic leading-[0.92] tracking-[-0.02em] text-[clamp(3.5rem,11vw,9.5rem)] max-w-4xl"
        >
          <T
            es={<>Pizza al estilo <span className="text-brass">argentino</span>.</>}
            en={<>Argentine-style <span className="text-brass">pizza</span>.</>}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.7 }}
          className="mt-5 max-w-xl text-base md:text-lg text-bone/80 leading-relaxed"
        >
          <T
            es="Empanadas hechas a mano, milanesas y un bar que abre hasta tarde. En el corazón del Raval desde 2020."
            en="Handmade empanadas, milanesas and a bar that stays open late. In the heart of El Raval since 2020."
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.85 }}
          className="mt-9 flex flex-col sm:flex-row gap-3"
        >
          <a
            href="https://wa.me/34611688588?text=Hola!%20Quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener"
            className="btn-magnet inline-flex items-center justify-center gap-3 bg-wapp text-white font-head text-[15px] uppercase tracking-[0.12em] px-7 py-4 rounded-full hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.821 11.821 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
            </svg>
            <T es="Pedir por WhatsApp" en="Order on WhatsApp" />
          </a>
          <a
            href="#menu"
            className="btn-magnet inline-flex items-center justify-center gap-3 border border-bone/30 hover:border-brass hover:text-brass text-bone font-head text-[15px] uppercase tracking-[0.12em] px-7 py-4 rounded-full"
          >
            <T es="Ver la carta →" en="View menu →" />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-10 font-body text-bone/55 text-xs md:text-sm"
        >
          <span className="text-brass">★</span>
          <T
            es=" 8.7/10 TheFork · 4.7/5 Restaurant Guru · 300+ reseñas"
            en=" 8.7/10 TheFork · 4.7/5 Restaurant Guru · 300+ reviews"
          />
        </motion.p>
      </motion.div>
    </section>
  );
}
