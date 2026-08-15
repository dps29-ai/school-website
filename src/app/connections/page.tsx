import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Sparkles } from "@/components/icons";
import Link from "next/link";

export const metadata = { title: "Connections" };

export default function ConnectionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Connections"
        title="Connect with DPS"
        subtitle="Stay close to the life of the school."
        crumbs={[{ label: "Home", href: "/" }, { label: "Connections" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: "Gallery", desc: "Photos from school events, sports, and academic life.", href: "/gallery" },
            { title: "Contact Us", desc: "Reach the school office any working day.", href: "/contact" },
            { title: "Follow us on social", desc: "Facebook, Instagram, YouTube — stay updated.", href: "/contact" },
          ].map((c) => (
            <Link key={c.title} href={c.href} className="card !p-7 block">
              <Sparkles size={22} className="text-caramel-600 mb-3" />
              <h3 className="font-display text-lg text-navy-900 mb-1">{c.title}</h3>
              <p className="text-sm text-navy-600">{c.desc}</p>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
