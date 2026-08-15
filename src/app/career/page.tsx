"use client";

import { useState } from "react";
import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Mail, Phone, Check } from "@/components/icons";
import { school } from "@/data/school";

export default function CareerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", role: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Join our team."
        subtitle="Build a meaningful career shaping young minds at DPS."
        crumbs={[{ label: "Home", href: "/" }, { label: "Career" }]}
      />

      <Section className="bg-beige-200">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-2xl text-navy-900 mb-3">Why teach at DPS?</h2>
            <ul className="space-y-3 text-navy-800">
              {[
                "A supportive, value-driven school community",
                "Opportunities for professional growth and training",
                "Engaged students and involved parents",
                "A balanced emphasis on academics and co-curriculars",
                "Beautiful campus in the heart of Dehradun",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check size={18} className="text-navy-400 mt-0.5 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 card !p-6">
              <h3 className="font-display text-lg text-navy-900 mb-3">Current Openings</h3>
              <p className="text-navy-700 text-sm">
                We invite applications from trained, qualified, and experienced candidates
                for the following positions. Please send your CV and a cover letter to the
                school office.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-navy-800">
                <li>· Trained Graduate Teachers (TGTs) — English, Hindi, Mathematics, Science, Social Studies</li>
                <li>· Post-Graduate Teachers (PGTs) — Physics, Chemistry, Biology, English, Accounts</li>
                <li>· Pre-Primary / Primary Teachers</li>
                <li>· Physical Education, Art, Music</li>
                <li>· Administrative and Support Staff</li>
              </ul>
              <p className="text-xs text-navy-500 mt-4 italic">
                Specific vacancies, qualifications, and experience requirements are
                confirmed by the school office at the time of recruitment.
              </p>
            </div>
          </div>

          <div className="card !p-7">
            <h3 className="font-display text-2xl text-navy-900 mb-2">Send your application</h3>
            <p className="text-sm text-navy-600 mb-6">
              We will get back to you within a few working days.
            </p>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 text-sm">
                Thank you. Your application has been noted — our team will reach out shortly.
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-800 mb-1">Full Name *</label>
                  <input id="name" required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-navy-200 px-3 py-2 text-sm focus:border-caramel-400 focus:outline-none" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-800 mb-1">Email *</label>
                    <input id="email" required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-navy-200 px-3 py-2 text-sm focus:border-caramel-400 focus:outline-none" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy-800 mb-1">Phone</label>
                    <input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full border border-navy-200 px-3 py-2 text-sm focus:border-caramel-400 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-navy-800 mb-1">Role Applying For *</label>
                  <input id="role" required type="text" placeholder="e.g. TGT English" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="w-full border border-navy-200 px-3 py-2 text-sm focus:border-caramel-400 focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-800 mb-1">Brief Profile / Message</label>
                  <textarea id="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full border border-navy-200 px-3 py-2 text-sm focus:border-caramel-400 focus:outline-none" />
                </div>
                <button type="submit" className="btn-primary w-full">Submit Application</button>
                <p className="text-xs text-navy-500 text-center">Or email your CV to <a href={`mailto:${school.contact.email}`} className="text-navy-400 underline">{school.contact.email}</a></p>
              </form>
            )}
          </div>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
