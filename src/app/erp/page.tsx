import Link from "next/link";
import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { LogIn, Lock, Eye, Shield, UserCog, GraduationCap, Users } from "@/components/icons";

export const metadata = { title: "ERP Login Portal" };

const portals = [
  {
    title: "Admin",
    desc: "Full system administration. Manage students, staff, notices, and reports.",
    href: "/erp/erp-admin",
    icon: Shield,
    badge: "Admin",
    badgeColor: "bg-red-500",
  },
  {
    title: "Teacher",
    desc: "Mark attendance, enter marks, post notices, and view class information.",
    href: "/erp/erp-teacher",
    icon: UserCog,
    badge: "Staff",
    badgeColor: "bg-blue-500",
  },
  {
    title: "Student",
    desc: "View your attendance, marks, timetable, and school notices.",
    href: "/erp/erp-student",
    icon: GraduationCap,
    badge: "Student",
    badgeColor: "bg-caramel-500",
  },
  {
    title: "Parent",
    desc: "Track your child's progress, attendance, fee status, and school updates.",
    href: "/erp/erp-parent",
    icon: Users,
    badge: "Parent",
    badgeColor: "bg-green-500",
  },
];

export default function ErpLandingPage() {
  return (
    <>
      <PageHeader
        eyebrow="ERP"
        title="School Management Portal"
        subtitle="Sign in to the right portal for your role."
        crumbs={[{ label: "Home", href: "/" }, { label: "ERP" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {portals.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.title}
                href={p.href}
                className="card !p-7 text-center block group hover:border-caramel-400"
              >
                <div className={`h-14 w-14 rounded-full ${p.badgeColor} text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-2xl text-navy-900 mb-2">{p.title}</h3>
                <p className="text-sm text-navy-600 mb-3">{p.desc}</p>
                <span className="text-caramel-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Sign in →
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-10 text-center text-sm text-navy-600">
          <p>🔒 All logins are secured via Supabase Auth with row-level security.</p>
          <p className="mt-1">Need help? Contact the school office at <a href="mailto:dps_doon07@rediffmail.com" className="text-caramel-600 underline">dps_doon07@rediffmail.com</a></p>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
