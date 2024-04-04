import { Title } from '@mantine/core';
import styles from './TopBar.module.css';

export const TopBar = () => (
  <div className={styles.topBar}>
    <Title order={3}>Calendar</Title>
  </div>
);
