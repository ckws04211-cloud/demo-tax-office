import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { services, site } from "@/lib/site";

const stats = [
  { value: "15년", label: "세무 실무 경력" },
  { value: "1,200+", label: "누적 신고 건수" },
  { value: "98%", label: "고객 재계약률" },
  { value: "24시간", label: "문의 답변 보장" },
];

const reasons = [
  { title: "대표 세무사 직접 상담", desc: "첫 상담부터 신고까지 담당 세무사가 직접 책임집니다." },
  { title: "투명한 수수료", desc: "업무 범위와 비용을 상담 단계에서 미리 안내드립니다." },
  { title: "절세 리포트 제공", desc: "신고 후 절세 항목과 다음 해 준비 사항을 정리해 드립니다." },
];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[640px] items-center overflow-hidden bg-navy-900 md:min-h-[760px]">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=70"
          alt=""
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent" />
        <div className="container-x relative pt-16 text-white">
          <p className="eyebrow">TAX & ACCOUNTING</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
            세금은 바르게,
            <br />
            절세는 <span className="text-gold-400">꼼꼼하게</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-slate-300 md:text-lg">{site.description}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary bg-gold-500 hover:bg-gold-400">무료 상담 신청</Link>
            <Link href="/services" className="btn-outline">업무 분야 보기</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white">
        <div className="container-x grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`py-8 text-center md:py-10 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} md:border-r border-slate-100 last:border-r-0`}>
              <p className="text-3xl font-extrabold text-navy-800 md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">SERVICES</p>
            <h2 className="section-title">업무 분야</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  href={`/services#${s.slug}`}
                  className="group block h-full rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-navy-600 hover:shadow-lg"
                >
                  <p className="text-sm font-bold text-gold-500">0{i + 1}</p>
                  <h3 className="mt-2 text-xl font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-3 text-slate-600">{s.summary}</p>
                  <p className="mt-6 text-sm font-semibold text-navy-600 group-hover:underline">자세히 보기 →</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-50 py-20 md:py-28">
        <div className="container-x grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=70"
                alt="대표 세무사"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">GREETING</p>
            <h2 className="section-title">
              숫자 뒤에 있는
              <br />
              사업의 이야기를 듣습니다
            </h2>
            <p className="mt-6 leading-relaxed text-slate-600">
              세금 신고는 1년에 몇 번이지만, 사업은 매일 이어집니다. 바름 세무회계는 신고 대행에 그치지 않고, 대표님의 사업이 어디로 가는지 함께 보며 미리 준비하는 파트너가 되겠습니다.
            </p>
            <p className="mt-6 font-bold text-navy-900">대표 세무사 김바름</p>
            <Link href="/about" className="btn-primary mt-8">사무소 소개 보기</Link>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">WHY US</p>
            <h2 className="section-title">바름을 선택하는 이유</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <div className="h-full rounded-2xl bg-navy-800 p-8 text-white">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 font-bold">{i + 1}</span>
                  <h3 className="mt-6 text-xl font-bold">{r.title}</h3>
                  <p className="mt-3 text-slate-300">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-16">
        <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">세금 고민, 혼자 하지 마세요</h2>
            <p className="mt-2 text-slate-300">첫 상담은 무료입니다. 24시간 내에 답변드립니다.</p>
          </div>
          <Link href="/contact" className="btn-primary bg-gold-500 hover:bg-gold-400">상담 신청하기</Link>
        </div>
      </section>
    </>
  );
}
