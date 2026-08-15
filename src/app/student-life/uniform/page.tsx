import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata = { title: "School Uniform" };

const prePrimarySummer = ["Full sleeves blue shirt with school monogram", "Grey trousers", "Light blue socks with dark blue stripes", "Black shoes with laces (boys) / with buckle (girls)", "Light blue rubber band / hair band / clip", "School belt (no belt for Nursery to UKG)"];

const prePrimaryWinter = ["Grey track suit with red stripes", "Red skiwi", "Grey cap", "Grey woollen socks", "Grey gloves", "Black shoes"];

const primaryWinter = ["Full sleeves blue shirt with school monogram", "Grey warm trousers", "Grey woollen socks", "Black shoes (laces for boys / buckle for girls)", "Light blue hair accessories", "School belt", "Navy blue sweater", "Navy blue blazer with school monogram", "Navy blue cap & gloves"];

const seniorBoysSummer = ["Full sleeves blue shirt with school monogram", "Grey trousers", "Light blue socks with dark blue stripes", "Black shoes with laces", "School belt"];

const seniorBoysWinter = ["Full sleeves blue shirt with school monogram", "Grey warm trousers", "Woollen grey socks", "Black shoes with laces", "Tie", "School belt", "Navy blue sweater", "Navy blue blazer with monogram", "Navy blue cap & gloves"];

const seniorGirlsSummer = ["Full sleeves kurta", "White salwar", "Light blue socks with dark blue stripes", "Black shoes with buckle", "Light blue hair accessories"];

const seniorGirlsWinter = ["Full sleeves blue shirt with school monogram", "Grey warm trousers", "Woollen grey socks", "Tie", "School belt", "Navy blue sweater", "Navy blue blazer with school monogram", "Black buckled shoes", "Light blue hair accessories", "Navy blue cap & gloves"];

export default function UniformPage() {
  return (
    <>
      <PageHeader
        eyebrow="Student Life"
        title="School Uniform"
        subtitle="A consistent identity for every student, across all seasons."
        crumbs={[{ label: "Home", href: "/" }, { label: "Student Life", href: "/student-life" }, { label: "Uniform" }]}
      />

      <Section className="bg-beige-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card !p-7">
            <h3 className="font-display text-xl text-navy-900 mb-1">Pre-Primary to Class V</h3>
            <div className="text-xs uppercase tracking-widest text-navy-400 mb-4">Summer</div>
            <ul className="space-y-2">
              {prePrimarySummer.map((x) => (
                <li key={x} className="flex items-start gap-2 text-navy-800 text-sm">
                  <span className="text-navy-400 mt-1">●</span>{x}
                </li>
              ))}
            </ul>
          </div>
          <div className="card !p-7">
            <h3 className="font-display text-xl text-navy-900 mb-1">Pre-Primary</h3>
            <div className="text-xs uppercase tracking-widest text-navy-400 mb-4">Winter</div>
            <ul className="space-y-2">
              {prePrimaryWinter.map((x) => (
                <li key={x} className="flex items-start gap-2 text-navy-800 text-sm">
                  <span className="text-navy-400 mt-1">●</span>{x}
                </li>
              ))}
            </ul>
          </div>
          <div className="card !p-7">
            <h3 className="font-display text-xl text-navy-900 mb-1">Primary (Class I – V)</h3>
            <div className="text-xs uppercase tracking-widest text-navy-400 mb-4">Winter</div>
            <ul className="space-y-2">
              {primaryWinter.map((x) => (
                <li key={x} className="flex items-start gap-2 text-navy-800 text-sm">
                  <span className="text-navy-400 mt-1">●</span>{x}
                </li>
              ))}
            </ul>
          </div>
          <div className="card !p-7">
            <h3 className="font-display text-xl text-navy-900 mb-1">Boys (Class VI – XII)</h3>
            <div className="text-xs uppercase tracking-widest text-navy-400 mb-4">Summer / Winter</div>
            <ul className="space-y-2">
              {[...seniorBoysSummer, "— winter —", ...seniorBoysWinter].map((x, i) => (
                <li key={i} className={`flex items-start gap-2 text-sm ${x === "— winter —" ? "text-navy-400 italic mt-2" : "text-navy-800"}`}>
                  <span className="mt-1">●</span>{x}
                </li>
              ))}
            </ul>
          </div>
          <div className="card !p-7">
            <h3 className="font-display text-xl text-navy-900 mb-1">Girls (Class VI – XII)</h3>
            <div className="text-xs uppercase tracking-widest text-navy-400 mb-4">Summer / Winter</div>
            <ul className="space-y-2">
              {[...seniorGirlsSummer, "— winter —", ...seniorGirlsWinter].map((x, i) => (
                <li key={i} className={`flex items-start gap-2 text-sm ${x === "— winter —" ? "text-navy-400 italic mt-2" : "text-navy-800"}`}>
                  <span className="mt-1">●</span>{x}
                </li>
              ))}
            </ul>
          </div>
          <div className="card !p-7">
            <h3 className="font-display text-xl text-navy-900 mb-1">Sports Uniform (I – XII)</h3>
            <div className="text-xs uppercase tracking-widest text-navy-400 mb-4">All seasons</div>
            <ul className="space-y-2 text-sm text-navy-800">
              <li className="flex items-start gap-2"><span className="text-navy-400 mt-1">●</span>House T-shirt with school monogram (or half-sleeve T-shirt with black arm sleeves)</li>
              <li className="flex items-start gap-2"><span className="text-navy-400 mt-1">●</span>White track pant, white socks, white PT shoes (summer)</li>
              <li className="flex items-start gap-2"><span className="text-navy-400 mt-1">●</span>Add navy blue sweater, grey track suit, cap & gloves (winter)</li>
            </ul>
            <p className="mt-4 text-xs text-navy-500 italic">Sample of the school uniform is displayed in the school office.</p>
          </div>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
