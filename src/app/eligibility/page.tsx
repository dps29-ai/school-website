import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Check, FileText } from "@/components/icons";

export const metadata = { title: "Eligibility Criteria" };

const criteria = [
  { grade: "Pre-Primary (PG – UKG)", age: "Age appropriate for the class as on 1st April of the admission year.", notes: "Interaction-based assessment." },
  { grade: "Classes I – VIII", age: "Based on previous academic record and age.", notes: "Previous school report card required." },
  { grade: "Class IX (ICSE)", age: "Strong academic record; merit-based.", notes: "Re-admission is strictly on merit." },
  { grade: "Class XI (ISC)", age: "Pass in ICSE / equivalent with required marks.", notes: "Stream & subject choice at school's discretion." },
];

const documents = [
  "Birth certificate (original for verification)",
  "Transfer Certificate from previous school (where applicable)",
  "Report card of the last academic year",
  "Four recent passport-size photographs",
  "Aadhaar card of student and parents",
  "Caste / Category certificate (if applicable)",
];

export default function EligibilityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Eligibility Criteria"
        subtitle="Age and academic requirements for admission to each grade."
        crumbs={[{ label: "Home", href: "/" }, { label: "Admissions", href: "/admissions" }, { label: "Eligibility" }]}
      />
      <Section className="bg-beige-200">
        <div className="bg-white border border-navy-100 overflow-hidden max-w-4xl">
          <table className="w-full text-sm">
            <thead className="bg-navy-900 text-beige-200">
              <tr>
                <th className="text-left px-4 py-3 font-display">Class</th>
                <th className="text-left px-4 py-3 font-display">Eligibility</th>
                <th className="text-left px-4 py-3 font-display">Notes</th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((c, i) => (
                <tr key={c.grade} className={i % 2 === 0 ? "bg-white" : "bg-beige-50"}>
                  <td className="px-4 py-3 text-navy-900 font-medium">{c.grade}</td>
                  <td className="px-4 py-3 text-navy-800">{c.age}</td>
                  <td className="px-4 py-3 text-navy-700">{c.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Section className="bg-beige-100">
        <h2 className="font-display text-2xl text-navy-900 mb-4">Documents Required</h2>
        <ul className="grid sm:grid-cols-2 gap-3 max-w-3xl">
          {documents.map((d) => (
            <li key={d} className="flex items-start gap-3 bg-white p-4 border border-navy-100">
              <Check size={18} className="text-caramel-600 mt-0.5 flex-shrink-0" />
              <span className="text-navy-800 text-sm">{d}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-navy-500 mt-4 italic">Specific requirements may be confirmed by the school office at the time of admission.</p>
      </Section>
      <CtaBanner />
    </>
  );
}
