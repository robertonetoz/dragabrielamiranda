import Image from "next/image";
import { defaultWhatsappMessage, nav, site, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="wrap pt-20 pb-28 lg:pt-28 lg:pb-12">
      <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Image
            src="/images/logo-completa.png"
            alt="Dra. Gabriela Miranda, Emagrecimento e Performance"
            width={799}
            height={279}
            className="-ml-[9%] w-full max-w-[24rem]"
          />
          <p className="mt-6 max-w-[24rem] font-display text-[1.35rem] leading-snug italic text-cacau">
            As pessoas vão notar que você mudou. Você vai sentir a diferença.
          </p>
        </div>

        <nav aria-label="Rodapé" className="lg:col-span-3">
          <h2 className="font-display text-[1.3rem]">Neste site</h2>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="link">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#agendar" className="link">
                Agendar consulta
              </a>
            </li>
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h2 className="font-display text-[1.3rem]">Contato</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                WhatsApp {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="link">
                Instagram {site.instagramHandle}
              </a>
            </li>
            <li>
              <a href={site.doctoralia} target="_blank" rel="noopener noreferrer" className="link">
                Agenda no Doctoralia
              </a>
            </li>
          </ul>
          <address className="mt-6 text-cafe/85 not-italic">
            {site.clinic}
            <br />
            {site.street}, {site.district}
            <br />
            {site.city}, {site.state}, {site.zip}
          </address>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap justify-between gap-x-12 gap-y-3 border-t border-bronze/40 pt-6 text-[0.98rem] text-cacau">
        <p>
          Dra. Gabriela Miranda, médica. {site.crm}. © {new Date().getFullYear()}
        </p>
        <p className="max-w-[36rem]">
          O conteúdo deste site é informativo e não substitui uma consulta médica.
        </p>
      </div>
    </footer>
  );
}
