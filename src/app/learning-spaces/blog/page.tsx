import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { BookOpen, Sparkles } from "@/components/icons";
import Link from "next/link";

export const metadata = { title: "Blog" };

const posts = [
  { title: "Mrs. Rama Goyal Birth Anniversary", date: "29 Aug 2026", excerpt: "Special assembly honouring the founder's vision and the scholarship in her name.", tag: "Assembly" },
  { title: "Annual Sports Day Highlights", date: "14 Nov 2026", excerpt: "Athletics, team games, and house competition come alive on the field.", tag: "Sports" },
  { title: "Independence Day Celebrations", date: "15 Aug 2026", excerpt: "Patriotic songs, speeches, and the craft competition — a day of pride.", tag: "Culture" },
  { title: "L.P. Goyal Mathematics Quiz", date: "29 Jul 2026", excerpt: "Our annual quiz celebrates mathematical thinking across all classes.", tag: "Academics" },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Learning Spaces"
        title="Blog & Stories"
        subtitle="News, updates, and stories from Doon Presidency School."
        crumbs={[{ label: "Home", href: "/" }, { label: "Learning Spaces", href: "/learning-spaces" }, { label: "Blog" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid sm:grid-cols-2 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="card !p-7 group">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-caramel-600 mb-2">
                <Sparkles size={12} /> {p.tag}
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-1 group-hover:text-caramel-700">{p.title}</h3>
              <div className="text-xs text-navy-500 mb-3">{p.date}</div>
              <p className="text-sm text-navy-600">{p.excerpt}</p>
              <Link href="/blog" className="mt-4 inline-flex items-center gap-1 text-sm text-caramel-700 font-medium">
                Read more →
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="btn-caramel">View All Posts</Link>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
