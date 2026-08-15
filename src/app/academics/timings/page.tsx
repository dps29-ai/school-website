import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { timings } from "@/data/content";

export const metadata = { title: "School Timings" };

export default function TimingsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="School Timings"
        subtitle="A consistent daily rhythm, with seasonal adjustments."
        crumbs={[{ label: "Home", href: "/" }, { label: "Academics", href: "/academics" }, { label: "Timings" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid md:grid-cols-2 gap-8">
          {timings.schedule.map((s) => (
            <div key={s.season} className="card !p-0 overflow-hidden">
              <div className="bg-navy-900 text-beige-200 px-6 py-4 flex justify-between items-center">
                <h3 className="font-display text-xl">{s.season}</h3>
                <span className="text-xs text-navy-400">{s.season === "Summer" ? timings.summer.period : timings.winter.period}</span>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-navy-100">
                    <td className="px-6 py-4 text-navy-700">Nursery to UKG</td>
                    <td className="px-6 py-4 text-right">
                      <div className="text-navy-900 font-medium">{s.nursery.assembly}</div>
                      <div className="text-xs text-navy-500">Assembly → {s.nursery.dispersal} Dispersal</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-navy-700">{s.season === "Summer" ? "I to XI" : "I to XII"}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="text-navy-900 font-medium">{s.primary.assembly}</div>
                      <div className="text-xs text-navy-500">Assembly → {s.primary.dispersal} Dispersal</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Notes" className="bg-beige-100">
        <ul className="space-y-3 max-w-3xl">
          {timings.notes.map((n, i) => (
            <li key={i} className="flex gap-3 text-navy-800">
              <span className="text-navy-400 flex-shrink-0">●</span>
              <span>{n}</span>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBanner />
    </>
  );
}
