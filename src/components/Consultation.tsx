"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { steps } from "@/lib/site";
import { Foto } from "./Foto";
import { IconBioimpedancia, IconConversa, IconExames, IconPlano } from "./icons";
import { Regua } from "./Regua";

const icones = {
  conversa: IconConversa,
  exames: IconExames,
  bioimpedancia: IconBioimpedancia,
  plano: IconPlano,
};

export function Consultation() {
  const lista = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: lista, offset: ["start 0.72", "end 0.6"] });
  const [etapa, setEtapa] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setEtapa(Math.min(steps.length - 1, Math.floor(v * steps.length)));
  });

  return (
    <section id="consulta" className="bg-papel">
      <div className="wrap py-24 lg:py-36">
        <Regua />
        <div className="mt-14 grid gap-x-16 gap-y-14 lg:mt-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display text-[clamp(2.1rem,3.9vw,3.5rem)]">Como é a consulta</h2>
            <p className="mt-6 max-w-[28rem] text-cafe/90">
              Uma avaliação completa da sua rotina, do seu histórico, dos seus exames e da sua
              composição corporal, para que o tratamento seja realmente seu.
            </p>
            <Foto
              src="/images/dra-gabriela-atendimento.jpg"
              alt="Dra. Gabriela Miranda trabalhando no notebook em seu consultório"
              sizes="(min-width: 64rem) 34vw, 92vw"
              position="50% 30%"
              className="mt-10 aspect-[4/5] w-full max-w-[28rem] rounded-tl-[50%_40%]"
            />
          </div>

          <ol ref={lista} className="relative lg:col-span-7 lg:pt-4">
            {/* A régua vertical marca o caminho; o traço escuro avança com a rolagem. */}
            <div aria-hidden="true" className="regua-vertical absolute inset-y-0 left-0" />
            <motion.div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-[2px] origin-top bg-cafe motion-reduce:hidden"
              style={{ scaleY: scrollYProgress }}
            />

            {steps.map((step, i) => {
              const Icone = icones[step.icon];
              const ativa = i <= etapa;
              return (
                <li
                  key={step.title}
                  className={`grid grid-cols-[auto_1fr] gap-x-5 pb-14 pl-10 transition-opacity duration-700 last:pb-0 motion-reduce:opacity-100 sm:gap-x-8 sm:pl-14 ${
                    ativa ? "opacity-100" : "opacity-35"
                  }`}
                >
                  <span className="display w-[1.1em] text-[clamp(3rem,6vw,4.75rem)] leading-[0.85] text-bronze">
                    {i + 1}
                  </span>
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="display text-[clamp(1.5rem,2.6vw,2.1rem)]">{step.title}</h3>
                      <Icone className="hidden size-12 shrink-0 text-bronze sm:block" />
                    </div>
                    <p className="mt-3 max-w-[32rem] text-cafe/90">{step.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
