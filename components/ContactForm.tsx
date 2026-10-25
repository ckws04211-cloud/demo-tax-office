"use client";

import { useState, type FormEvent } from "react";
import { categories, validateContact, type ContactInput, type FieldErrors } from "@/lib/contact";

const empty: ContactInput = { name: "", phone: "", email: "", category: "", message: "", agree: false, website: "" };

const formatPhone = (v: string) => {
  const d = v.replace(/[^0-9]/g, "").slice(0, 11);
  if (d.length < 4) return d;
  if (d.startsWith("02")) return d.length < 6 ? `${d.slice(0, 2)}-${d.slice(2)}` : `${d.slice(0, 2)}-${d.slice(2, d.length - 4)}-${d.slice(-4)}`;
  if (d.length < 8) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, d.length - 4)}-${d.slice(-4)}`;
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [serverMsg, setServerMsg] = useState("");

  const set = <K extends keyof ContactInput>(k: K, v: ContactInput[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const v = validateContact(form);
    setErrors(v);
    if (Object.keys(v).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (data.ok) {
        setStatus("done");
        setForm(empty);
      } else {
        if (data.errors) setErrors(data.errors);
        setServerMsg(data.message ?? "입력 내용을 확인해 주세요.");
        setStatus("error");
      }
    } catch {
      setServerMsg("네트워크 오류가 발생했습니다.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-navy-100 bg-navy-50 p-10 text-center">
        <p className="text-2xl font-bold text-navy-900">문의가 접수되었습니다</p>
        <p className="mt-3 text-slate-600">영업일 기준 24시간 내에 연락드리겠습니다.</p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-primary mt-8">새 문의 작성</button>
      </div>
    );
  }

  const input = "w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-navy-600 focus:ring-2 focus:ring-navy-100";
  const Err = ({ k }: { k: keyof ContactInput }) => (errors[k] ? <p className="mt-1.5 text-sm text-red-600">{errors[k]}</p> : null);

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6 rounded-2xl border border-slate-200 p-6 md:p-10">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => set("website", e.target.value)} className="hidden" aria-hidden />

      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-semibold text-navy-900">이름 <span className="text-red-500">*</span></span>
          <input className={input} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="홍길동" />
          <Err k="name" />
        </label>
        <label className="block">
          <span className="mb-2 block font-semibold text-navy-900">연락처 <span className="text-red-500">*</span></span>
          <input className={input} inputMode="tel" value={form.phone} onChange={(e) => set("phone", formatPhone(e.target.value))} placeholder="010-0000-0000" />
          <Err k="phone" />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block font-semibold text-navy-900">이메일</span>
        <input className={input} type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="선택 입력" />
        <Err k="email" />
      </label>

      <fieldset>
        <legend className="mb-2 font-semibold text-navy-900">상담 분야 <span className="text-red-500">*</span></legend>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => set("category", c)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${form.category === c ? "border-navy-700 bg-navy-700 text-white" : "border-slate-300 text-slate-600 hover:border-navy-600"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <Err k="category" />
      </fieldset>

      <label className="block">
        <span className="mb-2 block font-semibold text-navy-900">문의 내용 <span className="text-red-500">*</span></span>
        <textarea className={`${input} min-h-[160px] resize-y`} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="사업 형태, 궁금하신 내용을 자유롭게 적어주세요." />
        <div className="flex justify-between">
          <Err k="message" />
          <span className="ml-auto mt-1.5 text-xs text-slate-400">{form.message.length} / 2,000</span>
        </div>
      </label>

      <div className="rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
        <p className="font-semibold text-slate-700">개인정보 수집·이용 안내</p>
        <p className="mt-1">수집 항목: 이름, 연락처, 이메일 / 목적: 상담 회신 / 보유 기간: 상담 종료 후 1년</p>
        <label className="mt-3 flex items-center gap-2 font-semibold text-slate-700">
          <input type="checkbox" checked={form.agree} onChange={(e) => set("agree", e.target.checked)} className="h-4 w-4 accent-navy-700" />
          위 내용에 동의합니다 <span className="text-red-500">*</span>
        </label>
        <Err k="agree" />
      </div>

      {status === "error" && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{serverMsg}</p>}

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full py-4 text-lg disabled:opacity-60">
        {status === "sending" ? "전송 중..." : "상담 신청하기"}
      </button>
    </form>
  );
}
