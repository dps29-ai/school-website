import { PageHeader, Section } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import Image from "next/image";

export const metadata = { title: "Gallery" };

const images = [
  { src: "/images/campus.jpg", alt: "School campus" },
  { src: "/images/gate.jpg", alt: "School gate" },
  { src: "/images/sports-day.jpg", alt: "Sports day" },
  { src: "/images/sports-day-2.jpg", alt: "Athletics event" },
  { src: "/images/sports-team.jpg", alt: "Football team" },
  { src: "/images/event.jpg", alt: "Annual event" },
  { src: "/images/function.jpg", alt: "School function" },
  { src: "/images/students-council.jpg", alt: "Student council" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments from our school."
        subtitle="A glimpse into life at Doon Presidency School."
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />
      <Section className="bg-beige-200">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <figure key={i} className="relative aspect-square overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-beige-200 text-sm">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
