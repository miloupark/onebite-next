import { BookData } from '@/types';

// 랜덤 도서 불러오기 (추천 도서)
export default async function fetchRandomBooks(): Promise<BookData[]> {
  const url = `https://onebite-books-server-khaki-five.vercel.app/book/random`;

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
