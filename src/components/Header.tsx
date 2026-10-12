"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setSolid(y > 24);
    setHidden(y > 640 && y > previous);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500 ${
          solid && !open
            ? "bg-areia/85 shadow-[0_1px_0_rgb(176_145_117/0.35)] backdrop-blur-md"
            : "bg-transparent"
        }`}
        animate={{ y: hidden && !open ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="wrap flex h-[4.5rem] items-center justify-between gap-6">
          <a href="#topo" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo-monograma.png"
              alt=""
              width={227}
              height={161}
              priority
              className="h-9 w-auto"
            />
            <span className="leading-none">
              <span className="block font-display text-[0.8rem] tracking-[0.16em] whitespace-nowrap uppercase sm:text-[0.95rem] sm:tracking-[0.2em]">
                {site.name}
              </span>
              <span className="mt-1.5 hidden text-[0.8rem] whitespace-nowrap text-cacau sm:block">
                Emagrecimento e performance
              </span>
            </span>
          </a>

          <nav aria-label="Seções do site" className="hidden items-center gap-5 whitespace-nowrap lg:flex xl:gap-9">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[1rem] text-cafe/80 transition-colors duration-300 hover:text-cafe"
              >
                {item.label}
              </a>
            ))}
            <a href="#agendar" className="btn btn-escuro min-h-11! px-5! text-[1rem]!">
              <span>
                Agendar<span className="hidden xl:inline"> consulta</span>
              </span>
            </a>
          </nav>

          <button
            type="button"
            className="relative -mr-2 flex size-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
            <span
              className={`absolute h-px w-6 bg-cafe transition-transform duration-500 ease-suave ${
                open ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute h-px w-6 bg-cafe transition-transform duration-500 ease-suave ${
                open ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            className="fixed inset-0 z-40 flex flex-col bg-areia px-5 pt-28 pb-8 lg:hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.25rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.25rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.25rem)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Seções do site" className="flex flex-col">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="display border-b border-bronze/40 py-4 text-[2.1rem]"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <a href="#agendar" onClick={() => setOpen(false)} className="btn btn-escuro">
                Agendar consulta
              </a>
              <p className="text-center text-[0.95rem] text-cacau">
                {site.clinic}, {site.city}. {site.crm}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
