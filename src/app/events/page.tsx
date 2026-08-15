import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Calendar, Sparkles } from "@/components/icons";
import Link from "next/link";

export const metadata = { title: "Events & News" };

const featured = [
  { title: "Mrs. Rama Goyal Birth Anniversary", date: "29 Aug 2026", desc: "Special assembly honouring the founder's vision and the scholarship in her name." },
  { title: "Sports Day", date: "14 Nov 2026", desc: "The annual showcase of athletic talent, team spirit, and house competition." },
  { title: "Independence Day", date: "15 Aug 2026", desc: "Patriotic song competition, craft, and a celebration of our nation." },
  { title: "Annual Function", date: "TBA", desc: "The school's flagship cultural event bringing the whole community together." },
];

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Beyond Academics"
        title="Events & News"
        subtitle="A year-round calendar of competitions, celebrations, and learning."
        crumbs={[{ label: "Home", href: "/" }, { label: "Events" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid sm:grid-cols-2 gap-6">
          {featured.map((e) => (
            <article key={e.title} className="card !p-7">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-navy-400">
                <Calendar size={14} /> {e.date}
              </div>
              <h3 className="font-display text-2xl text-navy-900 mt-2">{e.title}</h3>
              <p className="text-navy-600 mt-2 text-sm leading-relaxed">{e.desc}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="Coming up" title="Don't miss." className="bg-beige-100">
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { title: "Activities Calendar", desc: "Competitions, quizzes, and special assemblies.", href: "/calendar" },
            { title: "Gallery", desc: "Photos from school events.", href: "/gallery" },
            { title: "Holiday List", desc: "Plan the year ahead.", href: "/calendar#holidays" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="card block">
              <Sparkles size={20} className="text-navy-400 mb-2" />
              <h3 className="font-display text-lg text-navy-900">{l.title}</h3>
              <p className="text-sm text-navy-600 mt-1">{l.desc}</p>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
