export const categories = ["기장대리", "종합소득세", "법인세", "상속·증여", "창업 컨설팅", "세무조사 대응", "기타"] as const;

export type ContactInput = {
  name: string;
  phone: string;
  email: string;
  category: string;
  message: string;
  agree: boolean;
  website?: string; // honeypot
};

export type FieldErrors = Partial<Record<keyof ContactInput, string>>;

export function validateContact(input: Partial<ContactInput>): FieldErrors {
  const e: FieldErrors = {};
  const name = (input.name ?? "").trim();
  const phone = (input.phone ?? "").replace(/[^0-9]/g, "");
  const email = (input.email ?? "").trim();
  const message = (input.message ?? "").trim();

  if (name.length < 2) e.name = "이름을 2자 이상 입력해 주세요.";
  if (!/^0\d{8,10}$/.test(phone)) e.phone = "올바른 연락처를 입력해 주세요.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "올바른 이메일 형식이 아닙니다.";
  if (!categories.includes(input.category as (typeof categories)[number])) e.category = "상담 분야를 선택해 주세요.";
  if (message.length < 10) e.message = "문의 내용을 10자 이상 입력해 주세요.";
  if (message.length > 2000) e.message = "문의 내용은 2,000자 이내로 입력해 주세요.";
  if (!input.agree) e.agree = "개인정보 수집·이용에 동의해 주세요.";
  return e;
}
