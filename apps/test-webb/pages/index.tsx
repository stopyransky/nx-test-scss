import styles from './index.module.scss';
import { SharedUi } from '@test-nx/shared-ui';

export function Index() {
  return (
    <div className={styles.page}>
      <SharedUi />
    </div>
  );
}

export default Index;
