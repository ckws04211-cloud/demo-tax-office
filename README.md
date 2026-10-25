# 바름 세무회계 (포트폴리오 데모)

세무회계 사무소용 5페이지 반응형 홈페이지 데모입니다. 실제 사무소가 아닙니다.

## 페이지
- `/` 메인 · `/about` 사무소 소개 · `/services` 업무 분야 · `/location` 오시는 길 · `/contact` 상담 문의

## 기능
- 상담 문의 폼: 입력 검증, 연락처 자동 하이픈, 스팸 방지(허니팟 + IP당 분당 5회 제한)
- 메일 발송: `RESEND_API_KEY`, `CONTACT_TO_EMAIL` 환경변수가 있으면 Resend로 발송, 없으면 데모 모드(발송 없이 성공 처리)
- SEO: 메타태그, Open Graph, sitemap.xml (데모라 검색 노출은 막아둠: `robots: index false`)
- 모바일 하단 고정 전화/문의 바, 스크롤 등장 애니메이션

## 실행
```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## 배포 (Vercel)
1. GitHub에 push
2. vercel.com → Add New Project → 저장소 선택 → Deploy
3. (선택) Settings → Environment Variables 에 `RESEND_API_KEY`, `CONTACT_TO_EMAIL` 추가

## 스택
Next.js 15 (App Router) · TypeScript · Tailwind CSS 3
