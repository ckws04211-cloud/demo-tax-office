import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "사무소 소개" };

const history = [
  { year: "2025", text: "법인 고객 300곳 돌파" },
  { year: "2022", text: "강남 테헤란로 사무소 확장 이전" },
  { year: "2019", text: "상속·증여 전담팀 신설" },
  { year: "2014", text: "바름 세무회계 개업" },
];

const members = [
  { name: "김바름", role: "대표 세무사", desc: "前 국세청 조사국 / 세무사 15년", img: "photo-1560250097-0b93528c311a" },
  { name: "이정확", role: "세무사", desc: "법인세·세무조사 대응", img: "photo-1573496359142-b8d87734a5a2" },
  { name: "박꼼꼼", role: "세무사", desc: "상속·증여·부동산 세무", img: "photo-1519085360753-af0119f7cbe7" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="ABOUT" title="사무소 소개" desc="바르게 계산하고, 끝까지 책임지는 세무 파트너" />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <h2 className="section-title mt-0">
              신뢰는 정확한
              <br />
              숫자에서 시작됩니다
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 leading-relaxed text-slate-600">
              <p>바름 세무회계는 2014년 개업 이후 개인사업자와 중소법인의 세무를 함께해 왔습니다.</p>
              <p>
                복잡한 세법을 쉬운 말로 설명드리고, 놓치기 쉬운 공제 항목까지 꼼꼼하게 챙기는 것을 원칙으로 합니다. 모든 고객은 담당 세무사가 직접 관리하며, 신고 후에는 절세 리포트로 다음 해를 함께 준비합니다.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50 py-20 md:py-28">
        <div className="container-x">
          <p className="eyebrow">HISTORY</p>
          <h2 className="section-title">연혁</h2>
          <ol className="mt-12 border-l-2 border-navy-100">
            {history.map((h, i) => (
              <Reveal key={h.year} delay={i * 80}>
                <li className="relative pb-10 pl-8 last:pb-0">
                  <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-gold-500" />
                  <p className="text-xl font-extrabold text-navy-800">{h.year}</p>
                  <p className="mt-1 text-slate-600">{h.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <p className="eyebrow">MEMBERS</p>
          <h2 className="section-title">구성원</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="relative aspect-[4/3] bg-slate-100">
                    <Image
                      src={`https://images.unsplash.com/${m.img}?auto=format&fit=crop&w=800&q=70`}
                      alt={m.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-bold text-gold-500">{m.role}</p>
                    <p className="mt-1 text-xl font-bold text-navy-900">{m.name}</p>
                    <p className="mt-2 text-slate-600">{m.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
