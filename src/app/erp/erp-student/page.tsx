"use client";

import { useState } from "react";
import { PageHeader, Section } from "@/components/PageHeader";
import { LogIn, Lock, Eye } from "@/components/icons";

export default function StudentLoginPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ id: "", password: "" });

  return (
    <>
      <PageHeader
        eyebrow="ERP"
        title="Student Login"
        subtitle="Access your student portal for results, attendance, and resources."
        crumbs={[{ label: "Home", href: "/" }, { label: "ERP" }, { label: "Student Login" }]}
      />
      <Section className="bg-beige-200">
        <div className="max-w-md mx-auto">
          <div className="card !p-8">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-caramel-400/20 text-caramel-600 mx-auto mb-4">
              <LogIn size={24} />
            </div>
            <h2 className="font-display text-2xl text-navy-900 text-center mb-1">Student Portal</h2>
            <p className="text-sm text-navy-600 text-center mb-6">Sign in with your student credentials.</p>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-3 text-sm text-center">
                Login request received. Please contact the school office for credentials.
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-1">Student ID</label>
                  <input required type="text" value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} className="w-full border border-navy-200 px-3 py-2 text-sm focus:border-caramel-400 focus:outline-none" placeholder="Enter your student ID" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-1">Password</label>
                  <div className="relative">
                    <input required type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full border border-navy-200 px-3 py-2 pr-9 text-sm focus:border-caramel-400 focus:outline-none" placeholder="Enter your password" />
                    <Eye size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-400" />
                  </div>
                </div>
                <button type="submit" className="btn-caramel w-full flex items-center justify-center gap-2">
                  <Lock size={14} /> Sign In
                </button>
                <p className="text-xs text-navy-500 text-center">Need help? Contact the school office.</p>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
