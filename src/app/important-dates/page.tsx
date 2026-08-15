import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Calendar } from "@/components/icons";

export const metadata = { title: "Important Dates" };

const dates = [
  { date: "4 Apr 2026", event: "School reopens for teachers / PTM Orientation (I–XI)" },
  { date: "6 Apr 2026", event: "School reopens for students" },
  { date: "27 Apr 2026", event: "Distribution of Syllabus" },
  { date: "21 May 2026", event: "PTM & Holidays' HW discussion" },
  { date: "22 May – 2 Jul 2026", event: "Summer Vacation" },
  { date: "2 Jul 2026", event: "Workshop for teachers & HW submission" },
  { date: "16 – 23 Jul 2026", event: "Unit Test (I–XII)" },
  { date: "1 Aug 2026", event: "PTM – Result of Unit Test I" },
  { date: "18 Sep – 1 Oct 2026", event: "Half Yearly Examination" },
  { date: "17 Oct 2026", event: "PTM – Result of Half Yearly" },
  { date: "1 – 8 Dec 2026", event: "Unit Test (I–IX & XI)" },
  { date: "1 – 11 Dec 2026", event: "Pre-Board (X & XII)" },
  { date: "26 Dec 2026 – 15 Jan 2027", event: "Winter Vacation" },
  { date: "8 – 20 Jan 2027", event: "II Pre-Board (X & XII)" },
  { date: "30 Jan 2027", event: "Result of Pre-Board II (PTM)" },
  { date: "22 Feb 2027 onwards", event: "Annual Examination (I–IX & XI)" },
];

export default function ImportantDatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Important Dates"
        subtitle="Plan the academic year 2026–27 with key milestones."
        crumbs={[{ label: "Home", href: "/" }, { label: "Admissions", href: "/admissions" }, { label: "Important Dates" }]}
      />
      <Section className="bg-beige-200">
        <div className="bg-white border border-navy-100 overflow-hidden max-w-4xl">
          <table className="w-full text-sm">
            <thead className="bg-navy-900 text-beige-200">
              <tr>
                <th className="text-left px-4 py-3 font-display">Date</th>
                <th className="text-left px-4 py-3 font-display">Event</th>
              </tr>
            </thead>
            <tbody>
              {dates.map((d, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-beige-50"}>
                  <td className="px-4 py-3 text-navy-900 font-medium whitespace-nowrap">{d.date}</td>
                  <td className="px-4 py-3 text-navy-800 flex items-center gap-2">
                    <Calendar size={14} className="text-caramel-600" /> {d.event}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-navy-500 mt-3 italic">Dates may change as per the situation. The school office will communicate any updates.</p>
      </Section>
      <CtaBanner />
    </>
  );
}
