import type { SVGProps } from "react";

/*
 * Ícones desenhados para este site com a geometria do monograma GM:
 * arcos de círculo e retas, traço fino, pontas arredondadas.
 */

type IconProps = SVGProps<SVGSVGElement>;

function Traco({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconBalanca(props: IconProps) {
  return (
    <Traco {...props}>
      <path d="M7 31A17 17 0 0 1 41 31" />
      <path d="M9.3 22.5l3.4 2M15.5 16.3l2 3.4M24 14v4M32.5 16.3l-2 3.4M38.7 22.5l-3.4 2" />
      <path d="M24 31l7-9.5" />
      <circle cx="24" cy="31" r="2" />
      <path d="M14 38h20" />
    </Traco>
  );
}

export function IconMusculo(props: IconProps) {
  return (
    <Traco {...props}>
      <path d="M15 27h18" />
      <path d="M15 18v18M9.5 22v10M33 18v18M38.5 22v10" />
      <path d="M15 12A12.7 12.7 0 0 1 33 12" />
    </Traco>
  );
}

export function IconMetabolismo(props: IconProps) {
  return (
    <Traco {...props}>
      <path d="M24 7C17 16 12.5 22.5 12.5 29a11.5 11.5 0 0 0 23 0C35.5 22.5 31 16 24 7Z" />
      <path d="M18.5 29.500a5.5 5.5 0 0 0 5.5 5.5" />
    </Traco>
  );
}

export function IconHormonio(props: IconProps) {
  return (
    <Traco {...props}>
      <circle cx="15" cy="31" r="7" />
      <circle cx="31" cy="14.5" r="5" />
      <circle cx="37" cy="34" r="3.5" />
      <path d="M20 26.100l7.5-8M22 31.600l11.5 1.8" />
    </Traco>
  );
}

export function IconEnergia(props: IconProps) {
  return (
    <Traco {...props}>
      <path d="M13 31A11 11 0 0 1 35 31" />
      <path d="M6 31h36M15 38h18" />
      <path d="M24 9v5M9.9 16.900l3.5 3.500M38.1 16.900l-3.5 3.5" />
    </Traco>
  );
}

export function IconIntestino(props: IconProps) {
  return (
    <Traco {...props}>
      <path d="M9 14h24a5 5 0 0 1 0 10H15a5 5 0 0 0 0 10h24" />
      <path d="M9 14v-4M39 34v4" />
    </Traco>
  );
}

export function IconConversa(props: IconProps) {
  return (
    <Traco {...props}>
      <path d="M11 11h17a5 5 0 0 1 5 5v7a5 5 0 0 1-5 5H19l-6 5v-5h-2a5 5 0 0 1-5-5v-7a5 5 0 0 1 5-5Z" />
      <path d="M37 19a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5v4l-5-4h-6" />
    </Traco>
  );
}

export function IconExames(props: IconProps) {
  return (
    <Traco {...props}>
      <path d="M17 8h12M19.5 8v25a3.5 3.5 0 0 0 7 0V8" />
      <path d="M19.5 22h7" />
      <circle cx="35" cy="18" r="2.2" />
      <circle cx="37.5" cy="27" r="1.3" />
    </Traco>
  );
}

export function IconBioimpedancia(props: IconProps) {
  return (
    <Traco {...props}>
      <circle cx="24" cy="24" r="16" />
      <path d="M24 8v16l13.9 8M24 24l-13.9 8" />
    </Traco>
  );
}

export function IconPlano(props: IconProps) {
  return (
    <Traco {...props}>
      <path d="M11 36c9 0 6-12 13-12s4-12 13-12" />
      <circle cx="9" cy="36" r="2.2" />
      <circle cx="39" cy="12" r="2.2" />
    </Traco>
  );
}

export function IconPin(props: IconProps) {
  return (
    <Traco {...props}>
      <path d="M24 42S10 30 10 20a14 14 0 0 1 28 0c0 10-14 22-14 22Z" />
      <circle cx="24" cy="20" r="4.5" />
    </Traco>
  );
}

export function IconVideo(props: IconProps) {
  return (
    <Traco {...props}>
      <rect x="6" y="13" width="25" height="22" rx="5" />
      <path d="M31 21l11-6v18l-11-6" />
    </Traco>
  );
}

export function IconCartao(props: IconProps) {
  return (
    <Traco {...props}>
      <rect x="6" y="12" width="36" height="24" rx="5" />
      <path d="M6 20h36M12 29h8" />
    </Traco>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.1" cy="6.9" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function IconWhatsapp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.670.15-.197.297-.767.966-.940 1.164-.173.199-.347.223-.644.075-.297-.150-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.520.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.500-.669-.510-.173-.008-.371-.010-.570-.010-.198 0-.520.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.570-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.260c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .160 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function IconEstrela(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M10 1.600l2.47 5.23 5.73.700-4.21 3.94 1.08 5.670L10 14.380l-5.07 2.76 1.08-5.670L1.8 7.530l5.73-.700L10 1.600Z" />
    </svg>
  );
}

export function IconSeta(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconMais(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
