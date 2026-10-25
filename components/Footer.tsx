import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-900 pb-24 pt-14 text-sm text-slate-400 md:pb-14">
      <div className="container-x grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-lg font-extrabold text-white">{site.name}</p>
          <p className="mt-3 max-w-sm leading-relaxed">{site.description}</p>
        </div>
        <div>
          <p className="font-bold text-white">바로가기</p>
          <ul className="mt-3 space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <p className="font-bold text-white">연락처</p>
          <p>{site.tel}</p>
          <p>{site.email}</p>
          <p>{site.address}</p>
        </div>
      </div>
      <div className="container-x mt-10 border-t border-white/10 pt-6 text-xs">
        <p>본 사이트는 포트폴리오용 데모이며, 실제 사무소가 아닙니다.</p>
        <p className="mt-1">© {new Date().getFullYear()} {site.nameEn}. All rights reserved.</p>
      </div>
    </footer>
  );
}
