"use client";

import { motion } from "motion/react";

/** Régua que se desenha da esquerda para a direita quando a seção entra na tela. */
export function Regua({ className = "", claro = false }: { className?: string; claro?: boolean }) {
  return (
    <motion.div
      aria-hidden="true"
      className={`regua ${className}`}
      style={claro ? ({ "--tinta": "rgb(244 239 233 / 0.45)" } as React.CSSProperties) : undefined}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
