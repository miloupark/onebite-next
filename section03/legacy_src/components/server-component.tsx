import { ReactNode } from 'react';

export default function ServerComponent({ children }: { children: ReactNode }) {
  console.log('서버 컴포넌트');
  return <div>{children}</div>;
}
