import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Heart, Users, BookOpen, Sparkles } from "@/components/icons";

export const metadata = { title: "Personal & Social Education" };

const topics = [
  { icon: Heart, title: "Emotional Wellbeing", desc: "Building self-awareness, resilience, and emotional intelligence." },
  { icon: Users, title: "Social Skills", desc: "Cooperation, empathy, communication, and respect for others." },
  { icon: BookOpen, title: "Value Education", desc: "Moral science, ethics, and the school's guiding principles." },
  { icon: Sparkles, title: "Life Skills", desc: "Decision-making, goal setting, and personal responsibility." },
];

export default function PSESage() {
  return (
    <>
      <PageHeader
        eyebrow="Beyond Learning"
        title="Personal & Social Education"
        subtitle="Nurturing well-rounded, responsible, and emotionally aware individuals."
        crumbs={[{ label: "Home", href: "/" }, { label: "Beyond Learning", href: "/co-curricular" }, { label: "Personal & Social Education" }]}
      />
      <Section className="bg-beige-200">
        <p className="text-navy-700 leading-relaxed max-w-3xl mb-8">
          Personal and Social Education (PSE) is woven into the everyday life of the
          school. Through morning assemblies, classroom discussions, and dedicated
          sessions, students explore themes that help them grow into confident, kind, and
          responsible members of society.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {topics.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.title} className="card !p-7 flex items-start gap-4">
                <Icon size={28} className="text-caramel-600 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-xl text-navy-900 mb-1">{t.title}</h3>
                  <p className="text-navy-600 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
