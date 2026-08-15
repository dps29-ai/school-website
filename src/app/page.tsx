import Image from "next/image";
import Link from "next/link";
import { school, quickFacts } from "@/data/school";
import { Ornament, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import {
  ArrowRight, BookOpen, Users, Trophy, GraduationCap, Building,
  Award, Sparkles, Check, Calendar, MapPin, Phone, Heart, FileText,
} from "@/components/icons";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy-950 text-beige-200 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/campus.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/90 to-navy-800/80" />
        </div>
        <div className="relative container-page pt-12 pb-20 md:pt-20 md:pb-32">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6 animate-fade-in">
                <span className="inline-block w-12 h-px bg-caramel-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-caramel-400">
                  Established 1981 · {school.classification.board}
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-balance text-beige-200">
                Where young minds are nurtured into
                <span className="block gold-text mt-2 italic">leaders of tomorrow.</span>
              </h1>
              <p className="mt-6 text-lg text-beige-200/80 max-w-xl text-pretty">
                For over four decades, {school.name} has been shaping character, intellect,
                and curiosity in the heart of Dehradun — guided by the timeless ideal of{" "}
                <span className="text-caramel-400 devanagari">{school.slogan}</span>{" "}
                <span className="italic">— {school.sloganTranslation}</span>.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/admissions" className="btn-caramel">
                  Apply for Admission 2026–27
                  <ArrowRight size={16} />
                </Link>
                <Link href="/about" className="btn-secondary border-beige-200/30 text-beige-200 hover:bg-beige-200 hover:text-navy-900">
                  Discover the School
                </Link>
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
                {[
                  { k: "44+", v: "Years of Excellence" },
                  { k: "ICSE", v: "& ISC Board" },
                  { k: "PG–XII", v: "Complete Journey" },
                ].map((s) => (
                  <div key={s.v} className="border-l border-caramel-400/50 pl-4">
                    <dt className="font-display text-2xl text-caramel-400">{s.k}</dt>
                    <dd className="text-xs uppercase tracking-wider text-beige-200/70 mt-1">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] max-w-sm mx-auto">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-caramel-400/40" />
                <div className="absolute inset-0 bg-gradient-to-br from-caramel-400/10 to-transparent" />
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src="/images/info-banner.png"
                    alt={`${school.name} admission banner`}
                    fill
                    sizes="(max-width: 1024px) 80vw, 400px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FACTS MARQUEE - #1C3150 (Dark) */}
      <section className="bg-[#1C3150] text-beige-200 border-y border-navy-800">
        <div className="container-page py-5 overflow-x-auto">
          <dl className="flex items-center justify-between gap-8 text-center min-w-max md:min-w-0">
            {quickFacts.map((f, i) => (
              <div key={f.label} className="flex items-center gap-8">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-caramel-400 mb-1">{f.label}</dt>
                  <dd className="font-display text-base text-beige-200">{f.value}</dd>
                </div>
                {i < quickFacts.length - 1 && <span className="h-10 w-px bg-navy-700" />}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* SLOGAN SHOWCASE - #78809D (Mid) */}
      <section className="bg-[#78809D] py-16 md:py-24">
        <div className="container-page text-center">
          <Ornament />
          <p className="devanagari text-4xl md:text-6xl lg:text-7xl text-beige-200 mt-6 font-medium leading-tight">
            {school.slogan}
          </p>
          <p className="mt-4 font-display text-xl md:text-2xl italic text-caramel-400">
            — {school.sloganTranslation}
          </p>
          <p className="mt-6 text-beige-200/90 max-w-2xl mx-auto text-pretty">
            The motto that guides every classroom, every interaction, and every achievement
            at {school.name}.
          </p>
        </div>
      </section>

      {/* ABOUT TEASER - #DBC6C0 (Light) */}
      <Section
        eyebrow="About the School"
        title="A heritage of learning in the Doon Valley."
        description={`${school.name} is a co-educational English-medium day school, delivering classes from Play Group to Class XII under the ${school.affiliation}. Established in ${school.established} and run by the ${school.society}, the school has grown into one of Premnagar's most respected institutions.`}
        className="bg-[#DBC6C0]"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image src="/images/students-council.jpg" alt="Student council of DPS" fill sizes="(max-width: 1024px) 50vw, 300px" className="object-cover" />
            </div>
            <div className="aspect-[4/5] relative overflow-hidden mt-12">
              <Image src="/images/function.jpg" alt="School function" fill sizes="(max-width: 1024px) 50vw, 300px" className="object-cover" />
            </div>
          </div>
          <div>
            <h3 className="font-display text-2xl text-navy-900 mb-4">Shaping well-rounded individuals.</h3>
            <p className="text-navy-700 leading-relaxed mb-6">
              Beyond academics, our students participate in music, art, debates, quizzing,
              drama, creative writing, community service, software development, fine art, and
              tree planting — a holistic ecosystem that develops every facet of the child.
            </p>
            <ul className="space-y-3">
              {[
                "Well-equipped library with journals, newspapers, and storybooks",
                "Dedicated Chemistry, Physics, Biology, and Computer Laboratories",
                "Annual Neeraj Goyal / Rama Goyal Scholarship for meritorious students",
                "Smart classrooms integrating technology with tradition",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-caramel-400/20 text-caramel-400 flex-shrink-0">
                    <Check size={12} />
                  </span>
                  <span className="text-navy-800">{b}</span>
                </li>
              ))}
            </ul>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-navy-900 font-medium link-underline">
              Read more about the school <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* PILLARS / ACADEMICS */}
      <Section
        eyebrow="The DPS Difference"
        title={`Four pillars of an ${school.name} education.`}
        description="A balanced, future-ready, character-driven learning experience."
        className="bg-navy-950 text-beige-200"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: BookOpen, title: "Rigorous Academics", desc: "ICSE & ISC curriculum delivered by experienced educators, with strong emphasis on English and analytical thinking." },
            { icon: Sparkles, title: "Beyond the Classroom", desc: "Music, art, drama, debate, quizzing, community service, software development and more." },
            { icon: Building, title: "Modern Facilities", desc: "Smart classes, well-stocked library, science and computer labs, and dedicated sports areas." },
            { icon: Heart, title: "Values & Character", desc: "Discipline, respect, and a culture of service — guided every day by the motto ज्ञानेन मुक्तिः." },
          ].map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="border border-navy-800 bg-navy-900/50 p-7 hover:border-caramel-400/60 hover:bg-navy-900 transition-all group">
                <Icon size={28} className="text-caramel-400 mb-4" />
                <h3 className="font-display text-xl text-beige-200 mb-2">{p.title}</h3>
                <p className="text-sm text-beige-200/70 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* GALLERY PREVIEW */}
      <Section
        eyebrow="Life at DPS"
        title="Moments that define us."
        containerClass="container-page"
        className="bg-beige-200"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { src: "/images/sports-day.jpg", alt: "Sports day" },
            { src: "/images/event.jpg", alt: "School event" },
            { src: "/images/sports-day-2.jpg", alt: "Athletics event" },
            { src: "/images/gate.jpg", alt: "School gate" },
          ].map((img, i) => (
            <Link
              key={i}
              href="/gallery"
              className="relative aspect-square overflow-hidden group"
              aria-label={`View ${img.alt} in gallery`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/gallery" className="btn-caramel">
            Visit the Full Gallery <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* KEY INFO STRIP */}
      <Section eyebrow="What we offer" title="Quick links for parents." className="bg-navy-900 text-beige-200">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: "Admissions 2026–27", desc: "Process, eligibility, and key dates.", href: "/admissions", icon: GraduationCap },
            { title: "Fee Structure", desc: "Transparent and detailed fee breakdown.", href: "/fee-structure", icon: FileText },
            { title: "Scholarships", desc: "Rewarding academic and sporting excellence.", href: "/scholarship", icon: Award },
            { title: "School Calendar", desc: "Holidays, exams, PTMs, activities.", href: "/calendar", icon: Calendar },
            { title: "Rules of Discipline", desc: "Our shared code of conduct.", href: "/rules", icon: BookOpen },
            { title: "Contact Us", desc: "Reach the school office any working day.", href: "/contact", icon: MapPin },
          ].map((l) => {
            const Icon = l.icon;
            return (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-start gap-4 border border-navy-800 p-5 hover:border-caramel-400 hover:bg-navy-800/50 transition-all"
              >
                <Icon size={22} className="text-caramel-400 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-display text-lg text-beige-200 mb-1">{l.title}</h3>
                  <p className="text-sm text-beige-200/70">{l.desc}</p>
                </div>
                <ArrowRight size={18} className="text-caramel-400 opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
              </Link>
            );
          })}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
