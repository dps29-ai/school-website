import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import Image from "next/image";

export const metadata = { title: "Sports" };

export default function SportsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Facilities"
        title="Sports & Physical Education"
        subtitle="Discipline, teamwork, fitness — through sport."
        crumbs={[{ label: "Home", href: "/" }, { label: "Facilities", href: "/facilities" }, { label: "Sports" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square relative">
              <Image src="/images/sports-day.jpg" alt="Sports day at DPS" fill sizes="(max-width: 768px) 50vw, 300px" className="object-cover" />
            </div>
            <div className="aspect-square relative mt-8">
              <Image src="/images/sports-team.jpg" alt="School football team" fill sizes="(max-width: 768px) 50vw, 300px" className="object-cover" />
            </div>
          </div>
          <div>
            <p className="text-navy-700 leading-relaxed">
              Our annual <strong>Sports Day</strong> and inter-house competitions bring the
              school together in a celebration of fitness, fair play, and team spirit.
              Students participate in athletics, football, kho-kho, badminton, and indoor
              games throughout the year.
            </p>
            <p className="text-navy-700 leading-relaxed mt-4">
              Participation in games and sports is <strong>compulsory</strong> and is part
              of the student's continuous assessment. House colours and team jerseys are
              worn on designated days.
            </p>
          </div>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
