import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Users, Calendar, BookOpen } from "@/components/icons";

export const metadata = { title: "Parent Engagement" };

export default function ParentEngagementPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Parent Engagement"
        subtitle="A close partnership with families — working together for every child."
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Parent Engagement" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-2xl text-navy-900 mb-4">Working in close collaboration</h2>
            <p className="text-navy-700 leading-relaxed mb-4">
              At Doon Presidency School, we believe parents are partners in the learning
              journey. We engage families through regular Parent–Teacher Meetings, open
              houses, and structured feedback sessions.
            </p>
            <p className="text-navy-700 leading-relaxed">
              Personal attendance of parents is mandatory to collect Report Cards. Parents
              are encouraged to interact with teachers at every PTM and to maintain
              consistent communication with the school office.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              { icon: Calendar, title: "Parent–Teacher Meetings", desc: "Scheduled PTMs to discuss progress, attendance, and wellbeing." },
              { icon: Users, title: "Parent Workshops", desc: "Sessions on parenting, adolescent development, and learning support." },
              { icon: BookOpen, title: "Homework Diary", desc: "Daily communication between parents and class teachers." },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="card !p-5 flex items-start gap-4">
                  <Icon size={22} className="text-caramel-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-base text-navy-900 mb-1">{p.title}</h3>
                    <p className="text-sm text-navy-600">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
