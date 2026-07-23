const LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#endereco", label: "Endereço" },
];

export default function SiteNav() {
  return (
    <nav aria-label="Navegação principal" className="border-b border-black/5 bg-background">
      <ul className="mx-auto flex max-w-6xl flex-wrap gap-x-6 px-6 text-base font-semibold text-brand-blue">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="inline-block py-3 underline underline-offset-4 hover:text-brand-blue-dark"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
