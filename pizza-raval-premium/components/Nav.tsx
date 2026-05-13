"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { T } from "@/lib/i18n";

export function Nav() {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="fixed top-0 inset-x-0 z-40 bg-ink/85 backdrop-blur-md border-b border-bone/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src="/assets/logo.jpg"
            alt="Pizza Raval"
            width={36}
            height={36}
            className="rounded-full border border-bone/10"
            priority
          />
          <span className="font-display italic text-bone text-xl tracking-tight leading-none">
            Pizza Raval
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-[0.18em] uppercase text-bone/65 font-head">
          <a href="#spots" className="hover:text-brass transition-colors"><T es="Locales" en="Spots" /></a>
          <a href="#menu" className="hover:text-brass transition-colors"><T es="Carta" en="Menu" /></a>
          <a href="#reviews" className="hover:text-brass transition-colors"><T es="Reseñas" en="Reviews" /></a>
          <a href="#find" className="hover:text-brass transition-colors"><T es="Visitar" en="Visit" /></a>
        </nav>

        <a
          href="https://wa.me/34611688588?text=Hola!%20Quiero%20hacer%20un%20pedido"
          target="_blank"
          rel="noopener"
          className="hidden sm:inline-flex items-center gap-2 bg-wapp hover:brightness-110 text-white px-4 py-2 rounded-full text-[13px] font-medium transition btn-magnet"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.821 11.821 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </motion.header>
  );
}
