import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Users } from "@/components/icons";

export const metadata = { title: "Staff" };

const departments = [
  "English", "Hindi", "Mathematics", "Physics", "Chemistry", "Biology",
  "History & Civics", "Geography", "Computer Science", "Art & Craft",
  "Physical Education", "Music & Dance", "Moral Science",
];

export default function StaffPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Our Staff"
        subtitle="The educators and support staff who keep our school running."
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Staff" }]}
      />
      <Section className="bg-beige-200">
        <p className="text-navy-700 leading-relaxed max-w-3xl mb-8">
          Beyond our teaching faculty, a dedicated team of administrative, support, and
          operations staff ensure the smooth day-to-day running of the school — from
          accounts and transport to the library, laboratories, and the front office.
        </p>
        <div className="card !p-7">
          <div className="flex items-center gap-3 mb-4">
            <Users size={22} className="text-caramel-600" />
            <h3 className="font-display text-xl text-navy-900">Teaching Departments</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {departments.map((d) => (
              <span key={d} className="px-3 py-1.5 text-xs bg-beige-100 text-navy-800 border border-navy-200">
                {d}
              </span>
            ))}
          </div>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
