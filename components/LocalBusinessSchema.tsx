import {
  BUSINESS_ADDRESS,
  INSTAGRAM_URL,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_PHONE_E164,
} from "@/lib/site";

// geo (lat/long) e openingHoursSpecification ficam de fora por enquanto:
// coordenadas exatas e horário de funcionamento ainda não foram confirmados
// (ver placeholder "[horário a confirmar]" em EnderecoSection). Adicionar
// assim que os dados reais chegarem, em vez de estimar.
export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["ExerciseGym", "HealthClub"],
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image.jpg`,
    telephone: WHATSAPP_PHONE_E164,
    address: {
      "@type": "PostalAddress",
      ...BUSINESS_ADDRESS,
    },
    sameAs: [INSTAGRAM_URL],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
