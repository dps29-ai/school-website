import { PageHeader, Section, Ornament } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { scholarship } from "@/data/content";
import { Award, ArrowRight } from "@/components/icons";
import Link from "next/link";

export const metadata = { title: "Scholarships" };

export default function ScholarshipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Recognising excellence."
        subtitle={scholarship.title}
        crumbs={[{ label: "Home", href: "/" }, { label: "Admissions", href: "/admissions" }, { label: "Scholarships" }]}
      />
      <Section className="bg-beige-200">
        <div className="max-w-3xl mx-auto text-center">
          <Ornament />
          <p className="text-lg text-navy-700 leading-relaxed mt-6">
            {scholarship.intro}
          </p>
        </div>
      </Section>

      <Section title="The criteria." eyebrow="Awards" className="bg-beige-100">
        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {scholarship.criteria.map((c, i) => (
            <div key={i} className="card !p-7 flex items-start gap-4">
              <Award size={28} className="text-navy-400 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg text-navy-900 mb-1">{c.label}</h3>
                <p className="text-navy-400 font-medium">{c.reward}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-navy-900 text-beige-200">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl text-beige-200">A tradition of merit.</h2>
          <p className="mt-4 text-beige-200/80">
            The scholarship reflects our belief that exceptional effort should always be
            recognised and rewarded.
          </p>
          <Link href="/admissions" className="btn-gold mt-8">
            Learn about Admissions <ArrowRight size={16} />
          </Link>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
