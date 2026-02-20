import ClientComponent from '@/components/client-component';
import styles from './page.module.css';
import ServerComponent from '@/components/server-component';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>index page</h1>
      <ClientComponent>
        <ServerComponent>
          <></>
        </ServerComponent>
      </ClientComponent>
    </div>
  );
}
