import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { feeStructure } from "@/data/content";
import { PrintButton } from "@/components/PrintButton";

export const metadata = { title: "Fee Structure" };

export default function FeeStructurePage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Fee Structure"
        subtitle={`Transparent, detailed, and effective from 1st April ${feeStructure.session.split("-")[0]}.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Fee Structure" }]}
      />

      <Section className="bg-beige-200">
        <div className="grid lg:grid-cols-3 gap-6">
          {feeStructure.oneTime.map((f) => (
            <div key={f.name} className="card !p-7 text-center">
              <div className="text-xs uppercase tracking-widest text-navy-400 font-semibold">One-time</div>
              <h3 className="font-display text-2xl text-navy-900 mt-2">{f.name}</h3>
              <div className="font-display text-4xl text-navy-900 mt-4">{f.amount}</div>
            </div>
          ))}
          <div className="bg-navy-900 text-beige-200 !p-7 text-center card">
            <div className="text-xs uppercase tracking-widest text-navy-400 font-semibold">Annual</div>
            <h3 className="font-display text-xl text-beige-200 mt-2">{feeStructure.annual.name}</h3>
            <div className="font-display text-4xl text-navy-400 mt-4">{feeStructure.annual.amount}</div>
            <p className="text-xs text-beige-200/60 mt-3">Split across July & October</p>
          </div>
        </div>
      </Section>

      <Section title="Tuition fee per month" eyebrow="Class-wise" className="bg-beige-100">
        <div className="bg-white border border-navy-100 overflow-hidden max-w-4xl">
          <table className="w-full">
            <thead className="bg-navy-900 text-beige-200">
              <tr>
                <th className="text-left px-6 py-4 font-display text-sm">Class</th>
                <th className="text-right px-6 py-4 font-display text-sm">Tuition Fee (per month)</th>
              </tr>
            </thead>
            <tbody>
              {feeStructure.tuition.map((t, i) => (
                <tr key={t.class} className={i % 2 === 0 ? "bg-white" : "bg-beige-200"}>
                  <td className="px-6 py-4 text-navy-800">{t.class}</td>
                  <td className="px-6 py-4 text-right font-medium text-navy-900">{t.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Fee rules" eyebrow="Important" className="bg-beige-200">
        <ol className="space-y-3 max-w-3xl">
          {feeStructure.rules.map((r, i) => (
            <li key={i} className="flex gap-4 bg-white border border-navy-100 p-5">
              <span className="font-display text-navy-400">{i + 1}.</span>
              <span className="text-navy-800">{r}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-beige-100">
        <div className="text-center">
          <PrintButton />
          <p className="text-xs text-navy-500 mt-3">Use your browser's print dialog to save this page as a PDF.</p>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
