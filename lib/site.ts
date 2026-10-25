export const site = {
  name: "바름 세무회계",
  nameEn: "BAREUM TAX & ACCOUNTING",
  tel: "02-000-0000",
  email: "contact@example.com",
  address: "서울특별시 강남구 테헤란로 000, 바름빌딩 7층",
  hours: "평일 09:00 - 18:00 (점심 12:00 - 13:00)",
  description: "기장대리부터 상속·증여까지, 바르게 계산하고 끝까지 책임지는 세무회계 사무소입니다.",
};

export const nav = [
  { href: "/about", label: "사무소 소개" },
  { href: "/services", label: "업무 분야" },
  { href: "/location", label: "오시는 길" },
  { href: "/contact", label: "상담 문의" },
];

export type Service = { slug: string; title: string; summary: string; points: string[]; target: string };

export const services: Service[] = [
  {
    slug: "bookkeeping",
    title: "기장대리",
    summary: "매월 장부 작성과 부가세·원천세 신고를 대신해 드립니다.",
    points: ["월별 장부 작성 및 결산", "부가가치세·원천세 신고", "4대보험 취득·상실 신고", "월간 손익 리포트 제공"],
    target: "개인사업자, 중소법인",
  },
  {
    slug: "income-tax",
    title: "종합소득세",
    summary: "프리랜서·임대사업자·개인사업자의 종합소득세를 절세 관점에서 신고합니다.",
    points: ["경비 검토 및 절세 항목 점검", "간편장부·복식부기 신고", "성실신고확인 대상 대응", "환급 가능 여부 검토"],
    target: "개인사업자, 프리랜서, 임대사업자",
  },
  {
    slug: "corporate-tax",
    title: "법인세",
    summary: "법인 결산부터 세무조정, 법인세 신고까지 한 번에 처리합니다.",
    points: ["재무제표 작성 및 결산", "세무조정 및 세액공제 검토", "가지급금·가수금 관리", "중간예납 신고"],
    target: "중소법인, 스타트업",
  },
  {
    slug: "inheritance",
    title: "상속·증여",
    summary: "재산 이전 계획부터 신고까지, 가족의 상황에 맞는 방법을 함께 설계합니다.",
    points: ["사전 증여 계획 수립", "상속재산 평가 및 신고", "부동산 증여 세액 시뮬레이션", "세무조사 대응"],
    target: "개인, 가족 법인",
  },
  {
    slug: "startup",
    title: "창업 컨설팅",
    summary: "사업자 유형 선택부터 초기 세무 세팅까지 창업 단계를 돕습니다.",
    points: ["개인·법인 사업자 선택 상담", "사업자등록 대행", "정부지원금·세액감면 검토", "초기 회계 시스템 세팅"],
    target: "예비 창업자",
  },
  {
    slug: "audit",
    title: "세무조사 대응",
    summary: "조사 통지부터 종결까지, 사전 준비와 현장 대응을 함께합니다.",
    points: ["조사 대상 기간 자료 사전 점검", "소명자료 작성", "현장 조사 입회", "불복 절차 검토"],
    target: "개인사업자, 법인",
  },
];
