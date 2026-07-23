import Image from "next/image";

export default function QuemSomosSection() {
  return (
    <section id="quem-somos" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto w-full max-w-sm">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-sm ring-1 ring-black/5">
              <Image
                src="/assets/fachada-glori.png"
                alt="Fachada do estúdio Glori + Patrick Queiroz, na Av. das Américas, Rio de Janeiro"
                fill
                sizes="(min-width: 1024px) 384px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-base font-semibold tracking-wide text-brand-blue uppercase">
              Quem Somos
            </p>
            <h2 className="mt-2 text-3xl leading-tight font-extrabold text-foreground sm:text-4xl">
              Um estúdio de saúde e movimento, não uma academia comum
            </h2>
            <p className="mt-4 text-lg font-semibold text-brand-blue">
              Av. das Américas, Rio de Janeiro
            </p>
            <p className="mt-6 max-w-prose text-foreground-muted">
              Um espaço calmo e acolhedor, pensado para poucas pessoas por
              vez.
            </p>
            <p className="mt-4 max-w-prose text-foreground-muted">
              Aqui, cada aluno é atendido de acordo com o que precisa — suas
              necessidades, seus limites, seu ritmo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
