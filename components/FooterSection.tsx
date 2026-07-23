import { INSTAGRAM_URL, SITE_NAME } from "@/lib/site";

export default function FooterSection() {
  return (
    <footer className="border-t border-black/5 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10 text-base text-foreground-muted">
        <p className="font-semibold text-foreground">{SITE_NAME}</p>
        <p className="mt-2">Av. das Américas, Rio de Janeiro</p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block py-3 underline underline-offset-4 hover:text-brand-blue"
        >
          @glori.saudeintegrada
        </a>
        <p className="mt-6">
          © {new Date().getFullYear()} {SITE_NAME}
        </p>
      </div>
    </footer>
  );
}
