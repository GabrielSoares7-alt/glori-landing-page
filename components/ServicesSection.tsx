import AutoplayVideo from "./AutoplayVideo";
import WhatsAppButton from "./WhatsAppButton";
import Reveal from "./Reveal";

const SERVICES = [
  {
    id: "pilates",
    title: "Pilates",
    capacityNumber: "3",
    capacityLabel: "alunos por horário",
    description:
      "Aulas para até 3 pessoas por horário, com equipamentos especializados e atenção em cada movimento. Ideal para melhorar a postura, ganhar mobilidade e aliviar dores do dia a dia.",
    focus: ["Postura", "Mobilidade", "Alívio de dores", "Prevenção de lesões"],
    video: {
      webm: "/assets/videos/espaco-1.webm",
      mp4: "/assets/videos/espaco-1.mp4",
      poster: "/assets/videos/espaco-1-poster.jpg",
      ariaLabel: "Vídeo de uma aula de Pilates no estúdio Glori",
    },
    whatsappLabel: "Falar sobre Pilates",
    whatsappMessage: "Olá! Gostaria de saber mais sobre as aulas de Pilates da Glori.",
  },
  {
    id: "funcional",
    title: "Treinamento Funcional",
    capacityNumber: "2",
    capacityLabel: "alunos por horário",
    description:
      "Treinos para até 2 pessoas por horário, sem espera por aparelho e com acompanhamento constante do professor. Foco em força, condicionamento físico e qualidade de vida.",
    focus: ["Emagrecimento", "Força", "Condicionamento físico", "Qualidade de vida"],
    video: {
      webm: "/assets/videos/espaco-2.webm",
      mp4: "/assets/videos/espaco-2.mp4",
      poster: "/assets/videos/espaco-2-poster.jpg",
      ariaLabel: "Vídeo de uma sessão de Treinamento Funcional no estúdio Glori",
    },
    whatsappLabel: "Falar sobre Treinamento Funcional",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre o Treinamento Funcional da Glori.",
  },
  {
    id: "personal",
    title: "Personal Trainer",
    capacityNumber: "1",
    capacityLabel: "aluno por vez",
    description:
      "Atendimento individual, com o profissional de sua escolha e um programa pensado só para os seus objetivos: emagrecimento, ganho de massa muscular, reabilitação ou preparação física.",
    focus: [
      "Emagrecimento",
      "Ganho de massa muscular",
      "Reabilitação",
      "Preparação física",
    ],
    video: {
      webm: "/assets/videos/espaco-3.webm",
      mp4: "/assets/videos/espaco-3.mp4",
      poster: "/assets/videos/espaco-3-poster.jpg",
      ariaLabel: "Vídeo de uma sessão de Personal Trainer no estúdio Glori",
    },
    whatsappLabel: "Falar sobre Personal Trainer",
    whatsappMessage: "Olá! Gostaria de saber mais sobre o Personal Trainer da Glori.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="bg-brand-blue-tint">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <Reveal>
          <p className="text-base font-semibold tracking-wide text-brand-blue uppercase">
            Serviços
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl leading-tight font-extrabold text-foreground sm:text-4xl">
            Cuidado que se ajusta ao seu ritmo
          </h2>
          <p className="mt-4 max-w-2xl text-foreground-muted">
            Três formas de treinar, cada uma com um número menor de alunos por
            horário — do grupo ao individual, você escolhe o quanto de atenção
            quer receber.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.id}
              delayMs={index * 80}
              className="flex flex-col overflow-hidden rounded-3xl bg-background shadow-sm ring-1 ring-black/5"
            >
              <article className="flex flex-1 flex-col">
                <div className="relative aspect-[4/5] w-full">
                  <AutoplayVideo
                    webm={service.video.webm}
                    mp4={service.video.mp4}
                    poster={service.video.poster}
                    ariaLabel={service.video.ariaLabel}
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-extrabold text-foreground">
                    {service.title}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-2 rounded-2xl bg-brand-blue-tint px-4 py-3">
                    <span className="text-5xl font-extrabold text-brand-blue">
                      {service.capacityNumber}
                    </span>
                    <span className="text-lg font-semibold text-foreground">
                      {service.capacityLabel}
                    </span>
                  </div>

                  <p className="mt-4 text-foreground-muted">
                    {service.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.focus.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-brand-blue/30 px-3 py-1 text-base font-semibold text-brand-blue"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <WhatsAppButton
                      label={service.whatsappLabel}
                      message={service.whatsappMessage}
                      className="w-full"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
