import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { school } from "@/data/school";
import { Sparkles, Music, BookOpen, Heart } from "@/components/icons";
import Link from "next/link";

export const metadata = { title: "Student Life" };

const activities = [
  { icon: Music, title: "Music & Performing Arts", desc: "Songs, dance, and instrumental practice — including the iconic Wednesday school song." },
  { icon: BookOpen, title: "Debate, Quiz & Elocution", desc: "Hindi elocution, English debate, mathematics quiz, and L.P. Goyal Maths Quiz." },
  { icon: Sparkles, title: "Art, Craft & Origami", desc: "Drawing, poster making, craft, calligraphy, and creative expression." },
  { icon: Heart, title: "Community Service", desc: "Tree planting, social initiatives, and service — building responsible citizens." },
];

export default function StudentLifePage() {
  return (
    <>
      <PageHeader
        eyebrow="Student Life"
        title="Beyond the textbook."
        subtitle={`At ${school.name}, every child is encouraged to discover their voice, their talents, and their responsibilities.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Student Life" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid sm:grid-cols-2 gap-6">
          {activities.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.title} className="card !p-7 flex items-start gap-4">
                <Icon size={28} className="text-navy-400 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-xl text-navy-900 mb-1">{a.title}</h3>
                  <p className="text-navy-600 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="In this section" title="Explore more." className="bg-navy-900 text-beige-200">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: "Student Council", href: "/student-life/council" },
            { title: "School Uniform", href: "/student-life/uniform" },
            { title: "Rules of Discipline", href: "/rules" },
            { title: "School Prayer & Song", href: "/prayer" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="block border border-navy-800 p-5 hover:border-caramel-400 transition-colors">
              <h3 className="font-display text-lg text-beige-200">{l.title}</h3>
              <p className="text-xs text-beige-200/60 mt-1">Read more →</p>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
