import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { FileText, Download } from "@/components/icons";

export const metadata = { title: "Policy Document" };

const policies = [
  { title: "Admissions Policy", desc: "Eligibility, process, and required documents for admission." },
  { title: "Fee Policy", desc: "Tuition, annual charges, late payment, and refund rules." },
  { title: "Discipline Policy", desc: "Rules of conduct, attendance, and behavioural expectations." },
  { title: "Anti-Bullying Policy", desc: "Zero tolerance for bullying, harassment, or discrimination." },
  { title: "Child Protection Policy", desc: "Safeguarding the wellbeing of every child." },
  { title: "Privacy Policy", desc: "How we collect, store, and use personal data." },
  { title: "Transport Policy", desc: "Safety rules and conduct on school transport." },
  { title: "IT & Acceptable Use Policy", desc: "Use of school devices, internet, and online platforms." },
];

export default function PolicyDocumentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Documents"
        title="Policy Documents"
        subtitle="The policies that guide our school community."
        crumbs={[{ label: "Home", href: "/" }, { label: "Documents" }, { label: "Policy Document" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
          {policies.map((p) => (
            <div key={p.title} className="card !p-5 flex items-start gap-4">
              <FileText size={22} className="text-caramel-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-display text-lg text-navy-900 mb-1">{p.title}</h3>
                <p className="text-sm text-navy-600">{p.desc}</p>
              </div>
              <button className="text-caramel-600 hover:text-caramel-700" aria-label={`Download ${p.title}`}>
                <Download size={18} />
              </button>
            </div>
          ))}
        </div>
        <p className="text-xs text-navy-500 mt-6 italic">For digital copies of any policy, kindly email the school office at <a href="mailto:dps_doon07@rediffmail.com" className="text-caramel-600 underline">dps_doon07@rediffmail.com</a>.</p>
      </Section>
      <CtaBanner />
    </>
  );
}
