import Link from "next/link";
import { ArrowRight, Phone, Mail } from "./icons";
import { school } from "@/data/school";

export function CtaBanner({
  title = "Admissions Open for 2026–27",
  subtitle = "Secure your child's place at one of Dehradun's most respected ICSE day schools.",
}: { title?: string; subtitle?: string }) {
  return (
    <section className="bg-navy-900 text-beige-200">
      <div className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="heading-eyebrow text-caramel-400 mb-3">Take the next step</div>
            <h2 className="heading-section text-beige-200 text-balance">{title}</h2>
            <p className="mt-4 text-beige-200/80 text-lg max-w-xl text-pretty">{subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/admissions" className="btn-caramel">
                Apply for Admission <ArrowRight size={16} />
              </Link>
              <Link href="/fee-structure" className="btn-secondary border-beige-200/30 text-beige-200 hover:bg-beige-200 hover:text-navy-900">
                View Fee Structure
              </Link>
            </div>
          </div>
          <div className="bg-navy-800/50 border border-navy-700 rounded-sm p-8">
            <h3 className="font-display text-xl mb-4 text-caramel-400">Speak with us</h3>
            <div className="space-y-4 text-sm">
              {school.contact.phone.map((p) => (
                <a key={p} href={`tel:${p.replace(/[^\d+]/g, "")}`} className="flex items-center gap-3 hover:text-caramel-400">
                  <Phone size={18} className="text-caramel-400 flex-shrink-0" />
                  <span className="font-mono">{p}</span>
                </a>
              ))}
              <a href={`mailto:${school.contact.email}`} className="flex items-center gap-3 hover:text-caramel-400 break-all">
                <Mail size={18} className="text-caramel-400 flex-shrink-0" />
                <span>{school.contact.email}</span>
              </a>
              <div className="pt-4 mt-4 border-t border-navy-700 text-beige-200/80 text-xs">
                Office Hours: Mon–Sat, 8:00 AM – 4:00 PM
                <br />
                {school.address.line1}, {school.address.line2} — {school.address.pin}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
