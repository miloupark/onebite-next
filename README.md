# Onebite Next

> 인프런 강의 「한 입 크기로 잘라먹는 Next.js」  
> Next.js 라우팅 아키텍처 학습 레포지토리

Pages Router와 App Router를 각각 독립적인 프로젝트로 구성하여  
라우팅 구조, 렌더링 방식, 데이터 페칭 전략의 차이를 비교하는 것을 목표로 합니다.

<br>

## 🌍 Deployment

- [📚 Onebite Books - Section02 (Pages Router)](https://onebite-books-page-opal-five.vercel.app/)
<!-- - [section03 (App Router)]() -->

<br>

## 📦 Repository Structure

이 레포지토리는 두 개의 독립적인 Next.js 프로젝트로 구성됩니다.

- `section02`: Pages Router 기반 프로젝트
- `section03`: App Router 기반 프로젝트

각 섹션은 자체적인 의존성과 설정을 가지는 독립 프로젝트입니다.

<br>

## 🚀 Getting Started

```bash
# Pages Router project
cd section02
npm install
npm run dev

# App Router project
cd ../section03
npm install
npm run dev

```

<br>

## 📚 Learning Focus

### Section 02 – Page Router

- 파일 시스템 라우팅
- SSG / SSR / ISR 학습
- Data Fetching (getStaticProps / getServerSideProps)

### Section 03 – App Router

- Server / Client Component 구조
- Layout & Nested Routing
- Streaming & Data Fetching

<br>

## 🗂 Folder Structure

```bash
onebite-next
├── section02  # Page Router 프로젝트
└── section03  # App Router 프로젝트
```
