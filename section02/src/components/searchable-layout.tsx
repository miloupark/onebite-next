import { ReactNode } from 'react';

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <div>Searchbar</div>
      {children}
    </div>
  );
}
