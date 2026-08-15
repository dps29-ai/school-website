import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata = { title: "Subjects Offered" };

const subjects = {
  "Pre-Primary (PG – UKG)": [
    "English Phonics & Reading", "Hindi", "Numeracy", "EVS / General Awareness",
    "Art & Craft", "Music & Dance", "Storytelling", "Physical Activity",
  ],
  "Primary (I – V)": [
    "English", "Hindi", "Mathematics", "EVS / Science", "Social Studies",
    "Computer Science", "Art Education", "Physical Education", "Moral Science",
  ],
  "Middle School (VI – VIII)": [
    "English", "Hindi / Sanskrit", "Mathematics", "Science",
    "Social Studies (History, Geography, Civics)", "Computer Applications",
    "Art & Craft", "Physical Education",
  ],
  "Secondary (IX – X, ICSE)": [
    "English (Compulsory)", "Hindi / Sanskrit", "Mathematics",
    "Science (Physics, Chemistry, Biology)", "History & Civics", "Geography",
    "Computer Applications", "Physical Education", "Art",
  ],
  "Senior Secondary (XI – XII, ISC)": [
    "Science Stream: English, Physics, Chemistry, Biology/Mathematics, Computer/optional",
    "Commerce Stream: English, Accounts, Business Studies, Economics, optional",
  ],
};

export default function SubjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Subjects we offer."
        subtitle="A balanced spread across languages, sciences, humanities, and the arts."
        crumbs={[{ label: "Home", href: "/" }, { label: "Academics", href: "/academics" }, { label: "Subjects" }]}
      />
      <Section className="bg-beige-200">
        <div className="space-y-10">
          {Object.entries(subjects).map(([stage, list]) => (
            <div key={stage}>
              <h2 className="font-display text-2xl text-navy-900 mb-4">{stage}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {list.map((s) => (
                  <div key={s} className="bg-white border border-navy-100 px-4 py-3 text-sm text-navy-800">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
