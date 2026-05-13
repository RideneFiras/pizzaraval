"use client";

import { useLang } from "@/lib/i18n";

export function SwitcherLang() {
  const { lang, setLang } = useLang();
  return (
    <div
      role="toolbar"
      aria-label="Language"
      className="fixed bottom-5 left-5 z-40 inline-flex items-center gap-1 px-1.5 py-1.5 bg-ink/65 backdrop-blur-md border border-bone/15 rounded-full shadow-xl shadow-ink/30 font-body"
    >
      {(["es", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`text-[11px] font-semibold tracking-[0.14em] px-3 py-1.5 rounded-full transition ${
            lang === l ? "bg-bone/15 text-bone" : "text-bone/55 hover:text-bone/85"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
