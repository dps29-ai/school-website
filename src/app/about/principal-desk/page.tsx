import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { school } from "@/data/school";

export const metadata = { title: "Principal's Desk" };

export default function PrincipalDeskPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="From the Principal's Desk"
        subtitle="A note on our philosophy, purpose, and promise."
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Principal's Desk" }]}
      />
      <Section className="bg-beige-200">
        <div className="max-w-3xl">
          <p className="text-lg text-navy-800 leading-relaxed first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:text-caramel-600 first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85]">
            At {school.name}, we believe education is far more than the transmission of
            information. It is the shaping of character, the awakening of curiosity, and the
            quiet preparation of a young person for a life of purpose and service.
          </p>
          <p className="text-navy-700 leading-relaxed mt-6">
            For over four decades, our school has stood for the values enshrined in our motto
            — <span className="devanagari text-caramel-600">ज्ञानेन मुक्तिः</span>,
            knowledge is liberation. We pair the rigour of the ICSE and ISC curricula with a
            rich ecosystem of co-curricular activities, encouraging every child to discover
            their voice, their talents, and their responsibilities.
          </p>
          <p className="text-navy-700 leading-relaxed mt-6">
            We count on our parents as partners in this endeavour. The trust you place in us
            is matched, every day, by our commitment to your child's growth.
          </p>
          <p className="text-navy-900 font-display text-xl mt-8 italic">— Welcome to the Doon Presidency family.</p>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
