import BookItem from '@/components/book-item';
import { BookData } from '@/types';

const API_BASE = process.env.NEXT_PUBLIC_API_SERVER_URL;

export default async function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  const response = await fetch(`${API_BASE}/book/search?q=${searchParams.q}`);

  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const books: BookData[] = await response.json();

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
