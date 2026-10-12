import { About } from "@/components/About";
import { Booking } from "@/components/Booking";
import { Clinic } from "@/components/Clinic";
import { Consultation } from "@/components/Consultation";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Instagram } from "@/components/Instagram";
import { Manifesto } from "@/components/Manifesto";
import { Reviews } from "@/components/Reviews";
import { Treatments } from "@/components/Treatments";

export default function Home() {
  return (
    <>
      <a
        href="#sobre"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-cafe focus:px-5 focus:py-3 focus:text-areia"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <About />
        <Treatments />
        <Consultation />
        <Reviews />
        <Clinic />
        <Instagram />
        <Booking />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
