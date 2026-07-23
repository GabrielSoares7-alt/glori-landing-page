const ADDRESS = "Av. das Américas, 7899, Loja 103, Rio de Janeiro - RJ, 22793-082";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

export default function EnderecoSection() {
  return (
    <section id="endereco" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <p className="text-base font-semibold tracking-wide text-brand-blue uppercase">
          Endereço
        </p>
        <h2 className="mt-2 max-w-2xl text-3xl leading-tight font-extrabold text-foreground sm:text-4xl">
          Venha nos visitar
        </h2>

        <div className="mt-8 flex flex-col gap-6 sm:max-w-xl">
          <div className="flex items-start gap-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="mt-0.5 h-6 w-6 shrink-0 text-brand-blue"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21s-7-6.1-7-11.5a7 7 0 1 1 14 0C19 14.9 12 21 12 21Z"
              />
              <circle cx="12" cy="9.5" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <p className="font-semibold text-foreground">
                Av. das Américas, 7899, Loja 103
                <br />
                Rio de Janeiro - RJ, 22793-082
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block py-3 font-semibold text-brand-blue underline underline-offset-2"
              >
                Ver no mapa
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="mt-0.5 h-6 w-6 shrink-0 text-brand-blue"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3.5 2" />
            </svg>
            <div>
              <p className="font-semibold text-foreground">
                Horário de funcionamento
              </p>
              <p className="text-foreground-muted italic">
                [horário a confirmar]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
