import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { GraduationCap, Trophy, BookOpen } from "@/components/icons";
import Link from "next/link";

export const metadata = { title: "Learning Spaces" };

export default function LearningSpacesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Learning Spaces"
        title="Where learning comes alive."
        subtitle="From classrooms to playing fields, our spaces inspire curiosity and growth."
        crumbs={[{ label: "Home", href: "/" }, { label: "Learning Spaces" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { icon: GraduationCap, title: "Education", desc: "Academic programs, smart classrooms, and learning resources.", href: "/learning-spaces/education" },
            { icon: Trophy, title: "Sports", desc: "Badminton court, indoor games, and the play ground.", href: "/facilities/sports" },
            { icon: BookOpen, title: "Blog", desc: "School news, student stories, and updates.", href: "/learning-spaces/blog" },
          ].map((l) => {
            const Icon = l.icon;
            return (
              <Link key={l.href} href={l.href} className="card !p-7 block group">
                <Icon size={28} className="text-caramel-600 mb-3" />
                <h3 className="font-display text-lg text-navy-900 mb-1 group-hover:text-caramel-700">{l.title}</h3>
                <p className="text-sm text-navy-600">{l.desc}</p>
              </Link>
            );
          })}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
