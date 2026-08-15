import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Music, BookOpen, Sparkles, Heart } from "@/components/icons";

export const metadata = { title: "Co-Curricular Activities" };

const activities = [
  { icon: Music, title: "Music & Performing Arts", desc: "Songs, dance, instrumental practice, and the iconic Wednesday school song." },
  { icon: BookOpen, title: "Debate, Quiz & Elocution", desc: "Hindi elocution, English debate, mathematics quiz, and the L.P. Goyal Mathematics Quiz." },
  { icon: Sparkles, title: "Art, Craft & Origami", desc: "Drawing, poster making, craft, calligraphy, and creative expression." },
  { icon: Heart, title: "Community Service", desc: "Tree planting, social initiatives, and service — building responsible citizens." },
];

export default function CoCurricularPage() {
  return (
    <>
      <PageHeader
        eyebrow="Beyond Learning"
        title="Co-Curricular Activities"
        subtitle="A vibrant calendar of competitions and creative engagement."
        crumbs={[{ label: "Home", href: "/" }, { label: "Co-Curricular" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid sm:grid-cols-2 gap-6">
          {activities.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.title} className="card !p-7 flex items-start gap-4">
                <Icon size={28} className="text-caramel-600 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-xl text-navy-900 mb-1">{a.title}</h3>
                  <p className="text-navy-600 text-sm leading-relaxed">{a.desc}</p>
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
