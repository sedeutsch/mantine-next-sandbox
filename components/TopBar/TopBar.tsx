import { Title } from '@mantine/core';
import styles from './TopBar.module.css';

function TopBar() {
  return (
    <div className={styles.topBar}>
      <Title order={5}>Calendar</Title>
    </div>
  );
}

export default TopBar;
