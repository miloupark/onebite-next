import { useRouter } from 'next/router';

export default function Page() {
  // [[...id]]: 선택적 + 다중 URL 파라미터를 받는 동적 라우트
  const router = useRouter();
  const { id } = router.query;

  // 현재 예제에서는 전달된 id 값을 단순히 확인하는 용도로 사용
  return <h1>Book {id}</h1>;
}
