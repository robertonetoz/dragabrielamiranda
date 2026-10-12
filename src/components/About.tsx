"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { career, education, site } from "@/lib/site";
import { Foto } from "./Foto";
import { Regua } from "./Regua";

const abas = [
  { id: "formacao", label: "Formação", itens: education },
  { id: "trajetoria", label: "Trajetória", itens: career },
] as const;

export function About() {
  const [aba, setAba] = useState<(typeof abas)[number]["id"]>("formacao");
  const atual = abas.find((a) => a.id === aba)!;

  return (
    <section id="sobre" className="wrap pb-24 lg:pb-36">
      <Regua />
      <div className="mt-14 grid gap-x-16 gap-y-12 lg:mt-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Foto
            src="/images/dra-gabriela-retrato.jpg"
            alt="Retrato da Dra. Gabriela Miranda sorrindo, de blazer claro"
            sizes="(min-width: 64rem) 36vw, 92vw"
            position="50% 20%"
            className="aspect-[4/5] w-full max-w-[30rem] rounded-tr-[50%_40%]"
          />
          <p className="mt-5 max-w-[30rem] text-[1rem] text-cacau">
            Dra. Gabriela Miranda, médica. {site.crm}
          </p>
        </div>

        <div className="lg:col-span-7">
          <h2 className="display text-[clamp(2.1rem,3.9vw,3.5rem)]">
            Ciência, escuta e um cuidado que respeita quem você é
          </h2>

          <div className="mt-8 max-w-[38rem] space-y-5 text-cafe/90">
            <p>
              Sou médica formada pela Universidade Federal de Uberlândia desde 2017, pós-graduada em
              Obesidade e Emagrecimento pela Sanar e pós-graduanda em Nutrologia e Endocrinologia
              pelo Instituto CDT.
            </p>
            <p>
              Antes do consultório, vivi a emergência, o pronto atendimento, a enfermaria hospitalar
              e anos de gestão médica. Hoje dedico meu trabalho ao emagrecimento, à saúde metabólica
              e à qualidade de vida, com um atendimento próximo, acolhedor e realista.
            </p>
          </div>

          <div className="mt-12">
            <div role="tablist" aria-label="Currículo" className="flex gap-8 border-b border-bronze/40">
              {abas.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  role="tab"
                  id={`aba-${a.id}`}
                  aria-selected={aba === a.id}
                  aria-controls={`painel-${a.id}`}
                  onClick={() => setAba(a.id)}
                  className={`relative cursor-pointer pb-3 font-display text-[1.45rem] transition-colors duration-300 ${
                    aba === a.id ? "text-cafe" : "text-cafe/50 hover:text-cafe/80"
                  }`}
                >
                  {a.label}
                  {aba === a.id && (
                    <motion.span
                      layoutId="aba-ativa"
                      className="absolute inset-x-0 -bottom-px h-[2px] bg-cafe"
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.ul
                key={atual.id}
                role="tabpanel"
                id={`painel-${atual.id}`}
                aria-labelledby={`aba-${atual.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {atual.itens.map((item, i) => (
                  <motion.li
                    key={item.title}
                    className="grid grid-cols-[1fr_auto] gap-x-6 border-b border-bronze/25 py-4"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div>
                      <p className="text-[1.1rem] leading-snug">{item.title}</p>
                      <p className="mt-1 text-[0.98rem] text-cacau">{item.place}</p>
                    </div>
                    <p className="pt-0.5 text-right text-[0.98rem] whitespace-nowrap text-cacau">
                      {item.when}
                    </p>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
