"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { T, useLang } from "@/lib/i18n";
import { ease, fadeUp, inViewProps, stagger } from "@/lib/motion";
import { alPan, bebidas, especiales, paraPicar, pizzas, type MenuItem } from "@/lib/menu";

type TabId = "pizzas" | "picar" | "alpan" | "bebidas";

const TABS: { id: TabId; es: string; en: string }[] = [
  { id: "pizzas",  es: "Pizzas",      en: "Pizzas" },
  { id: "picar",   es: "Para Picar",  en: "Appetizers" },
  { id: "alpan",   es: "Al Pan",      en: "Burgers & Milanesas" },
  { id: "bebidas", es: "Bebidas",     en: "Drinks" },
];

function MenuRow({ item }: { item: MenuItem }) {
  const { lang } = useLang();
  return (
    <div className="grid grid-cols-[1fr_auto] gap-x-6 items-baseline py-4 border-b border-bone/10">
      <div>
        <div className="font-head uppercase tracking-[0.04em] text-[15px] text-bone">
          {lang === "es" ? item.es : item.en}
          {item.veg && <span className="ml-2 text-olive">🌱</span>}
        </div>
        {(item.descEs || item.descEn) && (
          <div className="font-body italic text-bone/55 text-sm mt-1">
            {lang === "es" ? item.descEs : item.descEn}
          </div>
        )}
      </div>
      {item.price && (
        <div className="font-display italic text-2xl text-brass tabular-nums">{item.price}</div>
      )}
    </div>
  );
}

export function MenuSection() {
  const [tab, setTab] = useState<TabId>("pizzas");

  return (
    <section id="menu" className="relative bg-ink text-bone py-24 md:py-32">
      <div className="absolute inset-0 grain opacity-[0.06] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.header
          variants={stagger(0.08, 0.08)}
          {...inViewProps}
          className="mb-14 md:mb-20 text-center"
        >
          <motion.p variants={fadeUp} className="font-head text-brass tracking-[0.32em] text-xs uppercase mb-4">
            <T es="La carta · 2026" en="The menu · 2026" />
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display italic display-italic text-6xl md:text-8xl leading-[0.95]">
            <T es="La carta" en="Menu" />
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 font-body italic text-base text-bone/60 max-w-xl mx-auto">
            <T es="Pizzas, hamburguesas, empanadas, milanesas y cervezas — masa artesanal y horno de piedra."
               en="Pizza, burgers, empanadas, milanesas & beer — artisanal dough and stone oven." />
          </motion.p>
        </motion.header>

        {/* Tabs */}
        <motion.div
          variants={fadeUp}
          {...inViewProps}
          role="tablist"
          aria-label="Menu categories"
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`relative font-head uppercase tracking-[0.16em] text-[13px] px-5 py-3 rounded-full border transition ${
                tab === t.id
                  ? "bg-tomato border-tomato text-bone"
                  : "border-bone/15 text-bone/65 hover:text-brass hover:border-brass/40"
              }`}
            >
              <T es={t.es} en={t.en} />
            </button>
          ))}
        </motion.div>

        {/* Tab panel */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.28, ease }}
            >
              {tab === "pizzas" && (
                <>
                  <p className="text-center text-bone/55 italic mb-10 text-sm md:text-base">
                    <T es="Masa artesanal, horno de piedra. También por porciones (€3,50)."
                       en="Artisanal dough, stone oven. Also by the slice (€3.50)." />
                  </p>
                  <div className="grid md:grid-cols-2 gap-x-12">
                    {pizzas.map((p) => <MenuRow key={p.es} item={p} />)}
                  </div>
                  <div className="relative mt-12 p-7 rounded-2xl border border-brass/30 bg-brass/5">
                    <span className="absolute -top-3 left-7 px-3 bg-ink text-brass font-head text-[11px] tracking-[0.3em] uppercase">
                      <T es="Especiales" en="Specials" />
                    </span>
                    <div className="grid md:grid-cols-2 gap-x-12">
                      {especiales.map((p) => <MenuRow key={p.es} item={p} />)}
                    </div>
                  </div>
                </>
              )}

              {tab === "picar" && (
                <>
                  <p className="text-center text-bone/55 italic mb-10 text-sm md:text-base">
                    <T es="Para empezar, compartir, o picar entre amigos."
                       en="To start, to share, to nibble." />
                  </p>
                  <div className="grid md:grid-cols-2 gap-x-12">
                    {paraPicar.map((p) => <MenuRow key={p.es} item={p} />)}
                  </div>
                </>
              )}

              {tab === "alpan" && (
                <>
                  <p className="text-center text-bone/55 italic mb-10 text-sm md:text-base">
                    <T es="Hamburguesas y milanesas al pan. Extras a 0,99€."
                       en="Burgers and milanesa sandwiches. Add-ons €0.99 each." />
                  </p>
                  <div className="grid md:grid-cols-2 gap-x-12">
                    {alPan.map((p) => <MenuRow key={p.es} item={p} />)}
                  </div>
                  <p className="mt-10 text-center text-bone/70 max-w-3xl mx-auto text-sm">
                    <span className="font-head uppercase tracking-[0.18em] text-brass text-[11px] mr-2">
                      <T es="Extras" en="Add-ons" />
                    </span>
                    <T es="Huevo frito · Bacon · Jamón dulce · Rúcula · Cebolla · Queso de cabra · Cheddar"
                       en="Fried egg · Bacon · Ham · Arugula · Onion · Goat cheese · Cheddar" />
                  </p>
                </>
              )}

              {tab === "bebidas" && (
                <div className="space-y-10">
                  <div>
                    <h3 className="font-head uppercase tracking-[0.2em] text-brass text-xs mb-5">
                      <T es="Cervezas" en="Beer" />
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-10">
                      {bebidas.beer.map((d) => <MenuRow key={d.es} item={d} />)}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-head uppercase tracking-[0.2em] text-brass text-xs mb-5">
                      <T es="Vinos & Cócteles" en="Wine & Cocktails" />
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-10">
                      {bebidas.wineCocktails.map((d) => <MenuRow key={d.es} item={d} />)}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-head uppercase tracking-[0.2em] text-brass text-xs mb-5">
                      <T es="Sin alcohol" en="Non-alcoholic" />
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-10">
                      {bebidas.soft.map((d) => <MenuRow key={d.es} item={d} />)}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
