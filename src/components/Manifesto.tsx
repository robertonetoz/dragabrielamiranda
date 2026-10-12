"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

const frase =
  "Acredito que emagrecer vai muito além da estética. É conquistar mais saúde, disposição e autoestima, com resultados que se sustentam.";

function Palavra({
  children,
  progresso,
  faixa,
}: {
  children: string;
  progresso: MotionValue<number>;
  faixa: [number, number];
}) {
  const opacity = useTransform(progresso, faixa, [0.22, 1]);
  return <motion.span style={{ opacity }}>{children} </motion.span>;
}

/** A frase ganha tinta palavra por palavra, no ritmo da rolagem. */
export function Manifesto() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.88", "end 0.5"] });
  const palavras = frase.split(" ");

  return (
    <section className="wrap py-24 lg:py-40">
      <p
        ref={ref}
        className="display max-w-[20em] text-[clamp(1.9rem,4.3vw,4rem)] leading-[1.12] motion-reduce:[&_span]:opacity-100!"
      >
        {palavras.map((palavra, i) => (
          <Palavra
            key={i}
            progresso={scrollYProgress}
            faixa={[i / palavras.length, (i + 1) / palavras.length]}
          >
            {palavra}
          </Palavra>
        ))}
      </p>
      <p className="mt-8 font-display text-[1.35rem] italic text-cacau">Dra. Gabriela Miranda</p>
    </section>
  );
}
