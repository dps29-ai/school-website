import { PageHeader, Section, Ornament } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { school } from "@/data/school";

export const metadata = { title: "Our Founder" };

export default function FounderPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="The founding vision."
        subtitle="Honouring the memory and vision of our founder members."
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Our Founder" }]}
      />
      <Section className="bg-beige-200">
        <div className="max-w-3xl mx-auto text-center">
          <Ornament />
          <h2 className="font-display text-3xl md:text-4xl text-navy-900 mt-6">Late Mrs. Rama Goyal</h2>
          <p className="text-navy-400 mt-2 italic">Founder Member, {school.society}</p>
          <p className="text-navy-700 mt-8 leading-relaxed">
            {school.name}, established in {school.established} by the {school.society},
            owes its foundation to the foresight and values of its founder members. Their
            vision was simple but profound: to create a school that nurtures every child —
            intellectually, morally, and creatively — in the serene setting of the Doon Valley.
          </p>
          <p className="text-navy-700 mt-6 leading-relaxed">
            In honour of this legacy, the school instituted the <strong>Neeraj Goyal /
            Rama Goyal Scholarship</strong>, awarded each year to students whose performance
            is exemplary — a tradition that continues to inspire generations of learners.
          </p>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
