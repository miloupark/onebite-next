import { BookData } from '@/types';

// 등록된 모든 도서
export default async function fetchBooks(q?: string): Promise<BookData[]> {
  let url = `https://onebite-books-server-khaki-five.vercel.app/book`;

  if (q) {
    url += `/search?q=${q}`;
  }

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
