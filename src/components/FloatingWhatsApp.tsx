"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { defaultWhatsappMessage, whatsappLink } from "@/lib/site";
import { IconWhatsapp } from "./icons";

/** Atalho fixo para o WhatsApp. Some no topo e enquanto o formulário está na tela. */
export function FloatingWhatsApp() {
  const { scrollY } = useScroll();
  const [passouDoTopo, setPassouDoTopo] = useState(false);
  const [noFormulario, setNoFormulario] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setPassouDoTopo(y > 700));

  useEffect(() => {
    const alvo = document.getElementById("agendar");
    if (!alvo) return;
    const observador = new IntersectionObserver(
      ([entrada]) => setNoFormulario(entrada.isIntersecting),
      { rootMargin: "-25% 0px -25% 0px" },
    );
    observador.observe(alvo);
    return () => observador.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {passouDoTopo && !noFormulario && (
        <motion.a
          href={whatsappLink(defaultWhatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-4 bottom-4 z-30 flex h-14 items-center gap-2.5 rounded-full bg-cafe pr-5 pl-4 text-areia shadow-[0_10px_30px_-10px_rgb(51_36_28/0.55)] transition-colors duration-300 hover:bg-cacau sm:right-6 sm:bottom-6"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <IconWhatsapp className="size-6" />
          <span className="text-[1.02rem] font-medium">WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
