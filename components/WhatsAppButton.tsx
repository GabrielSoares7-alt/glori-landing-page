const PHONE = "5521971261636";
const DEFAULT_MESSAGE = "Olá! Gostaria de saber mais sobre as aulas da Glori.";

function whatsAppHref(message: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export default function WhatsAppButton({
  label,
  message = DEFAULT_MESSAGE,
  className = "",
}: {
  label: string;
  message?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsAppHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-brand-orange px-6 py-3 text-xl font-bold text-foreground shadow-sm transition-[background-color,transform] duration-150 hover:bg-brand-orange-dark motion-safe:active:scale-[0.98] ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 shrink-0"
        fill="currentColor"
      >
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.06-1.36A10 10 0 1 0 12 2Zm0 18.2a8.17 8.17 0 0 1-4.17-1.14l-.3-.18-3.1.83.83-3.02-.2-.32A8.2 8.2 0 1 1 12 20.2Zm4.52-6.13c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.15.16-.29.18-.53.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.16.04-.3-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.04 0 1.21.88 2.37 1 2.53.12.16 1.74 2.66 4.22 3.72.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
      </svg>
      {label}
    </a>
  );
}
