import Link from "next/link";
import { ChevronRight } from "./icons";

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-caramel-400" />
      <svg className="h-4 w-4 text-caramel-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
      </svg>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-caramel-400" />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  crumbs = [],
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <header className="relative bg-navy-900 text-beige-200 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-caramel-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy-700/50 rounded-full blur-3xl" />
      <div className="relative container-page py-16 md:py-24">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 text-xs">
            <ol className="flex items-center gap-1.5 text-beige-200/70">
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-caramel-400">{c.label}</Link>
                  ) : (
                    <span className="text-caramel-400">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <ChevronRight size={12} />}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-caramel-400 mb-3">
            {eyebrow}
          </div>
        )}
        <h1 className="heading-display text-balance max-w-4xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg text-beige-200/80 max-w-2xl text-pretty">{subtitle}</p>
        )}
        <Ornament className="mt-8 justify-start" />
      </div>
    </header>
  );
}

export function Section({
  title,
  eyebrow,
  description,
  children,
  className = "",
  containerClass = "container-page",
  id,
}: {
  title?: string;
  eyebrow?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  containerClass?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={containerClass}>
        {(title || eyebrow || description) && (
          <div className="max-w-3xl mb-10 md:mb-14">
            {eyebrow && <div className="heading-eyebrow mb-2">{eyebrow}</div>}
            {title && <h2 className="heading-section text-balance">{title}</h2>}
            {description && <p className="mt-4 text-navy-700 text-lg text-pretty">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
