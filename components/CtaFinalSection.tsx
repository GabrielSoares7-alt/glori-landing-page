import WhatsAppButton from "./WhatsAppButton";

export default function CtaFinalSection() {
  return (
    <section id="cta-final" className="bg-brand-blue-tint">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:py-24">
        <h2 className="text-3xl leading-tight font-extrabold text-foreground sm:text-4xl">
          Pronto para dar o primeiro passo?
        </h2>
        <p className="mt-4 text-foreground-muted">
          Fale com a gente agora pelo WhatsApp e tire suas dúvidas, sem
          compromisso.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton
            label="Falar no WhatsApp"
            message="Olá! Vi o site da Glori e me interessei. Queria saber mais."
          />
        </div>
      </div>
    </section>
  );
}
