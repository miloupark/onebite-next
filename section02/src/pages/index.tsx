import SearchableLayout from '@/components/searchable-layout';
import style from './index.module.css';
import { ReactNode, useEffect } from 'react';
import books from '@/mock/books.json';
import BookItem from '@/components/book-items';
import { InferGetServerSidePropsType } from 'next';

// 페이지 요청 시 서버에서 실행되며, 이 페이지를 SSR로 동작하게 만든다.
export const getServerSideProps = () => {
  const data = 'Hello';

  // 반드시 { props: { ... } } 형태의 객체를 반환해야 한다.
  return {
    props: {
      data,
    },
  };
};

// SSR 페이지 컴포넌트
// - 서버에서 한 번, 브라우저에서 Hydration 시 한 번 실행된다.
export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data);

  useEffect(() => {
    // 브라우저 전용 API는 useEffect 내부에서만 사용
    console.log(window);
  }, []);

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
