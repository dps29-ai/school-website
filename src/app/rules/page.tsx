import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { rules } from "@/data/content";
import { PrintButton } from "@/components/PrintButton";

export const metadata = { title: "Rules of Discipline" };

export default function RulesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Student Life"
        title="Rules of Discipline"
        subtitle="Our shared code of conduct — for students, parents, and teachers alike."
        crumbs={[{ label: "Home", href: "/" }, { label: "Student Life", href: "/student-life" }, { label: "Rules" }]}
      />
      <Section className="bg-beige-200">
        <ol className="space-y-3 max-w-4xl">
          {rules.map((r, i) => (
            <li key={i} className="bg-white border border-navy-100 p-5 flex gap-4">
              <span className="font-display text-xl text-navy-400 flex-shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-navy-800 leading-relaxed">{r}</span>
            </li>
          ))}
        </ol>

        <div className="max-w-4xl mt-12 bg-navy-900 text-beige-200 p-8">
          <h3 className="font-display text-2xl text-navy-400 mb-3">For Class IX to XII Students</h3>
          <p className="text-beige-200/80 leading-relaxed">
            Entry to the ICSE (Class X) and ISC (Class XII) Examinations is restricted to
            eligible candidates with a minimum of <strong className="text-beige-200">75% attendance</strong> of
            the working days during each year of the two-year course. The last date for
            computing attendance is <strong className="text-beige-200">31st January</strong> of each
            of the two years. Candidates may be entered only by the school they are
            attending, and in this respect the decision of the Head of the School is final.
          </p>
        </div>

        <div className="max-w-4xl mt-8 text-center">
          <p className="font-display text-lg text-navy-900 italic">
            "In all matters pertaining to admission, studies, promotion, discipline, behaviour
            and welfare of the student, the Principal's decision is final and binding on all
            students, parents and guardians."
          </p>
        </div>
      </Section>
      <Section className="bg-beige-100">
        <div className="text-center">
          <PrintButton />
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
