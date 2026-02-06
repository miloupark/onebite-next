import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header>Header</header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>Footer</footer>
    </div>
  );
}
