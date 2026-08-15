import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { school } from "@/data/school";
import { MapPin, Phone, Mail, Clock } from "@/components/icons";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact the school."
        subtitle="Visit us, call us, or write to us — we are happy to help."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <Section className="bg-beige-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="card !p-7 flex items-start gap-4">
              <MapPin size={22} className="text-navy-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg text-navy-900">Address</h3>
                <address className="not-italic text-navy-700 text-sm mt-1">
                  {school.address.line1}<br />
                  {school.address.line2}<br />
                  {school.address.pin}
                </address>
              </div>
            </div>
            <div className="card !p-7 flex items-start gap-4">
              <Phone size={22} className="text-navy-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg text-navy-900">Phone</h3>
                <div className="mt-1 space-y-1">
                  {school.contact.phone.map((p) => (
                    <a key={p} href={`tel:${p.replace(/[^\d+]/g, "")}`} className="block text-navy-700 hover:text-navy-400 text-sm font-mono">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="card !p-7 flex items-start gap-4">
              <Mail size={22} className="text-navy-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg text-navy-900">Email</h3>
                <a href={`mailto:${school.contact.email}`} className="text-navy-700 hover:text-navy-400 text-sm break-all">
                  {school.contact.email}
                </a>
              </div>
            </div>
            <div className="card !p-7 flex items-start gap-4">
              <Clock size={22} className="text-navy-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg text-navy-900">Office Hours</h3>
                <p className="text-navy-700 text-sm mt-1">Monday to Saturday<br />8:00 AM – 4:00 PM</p>
                <p className="text-xs text-navy-500 mt-1">Closed on the 2nd Saturday of every month.</p>
              </div>
            </div>
          </div>

          <div className="card !p-0 overflow-hidden">
            <iframe
              title="Doon Presidency School Location"
              src="https://www.google.com/maps?q=Doon+Presidency+School+Premnagar+Dehradun&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
