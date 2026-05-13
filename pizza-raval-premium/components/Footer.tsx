"use client";

import Image from "next/image";
import { T } from "@/lib/i18n";

export function Footer() {
  return (
    <footer className="relative bg-ink text-bone">
      <div className="absolute inset-0 grain opacity-[0.06] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-5 max-w-xs">
            <Image
              src="/assets/logo.jpg"
              alt="Pizza Raval"
              width={104}
              height={104}
              className="rounded-full border border-bone/10"
            />
            <p className="font-display italic text-bone/65 text-lg leading-snug">
              <T
                es={<>"Pizzas, empanadas y milanesas — <span className="text-brass">hechas con las manos y con ganas</span>."</>}
                en={<>"Pizzas, empanadas and milanesas — <span className="text-brass">handmade with love</span>."</>}
              />
            </p>
          </div>
          <div>
            <p className="font-head uppercase tracking-[0.2em] text-brass text-xs mb-4">🍕 Takeaway</p>
            <p className="text-bone/85 leading-relaxed">Carrer de Joaquín Costa, 18<br />El Raval · Barcelona</p>
            <p className="mt-3 font-head uppercase text-xs tracking-[0.2em] text-bone/65">📞 +34 611 688 588</p>
          </div>
          <div>
            <p className="font-head uppercase tracking-[0.2em] text-brass text-xs mb-4">🍷 Bar</p>
            <p className="text-bone/85 leading-relaxed">Carrer de les Sitges, 6<br />El Raval · Barcelona</p>
            <p className="mt-3 font-head uppercase text-xs tracking-[0.2em] text-bone/65">
              <a className="hover:text-brass transition" href="https://www.instagram.com/pizzaraval/" target="_blank" rel="noopener">@pizzaraval</a>
              <span className="mx-2 opacity-40">·</span>
              <a className="hover:text-brass transition" href="https://www.instagram.com/pizzaravalbar/" target="_blank" rel="noopener">@pizzaravalbar</a>
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-bone/10 flex flex-col sm:flex-row gap-2 justify-between font-head text-[10px] uppercase tracking-[0.22em] text-bone/40">
          <p>© Pizza Raval · El Raval, Barcelona</p>
          <p>WhatsApp +34 611 688 588</p>
        </div>
      </div>
    </footer>
  );
}
