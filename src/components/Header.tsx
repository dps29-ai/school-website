"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { school, navigation } from "@/data/school";
import { Menu, X, ChevronDown, Phone } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block bg-navy-950 text-beige-200 text-xs">
        <div className="container-page flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <a href={`tel:${school.contact.phone[0]}`} className="flex items-center gap-1.5 hover:text-navy-400">
              <Phone className="h-3.5 w-3.5" />
              {school.contact.phone.join(" / ")}
            </a>
            <a href={`mailto:${school.contact.email}`} className="hover:text-navy-400">
              {school.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-4 text-beige-200/80">
            <span>{school.address.line1}, {school.address.line2} — {school.address.pin}</span>
            <span className="h-1 w-1 rounded-full bg-caramel-400" />
            <span>Admissions Open 2026-27</span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 border-b transition-all ${
          scrolled
            ? "border-navy-100 bg-beige-200/95 backdrop-blur-md shadow-sm"
            : "border-transparent bg-beige-200"
        }`}
      >
        <div className="container-page flex items-center justify-between gap-4 py-3 lg:py-4">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-12 w-12 lg:h-14 lg:w-14 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt={`${school.name} crest`}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 48px, 56px"
              />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg lg:text-xl font-semibold text-navy-900 group-hover:text-navy-400 transition-colors">
                {school.name}
              </div>
              <div className="text-[10px] lg:text-xs uppercase tracking-[0.18em] text-navy-400 font-medium">
                {school.slogan} · Est. {school.established}
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                    pathname.startsWith(item.href)
                      ? "text-navy-400"
                      : "text-navy-800 hover:text-navy-400"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
                {item.children && activeMenu === item.label && (
                  <div className="absolute left-0 top-full pt-1 w-60">
                    <div className="rounded-sm border border-navy-100 bg-white shadow-xl py-2 animate-fade-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-navy-700 hover:bg-beige-200 hover:text-navy-400"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/admissions" className="hidden md:inline-flex btn-caramel text-xs px-4 py-2">
              Apply Now
            </Link>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-navy-900"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div id="mobile-menu" className="lg:hidden border-t border-navy-100 bg-beige-200 max-h-[80vh] overflow-y-auto">
            <nav className="container-page py-4 space-y-1" aria-label="Mobile">
              {navigation.map((item) => (
                <details key={item.label} className="group">
                  <summary className="flex items-center justify-between py-3 text-sm font-medium text-navy-900 cursor-pointer list-none">
                    <Link href={item.href} onClick={() => setOpen(false)} className="flex-1">
                      {item.label}
                    </Link>
                    {item.children && (
                      <span className="text-navy-400 text-xs ml-2">▼</span>
                    )}
                  </summary>
                  {item.children && (
                    <div className="pl-4 pb-2 space-y-1 border-l border-caramel-200 ml-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm text-navy-700"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </details>
              ))}
              <div className="pt-4">
                <Link href="/admissions" onClick={() => setOpen(false)} className="btn-caramel w-full">
                  Apply for Admission
                </Link>
              </div>
              <div className="pt-4 border-t border-navy-100 text-xs text-navy-600 space-y-1">
                <a href={`tel:${school.contact.phone[0]}`} className="block">📞 {school.contact.phone.join(" / ")}</a>
                <a href={`mailto:${school.contact.email}`} className="block">✉️ {school.contact.email}</a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
