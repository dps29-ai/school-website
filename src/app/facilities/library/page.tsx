import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { BookOpen } from "@/components/icons";

export const metadata = { title: "Library" };

export default function LibraryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Facilities"
        title="The Library"
        subtitle="A space to read, discover, and grow."
        crumbs={[{ label: "Home", href: "/" }, { label: "Facilities", href: "/facilities" }, { label: "Library" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-navy-700 leading-relaxed">
              The school has a well-equipped library with journals, newspapers,
              subject-related books, and storybooks for students. The library supports
              classroom learning and nurtures a genuine love of reading — a habit that
              serves our students long after they leave school.
            </p>
            <ul className="mt-6 space-y-3">
              {["Daily newspapers and periodicals", "Subject reference books for all classes", "Fiction, non-fiction, and storybooks", "Competitive exam and general knowledge titles"].map((b) => (
                <li key={b} className="flex items-start gap-3 text-navy-800">
                  <span className="mt-1 h-5 w-5 rounded-full bg-caramel-400/20 text-navy-400 flex items-center justify-center text-xs">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-[4/3] relative bg-navy-900/5 flex items-center justify-center">
            <BookOpen size={80} className="text-navy-400" />
          </div>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
