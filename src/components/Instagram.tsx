import Image from "next/image";
import { instagramTopics, site } from "@/lib/site";
import { IconInstagram } from "./icons";
import { Regua } from "./Regua";

const fotos = [
  {
    src: "/images/dra-gabriela-avaliacao.jpg",
    alt: "Dra. Gabriela Miranda, de máscara e luvas, durante um atendimento",
    position: "50% 30%",
    className: "sm:col-span-3 sm:row-span-2",
    frame: "sm:aspect-[4/5]",
  },
  {
    src: "/images/dra-gabriela-implante.jpg",
    alt: "Dra. Gabriela Miranda, de touca e máscara, realizando um procedimento",
    position: "50% 20%",
    className: "sm:col-span-2",
    frame: "sm:aspect-auto sm:h-full",
  },
  {
    src: "/images/dra-gabriela-procedimento.jpg",
    alt: "Dra. Gabriela Miranda, de máscara e luvas, aplicando um procedimento",
    position: "85% 40%",
    className: "sm:col-span-2",
    frame: "sm:aspect-auto sm:h-full",
  },
];

export function Instagram() {
  return (
    <section className="wrap py-24 lg:py-36">
      <Regua />
      <div className="mt-14 grid gap-x-16 gap-y-12 lg:mt-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="display text-[clamp(2.1rem,3.9vw,3.5rem)]">
            Dicas de saúde no Instagram
          </h2>
          <p className="mt-6 max-w-[27rem] text-cafe/90">
            No perfil, falo de emagrecimento, hormônios e rotina sem complicar. Alguns dos temas
            que já passaram por lá:
          </p>
          <ul className="mt-8 max-w-[30rem] border-t border-bronze/40">
            {instagramTopics.map((t) => (
              <li
                key={t}
                className="border-b border-bronze/40 py-3.5 font-display text-[1.3rem] leading-snug italic"
              >
                {t}
              </li>
            ))}
          </ul>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-escuro mt-9"
          >
            <IconInstagram className="size-5" />
            Seguir {site.instagramHandle}
          </a>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <ul className="sem-barra -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 sm:mx-0 sm:grid sm:grid-cols-5 sm:grid-rows-2 sm:gap-5 sm:overflow-visible sm:px-0">
            {fotos.map((f) => (
              <li key={f.src} className={`w-[68vw] shrink-0 snap-center sm:w-auto ${f.className}`}>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative block aspect-[3/4] overflow-hidden bg-linho ${f.frame}`}
                >
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 64rem) 32vw, (min-width: 40rem) 55vw, 68vw"
                    className="object-cover transition-transform duration-[1.2s] ease-suave group-hover:scale-[1.05]"
                    style={{ objectPosition: f.position }}
                  />
                  <span className="sr-only">Ver no Instagram</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
