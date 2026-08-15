import { PageHeader, Section } from "@/components/PageHeader";
import { Users, GraduationCap, FileText, DollarSign, Calendar, Settings } from "@/components/icons";
import Link from "next/link";

export const metadata = { title: "Admin Dashboard" };

const stats = [
  { label: "Total Students", value: "1,200+", icon: GraduationCap, color: "text-blue-600" },
  { label: "Total Staff", value: "85", icon: Users, color: "text-green-600" },
  { label: "Active Notices", value: "12", icon: FileText, color: "text-caramel-600" },
  { label: "Fee Collection", value: "₹ 24L", icon: DollarSign, color: "text-purple-600" },
];

const quickActions = [
  { title: "Manage Students", desc: "Add, edit, and view student records", href: "/erp/erp-admin/dashboard" },
  { title: "Mark Attendance", desc: "Daily attendance for all classes", href: "/erp/erp-admin/dashboard" },
  { title: "Enter Marks", desc: "Record exam results and report cards", href: "/erp/erp-admin/dashboard" },
  { title: "Post Notice", desc: "Publish school-wide announcements", href: "/erp/erp-admin/dashboard" },
  { title: "View Reports", desc: "Analytics and performance reports", href: "/erp/erp-admin/dashboard" },
  { title: "Settings", desc: "School configuration and preferences", href: "/erp/erp-admin/dashboard" },
];

export default function AdminDashboardPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admin"
        title="Admin Dashboard"
        subtitle="Manage your school's operations and data."
        crumbs={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "Admin", href: "/erp/erp-admin" }, { label: "Dashboard" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="card !p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-widest text-navy-500 font-semibold">{s.label}</span>
                  <Icon size={20} className={s.color} />
                </div>
                <div className="font-display text-3xl text-navy-900">{s.value}</div>
              </div>
            );
          })}
        </div>
      </Section>
      <Section className="bg-beige-100">
        <h2 className="font-display text-2xl text-navy-900 mb-6">Quick Actions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickActions.map((a) => (
            <Link key={a.title} href={a.href} className="card !p-5 block hover:border-caramel-400">
              <h3 className="font-display text-lg text-navy-900 mb-1">{a.title}</h3>
              <p className="text-sm text-navy-600">{a.desc}</p>
              <p className="mt-2 text-xs text-caramel-600">→ Open</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 bg-white border border-navy-200 p-6">
          <h3 className="font-display text-lg text-navy-900 mb-2">🔒 Demo Mode</h3>
          <p className="text-sm text-navy-700 leading-relaxed">
            This is a demo dashboard. To enable full functionality, set up Supabase
            (free tier) and add the credentials to <code className="bg-beige-100 px-1">.env.local</code>.
            The full admin panel will let you manage students, attendance, marks, notices, and
            fee payments.
          </p>
          <p className="text-sm text-navy-700 mt-3">
            See <code className="bg-beige-100 px-1">supabase/schema.sql</code> for the database schema
            and <code className="bg-beige-100 px-1">.env.example</code> for environment variables.
          </p>
        </div>
      </Section>
    </>
  );
}
