import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "오시는 길" };

const info = [
  { label: "주소", value: site.address },
  { label: "전화", value: site.tel },
  { label: "이메일", value: site.email },
  { label: "상담 시간", value: site.hours },
  { label: "지하철", value: "2호선 역삼역 3번 출구 도보 5분" },
  { label: "주차", value: "건물 지하주차장 이용 (상담 고객 2시간 무료)" },
];

export default function LocationPage() {
  return (
    <>
      <PageHero eyebrow="LOCATION" title="오시는 길" desc="방문 상담은 사전 예약 후 이용해 주세요." />
      <section className="py-16 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              title="사무소 위치 지도"
              src="https://www.openstreetmap.org/export/embed.html?bbox=127.0300%2C37.4980%2C127.0420%2C37.5040&layer=mapnik&marker=37.5010%2C127.0365"
              className="h-[360px] w-full md:h-[480px]"
              loading="lazy"
            />
          </div>
          <dl className="divide-y divide-slate-200 rounded-2xl border border-slate-200 px-6">
            {info.map((i) => (
              <div key={i.label} className="grid grid-cols-[88px_1fr] gap-4 py-5">
                <dt className="font-bold text-navy-900">{i.label}</dt>
                <dd className="text-slate-600">{i.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
