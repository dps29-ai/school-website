import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Award } from "@/components/icons";

export const metadata = { title: "Prefectorial Board" };

const positions = [
  "Head Boy", "Head Girl",
  "Vice Head Boy", "Vice Head Girl",
  "Sports Captain (Boys)", "Sports Captain (Girls)",
  "House Captains (4 Houses)",
  "Prefects (Senior Wing)",
  "Class Representatives",
];

export default function PrefectorialBoardPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Prefectorial Board"
        subtitle="Student leaders entrusted with responsibility and service."
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Prefectorial Board" }]}
      />
      <Section className="bg-beige-200">
        <p className="text-navy-700 leading-relaxed max-w-3xl mb-6">
          The Prefectorial Board represents the voice of the student body. Members are
          entrusted with leadership, responsibility, and the values of service to the
          school community.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
          {positions.map((p) => (
            <div key={p} className="card !p-5 flex items-center gap-3">
              <Award size={18} className="text-caramel-600 flex-shrink-0" />
              <span className="text-navy-800 text-sm font-medium">{p}</span>
            </div>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
