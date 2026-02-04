import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push('/test');
    // useRouter의 push 메서드를 사용해
    // 버튼 클릭 이벤트로 /test 페이지로 이동한다 (클라이언트 사이드 라우팅)
  };

  return (
    <>
      <header>
        <Link href={'/'}>Logo</Link>
        &nbsp;
        <Link href={'/search'}>search</Link>
        &nbsp;
        <Link href={'/book/1'}>book/1</Link>
        <div>
          <button onClick={onClickButton}>/test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
