"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = !isHome || scrolled || open;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid ? "bg-white shadow-sm" : "bg-transparent"}`}>
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex flex-col leading-tight">
          <span className={`text-lg font-extrabold md:text-xl ${solid ? "text-navy-900" : "text-white"}`}>{site.name}</span>
          <span className={`text-[10px] font-semibold tracking-[0.2em] ${solid ? "text-gold-500" : "text-gold-400"}`}>{site.nameEn}</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[15px] font-semibold transition ${
                pathname === item.href ? "text-gold-500" : solid ? "text-slate-700 hover:text-navy-700" : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href={`tel:${site.tel}`} className="rounded-full bg-gold-500 px-5 py-2 text-sm font-bold text-white transition hover:bg-gold-400">
            {site.tel}
          </a>
        </nav>

        <button
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${solid ? "text-navy-900" : "text-white"}`}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white md:hidden">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="block border-b border-slate-100 px-5 py-4 font-semibold text-slate-700">
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
