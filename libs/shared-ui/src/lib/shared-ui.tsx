import styles from './shared-ui.module.scss';

/* eslint-disable-next-line */
export interface SharedUiProps {}

export function SharedUi(props: SharedUiProps) {
  return (
    <div className={styles.sharedUi}>
      <h1>Welcome to SharedUi!</h1>
    </div>
  );
}

export default SharedUi;
