import Link from "next/link";
import { site } from "@/lib/site";

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-slate-200 bg-white md:hidden">
      <a href={`tel:${site.tel}`} className="py-4 text-center font-bold text-navy-800">전화 상담</a>
      <Link href="/contact" className="bg-navy-700 py-4 text-center font-bold text-white">온라인 문의</Link>
    </div>
  );
}
