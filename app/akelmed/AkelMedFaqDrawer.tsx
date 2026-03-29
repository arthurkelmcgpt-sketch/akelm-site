"use client";

import { useState } from "react";
import { CircleHelp, X } from "lucide-react";

export type AkelMedFaq = {
  answer: string;
  question: string;
};

export default function AkelMedFaqDrawer({
  faqs,
}: {
  faqs: ReadonlyArray<AkelMedFaq>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-expanded={open}
        aria-controls="akelmed-faq-drawer"
        className="fixed bottom-2 right-2 z-[9999] inline-flex items-center gap-2 rounded-full border border-red-500/15 bg-[#111827] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(15,23,42,0.3)] transition hover:-translate-y-0.5 hover:bg-red-900 sm:bottom-4 sm:right-4"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <CircleHelp className="h-4 w-4" />
        FAQ AkelMed
      </button>

      <div
        aria-hidden={!open}
        className={[
          "fixed inset-0 z-[9998] bg-slate-950/35 backdrop-blur-[2px] transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        onClick={() => setOpen(false)}
      />

      <aside
        id="akelmed-faq-drawer"
        className={[
          "fixed bottom-16 right-2 z-[9999] w-[min(94vw,28rem)] overflow-hidden rounded-[1.75rem] border border-red-500/15 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.2)] transition-all duration-300 sm:bottom-20 sm:right-4",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        ].join(" ")}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-red-900/70">
              Perguntas frequentes
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Dúvidas comuns sobre o AkelMed
            </p>
          </div>

          <button
            aria-label="Fechar FAQ"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100"
            onClick={() => setOpen(false)}
            type="button"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[65vh] space-y-3 overflow-auto p-5">
          {faqs.map((faq) => (
            <details
              className="group overflow-hidden rounded-[1.25rem] border border-red-500/15 bg-red-950/5 px-4 py-3"
              key={faq.question}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-slate-800">
                <span>{faq.question}</span>
                <span className="shrink-0 text-red-900 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </aside>
    </>
  );
}
