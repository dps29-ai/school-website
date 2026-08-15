import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { school } from "@/data/school";
import Link from "next/link";
import { BookOpen, GraduationCap, FlaskConical, Globe } from "@/components/icons";

export const metadata = { title: "Academics" };

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Rigour, depth, and a love of learning."
        subtitle={`Our ${school.classification.board} curriculum prepares students for the challenges of tomorrow — with confidence, curiosity, and clarity.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Academics" }]}
      />

      <Section className="bg-beige-200">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { stage: "Pre-Primary", grades: "Play Group · Nursery · LKG · UKG", desc: "Activity-based learning, phonics, and foundational numeracy." },
            { stage: "Primary", grades: "Classes I – V", desc: "Strong reading, writing, and arithmetic foundations; rich activity calendar." },
            { stage: "Middle School", grades: "Classes VI – VIII", desc: "Subject specialists, lab work, and growing independence." },
            { stage: "Secondary & Senior Secondary", grades: "Classes IX – XII", desc: "ICSE (Class X) and ISC (Class XII) preparation in Science and Commerce." },
          ].map((s) => (
            <div key={s.stage} className="card !p-7">
              <div className="text-xs uppercase tracking-widest text-navy-400 font-semibold">{s.stage}</div>
              <h3 className="font-display text-xl text-navy-900 mt-2">{s.grades}</h3>
              <p className="text-navy-600 mt-3 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Curriculum"
        title="An ICSE / ISC education with depth."
        description="English is the medium of instruction. The school is affiliated to the Council for the Indian School Certificate Examinations (CISCE) for ICSE (Class X) and ISC (Class XII)."
        className="bg-beige-100"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: BookOpen, title: "English-first Pedagogy", desc: "Strong emphasis on language skills, comprehension, and written expression." },
            { icon: FlaskConical, title: "Sciences & Mathematics", desc: "Dedicated Physics, Chemistry, Biology, and Computer laboratories." },
            { icon: Globe, title: "Humanities & Languages", desc: "Social studies, history, geography, and Hindi language & literature." },
            { icon: GraduationCap, title: "Continuous Assessment", desc: "Class tests, unit tests, half-yearly and annual examinations, with regular PTMs." },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="bg-white p-6 border border-navy-100">
                <Icon size={24} className="text-navy-400 mb-3" />
                <h3 className="font-display text-lg text-navy-900 mb-1">{c.title}</h3>
                <p className="text-sm text-navy-600">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="In this section" title="Dive deeper." className="bg-navy-900 text-beige-200">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: "Subjects Offered", href: "/academics/subjects" },
            { title: "Exam & Promotion", href: "/academics/exam-promotion" },
            { title: "School Timings", href: "/academics/timings" },
            { title: "Fee Structure", href: "/fee-structure" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="block border border-navy-800 p-5 hover:border-caramel-400 transition-colors">
              <h3 className="font-display text-lg text-beige-200">{l.title}</h3>
              <p className="text-xs text-beige-200/60 mt-1">Learn more →</p>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
