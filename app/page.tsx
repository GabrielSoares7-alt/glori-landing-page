import HeroSection from "@/components/HeroSection";
import SiteNav from "@/components/SiteNav";
import QuemSomosSection from "@/components/QuemSomosSection";
import ServicesSection from "@/components/ServicesSection";
import QuemPodeFazerSection from "@/components/QuemPodeFazerSection";
import EquipeSection from "@/components/EquipeSection";
import EnderecoSection from "@/components/EnderecoSection";
import CtaFinalSection from "@/components/CtaFinalSection";
import FooterSection from "@/components/FooterSection";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <header>
        <SiteNav />
        <HeroSection />
      </header>
      <main>
        <Reveal>
          <QuemSomosSection />
        </Reveal>
        <ServicesSection />
        <Reveal>
          <QuemPodeFazerSection />
        </Reveal>
        <Reveal>
          <EquipeSection />
        </Reveal>
        <Reveal>
          <EnderecoSection />
        </Reveal>
        <Reveal>
          <CtaFinalSection />
        </Reveal>
      </main>
      <FooterSection />
    </>
  );
}
