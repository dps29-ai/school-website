import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Users } from "@/components/icons";

export const metadata = { title: "Faculty" };

const departments = [
  "English", "Hindi", "Mathematics", "Physics", "Chemistry", "Biology",
  "History & Civics", "Geography", "Computer Science", "Art & Craft",
  "Physical Education", "Music & Dance", "Moral Science",
];

export default function FacultyPage() {
  return (
    <>
      <PageHeader
        eyebrow="People"
        title="Our Faculty"
        subtitle="The educators who bring learning to life, every day."
        crumbs={[{ label: "Home", href: "/" }, { label: "Faculty" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-navy-700 leading-relaxed">
              Our teachers are the heart of Doon Presidency School. With subject expertise,
              classroom experience, and a deep commitment to each child's growth, they
              uphold the values of the school in every lesson.
            </p>
            <p className="text-navy-700 leading-relaxed mt-4">
              The school invests in continuous professional development — workshops,
              in-service training, and collaborative planning — to keep pedagogy
              contemporary and effective.
            </p>
          </div>
          <div className="card !p-7">
            <div className="flex items-center gap-3 mb-3">
              <Users size={24} className="text-navy-400" />
              <h3 className="font-display text-xl text-navy-900">Departments</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {departments.map((d) => (
                <span key={d} className="px-3 py-1 text-xs bg-beige-200 text-navy-800 border border-navy-100">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section title="A note on individual profiles" className="bg-beige-100">
        <p className="text-navy-700 max-w-3xl">
          Individual faculty profiles and photographs are maintained by the school office
          and updated periodically. Parents and visitors may request the same at the front
          desk.
        </p>
      </Section>
      <CtaBanner />
    </>
  );
}
