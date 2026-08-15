import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Download } from "@/components/icons";
import Link from "next/link";

export const metadata = { title: "Download Prospectus" };

export default function ProspectusPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Prospectus"
        subtitle="A complete guide to the school, its programs, and the application process."
        crumbs={[{ label: "Home", href: "/" }, { label: "Admissions", href: "/admissions" }, { label: "Prospectus" }]}
      />
      <Section className="bg-beige-200">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white border border-navy-100 p-10">
            <p className="text-navy-700 leading-relaxed">
              The detailed prospectus contains everything parents need to know — fee
              structure, uniform details, rules of discipline, holiday list, exam schedule,
              and the admission form. Please contact the school office to receive a copy.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Contact the school office
            </Link>
            <p className="text-xs text-navy-500 mt-4">
              A downloadable PDF will be available here once published by the school.
            </p>
          </div>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
