import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import Link from "next/link";
import { Building, BookOpen, FlaskConical, Trophy } from "@/components/icons";

export const metadata = { title: "Facilities" };

const facilities = [
  {
    icon: Trophy, title: "Badminton Court",
    desc: "A dedicated court for our shuttlers, with regular coaching and inter-house matches.",
  },
  {
    icon: Trophy, title: "Indoor Games",
    desc: "Chess, carrom, table tennis and more — for play, focus, and friendly competition.",
  },
  {
    icon: Trophy, title: "Play Ground",
    desc: "Spacious grounds for athletics, football, cricket, kho-kho, and annual sports day.",
  },
  {
    icon: BookOpen, title: "Smart Classes",
    desc: "Technology-enabled classrooms that bring lessons to life through digital aids.",
  },
  {
    icon: Building, title: "Laboratories",
    desc: "Well-equipped Physics, Chemistry, Biology, and Computer laboratories for hands-on learning.",
    href: "/facilities/labs",
  },
  {
    icon: BookOpen, title: "Library",
    desc: "A well-stocked library with journals, newspapers, subject books, and storybooks.",
    href: "/facilities/library",
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Facilities"
        title="Spaces designed for learning and growth."
        subtitle="From modern labs to playing fields — every facility supports a balanced education."
        crumbs={[{ label: "Home", href: "/" }, { label: "Facilities" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f) => {
            const Icon = f.icon;
            const content = (
              <div className="card !p-7 h-full">
                <Icon size={28} className="text-navy-400 mb-3" />
                <h3 className="font-display text-xl text-navy-900 mb-2">{f.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
            return f.href ? (
              <Link key={f.title} href={f.href} className="block hover:no-underline">{content}</Link>
            ) : (
              <div key={f.title}>{content}</div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Dive deeper" title="Featured facilities." className="bg-navy-900 text-beige-200">
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { title: "Laboratories", desc: "Physics, Chemistry, Biology, Computer.", href: "/facilities/labs" },
            { title: "Library", desc: "Journals, newspapers, storybooks.", href: "/facilities/library" },
            { title: "Sports", desc: "Courts, grounds, annual sports day.", href: "/facilities/sports" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="block border border-navy-800 p-5 hover:border-caramel-400">
              <h3 className="font-display text-lg text-beige-200">{l.title}</h3>
              <p className="text-sm text-beige-200/70 mt-1">{l.desc}</p>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
