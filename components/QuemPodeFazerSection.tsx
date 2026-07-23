const ITEMS = [
  "Nunca fez exercício antes",
  "Tem mais de 60 anos",
  "Está retomando depois de uma lesão",
];

export default function QuemPodeFazerSection() {
  return (
    <section id="quem-pode-fazer" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <p className="text-base font-semibold tracking-wide text-brand-blue uppercase">
          Quem pode fazer
        </p>
        <h2 className="mt-2 max-w-2xl text-3xl leading-tight font-extrabold text-foreground sm:text-4xl">
          Você é bem-vindo aqui, do jeito que está agora
        </h2>
        <p className="mt-4 max-w-2xl text-foreground-muted">
          Não importa sua idade, sua experiência com exercício ou se você está
          com alguma limitação — o programa é adaptado para você, no seu
          ritmo.
        </p>

        <ul className="mt-8 flex flex-col gap-4 sm:max-w-xl">
          {ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-xl font-semibold text-foreground"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="mt-0.5 h-6 w-6 shrink-0 text-brand-blue"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <circle cx="12" cy="12" r="10" strokeOpacity={0.25} />
                <path
                  d="M8 12.5l2.5 2.5L16 9.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
