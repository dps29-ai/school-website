"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PageHeader, Section } from "@/components/PageHeader";
import { Shield, Lock, Eye, AlertCircle } from "@/components/icons";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // For demo: in production, this calls Supabase auth
    // import { getSupabaseBrowser } from '@/lib/supabase';
    // const supabase = getSupabaseBrowser();
    // const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    // if (error) { setError(error.message); setLoading(false); return; }
    // router.push('/erp/dashboard');

    // Demo: redirect to a placeholder admin dashboard
    setTimeout(() => {
      router.push("/erp/erp-admin/dashboard");
    }, 800);
  };

  return (
    <>
      <PageHeader
        eyebrow="ERP"
        title="Admin Login"
        subtitle="Authorized personnel only. All actions are logged."
        crumbs={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "Admin Login" }]}
      />
      <Section className="bg-beige-200">
        <div className="max-w-md mx-auto">
          <div className="card !p-8">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-red-500 text-white mx-auto mb-4">
              <Shield size={24} />
            </div>
            <h2 className="font-display text-2xl text-navy-900 text-center mb-1">Administrator</h2>
            <p className="text-sm text-navy-600 text-center mb-6">Sign in with your admin credentials.</p>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 p-3 text-sm flex items-start gap-2 mb-4">
                <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-navy-800 mb-1">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-navy-200 px-3 py-2 text-sm focus:border-caramel-400 focus:outline-none"
                  placeholder="admin@doonpresidency.edu.in"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-800 mb-1">Password</label>
                <div className="relative">
                  <input
                    required
                    type="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="w-full border border-navy-200 px-3 py-2 pr-9 text-sm focus:border-caramel-400 focus:outline-none"
                    placeholder="Enter your password"
                  />
                  <Eye size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-400" />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-caramel w-full flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Lock size={14} /> {loading ? "Signing in..." : "Sign In as Admin"}
              </button>
              <p className="text-xs text-navy-500 text-center">
                Default: <code className="bg-beige-100 px-1">admin@doonpresidency.edu.in</code> / <code className="bg-beige-100 px-1">Admin@2026</code>
              </p>
            </form>

            <div className="mt-6 pt-6 border-t border-navy-200 text-center">
              <p className="text-xs text-navy-500 mb-2">Looking for a different portal?</p>
              <div className="flex flex-wrap gap-2 justify-center text-xs">
                <Link href="/erp/erp-teacher" className="text-caramel-600 hover:underline">Teacher</Link>
                <span className="text-navy-300">·</span>
                <Link href="/erp/erp-student" className="text-caramel-600 hover:underline">Student</Link>
                <span className="text-navy-300">·</span>
                <Link href="/erp/erp-parent" className="text-caramel-600 hover:underline">Parent</Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
