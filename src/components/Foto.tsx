"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

type FotoProps = {
  src: string;
  alt: string;
  sizes: string;
  /** Classes do recorte: proporção, canto arredondado, largura. */
  className?: string;
  /** Posição do enquadramento dentro do recorte. */
  position?: string;
  priority?: boolean;
};

/** Foto que se revela de baixo para cima, como uma cortina, ao entrar na tela. */
export function Foto({ src, alt, sizes, className = "", position = "center", priority }: FotoProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`relative overflow-hidden bg-linho ${className}`}
      initial={reduce ? false : { clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.14 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={{ objectPosition: position }}
        />
      </motion.div>
    </motion.div>
  );
}
