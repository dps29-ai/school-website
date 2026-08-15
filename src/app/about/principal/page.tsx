import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata = { title: "Principal's Message" };

export default function PrincipalPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="From the Principal's desk."
        subtitle="A note on our philosophy, our purpose, and our promise."
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Principal's Message" }]}
      />
      <Section className="bg-beige-200">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <p className="text-lg text-navy-800 leading-relaxed first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:text-navy-400 first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85]">
              At Doon Presidency School, we believe education is far more than the
              transmission of information. It is the shaping of character, the awakening
              of curiosity, and the quiet preparation of a young person for a life of
              purpose and service.
            </p>
            <p className="text-navy-700 leading-relaxed mt-6">
              For over four decades, our school has stood for the values enshrined in our
              motto — ज्ञानेन मुक्तिः, knowledge is liberation. We pair the rigour of
              the ICSE and ISC curricula with a rich ecosystem of co-curricular
              activities, encouraging every child to discover their voice, their talents,
              and their responsibilities.
            </p>
            <p className="text-navy-700 leading-relaxed mt-6">
              We count on our parents as partners in this endeavour. The trust you place
              in us is matched, every day, by our commitment to your child's growth.
            </p>
            <p className="text-navy-700 leading-relaxed mt-6 italic">
              Welcome to the Doon Presidency family.
            </p>
            <p className="text-navy-900 font-display text-xl mt-8">— The Principal</p>
          </article>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
