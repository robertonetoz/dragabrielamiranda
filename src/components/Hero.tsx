"use client";

import Image from "next/image";
import { useEffect } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { site } from "@/lib/site";
import { IconEstrela } from "./icons";

const suave = [0.22, 1, 0.36, 1] as const;

const linhas = ["O emagrecimento", "vai muito além", "da balança."];

/* O que o mostrador mede no lugar dos quilos. */
const medidas = [
  "composição corporal",
  "energia",
  "sono",
  "hormônios",
  "força",
  "exames",
  "rotina",
  "autoestima",
];

const marcas = Array.from({ length: 120 }, (_, i) => {
  const angulo = (i * 3 * Math.PI) / 180;
  const longa = i % 5 === 0;
  const r1 = 384;
  const r2 = longa ? 410 : 396;
  return {
    x1: (500 + r1 * Math.sin(angulo)).toFixed(2),
    y1: (500 - r1 * Math.cos(angulo)).toFixed(2),
    x2: (500 + r2 * Math.sin(angulo)).toFixed(2),
    y2: (500 - r2 * Math.cos(angulo)).toFixed(2),
    longa,
  };
});

/**
 * O mostrador de uma balança mecânica: o disco gira sob um ponteiro fixo.
 * Aqui ele oscila e assenta ao carregar, e segue girando com a rolagem.
 */
function Mostrador() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const assento = useMotionValue(-150);
  const giro = useTransform(scrollY, [0, 1400], [0, -80]);
  const rotate = useTransform(() => assento.get() + giro.get());

  useEffect(() => {
    if (reduce) {
      assento.set(0);
      return;
    }
    const controle = animate(assento, 0, {
      type: "spring",
      stiffness: 30,
      damping: 7,
      mass: 1.2,
      delay: 0.35,
    });
    return () => controle.stop();
  }, [reduce, assento]);

  return (
    <div className="relative aspect-square w-full">
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ rotate: reduce ? 0 : rotate }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <svg viewBox="0 0 1000 1000" className="size-full" aria-hidden="true">
          <defs>
            <path id="trilho-medidas" d="M500 942A442 442 0 1 1 500.01 942" />
          </defs>
          <g className="stroke-bronze" strokeLinecap="round">
            {marcas.map((m, i) => (
              <line
                key={i}
                x1={m.x1}
                y1={m.y1}
                x2={m.x2}
                y2={m.y2}
                strokeWidth={m.longa ? 1.6 : 1}
                opacity={m.longa ? 1 : 0.6}
              />
            ))}
          </g>
          <g transform="rotate(22.5 500 500)">
            <text
              className="fill-cacau"
              style={{ fontFamily: "var(--font-ysabeau)", fontStyle: "italic" }}
              fontSize="29"
              letterSpacing="0.6"
              textAnchor="middle"
            >
              {medidas.map((medida, i) => (
                <textPath
                  key={medida}
                  href="#trilho-medidas"
                  startOffset={`${((i + 0.5) / medidas.length) * 100}%`}
                >
                  {medida}
                </textPath>
              ))}
            </text>
          </g>
        </svg>
      </motion.div>

      <svg viewBox="0 0 1000 1000" className="absolute inset-0 size-full" aria-hidden="true">
        <motion.path
          d="M563.6 139.600A366 366 0 1 1 436.4 139.6"
          fill="none"
          className="stroke-bronze"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: suave, delay: 0.3 }}
        />
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <line x1="500" y1="150" x2="500" y2="76" className="stroke-cafe" strokeWidth="2" strokeLinecap="round" />
          <circle cx="500" cy="150" r="5" className="fill-cafe" />
        </motion.g>
      </svg>

      <motion.div
        className="absolute inset-[16%] overflow-hidden rounded-full bg-linho"
        initial={reduce ? false : { clipPath: "circle(0% at 50% 50%)" }}
        animate={{ clipPath: "circle(50% at 50% 50%)" }}
        transition={{ duration: 1.5, ease: suave, delay: 0.2 }}
      >
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.18 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: suave, delay: 0.2 }}
        >
          <Image
            src="/images/dra-gabriela-poltrona.jpg"
            alt="Dra. Gabriela Miranda sentada em uma poltrona do consultório, de blazer preto"
            fill
            priority
            quality={90}
            sizes="(min-width: 64rem) 40vw, 88vw"
            className="object-cover object-[50%_16%]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="wrap relative flex min-h-[max(100svh,44rem)] flex-col pt-28 pb-14 lg:justify-center lg:pt-24 lg:pb-16">
        <div className="relative z-10 lg:max-w-[47%]">
          <h1 className="display w-max text-[clamp(2.1rem,11.4vw,3.4rem)] whitespace-nowrap lg:text-[clamp(3.4rem,6.1vw,6rem)]">
            {linhas.map((linha, i) => (
              <span key={linha} className="-my-[0.12em] block overflow-hidden py-[0.12em]">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "115%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.15, ease: suave, delay: 0.12 + i * 0.11 }}
                >
                  {linha}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
          >
            <p className="mt-7 max-w-[32rem] text-[1.2rem] leading-[1.55] text-cafe/85 lg:mt-9">
              Sou a Dra. Gabriela Miranda, médica em Uberlândia. Cuido de emagrecimento, saúde
              metabólica e performance com avaliação completa, exames e um plano feito para a sua
              rotina.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#agendar" className="btn btn-escuro">
                Agendar consulta
              </a>
              <a href={site.doctoralia} target="_blank" rel="noopener noreferrer" className="btn btn-contorno">
                Ver horários no Doctoralia
              </a>
            </div>

            <a
              href="#avaliacoes"
              className="group mt-9 inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-[1rem] text-cafe/80"
            >
              <span className="flex gap-0.5 text-bronze" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => (
                  <IconEstrela key={i} className="size-4" />
                ))}
              </span>
              <span className="link">
                5 estrelas em {site.reviewCount} opiniões no Doctoralia
              </span>
            </a>
            <p className="mt-2 text-[1rem] text-cacau">{site.crm}</p>
          </motion.div>
        </div>

        <div className="pointer-events-none relative -mx-[16vw] mt-10 lg:absolute lg:top-1/2 lg:-right-[7vw] lg:mx-0 lg:mt-4 lg:w-[min(56vw,52rem,88svh)] lg:-translate-y-1/2">
          <Mostrador />
        </div>
      </div>
    </section>
  );
}
