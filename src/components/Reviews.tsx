"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { mostMentioned, reviews, site } from "@/lib/site";
import { IconEstrela, IconSeta } from "./icons";
import { Regua } from "./Regua";

const suave = [0.22, 1, 0.36, 1] as const;

function tamanho(texto: string) {
  if (texto.length < 100) return "text-[clamp(1.9rem,3.6vw,3.25rem)] leading-[1.12]";
  if (texto.length < 230) return "text-[clamp(1.55rem,2.7vw,2.4rem)] leading-[1.2]";
  return "text-[clamp(1.3rem,2vw,1.75rem)] leading-[1.3]";
}

export function Reviews() {
  const [indice, setIndice] = useState(0);
  const atual = reviews[indice];
  const ir = (passo: number) => setIndice((i) => (i + passo + reviews.length) % reviews.length);

  return (
    <section id="avaliacoes" className="wrap py-24 lg:py-36">
      <Regua />
      <div className="mt-14 flex flex-wrap items-end justify-between gap-x-12 gap-y-6 lg:mt-20">
        <h2 className="display text-[clamp(2.1rem,3.9vw,3.5rem)]">O que dizem os pacientes</h2>
        <div className="flex items-center gap-3 text-[1.05rem]">
          <span className="flex gap-0.5 text-bronze" aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => (
              <IconEstrela key={i} className="size-[1.1rem]" />
            ))}
          </span>
          <span>
            5 estrelas em {site.reviewCount} opiniões no Doctoralia
          </span>
        </div>
      </div>

      <div className="mt-12 grid gap-x-16 gap-y-10 lg:mt-16 lg:grid-cols-12">
        <ul className="hidden lg:col-span-4 lg:block" aria-label="Pacientes">
          {reviews.map((r, i) => (
            <li key={r.name}>
              <button
                type="button"
                onClick={() => setIndice(i)}
                aria-current={i === indice}
                className={`relative block w-full cursor-pointer border-b border-bronze/25 py-3 pl-5 text-left transition-colors duration-300 ${
                  i === indice ? "text-cafe" : "text-cafe/50 hover:text-cafe/85"
                }`}
              >
                {i === indice && (
                  <motion.span
                    layoutId="paciente-ativo"
                    className="absolute top-1/2 left-0 h-7 w-[2px] -translate-y-1/2 bg-cafe"
                    transition={{ duration: 0.5, ease: suave }}
                  />
                )}
                <span className="font-display text-[1.3rem] leading-tight">{r.name}</span>
                <span className="mt-0.5 block text-[0.92rem] text-cacau">{r.context}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="lg:col-span-8">
          <div className="flex min-h-[22rem] flex-col lg:min-h-[26rem]" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={atual.name}
                initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: suave }}
              >
                <blockquote className={`display ${tamanho(atual.text)} [text-wrap:pretty]`}>
                  “{atual.text}”
                </blockquote>
                <figcaption className="mt-7 text-[1.02rem]">
                  <span className="block">{atual.name}</span>
                  <span className="block text-cacau">
                    {atual.context}, {atual.date}. Opinião verificada pelo Doctoralia.
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              onClick={() => ir(-1)}
              className="flex size-12 cursor-pointer items-center justify-center rounded-full border border-cafe/25 transition-colors duration-300 hover:border-cafe hover:bg-papel"
            >
              <span className="sr-only">Opinião anterior</span>
              <IconSeta className="size-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => ir(1)}
              className="flex size-12 cursor-pointer items-center justify-center rounded-full border border-cafe/25 transition-colors duration-300 hover:border-cafe hover:bg-papel"
            >
              <span className="sr-only">Próxima opinião</span>
              <IconSeta className="size-5" />
            </button>
            <span className="text-[1rem] text-cacau">
              {indice + 1} de {reviews.length}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-x-12 gap-y-6 border-t border-bronze/40 pt-8">
        <div>
          <p className="text-[1rem] text-cacau">O que os pacientes mais mencionam</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {mostMentioned.map((m) => (
              <li key={m} className="rounded-full bg-linho/70 px-4 py-1.5 text-[1rem]">
                {m}
              </li>
            ))}
          </ul>
        </div>
        <a href={site.doctoralia} target="_blank" rel="noopener noreferrer" className="btn btn-contorno">
          Ler todas as opiniões no Doctoralia
        </a>
      </div>
    </section>
  );
}
