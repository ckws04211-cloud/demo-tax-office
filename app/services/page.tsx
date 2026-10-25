import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/site";

export const metadata: Metadata = { title: "업무 분야" };

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="SERVICES" title="업무 분야" desc="사업 단계와 상황에 맞는 세무 서비스를 제공합니다." />

      <div className="sticky top-16 z-30 border-b border-slate-200 bg-white/95 backdrop-blur md:top-20">
        <div className="container-x flex gap-2 overflow-x-auto py-3">
          {services.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="shrink-0 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:border-navy-600 hover:text-navy-700">
              {s.title}
            </a>
          ))}
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container-x space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article id={s.slug} className="scroll-mt-40 grid gap-8 rounded-2xl border border-slate-200 p-7 md:grid-cols-[1fr_1.4fr] md:p-10">
                <div>
                  <p className="text-sm font-bold text-gold-500">0{i + 1}</p>
                  <h2 className="mt-2 text-2xl font-bold text-navy-900 md:text-3xl">{s.title}</h2>
                  <p className="mt-4 text-slate-600">{s.summary}</p>
                  <p className="mt-6 inline-block rounded-md bg-navy-50 px-3 py-1.5 text-sm font-semibold text-navy-700">추천 대상 · {s.target}</p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" /></svg>
                      <span className="font-medium text-slate-700">{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="container-x mt-12 text-center">
          <Link href="/contact" className="btn-primary">이 업무로 상담 신청하기</Link>
        </div>
      </section>
    </>
  );
}
