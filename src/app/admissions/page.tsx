import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { school } from "@/data/school";
import { Check, ArrowRight, FileText, Award, Calendar, MapPin } from "@/components/icons";
import Link from "next/link";

export const metadata = { title: "Admissions" };

const steps = [
  { n: "01", t: "Inquire", d: "Visit the school office or call us to understand the grade availability and program." },
  { n: "02", t: "Register", d: "Collect the registration form, complete it, and submit it with the registration fee." },
  { n: "03", t: "Interaction", d: "An age-appropriate interaction / informal assessment may be scheduled." },
  { n: "04", t: "Admission", d: "On selection, complete the admission formalities and fee payment to confirm the seat." },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Join the Doon Presidency family."
        subtitle={`Admissions for the 2026–27 session are now open. Apply for ${school.classification.grades}.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Admissions" }]}
      />

      <Section eyebrow="The process" title="Four simple steps." className="bg-beige-200">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="card !p-7 relative">
              <div className="font-display text-4xl text-navy-400/30 absolute top-4 right-4">{s.n}</div>
              <h3 className="font-display text-xl text-navy-900 mb-2">{s.t}</h3>
              <p className="text-navy-600 text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Documents typically required." eyebrow="What to bring" className="bg-beige-100">
        <ul className="grid sm:grid-cols-2 gap-3 max-w-3xl">
          {[
            "Birth certificate (original for verification)",
            "Transfer Certificate from previous school (where applicable)",
            "Report card of the last academic year",
            "Four recent passport-size photographs",
            "Aadhaar card of the student and parents",
            "Caste / Category certificate (if applicable)",
          ].map((d) => (
            <li key={d} className="flex items-start gap-3 bg-white p-4 border border-navy-100">
              <Check size={18} className="text-navy-400 mt-0.5 flex-shrink-0" />
              <span className="text-navy-800 text-sm">{d}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Continue" title="Helpful links." className="bg-navy-900 text-beige-200">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: FileText, title: "Fee Structure", desc: "Class-wise fee for 2026–27.", href: "/fee-structure" },
            { icon: Award, title: "Scholarships", desc: "Neeraj Goyal / Rama Goyal awards.", href: "/scholarship" },
            { icon: Calendar, title: "Holiday List", desc: "Plan the year ahead.", href: "/calendar" },
            { icon: MapPin, title: "Contact", desc: "How to reach the school.", href: "/contact" },
          ].map((l) => {
            const Icon = l.icon;
            return (
              <Link key={l.href} href={l.href} className="group flex items-start gap-4 border border-navy-800 p-5 hover:border-caramel-400 transition-colors">
                <Icon size={22} className="text-navy-400 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-display text-lg text-beige-200">{l.title}</h3>
                  <p className="text-sm text-beige-200/70 mt-1">{l.desc}</p>
                </div>
                <ArrowRight size={16} className="text-navy-400 opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
              </Link>
            );
          })}
        </div>
      </Section>
      <CtaBanner title="Ready to apply?" subtitle="Our admissions desk is open Monday to Saturday, 8:00 AM to 4:00 PM." />
    </>
  );
}
