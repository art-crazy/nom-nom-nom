import styles from './Home.module.scss';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';

export default function Home() {
  return (
    <div className={styles.home}>
      <Breadcrumbs
        title="Главная"
        paths={[]}
      />
    </div>
  );
}
