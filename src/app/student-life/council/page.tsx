import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import Image from "next/image";

export const metadata = { title: "Student Council" };

export default function CouncilPage() {
  return (
    <>
      <PageHeader
        eyebrow="Student Life"
        title="Student Council"
        subtitle="The leaders among our students."
        crumbs={[{ label: "Home", href: "/" }, { label: "Student Life", href: "/student-life" }, { label: "Council" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/3] relative">
            <Image src="/images/students-council.jpg" alt="Student council of DPS" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover" />
          </div>
          <div>
            <p className="text-navy-700 leading-relaxed">
              The Student Council represents the voice of the student body. Members are
              entrusted with responsibility, leadership, and the values of service.
              Council members lead assemblies, coordinate events, and serve as a bridge
              between students and teachers.
            </p>
            <ul className="mt-6 space-y-3">
              {["Head Boy & Head Girl", "Vice Head Boy & Vice Head Girl", "Sports Captains", "House Captains", "Prefects & Class Representatives"].map((c) => (
                <li key={c} className="flex items-start gap-3 text-navy-800">
                  <span className="mt-1 h-5 w-5 rounded-full bg-caramel-400/20 text-navy-400 flex items-center justify-center text-xs flex-shrink-0">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
