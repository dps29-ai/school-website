import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { school } from "@/data/school";

export const metadata = { title: "Education" };

export default function EducationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Learning Spaces"
        title="Education at DPS"
        subtitle="A rigorous, balanced, and future-ready education."
        crumbs={[{ label: "Home", href: "/" }, { label: "Learning Spaces", href: "/learning-spaces" }, { label: "Education" }]}
      />
      <Section className="bg-beige-200">
        <div className="max-w-3xl space-y-4 text-navy-700 leading-relaxed">
          <p>
            Education at {school.name} is delivered through a structured programme that
            emphasises conceptual clarity, application, and continuous assessment. The
            school is affiliated to the {school.affiliation}.
          </p>
          <p>
            From Play Group through Class XII, our curriculum is designed to nurture
            critical thinking, communication, creativity, and character. English is the
            medium of instruction, with strong emphasis on language skills and analytical
            reasoning.
          </p>
          <p>
            Our well-equipped library, dedicated laboratories (Physics, Chemistry, Biology,
            Computer), and smart classrooms support a holistic learning experience.
          </p>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
