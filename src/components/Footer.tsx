import Link from "next/link";
import Image from "next/image";
import { school, navigation } from "@/data/school";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-beige-200 mt-20">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt={`${school.name} crest`}
                  fill
                  className="object-contain brightness-0 invert"
                  sizes="48px"
                />
              </div>
              <div>
                <div className="font-display text-lg font-semibold">{school.name}</div>
                <div className="text-xs text-caramel-400 devanagari">{school.slogan}</div>
              </div>
            </Link>
            <p className="text-sm text-beige-200/70 leading-relaxed mt-3">
              {school.classification.type} · {school.classification.gender} · {school.classification.medium} Medium.
              <br />
              Affiliated to {school.affiliation}.
            </p>
            <p className="text-xs text-beige-200/50 mt-4 italic">{school.sloganTranslation}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-caramel-400 mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              {navigation.slice(0, 5).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-beige-200/80 hover:text-caramel-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-caramel-400 mb-4">
              More
            </h3>
            <ul className="space-y-2 text-sm">
              {navigation.slice(5).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-beige-200/80 hover:text-caramel-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-caramel-400 mb-4">
              Reach Us
            </h3>
            <address className="not-italic text-sm text-beige-200/80 space-y-2">
              <div>
                {school.address.line1}<br />
                {school.address.line2}<br />
                {school.address.pin}
              </div>
              <div className="pt-2">
                {school.contact.phone.map((p) => (
                  <a key={p} href={`tel:${p.replace(/[^\d+]/g, "")}`} className="block hover:text-caramel-400">
                    {p}
                  </a>
                ))}
              </div>
              <div>
                <a href={`mailto:${school.contact.email}`} className="hover:text-caramel-400 break-all">
                  {school.contact.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-beige-200/60">
          <div>
            © {year} {school.name}. Established {school.established} · Managed by {school.society}.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/mandatory-disclosure" className="hover:text-caramel-400">Mandatory Disclosure</Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-caramel-400">Contact</Link>
            <span>·</span>
            <Link href="/career" className="hover:text-caramel-400">Careers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
