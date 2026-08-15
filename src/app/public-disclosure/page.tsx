import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { FileText } from "@/components/icons";
import { school } from "@/data/school";

export const metadata = { title: "Mandatory Public Disclosure" };

const sections = [
  {
    title: "General Information",
    rows: [
      ["Name of the School", school.name],
      ["Affiliation No.", "Available at the school office"],
      ["School Code", "Available at the school office"],
      ["Complete Address", `${school.address.line1}, ${school.address.line2} — ${school.address.pin}`],
      ["Principal's Name", "Available at the school office"],
      ["School Email", school.contact.email],
      ["Contact Details", school.contact.phone.join(" / ")],
    ],
  },
  {
    title: "Documents Available for Inspection",
    rows: [
      ["Affiliation / Upgradation Letter", "Available at the school office"],
      ["Societies / Trust Registration", "Available at the school office"],
      ["No Objection Certificate (NOC)", "Available at the school office"],
      ["Recognition Certificate", "Available at the school office"],
      ["Building Safety Certificate", "Available at the school office"],
      ["Fire Safety Certificate", "Available at the school office"],
      ["DEO Certificate", "Available at the school office"],
      ["Water, Health and Sanitation Certificates", "Available at the school office"],
    ],
  },
  {
    title: "Result & Academics",
    rows: [
      ["Fee Structure", "View online — see Fee Structure page"],
      ["Annual Academic Calendar", "View online — see Calendar / Important Dates page"],
      ["School Management Committee", "Constituted as per CISCE norms"],
      ["Parent-Teacher Association", "Active PTA in place"],
    ],
  },
];

export default function PublicDisclosurePage() {
  return (
    <>
      <PageHeader
        eyebrow="Documents"
        title="Mandatory Public Disclosure"
        subtitle={`As required by the ${school.affiliation} and applicable regulations.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Documents" }, { label: "Mandatory Public Disclosure" }]}
      />
      <Section className="bg-beige-200">
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-2xl text-navy-900 mb-4 flex items-center gap-2">
                <FileText size={20} className="text-caramel-600" /> {s.title}
              </h2>
              <div className="bg-white border border-navy-100 overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {s.rows.map((r, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-beige-50"}>
                        <td className="px-4 py-3 text-navy-700 font-medium w-1/2">{r[0]}</td>
                        <td className="px-4 py-3 text-navy-800">{r[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-navy-500 mt-8 italic">
          For digital copies, kindly email the school office at{" "}
          <a href={`mailto:${school.contact.email}`} className="text-caramel-600 underline">{school.contact.email}</a>.
        </p>
      </Section>
      <CtaBanner />
    </>
  );
}
