import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { school } from "@/data/school";

export const metadata = { title: "Vision & Mission" };

export default function VisionMissionPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Vision & Mission"
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Vision & Mission" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid lg:grid-cols-2 gap-10">
          <article className="card !p-10">
            <div className="heading-eyebrow text-navy-400 mb-3">Our Vision</div>
            <h2 className="font-display text-3xl text-navy-900 mb-4">A school that liberates through knowledge.</h2>
            <p className="text-navy-700 leading-relaxed">
              To create a community of lifelong learners who embody the spirit of{" "}
              <span className="devanagari text-navy-400">{school.slogan}</span> — that
              knowledge itself is the path to freedom, character, and meaningful contribution.
            </p>
          </article>
          <article className="card !p-10">
            <div className="heading-eyebrow text-navy-400 mb-3">Our Mission</div>
            <h2 className="font-display text-3xl text-navy-900 mb-4">A balanced, future-ready education.</h2>
            <p className="text-navy-700 leading-relaxed">
              To deliver a balanced education that fuses the strength of the ICSE / ISC
              curriculum with rich co-curricular engagement — equipping students to thrive
              in a changing world without losing sight of values, discipline, and service.
            </p>
          </article>
        </div>
      </Section>
      <Section title="The values that guide us." eyebrow="Our values" className="bg-beige-100">
        <ul className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {[
            ["Discipline", "The foundation upon which excellence is built."],
            ["Respect", "For self, for others, and for the spaces we share."],
            ["Curiosity", "A love of learning that lasts a lifetime."],
            ["Service", "Using knowledge to uplift the community around us."],
            ["Integrity", "Doing what is right, even when no one is watching."],
            ["Excellence", "Strive to give our best in everything we do."],
          ].map(([k, v]) => (
            <li key={k} className="bg-white border border-navy-100 p-6">
              <h3 className="font-display text-xl text-navy-900">{k}</h3>
              <p className="text-navy-600 mt-1">{v}</p>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBanner />
    </>
  );
}
