import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { FlaskConical } from "@/components/icons";

export const metadata = { title: "Laboratories" };

const labs = [
  { name: "Physics Laboratory", desc: "Apparatus, meters, optics, and mechanics — for the rigours of the ICSE syllabus." },
  { name: "Chemistry Laboratory", desc: "Fume hoods, reagent racks, and safety equipment for hands-on chemistry." },
  { name: "Biology Laboratory", desc: "Microscopes, specimens, and models for life-science exploration." },
  { name: "Computer Laboratory", desc: "Modern computers with internet access — building digital literacy and software skills." },
];

export default function LabsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Facilities"
        title="Our Laboratories"
        crumbs={[{ label: "Home", href: "/" }, { label: "Facilities", href: "/facilities" }, { label: "Labs" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid sm:grid-cols-2 gap-6">
          {labs.map((l) => (
            <div key={l.name} className="card !p-7 flex items-start gap-4">
              <FlaskConical size={28} className="text-navy-400 flex-shrink-0" />
              <div>
                <h3 className="font-display text-xl text-navy-900 mb-1">{l.name}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
