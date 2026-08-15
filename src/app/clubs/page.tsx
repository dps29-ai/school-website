import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Sparkles, BookOpen, Music, Trophy, Heart, Globe } from "@/components/icons";

export const metadata = { title: "Clubs" };

const clubs = [
  { icon: BookOpen, title: "Literary Club", desc: "Creative writing, poetry, book reviews, and journalism." },
  { icon: Music, title: "Music & Dance Club", desc: "Vocal and instrumental music, classical and western dance." },
  { icon: Trophy, title: "Sports Club", desc: "Football, badminton, athletics, and inter-house competitions." },
  { icon: Sparkles, title: "Art & Craft Club", desc: "Painting, sculpture, origami, and creative crafts." },
  { icon: Globe, title: "Eco Club", desc: "Tree plantation, environmental awareness, and sustainability projects." },
  { icon: Heart, title: "Community Service Club", desc: "Social initiatives, charity drives, and outreach programs." },
];

export default function ClubsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Beyond Learning"
        title="Clubs"
        subtitle="Find your passion. Build community. Grow together."
        crumbs={[{ label: "Home", href: "/" }, { label: "Beyond Learning", href: "/co-curricular" }, { label: "Clubs" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="card !p-7">
                <Icon size={28} className="text-caramel-600 mb-3" />
                <h3 className="font-display text-lg text-navy-900 mb-2">{c.title}</h3>
                <p className="text-sm text-navy-600">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
