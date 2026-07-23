import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import "./globals.css";

// Inter: escolhida no sistema de design pela legibilidade em tela em
// várias densidades, prioridade para o público 60+. Fonte variável, então
// não é necessário fixar `weight`. `display: "swap"` evita FOUT. next/font
// já injeta o <link rel="preload"> da fonte automaticamente (self-hosted).
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "Pilates e Treinamento Funcional no Rio de Janeiro | Glori";
// TODO: reforçar com bairro/região confirmados (ex.: "Barra da Tijuca")
// assim que o usuário confirmar — hoje só "Rio de Janeiro" é garantido.
const DESCRIPTION =
  "Estúdio de Pilates, Treinamento Funcional e Personal Trainer no Rio de Janeiro. Turmas pequenas, atendimento individual, para todas as idades. Fale no WhatsApp.";
// Imagem real da fachada (recortada de public/assets/fachada-glori.png via
// ffmpeg para 1200x630). Referenciada diretamente em vez de usar o file
// convention app/opengraph-image.jpg: nesta versão do Next, o sidecar
// opengraph-image.alt.txt não está gerando a tag og:image:alt (confirmado
// em builds com Turbopack e com webpack) — declarar `alt` manualmente aqui
// é a forma que funciona de verdade.
const OG_IMAGE = {
  url: "/assets/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Fachada do estúdio Glori + Patrick Queiroz, com letreiro da marca e placa de Pilates e Personal Trainer",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "pilates Rio de Janeiro",
    "treinamento funcional Rio de Janeiro",
    "personal trainer Rio de Janeiro",
    "estúdio de pilates",
    "Glori",
    "Patrick Queiroz",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen font-sans antialiased">
        {children}
        <LocalBusinessSchema />
      </body>
    </html>
  );
}
