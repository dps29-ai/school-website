import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { holidays, activitiesCalendar } from "@/data/content";
import { Calendar, Sparkles } from "@/components/icons";

export const metadata = { title: "Calendar" };

export default function CalendarPage() {
  return (
    <>
      <PageHeader
        eyebrow="Beyond Academics"
        title="School Calendar"
        subtitle="Holidays, exams, activities, and key dates for 2026–27."
        crumbs={[{ label: "Home", href: "/" }, { label: "Calendar" }]}
      />

      <Section id="holidays" eyebrow="Academic Year 2026–27" title="List of Holidays" className="bg-beige-200">
        <div className="bg-white border border-navy-100 overflow-hidden max-w-4xl">
          <table className="w-full text-sm">
            <thead className="bg-navy-900 text-beige-200">
              <tr>
                <th className="text-left px-4 py-3 font-display">Date</th>
                <th className="text-left px-4 py-3 font-display hidden sm:table-cell">Day</th>
                <th className="text-left px-4 py-3 font-display">Occasion</th>
              </tr>
            </thead>
            <tbody>
              {holidays.map((h, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-beige-200"}>
                  <td className="px-4 py-3 text-navy-900 font-medium whitespace-nowrap">{h.date}</td>
                  <td className="px-4 py-3 text-navy-700 hidden sm:table-cell">{h.day}</td>
                  <td className="px-4 py-3 text-navy-800">{h.occasion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-navy-500 mt-3 italic">* Subject to appearance of moon. Every Saturday, school remains closed for Nursery to UKG. Every second Saturday, school remains closed for all classes. The last working day of every month is a half-day.</p>
      </Section>

      <Section eyebrow="Co-curricular" title="Activities & Competitions" className="bg-beige-100">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl">
          {activitiesCalendar.map((a, i) => (
            <div key={i} className="bg-white border border-navy-100 p-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-navy-400">
                <Calendar size={12} /> {a.date} · {a.day}
              </div>
              <p className="text-navy-800 mt-2 text-sm leading-relaxed">{a.event}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-navy-900 text-beige-200">
        <div className="text-center max-w-2xl mx-auto">
          <Sparkles size={32} className="text-navy-400 mx-auto mb-3" />
          <h2 className="font-display text-3xl">A vibrant school year.</h2>
          <p className="mt-3 text-beige-200/80">The above dates may change as per the situation. The school office will communicate any updates.</p>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
