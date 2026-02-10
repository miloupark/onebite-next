import { BookData } from '@/types';

// 등록된 모든 도서
export default async function fetchBooks(): Promise<BookData[]> {
  const url = `http://localhost:12345/book`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
