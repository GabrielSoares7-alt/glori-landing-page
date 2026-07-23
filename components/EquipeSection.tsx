import Image from "next/image";

export default function EquipeSection() {
  return (
    <section id="equipe" className="bg-brand-blue-tint">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-sm ring-1 ring-black/5">
              <Image
                src="/assets/patrick-foto.png"
                alt="Patrick Queiroz, fundador da Glori"
                fill
                sizes="(min-width: 1024px) 384px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-base font-semibold tracking-wide text-brand-blue uppercase">
              Quem comanda
            </p>
            <h2 className="mt-2 text-3xl leading-tight font-extrabold text-foreground sm:text-4xl">
              Quem cuida de você
            </h2>
            <p className="mt-6 text-2xl font-extrabold text-foreground">
              Patrick Queiroz
            </p>
            <p className="mt-1 text-lg font-semibold text-brand-blue">
              Fundador
            </p>
            <p className="mt-4 max-w-prose text-foreground-muted">
              Patrick Queiroz é personal trainer há mais de 15 anos. Fundou a
              Glori para oferecer o que sempre acreditou ser essencial:
              atendimento individualizado, no ritmo de cada aluno.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
