import Image from "next/image";
import HeroVideo from "./HeroVideo";
import WhatsAppButton from "./WhatsAppButton";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-20">
        <Image
          src="/assets/logo.png"
          alt="Glori + Patrick Queiroz"
          width={160}
          height={160}
          className="h-16 w-auto"
          priority
        />

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-base font-semibold tracking-wide text-brand-blue uppercase">
              Pilates · Treinamento Funcional · Personal Trainer
            </p>
            <h1 className="mt-4 text-4xl leading-tight font-extrabold text-foreground sm:text-5xl">
              Cuidado de verdade, para você se mover melhor — não importa a
              idade.
            </h1>
            <p className="mt-6 max-w-prose text-foreground-muted">
              Turmas pequenas, atenção individual e um espaço tranquilo, no
              Rio de Janeiro. Nunca é tarde para começar.
            </p>
            <div className="mt-8">
              <WhatsAppButton label="Falar no WhatsApp" />
            </div>
          </div>

          <div className="mx-auto w-full max-w-xs">
            <div className="relative aspect-[9/16] overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/5">
              <HeroVideo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
