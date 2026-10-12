"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { site } from "@/lib/site";
import { Foto } from "./Foto";
import { IconCartao, IconPin, IconVideo } from "./icons";
import { Regua } from "./Regua";

export function Clinic() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const sobe = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const desce = useTransform(scrollYProgress, [0, 1], [-30, 40]);

  return (
    <section id="consultorio" className="bg-papel">
      <div className="wrap py-24 lg:py-36">
        <Regua />
        <div className="mt-14 grid gap-x-16 gap-y-12 lg:mt-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display text-[clamp(2.1rem,3.9vw,3.5rem)]">
              Concept Clinic, em Uberlândia
            </h2>
            <p className="mt-6 max-w-[27rem] text-cafe/90">
              Um espaço calmo e reservado para a sua consulta presencial. Se preferir, o
              atendimento também acontece por vídeo.
            </p>

            <dl className="mt-10 border-t border-bronze/40">
              <div className="grid grid-cols-[auto_1fr] gap-x-5 border-b border-bronze/40 py-5">
                <IconPin className="mt-0.5 size-9 text-bronze" />
                <div>
                  <dt className="font-display text-[1.3rem]">Consulta presencial</dt>
                  <dd className="mt-1 text-cafe/85">
                    {site.street}, {site.district}
                    <br />
                    {site.city}, {site.state}, {site.zip}
                    <br />
                    <a
                      href={site.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link mt-2 inline-block text-cafe"
                    >
                      Abrir no Google Maps
                    </a>
                  </dd>
                </div>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-x-5 border-b border-bronze/40 py-5">
                <IconVideo className="mt-0.5 size-9 text-bronze" />
                <div>
                  <dt className="font-display text-[1.3rem]">Teleconsulta</dt>
                  <dd className="mt-1 text-cafe/85">
                    Por vídeo, de onde você estiver. A bioimpedância é feita nas consultas
                    presenciais.
                  </dd>
                </div>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-x-5 border-b border-bronze/40 py-5">
                <IconCartao className="mt-0.5 size-9 text-bronze" />
                <div>
                  <dt className="font-display text-[1.3rem]">Pagamento</dt>
                  <dd className="mt-1 text-cafe/85">
                    Atendimento particular. Cartão de crédito ou débito, PIX e transferência
                    bancária.
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div ref={ref} className="grid grid-cols-12 items-start gap-4 lg:col-span-7 lg:gap-5">
            <Foto
              src="/images/concept-clinic-fachada.jpg"
              alt="Fachada da Concept Clinic iluminada à noite, com o nome Concept na parede"
              sizes="(min-width: 64rem) 46vw, 92vw"
              position="60% 60%"
              className="col-span-12 aspect-[16/11] rounded-tr-[38%_55%]"
            />
            <motion.div className="col-span-7" style={reduce ? undefined : { y: desce }}>
              <Foto
                src="/images/concept-clinic-recepcao.jpg"
                alt="Recepção da Concept Clinic, com balcão de madeira e iluminação suave"
                sizes="(min-width: 64rem) 27vw, 56vw"
                className="aspect-[5/4]"
              />
            </motion.div>
            <motion.div className="col-span-5" style={reduce ? undefined : { y: sobe }}>
              <Foto
                src="/images/concept-clinic-espera.jpg"
                alt="Sala de espera da Concept Clinic, com três poltronas claras"
                sizes="(min-width: 64rem) 19vw, 40vw"
                position="20% 50%"
                className="aspect-[4/5] rounded-bl-[50%_40%]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
