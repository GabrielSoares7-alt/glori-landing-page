---
name: Glori
description: Landing page de Pilates + Treinamento Funcional, desenhada para clareza e acessibilidade do público 60+.
colors:
  background: "#ffffff"
  foreground: "#171717"
  foreground-muted: "#5a5a5a"
  brand-blue: "#5b6e9e"
  brand-blue-dark: "#424f72"
  brand-blue-tint: "#f4f5f8"
  brand-orange: "#d48b22"
  brand-orange-dark: "#a56c1b"
  brand-orange-tint: "#fcf6ed"
  brand-white: "#ffffff"
typography:
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
---

# Design System: Glori

## Overview

**Creative North Star: "The Welcoming Handrail"**

Um corrimão bem projetado não pede desculpas por existir: é grande o suficiente para segurar com firmeza, pintado numa cor que se vê de longe, e nunca depende de quem passa já saber onde ele está. Esse é o modelo físico do sistema — nada aqui é sutil por vaidade. O fundo é sempre claro porque olhos mais velhos leem melhor assim; o azul da marca carrega a parte institucional e confiável (é o corrimão em si), e o laranja marca exatamente onde agir (é a pintura de alerta no ponto de apoio). Cada decisão de cor, tipografia e componente responde à mesma pergunta: uma pessoa de 60+ anos, sem intimidade com academia, entende isso sem precisar de ajuda?

O sistema rejeita deliberadamente o padrão SaaS genérico (cards flutuantes, gradientes, ícones sem rótulo, informação revelada só no hover) porque esse vocabulário pressupõe um usuário jovem, com boa visão de perto e mouse. Aqui a densidade é baixa, o contraste é alto, e nada de essencial existe apenas como decoração.

**Key Characteristics:**
- Tema claro fixo, nunca escuro, independente da preferência de sistema do visitante.
- Contraste de texto sempre AA (4.5:1) no mínimo, buscando AAA (7:1) onde possível.
- Azul = institucional/confiança. Laranja = ação/CTA. Os dois papéis nunca se invertem.
- Corpo de texto em 18px/1.7 — acima do padrão de mercado (16px) por decisão deliberada de acessibilidade.

## Colors

Paleta funcional de 4 papéis nomeados (Full palette), não uma paleta editorial. Cada cor tem exatamente um trabalho.

### Primary
- **Warm Action Amber** (`#d48b22`): cor de ação. Usada em CTAs (especialmente o botão de WhatsApp), links importantes e qualquer elemento que peça um clique. Extraída por leitura de pixel do logo (`public/assets/logo.png`), não estimada visualmente.

### Secondary
- **Muted Institutional Blue** (`#5b6e9e`): cor de confiança. Usada em headers, ícones e elementos que comunicam "isso é sério e cuidado", nunca em CTAs. Também extraída por leitura de pixel do logo.

### Neutral
- **Paper White** (`#ffffff`): fundo principal. Único fundo aceitável para conteúdo — nunca escuro.
- **Near-Black Ink** (`#171717`): texto principal sobre branco (17.9:1 de contraste — muito acima de AAA).
- **Warm Gray** (`#5a5a5a`): texto secundário/legenda sobre branco (6.9:1 — acima de AA, próximo de AAA).
- **Deep Institutional Blue** (`#424f72`): estado hover/pressed sobre elementos azuis; também a cor do outline de foco visível global (8.1:1 sobre branco).
- **Cool Mist** (`#f4f5f8`): fundo alternado entre seções, para variar a página sem nunca escurecer.
- **Deep Amber** (`#a56c1b`): estado hover/pressed do CTA laranja.
- **Warm Cream** (`#fcf6ed`): fundo de badges e acentos sutis relacionados à ação.

### Named Rules
**The No-White-on-Orange Rule.** Texto branco sobre `brand-orange` mede 2.79:1 de contraste — falha AA. Todo texto/ícone sobre fundo laranja usa `foreground` (quase-preto), nunca branco. Medido, não assumido.

**The One Light Mode Rule.** Não existe variação de tema por `prefers-color-scheme` ou qualquer outro mecanismo. O público prioritário (60+) lê melhor em fundo claro; essa é uma decisão de acessibilidade, não uma lacuna de implementação a ser "corrigida" depois.

## Typography

**Body Font:** Inter (com fallback `ui-sans-serif, system-ui, sans-serif`)

**Character:** Uma única família tipográfica, escolhida por legibilidade em tela em múltiplas densidades — não por personalidade editorial. Simplicidade deliberada: uma família reduz carga cognitiva para quem tem dificuldade de leitura.

### Hierarchy
- **Body** (peso 400, 18px / `1.125rem`, altura de linha 1.7): corpo de texto padrão do site inteiro. Nunca menor que isto para texto de leitura corrida.
- **Display/Headline/Title**: peso 700–800, tamanho generoso e alto contraste — escala exata `[a resolver durante a implementação das seções]`, quando o conteúdo real definir a hierarquia por seção.
- **Label/legenda**: nunca abaixo de 16px, mesmo para metadados — `[a resolver durante a implementação]`.

### Named Rules
**The 18px Floor Rule.** Nenhum texto de leitura no site usa menos que 18px de corpo (`--text-base` do Tailwind foi sobrescrito de 1rem para 1.125rem). O padrão de mercado de 16px foi rejeitado deliberadamente pelo público-alvo.

## Elevation & Depth

Sistema majoritariamente flat. Onde profundidade for necessária (cards de seção, o botão CTA), a sombra é sutil e serve para indicar "isto é tocável", nunca para criar a sensação de elementos flutuando sobre a página — esse é o vocabulário SaaS genérico que o brief pede para evitar explicitamente. Valores exatos de `box-shadow` ainda não foram estabelecidos (nenhum componente foi construído ainda); serão fixados quando os primeiros componentes (CTA, cards) forem implementados.

### Named Rules
**The Tethered Rule.** Sombras comunicam "isto tem uma borda física e pode ser tocado", nunca "isto flutua acima da página". Sombra forte + fundo claro = card genérico de SaaS; evitar.

## Shapes

Cantos arredondados suaves em cards e no botão CTA (raio exato ainda não estabelecido — a implementação dos primeiros componentes fixa o valor). Nada de formas agressivas, cortes diagonais ou geometria decorativa: a forma serve para suavizar, não para expressar personalidade.

## Do's and Don'ts

### Do:
- **Do** manter fundo claro em toda a página, sempre — sem exceção por tema do sistema operacional.
- **Do** garantir contraste mínimo AA (4.5:1) em todo texto, buscando AAA (7:1) quando possível.
- **Do** usar `foreground` (quase-preto) sobre `brand-orange`, nunca branco (ver The No-White-on-Orange Rule).
- **Do** parear todo ícone com um rótulo de texto — nunca ícone sozinho como afordância.
- **Do** aplicar um outline de foco visível (`3px solid var(--brand-blue-dark)`, offset 2px) em todo elemento interativo — já é padrão global em `app/globals.css`, não precisa ser reimplementado por componente.
- **Do** manter alvo de toque mínimo de 48×48px em qualquer elemento clicável, especialmente o CTA de WhatsApp.

### Don't:
- **Don't** usar gradientes roxo-azul ou qualquer gradiente decorativo — não faz parte deste sistema.
- **Don't** usar fontes condensadas ou geométricas-estreitas — a família escolhida prioriza legibilidade, não densidade.
- **Don't** esconder informação atrás de hover — mobile não tem hover, e o público prioritário usa majoritariamente celular.
- **Don't** reintroduzir um bloco `@media (prefers-color-scheme: dark)` em `app/globals.css` — foi removido deliberadamente, não por esquecimento.
- **Don't** usar cards "flutuantes" com sombra pesada — ver The Tethered Rule.
