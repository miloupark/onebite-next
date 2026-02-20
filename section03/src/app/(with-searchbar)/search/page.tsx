import ClientComponent from '@/components/client-component';

// 클라이언트 컴포넌트와 서버 컴포넌트를 모두 포함하는 혼합된 페이지
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  return (
    <div>
      Search 페이지 {q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
