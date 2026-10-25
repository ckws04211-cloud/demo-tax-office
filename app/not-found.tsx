import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-20 text-center">
      <p className="text-6xl font-extrabold text-navy-800">404</p>
      <p className="mt-4 text-slate-600">요청하신 페이지를 찾을 수 없습니다.</p>
      <Link href="/" className="btn-primary mt-8">홈으로</Link>
    </section>
  );
}
