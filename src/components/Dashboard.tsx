import Link from "next/link";
import Image from "next/image";
import { school } from "@/data/school";
import { Phone, Mail, MessageCircle, MapPin } from "./icons";

const dashboardLinks = {
  school: [
    { label: "About DPS", href: "/about" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "Principal's Desk", href: "/about/principal-desk" },
    { label: "Our Vision & Mission", href: "/about/vision-mission" },
    { label: "Affiliations & Accreditations", href: "/mandatory-disclosure" },
    { label: "Awards & Honours", href: "/about/awards" },
    { label: "Parent Engagement", href: "/about/parent-engagement" },
    { label: "Staff", href: "/faculty" },
    { label: "Prefectorial Board", href: "/about/prefectorial-board" },
  ],
  beyondLearning: [
    { label: "Co-Curricular Activities", href: "/co-curricular" },
    { label: "Sports", href: "/facilities/sports" },
    { label: "Personal & Social Education", href: "/personal-social-education" },
    { label: "Clubs", href: "/clubs" },
  ],
  learningSpaces: [
    { label: "Education", href: "/learning-spaces/education" },
    { label: "Sports", href: "/facilities/sports" },
    { label: "Blog", href: "/learning-spaces/blog" },
  ],
  connections: [
    { label: "Gallery", href: "/gallery" },
  ],
  erp: [
    { label: "Admin Login", href: "/erp/erp-admin" },
    { label: "Teacher Login", href: "/erp/erp-teacher" },
    { label: "Student Login", href: "/erp/erp-student" },
    { label: "Parent Login", href: "/erp/erp-parent" },
  ],
  admissions: [
    { label: "Admission Process", href: "/admissions" },
    { label: "School Prospectus", href: "/admissions/prospectus" },
    { label: "Eligibility Criteria", href: "/eligibility" },
    { label: "Important Dates", href: "/important-dates" },
  ],
  documents: [
    { label: "Policy Document", href: "/policy-document" },
    { label: "Mandatory Public Disclosure", href: "/public-disclosure" },
  ],
  quickLinks: [
    { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
    { label: "360 Tour", href: "/360-tour" },
  ],
};

const socialLinks = [
  { label: "Facebook", href: "#", icon: "F" },
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "YouTube", href: "#", icon: "▶" },
  { label: "Instagram", href: "#", icon: "◎" },
];

export function Dashboard() {
  const year = new Date().getFullYear();
  return (
    <section className="bg-beige-200 border-t border-navy-200">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand + Contact */}
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt={`${school.name} crest`}
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div className="leading-tight">
                <div className="font-display text-base font-semibold text-navy-900">{school.name}</div>
              </div>
            </Link>
            <p className="text-sm text-navy-700 leading-relaxed mb-5">
              {school.address.line1}, {school.address.line2} {school.address.pin}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="border border-navy-200 p-3">
                <div className="flex items-center gap-1.5 text-caramel-600 mb-1.5">
                  <Phone size={14} />
                  <span className="text-[10px] uppercase tracking-widest font-semibold">Phone</span>
                </div>
                <a href={`tel:${school.contact.phone[0]}`} className="text-xs text-navy-800 hover:text-caramel-600 block">
                  {school.contact.phone[0]}
                </a>
                <a href={`tel:${school.contact.phone[1]}`} className="text-xs text-navy-800 hover:text-caramel-600 block">
                  {school.contact.phone[1]}
                </a>
              </div>
              <div className="border border-navy-200 p-3">
                <div className="flex items-center gap-1.5 text-caramel-600 mb-1.5">
                  <Mail size={14} />
                  <span className="text-[10px] uppercase tracking-widest font-semibold">Email</span>
                </div>
                <a href={`mailto:${school.contact.email}`} className="text-xs text-navy-800 hover:text-caramel-600 block break-all">
                  {school.contact.email}
                </a>
                <a href="mailto:admissions@doonpresidency.edu.in" className="text-xs text-navy-800 hover:text-caramel-600 block break-all">
                  admissions@dps...
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-navy-700 font-medium">Follow us on</span>
              <div className="flex items-center gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="h-7 w-7 rounded-full bg-navy-900 text-beige-200 flex items-center justify-center text-xs font-bold hover:bg-caramel-500 hover:text-navy-900 transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <DashboardColumn title="School" links={dashboardLinks.school} />
            <DashboardColumn title="Beyond Learning" links={dashboardLinks.beyondLearning} />
            <DashboardColumn title="Learning Spaces" links={dashboardLinks.learningSpaces} />
            <DashboardColumn title="Connections" links={dashboardLinks.connections} />
            <DashboardColumn title="ERP" links={dashboardLinks.erp} />
            <DashboardColumn title="Admissions" links={dashboardLinks.admissions} />
            <DashboardColumn title="Documents" links={dashboardLinks.documents} />
            <DashboardColumn title="Quick Links" links={dashboardLinks.quickLinks} />
          </div>
        </div>

        {/* Contact Us strip */}
        <div className="mt-12 pt-8 border-t border-navy-200">
          <h3 className="font-display text-base text-caramel-600 mb-4">Contact Us</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-caramel-600 flex-shrink-0 mt-0.5" />
              <span className="text-navy-700">
                {school.address.line1}, {school.address.line2} {school.address.pin}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <Phone size={16} className="text-caramel-600 flex-shrink-0 mt-0.5" />
              <span className="text-navy-700">{school.contact.phone.join(" / ")}</span>
            </div>
            <div className="flex items-start gap-2">
              <MessageCircle size={16} className="text-caramel-600 flex-shrink-0 mt-0.5" />
              <span className="text-navy-700">WhatsApp: {school.contact.phone[0]}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-navy-200 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-navy-600">
          <div>
            © {year} {school.name}. Established {school.established} · {school.society}
          </div>
          <div className="flex items-center gap-4">
            <Link href="/mandatory-disclosure" className="hover:text-caramel-600">Mandatory Disclosure</Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-caramel-600">Contact</Link>
            <span>·</span>
            <Link href="/career" className="hover:text-caramel-600">Careers</Link>
            <span>·</span>
            <Link href="/policy-document" className="hover:text-caramel-600">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-base text-caramel-600 mb-3">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-navy-700 hover:text-caramel-600 transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
