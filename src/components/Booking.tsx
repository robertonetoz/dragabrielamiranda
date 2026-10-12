"use client";

import Image from "next/image";
import { useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { motion } from "motion/react";
import { site, whatsappLink } from "@/lib/site";
import { IconEstrela, IconWhatsapp } from "./icons";
import { Regua } from "./Regua";

const objetivos = [
  "Emagrecimento",
  "Ganho de massa muscular",
  "Saúde hormonal",
  "Mais energia e disposição",
  "Check-up",
  "Outro",
];

const formatos = [
  { id: "presencial", label: "Presencial em Uberlândia" },
  { id: "tele", label: "Teleconsulta por vídeo" },
] as const;

const periodos = ["Manhã", "Tarde", "Noite", "Tanto faz"];

type Dados = {
  nome: string;
  objetivo: string;
  formato: (typeof formatos)[number]["id"];
  primeira: boolean;
  periodo: string;
  mensagem: string;
};

/** Monta a mensagem linha a linha. Os asteriscos viram negrito no WhatsApp. */
function montarMensagem(d: Dados, nomeVazio: string) {
  const linhas = [
    `Olá, Dra. Gabriela! Meu nome é *${d.nome.trim() || nomeVazio}*.`,
    d.formato === "tele"
      ? "Gostaria de agendar uma *teleconsulta*."
      : "Gostaria de agendar uma consulta *presencial* em Uberlândia.",
    "",
    `*Objetivo:* ${d.objetivo}`,
    `*Primeira consulta:* ${d.primeira ? "sim" : "não, já sou paciente"}`,
    `*Melhor período:* ${d.periodo.toLowerCase()}`,
  ];
  if (d.mensagem.trim()) linhas.push("", d.mensagem.trim());
  return linhas;
}

function comNegrito(linha: string): ReactNode[] {
  return linha.split(/(\*[^*]+\*)/g).map((trecho, i) =>
    trecho.startsWith("*") && trecho.endsWith("*") ? (
      <strong key={i} className="font-semibold">
        {trecho.slice(1, -1)}
      </strong>
    ) : (
      trecho
    ),
  );
}

function Opcoes<T extends string>({
  legenda,
  nome,
  opcoes,
  valor,
  aoMudar,
}: {
  legenda: string;
  nome: string;
  opcoes: readonly { id: T; label: string }[];
  valor: T;
  aoMudar: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend className="text-[1rem] text-areia/70">{legenda}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {opcoes.map((o) => (
          <label key={o.id} className="cursor-pointer">
            <input
              type="radio"
              name={nome}
              value={o.id}
              checked={valor === o.id}
              onChange={() => aoMudar(o.id)}
              className="peer sr-only"
            />
            <span className="block rounded-full border border-areia/30 px-4 py-2 text-[1.02rem] transition-colors duration-300 peer-checked:border-areia peer-checked:bg-areia peer-checked:text-noite peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-areia hover:border-areia/70">
              {o.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

const texto = (lista: string[]) => lista.map((v) => ({ id: v, label: v }));

export function Booking() {
  const id = useId();
  const campoNome = useRef<HTMLInputElement>(null);
  const [dados, setDados] = useState<Dados>({
    nome: "",
    objetivo: objetivos[0],
    formato: "presencial",
    primeira: true,
    periodo: periodos[3],
    mensagem: "",
  });
  const [erro, setErro] = useState(false);
  const [aberta, setAberta] = useState(false);

  const mudar = <K extends keyof Dados>(campo: K, valor: Dados[K]) => {
    setDados((d) => ({ ...d, [campo]: valor }));
    setAberta(false);
  };

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    if (dados.nome.trim().length < 2) {
      setErro(true);
      campoNome.current?.focus();
      return;
    }
    const mensagem = montarMensagem(dados, "").join("\n");
    window.open(whatsappLink(mensagem), "_blank", "noopener,noreferrer");
    setAberta(true);
  };

  const previa = montarMensagem(dados, "seu nome");

  return (
    <section id="agendar" className="sobre-escuro bg-noite text-areia">
      <div className="wrap py-24 lg:py-36">
        <Regua claro />
        <div className="mt-14 max-w-[46rem] lg:mt-20">
          <h2 className="display text-[clamp(2.4rem,4.8vw,4.5rem)]">Agende sua consulta</h2>
          <p className="mt-6 text-[1.2rem] text-areia/80">
            Preencha os campos e a mensagem chega pronta ao WhatsApp da Dra. Gabriela. Se preferir
            escolher o horário agora, a agenda completa está no Doctoralia.
          </p>
        </div>

        <div className="mt-14 grid gap-x-16 gap-y-16 lg:mt-20 lg:grid-cols-12">
          <form onSubmit={enviar} noValidate className="space-y-9 lg:col-span-7">
            <div>
              <label htmlFor={`${id}-nome`} className="text-[1rem] text-areia/70">
                Seu nome
              </label>
              <input
                ref={campoNome}
                id={`${id}-nome`}
                type="text"
                autoComplete="name"
                value={dados.nome}
                aria-invalid={erro}
                aria-describedby={erro ? `${id}-erro` : undefined}
                onChange={(e) => {
                  mudar("nome", e.target.value);
                  if (erro) setErro(false);
                }}
                placeholder="Como você gostaria de ser chamada(o)"
                className={`mt-2 block w-full border-b bg-transparent py-3 font-display text-[1.6rem] font-light outline-none transition-colors duration-300 placeholder:text-areia/30 focus:border-areia ${
                  erro ? "border-[#e8a48c]" : "border-areia/30"
                }`}
              />
              {erro && (
                <p id={`${id}-erro`} role="alert" className="mt-2 text-[1rem] text-[#e8a48c]">
                  Escreva seu nome para a mensagem ficar completa.
                </p>
              )}
            </div>

            <Opcoes
              legenda="O que você busca"
              nome="objetivo"
              opcoes={texto(objetivos)}
              valor={dados.objetivo}
              aoMudar={(v) => mudar("objetivo", v)}
            />

            <Opcoes
              legenda="Formato da consulta"
              nome="formato"
              opcoes={formatos}
              valor={dados.formato}
              aoMudar={(v) => mudar("formato", v)}
            />

            <div className="grid gap-9 sm:grid-cols-2">
              <Opcoes
                legenda="É sua primeira consulta?"
                nome="primeira"
                opcoes={[
                  { id: "sim", label: "Sim" },
                  { id: "nao", label: "Não, já sou paciente" },
                ]}
                valor={dados.primeira ? "sim" : "nao"}
                aoMudar={(v) => mudar("primeira", v === "sim")}
              />
              <Opcoes
                legenda="Melhor período"
                nome="periodo"
                opcoes={texto(periodos)}
                valor={dados.periodo}
                aoMudar={(v) => mudar("periodo", v)}
              />
            </div>

            <div>
              <label htmlFor={`${id}-mensagem`} className="text-[1rem] text-areia/70">
                Algo que queira contar (opcional)
              </label>
              <textarea
                id={`${id}-mensagem`}
                rows={3}
                value={dados.mensagem}
                onChange={(e) => mudar("mensagem", e.target.value)}
                placeholder="Dias de preferência, dúvidas, o que já tentou..."
                className="mt-2 block w-full resize-y border-b border-areia/30 bg-transparent py-3 text-[1.1rem] outline-none transition-colors duration-300 placeholder:text-areia/30 focus:border-areia"
              />
            </div>

            <div>
              <button type="submit" className="btn btn-claro w-full sm:w-auto">
                <IconWhatsapp className="size-5" />
                Abrir conversa no WhatsApp
              </button>
              <p role="status" className="mt-4 min-h-[1.6em] text-[1rem] text-areia/70">
                {aberta
                  ? "Conversa aberta no WhatsApp. Confira a mensagem e toque em enviar."
                  : "Nada fica salvo neste site. Você revisa a mensagem antes de enviar."}
              </p>
            </div>
          </form>

          <div className="space-y-12 lg:col-span-5">
            <div>
              <p className="text-[1rem] text-areia/70">Prévia da sua mensagem</p>
              <div className="mt-3 rounded-[1.75rem] rounded-br-md bg-linho p-5 text-[1.05rem] leading-[1.5] text-cafe sm:p-6">
                <div className="mb-4 flex items-center gap-3 border-b border-bronze/40 pb-4">
                  <span className="flex size-11 items-center justify-center rounded-full bg-areia">
                    <Image
                      src="/images/logo-monograma.png"
                      alt=""
                      width={227}
                      height={161}
                      className="h-5 w-auto"
                    />
                  </span>
                  <span className="leading-tight">
                    <span className="block font-display text-[1.15rem]">{site.name}</span>
                    <span className="block text-[0.92rem] text-cacau">
                      WhatsApp {site.whatsappDisplay}
                    </span>
                  </span>
                </div>
                {previa.map((linha, i) =>
                  linha === "" ? (
                    <div key={i} className="h-3" />
                  ) : (
                    <motion.p
                      key={`${i}-${linha}`}
                      className="-mx-1.5 rounded px-1.5 [overflow-wrap:anywhere] whitespace-pre-wrap"
                      initial={{ backgroundColor: "rgb(176 145 117 / 0.45)" }}
                      animate={{ backgroundColor: "rgb(176 145 117 / 0)" }}
                      transition={{ duration: 0.9 }}
                    >
                      {comNegrito(linha)}
                    </motion.p>
                  ),
                )}
              </div>
            </div>

            <div className="border-t border-areia/25 pt-8">
              <h3 className="display text-[1.9rem]">Prefere escolher o horário agora?</h3>
              <p className="mt-3 text-areia/80">
                No Doctoralia você vê os horários livres, presenciais ou por vídeo, e confirma a
                consulta na hora, com pagamento online.
              </p>
              <a
                href={site.doctoralia}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-contorno-claro mt-6"
              >
                Ver horários no Doctoralia
              </a>
              <p className="mt-5 flex items-center gap-2.5 text-[1rem] text-areia/70">
                <span className="flex gap-0.5 text-bronze" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => (
                    <IconEstrela key={i} className="size-4" />
                  ))}
                </span>
                {site.reviewCount} opiniões de pacientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
