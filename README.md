# 📚 NLP Paper News

AI, NLP, ML 분야의 최신 논문과 뉴스를 큐레이션합니다.

🌐 **웹사이트**: [https://chanmuzi.github.io/temp-news-moltbot](https://chanmuzi.github.io/temp-news-moltbot)

## ✨ Features

- 📜 **Papers**: 최신 연구 논문 정리
- 🧑🏻‍💻 **Dev**: 개발자 블로그 & GitHub 소식
- 🗞️ **News**: AI/ML 뉴스
- 🔍 **검색**: 키워드, 기관, 연도별 검색
- 🌙 **다크모드**: 눈이 편한 다크테마 지원

## 📊 Stats

- **총 항목**: 1,651+
- **기간**: 2024 ~ 현재

## 🛠️ 항목 추가 방법

### 1. JSON 직접 수정

`data/items.json` 파일에 항목을 추가합니다:

```json
{
  "id": "unique-id",
  "date": "2026-02-W01",
  "year": "2026",
  "month": "2",
  "week": "1",
  "type": "paper",
  "org": "Organization Name",
  "title": "Paper Title",
  "url": "https://arxiv.org/abs/...",
  "bullets": [
    { "text": "주요 내용 1", "level": 1 },
    { "text": "세부 내용", "level": 2 }
  ],
  "tags": ["tag1", "tag2"]
}
```

### 2. CLI 스크립트 사용

```bash
node scripts/add-item.mjs \
  --type paper \
  --org "OpenAI" \
  --title "New Research" \
  --url "https://..." \
  --bullets "주요 내용 1" "세부 내용"
```

## 🚀 로컬 개발

```bash
# 의존성 설치
cd web && npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

## 📁 프로젝트 구조

```
├── data/
│   └── items.json          # 핵심 데이터 (source of truth)
├── web/                    # Astro 웹사이트
│   ├── src/
│   │   ├── layouts/
│   │   ├── pages/
│   │   └── components/
│   └── package.json
├── scripts/                # 유틸리티 스크립트
└── .github/workflows/      # 자동 배포
```

## 📝 License

MIT

---

Made with ❤️ by [chanmuzi](https://github.com/chanmuzi)
