import { NextResponse } from "next/server";
import { validateContact, type ContactInput } from "@/lib/contact";

const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const escape = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, message: "잠시 후 다시 시도해 주세요." }, { status: 429 });
  }

  let body: Partial<ContactInput>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "잘못된 요청입니다." }, { status: 400 });
  }

  // 봇이 채우는 숨김 필드: 채워져 있으면 성공처럼 응답하고 버림
  if (body.website) return NextResponse.json({ ok: true });

  const errors = validateContact(body);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  // 데모 배포: 키가 없으면 실제 발송 없이 성공 처리
  if (!apiKey || !to) {
    return NextResponse.json({ ok: true, demo: true });
  }

  const html = `
    <h2>홈페이지 상담 문의</h2>
    <p><b>이름</b> ${escape(body.name!)}</p>
    <p><b>연락처</b> ${escape(body.phone!)}</p>
    <p><b>이메일</b> ${escape(body.email ?? "-")}</p>
    <p><b>분야</b> ${escape(body.category!)}</p>
    <p><b>내용</b><br/>${escape(body.message!).replace(/\n/g, "<br/>")}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "바름 세무회계 <onboarding@resend.dev>",
      to: [to],
      subject: `[상담 문의] ${body.category} - ${body.name}`,
      html,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ ok: false, message: "전송에 실패했습니다. 전화로 문의해 주세요." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
