// URL의 쿼리 스트링 값에 접근하기 위해 useRouter 훅 사용
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  // router.query에는 쿼리 스트링이 key-value 형태의 객체로 저장된다
  // ex. ?q=react → { q: 'react' }
  const { q } = router.query;

  return <h1>Search {q}</h1>;
}
