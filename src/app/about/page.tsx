import { PageHeader, Section, Ornament } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { school } from "@/data/school";
import { Check, Sparkles, BookOpen, Users, Building } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "About the School" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A legacy of learning, rooted in the Doon Valley."
        subtitle={`${school.name} has been a centre of disciplined learning and character-building since ${school.established}.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <Section
        eyebrow="Our Story"
        title="Established in 1981. Driven by purpose."
        className="bg-beige-200"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg text-navy-800 leading-relaxed mb-6">
              {school.name} is a co-educational English-medium day school, delivering
              classes from <strong>Play Group to Class XII</strong>. The school works under
              the <strong>{school.affiliation}</strong>.
            </p>
            <p className="text-navy-700 leading-relaxed mb-6">
              Established in <strong>{school.established}</strong> and run by the{" "}
              <strong>{school.society}</strong>, the school is built on the conviction that
              education is not merely instruction but liberation — the living ideal captured
              in our motto <span className="devanagari text-navy-400">{school.slogan}</span>{" "}
              <em>— {school.sloganTranslation}</em>.
            </p>
            <p className="text-navy-700 leading-relaxed mb-6">
              The school delivers a rich tapestry of co-curricular activities — music, art,
              debates, quizzing, drama, creative writing, community service, software
              development, fine art, and tree planting — alongside rigorous academics.
            </p>
            <p className="text-navy-700 leading-relaxed">
              English is the medium of instruction. A well-equipped library with journals,
              newspapers, subject-related books, and storybooks supports every student. The
              school has dedicated <strong>Chemistry, Physics, Biology, and Computer
              Laboratories</strong>, and runs an <strong>Annual Scholarship Scheme</strong>{" "}
              to encourage brilliant students.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] relative">
              <Image src="/images/students-council.jpg" alt="Student council at DPS" fill sizes="(max-width: 1024px) 50vw, 300px" className="object-cover" />
            </div>
            <div className="aspect-[4/5] relative mt-8">
              <Image src="/images/function.jpg" alt="Annual function" fill sizes="(max-width: 1024px) 50vw, 300px" className="object-cover" />
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Quick Facts" title="The school at a glance." className="bg-beige-100">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 [&_*]:!text-[#DBC6C0]">
          {[
            { k: "Established", v: school.established, icon: Sparkles },
            { k: "Affiliation", v: "ICSE / ISC", icon: BookOpen },
            { k: "Grades", v: "Play Group – XII", icon: Users },
            { k: "Type", v: "Co-ed Day School", icon: Building },
            { k: "Medium", v: "English", icon: BookOpen },
            { k: "Society", v: "Rama Shikshan Sansthan", icon: Building },
          ].map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.k} className="bg-[#1C3150]/15 border border-[#1C3150]/30 p-6 flex items-start gap-4">
                <Icon size={22} className="text-caramel-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#DBC6C0]/70">{f.k}</div>
                  <div className="font-display text-lg text-[#DBC6C0] mt-1">{f.v}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Quick Facts" title="The school at a glance." className="bg-beige-100">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { k: "Established", v: school.established, icon: Sparkles },
            { k: "Affiliation", v: "ICSE / ISC", icon: BookOpen },
            { k: "Grades", v: "Play Group – XII", icon: Users },
            { k: "Type", v: "Co-ed Day School", icon: Building },
            { k: "Medium", v: "English", icon: BookOpen },
            { k: "Society", v: "Rama Shikshan Sansthan", icon: Building },
          ].map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.k} className="bg-white border border-navy-100 p-6 flex items-start gap-4">
                <Icon size={22} className="text-navy-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-navy-500">{f.k}</div>
                  <div className="font-display text-lg text-navy-900 mt-1">{f.v}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Our Belief" title="Vision, Mission & Values.">
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "Vision",
              desc: "To be a centre of holistic learning where every child is empowered to think independently, act with integrity, and contribute meaningfully to society.",
            },
            {
              title: "Mission",
              desc: "To deliver a balanced, value-based education that fuses academic rigour with creative exploration, physical fitness, and emotional intelligence.",
            },
            {
              title: "Values",
              desc: "Discipline, respect, curiosity, service, and the relentless pursuit of knowledge — the virtues that make a Doon Presidency student.",
            },
          ].map((b, i) => (
            <div key={b.title} className="card relative">
              <div className="absolute -top-3 -left-3 h-10 w-10 bg-caramel-400 text-navy-900 flex items-center justify-center font-display text-lg">
                {i + 1}
              </div>
              <h3 className="font-display text-2xl text-navy-900 mb-3 mt-2">{b.title}</h3>
              <p className="text-navy-700 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Pages in this section" title="More about us." className="bg-beige-100">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: "Our Founder", desc: "Honouring the legacy of the Goyal family.", href: "/about/founder" },
            { title: "Vision & Mission", desc: "Our guiding principles in detail.", href: "/about/vision-mission" },
            { title: "Principal's Message", desc: "A note from the Principal's desk.", href: "/about/principal" },
            { title: "Student Council", desc: "The leaders among our students.", href: "/student-life/council" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="card">
              <h3 className="font-display text-lg text-navy-900 mb-1">{l.title}</h3>
              <p className="text-sm text-navy-600">{l.desc}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
