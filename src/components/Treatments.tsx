"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import { AnimatePresence, motion } from "motion/react";
import { services, site, treatments, treatmentsVisible, type IconName } from "@/lib/site";
import { Foto } from "./Foto";
import {
  IconBalanca,
  IconEnergia,
  IconHormonio,
  IconIntestino,
  IconMais,
  IconMetabolismo,
  IconMusculo,
} from "./icons";
import { Regua } from "./Regua";

const icones: Record<IconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  balanca: IconBalanca,
  musculo: IconMusculo,
  metabolismo: IconMetabolismo,
  hormonio: IconHormonio,
  energia: IconEnergia,
  intestino: IconIntestino,
};

const suave = [0.22, 1, 0.36, 1] as const;
const totalCondicoes = treatments.reduce((n, t) => n + t.conditions.length, 0);

export function Treatments() {
  const [abertos, setAbertos] = useState<Set<number>>(new Set());
  const [todas, setTodas] = useState(false);

  const alternar = (i: number) =>
    setAbertos((atual) => {
      const novo = new Set(atual);
      if (novo.has(i)) novo.delete(i);
      else novo.add(i);
      return novo;
    });

  const alternarTodas = () => {
    setAbertos(todas ? new Set() : new Set(treatments.map((_, i) => i)));
    setTodas(!todas);
  };

  const visiveis = todas ? treatments : treatments.slice(0, treatmentsVisible);

  return (
    <section id="tratamentos" className="wrap pb-24 lg:pb-36">
      <Regua />
      <div className="mt-14 grid gap-x-16 gap-y-12 lg:mt-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h2 className="display text-[clamp(2.1rem,3.9vw,3.5rem)]">O que eu trato</h2>
            <p className="mt-6 max-w-[26rem] text-cafe/90">
              Cada tratamento começa por entender o seu corpo e a sua história. Toque em um tema
              para ver as condições que acompanho.
            </p>
            <Foto
              src="/images/dra-gabriela-consultorio.jpg"
              alt="Dra. Gabriela Miranda no consultório, de terno branco"
              sizes="(min-width: 64rem) 24vw, 0px"
              position="50% 12%"
              className="mt-10 hidden aspect-[4/5] w-full max-w-[21rem] rounded-bl-[50%_40%] lg:block"
            />
          </div>
        </div>

        <div className="lg:col-span-8">
          <ul className="border-t border-bronze/50">
            <AnimatePresence initial={false}>
              {visiveis.map((t, i) => {
                const Icone = icones[t.icon];
                const aberto = abertos.has(i);
                return (
                  <motion.li
                    key={t.title}
                    className="overflow-hidden border-b border-bronze/50"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: suave }}
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={aberto}
                        aria-controls={`condicoes-${i}`}
                        onClick={() => alternar(i)}
                        className="group grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-x-5 py-6 text-left sm:gap-x-7 sm:py-7"
                      >
                        <Icone className="size-11 text-bronze transition-transform duration-700 ease-suave group-hover:-rotate-12 sm:size-14" />
                        <span>
                          <span className="display block text-[clamp(1.5rem,2.6vw,2.2rem)]">
                            {t.title}
                          </span>
                          <span className="mt-1.5 block text-[1.02rem] font-normal text-cafe/75">
                            {t.summary}
                          </span>
                        </span>
                        <span
                          className={`flex size-10 items-center justify-center rounded-full border border-cafe/25 transition-[transform,background-color,color] duration-500 ease-suave group-hover:border-cafe ${
                            aberto ? "rotate-45 bg-cafe text-areia" : ""
                          }`}
                        >
                          <IconMais className="size-4.5" />
                        </span>
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {aberto && (
                        <motion.div
                          id={`condicoes-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: suave }}
                          className="overflow-hidden"
                        >
                          <ul className="flex flex-wrap gap-2 pb-7 sm:pl-[5.25rem]">
                            {t.conditions.map((c, j) => (
                              <motion.li
                                key={c}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.08 + j * 0.035, duration: 0.4 }}
                                className="rounded-full bg-linho/70 px-4 py-1.5 text-[1rem]"
                              >
                                {c}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </ul>

          <button
            type="button"
            onClick={alternarTodas}
            aria-expanded={todas}
            className="btn btn-contorno mt-8"
          >
            {todas ? "Mostrar menos" : `Ver todas as ${totalCondicoes} condições`}
          </button>

          <div className="mt-16 lg:mt-20">
            <h3 className="font-display text-[1.45rem]">Tipos de consulta</h3>
            <ul className="mt-5 grid gap-x-10 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s} className="border-b border-bronze/25 py-3 text-[1.05rem]">
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[38rem] text-[1rem] text-cacau">
              Atendimento para adultos, particular. Valores e horários de cada consulta estão no{" "}
              <a href={site.doctoralia} target="_blank" rel="noopener noreferrer" className="link text-cafe">
                Doctoralia
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
