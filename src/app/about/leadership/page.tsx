import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Users } from "@/components/icons";

export const metadata = { title: "Leadership" };

const leaders = [
  { name: "Chairman", role: "Rama Shikshan Sansthan Society", desc: "Guiding the vision and long-term direction of the school." },
  { name: "Director", role: "Administration", desc: "Overseeing academic and operational excellence." },
  { name: "Principal", role: "Academic Head", desc: "Leading the academic vision and student welfare." },
  { name: "Vice Principal", role: "Senior Wing", desc: "Coordinating academic activities across senior classes." },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Leadership"
        subtitle="The visionaries guiding Doon Presidency School."
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Leadership" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((l) => (
            <div key={l.name} className="card !p-7 text-center">
              <div className="h-16 w-16 rounded-full bg-caramel-400/20 text-caramel-600 flex items-center justify-center mx-auto mb-3">
                <Users size={24} />
              </div>
              <h3 className="font-display text-lg text-navy-900">{l.name}</h3>
              <div className="text-xs uppercase tracking-widest text-caramel-600 mt-1 mb-2">{l.role}</div>
              <p className="text-sm text-navy-600">{l.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
