import BookItem from '@/components/book-item';
import style from './page.module.css';
import { BookData } from '@/types';

const API_BASE = process.env.NEXT_PUBLIC_API_SERVER_URL;

// 모든 도서
async function AllBooks() {
  const response = await fetch(`${API_BASE}/book`);
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const allBooks: BookData[] = await response.json();

  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

// 추천 도서
async function RecommendedBooks() {
  const response = await fetch(`${API_BASE}/book/random`);
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const recommendedBooks: BookData[] = await response.json();

  return (
    <div>
      {recommendedBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecommendedBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
}
