import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Compass, MapPin } from "@/components/icons";
import Image from "next/image";

export const metadata = { title: "360° Tour" };

const hotspots = [
  { title: "Main Gate", desc: "Welcoming entrance to the school." },
  { title: "Reception", desc: "Front office and admissions desk." },
  { title: "Play Ground", desc: "Spacious grounds for sports and events." },
  { title: "Library", desc: "Well-stocked library with journals and storybooks." },
  { title: "Computer Lab", desc: "Modern computers with internet access." },
  { title: "Auditorium", desc: "Space for assemblies and cultural events." },
];

export default function TourPage() {
  return (
    <>
      <PageHeader
        eyebrow="Quick Links"
        title="360° Virtual Tour"
        subtitle="Explore Doon Presidency School — without leaving home."
        crumbs={[{ label: "Home", href: "/" }, { label: "Quick Links" }, { label: "360° Tour" }]}
      />
      <Section className="bg-beige-200">
        <div className="relative aspect-[16/9] mb-8 overflow-hidden border border-navy-200">
          <Image src="/images/campus.jpg" alt="School campus" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy-900/30 flex items-center justify-center">
            <div className="bg-beige-200/95 px-6 py-4 rounded-sm text-center">
              <Compass size={32} className="text-caramel-600 mx-auto mb-2" />
              <h3 className="font-display text-xl text-navy-900">Interactive 360° Tour</h3>
              <p className="text-sm text-navy-600 mt-1">A full virtual walkthrough is being prepared.</p>
            </div>
          </div>
        </div>
        <h2 className="font-display text-2xl text-navy-900 mb-4">Explore the campus</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hotspots.map((h) => (
            <div key={h.title} className="card !p-5 flex items-start gap-3">
              <MapPin size={20} className="text-caramel-600 flex-shrink-0" />
              <div>
                <h3 className="font-display text-base text-navy-900">{h.title}</h3>
                <p className="text-sm text-navy-600">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
