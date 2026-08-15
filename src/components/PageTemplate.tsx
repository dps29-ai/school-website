import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";

export function PageTemplate({
  title,
  subtitle,
  crumbs = [],
  intro,
  details = [],
  extra,
}: {
  title: string;
  subtitle?: string;
  crumbs?: { label: string; href?: string }[];
  intro?: string;
  details?: { heading: string; content: string }[];
  extra?: React.ReactNode;
}) {
  return (
    <>
      <PageHeader
        eyebrow="DPS"
        title={title}
        subtitle={subtitle}
        crumbs={crumbs}
      />

      {intro && (
        <Section className="bg-beige-200">
          <div className="max-w-3xl">
            <p className="text-lg text-navy-800 leading-relaxed">{intro}</p>
          </div>
        </Section>
      )}

      {details.map((d, i) => (
        <Section key={i} className={i % 2 === 0 ? "bg-beige-100" : "bg-beige-200"}>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl text-navy-900 mb-4">{d.heading}</h2>
            <p className="text-navy-700 leading-relaxed">{d.content}</p>
          </div>
        </Section>
      ))}

      {extra}

      <CtaBanner />
    </>
  );
}
