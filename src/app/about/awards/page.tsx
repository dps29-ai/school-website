import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Award, Trophy, Star } from "@/components/icons";

export const metadata = { title: "Awards & Honours" };

export default function AwardsPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Awards & Honours"
        subtitle="Recognising the achievements of our students and school."
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Awards & Honours" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Star, title: "Academic Excellence", desc: "Consistently strong ICSE & ISC results with school toppers receiving the Neeraj Goyal / Rama Goyal Scholarship." },
            { icon: Trophy, title: "Sports Achievements", desc: "Active participation and wins in district and state-level competitions across football, athletics, badminton, and more." },
            { icon: Award, title: "Co-Curricular Recognition", desc: "Wins in debates, quizzes, science fairs, calligraphy, drawing, and creative competitions." },
            { icon: Award, title: "Cultural Awards", desc: "Recognitions in music, dance, drama, and literary events at inter-school and state level." },
            { icon: Trophy, title: "Community Service", desc: "Honours for environmental initiatives, social service, and tree plantation drives." },
            { icon: Star, title: "Best Practices", desc: "Awards for innovative teaching practices, smart classroom integration, and student welfare programs." },
          ].map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.title} className="card !p-7">
                <Icon size={28} className="text-caramel-600 mb-3" />
                <h3 className="font-display text-lg text-navy-900 mb-2">{a.title}</h3>
                <p className="text-sm text-navy-600">{a.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
