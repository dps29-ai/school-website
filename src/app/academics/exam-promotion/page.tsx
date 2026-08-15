import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { examSchedule } from "@/data/content";

export const metadata = { title: "Examination & Promotion" };

export default function ExamPromotionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Examination & Promotion Policy"
        subtitle="A clear, fair, and continuous assessment framework."
        crumbs={[{ label: "Home", href: "/" }, { label: "Academics", href: "/academics" }, { label: "Exam & Promotion" }]}
      />

      <Section title="Promotion rules." eyebrow="Promotion" className="bg-beige-200">
        <ol className="space-y-4 max-w-3xl">
          {[
            "Classes I to IX and XI will have two Unit Tests as well as Half-Yearly and Annual Exams.",
            "Classes X & XII will have one Unit Test, a Half-Yearly, and two Pre-Board Examinations.",
            "Promotion is based on the AVERAGE of class tests, all unit tests, and examinations during the academic year.",
            "For Classes IX to XII, it is mandatory to pass in English. Pass marks: 33% for ICSE (IX & X) and 35% for ISC (XI & XII).",
            "If a student scores below 33% / 35% in any subject, they will not be eligible for promotion.",
            "Subject / Stream choice in Classes IX and XI is at the discretion of the school authorities.",
            "Re-admission to Class IX is strictly on merit basis.",
          ].map((r, i) => (
            <li key={i} className="flex gap-4 bg-white border border-navy-100 p-5">
              <span className="font-display text-xl text-navy-400 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-navy-800">{r}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        title="Pre-Primary assessment."
        className="bg-beige-100"
      >
        <div className="max-w-3xl text-navy-800 space-y-4 leading-relaxed">
          <p>
            Class-work and homework assessment is made out of ten marks according to the
            performance of the child. Credit is given once with the Half-Yearly and finally
            with the Annual assessment.
          </p>
          <p>
            Participation in activities related to House competitions, Games, and Sports
            is compulsory. Students are assessed on the basis of their active interest
            and participation in at least one activity.
          </p>
        </div>
      </Section>

      <Section title="Schedule for PTM & Examination 2026–27" eyebrow="Key dates" className="bg-beige-200">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-display text-xl text-navy-900 mb-4">Nursery – UKG</h3>
            <ol className="space-y-2">
              {examSchedule.nursery.map((e, i) => (
                <li key={i} className="flex gap-4 border-b border-navy-100 pb-2 last:border-0">
                  <span className="text-sm text-navy-400 font-mono whitespace-nowrap">{e.date}</span>
                  <span className="text-sm text-navy-800">{e.event}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="font-display text-xl text-navy-900 mb-4">Classes I – XII</h3>
            <ol className="space-y-2">
              {examSchedule.school.map((e, i) => (
                <li key={i} className="flex gap-4 border-b border-navy-100 pb-2 last:border-0">
                  <span className="text-sm text-navy-400 font-mono whitespace-nowrap">{e.date}</span>
                  <span className="text-sm text-navy-800">{e.event}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
