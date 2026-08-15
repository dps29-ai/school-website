import Link from "next/link";
import { Ornament } from "@/components/PageHeader";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <section className="bg-navy-950 text-beige-200 min-h-[60vh] flex items-center">
      <div className="container-page py-20 text-center">
        <Ornament />
        <div className="font-display text-7xl text-navy-400 mt-6">404</div>
        <h1 className="font-display text-3xl md:text-4xl mt-3">Page not found</h1>
        <p className="mt-3 text-beige-200/80 max-w-lg mx-auto">
          The page you are looking for may have been moved, renamed, or is temporarily unavailable.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="btn-gold">Go to Home</Link>
          <Link href="/contact" className="btn-secondary border-beige-200/30 text-beige-200 hover:bg-beige-200 hover:text-navy-900">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
