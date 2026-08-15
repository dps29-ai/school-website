import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Trophy, Award, Star } from "@/components/icons";

export const metadata = { title: "Achievements" };

const categories = [
  {
    icon: Star, title: "Academic Excellence",
    desc: "Consistently strong ICSE and ISC results, with school toppers regularly receiving the Neeraj Goyal / Rama Goyal Scholarship.",
  },
  {
    icon: Trophy, title: "Sports Achievements",
    desc: "Active participation in district and state-level competitions across football, athletics, badminton, and more.",
  },
  {
    icon: Award, title: "Co-Curricular Recognition",
    desc: "Wins in debates, quizzes, science fairs, calligraphy, drawing, and creative competitions — inside and outside Dehradun.",
  },
];

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Beyond Academics"
        title="Achievements"
        subtitle="A tradition of merit — in the classroom, on the field, and on the stage."
        crumbs={[{ label: "Home", href: "/" }, { label: "Achievements" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid sm:grid-cols-3 gap-6">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="card !p-7">
                <Icon size={28} className="text-navy-400 mb-3" />
                <h3 className="font-display text-xl text-navy-900 mb-2">{c.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="In numbers"
        title="Recognition that speaks."
        className="bg-navy-900 text-beige-200"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { k: "44+", v: "Years" },
            { k: "1000+", v: "Students" },
            { k: "50+", v: "Awards" },
            { k: "1", v: "Strong Community" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-4xl md:text-5xl text-navy-400">{s.k}</div>
              <div className="text-xs uppercase tracking-widest text-beige-200/70 mt-2">{s.v}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-beige-200/60 text-sm mt-8 italic">
          Specific student achievements and award records are maintained by the school office.
        </p>
      </Section>
      <CtaBanner />
    </>
  );
}
