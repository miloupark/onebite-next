import ClientComponent from '../../components/client-component';
import ServerComponent from '../../components/server-component';
import styles from './page.module.css';

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
