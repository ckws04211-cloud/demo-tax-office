import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "상담 문의" };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="CONTACT" title="상담 문의" desc="첫 상담은 무료입니다. 남겨주시면 24시간 내에 연락드립니다." />
      <section className="py-16 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_2fr]">
          <aside className="space-y-6">
            <div className="rounded-2xl bg-navy-800 p-8 text-white">
              <p className="text-sm text-slate-300">전화 상담</p>
              <a href={`tel:${site.tel}`} className="mt-1 block text-3xl font-extrabold">{site.tel}</a>
              <p className="mt-4 text-sm text-slate-300">{site.hours}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-8">
              <p className="font-bold text-navy-900">상담 전 준비하면 좋아요</p>
              <ul className="mt-3 list-inside list-disc space-y-1.5 text-slate-600">
                <li>사업자 유형 (개인 / 법인)</li>
                <li>업종과 대략적인 매출 규모</li>
                <li>최근 신고 내역 (있는 경우)</li>
              </ul>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
