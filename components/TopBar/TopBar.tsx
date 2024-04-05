import { Title } from '@mantine/core';
import styles from './TopBar.module.css';

export const TopBar = () => (
  <div className={styles.topBar}>
    <Title order={5}>Calendar</Title>
  </div>
);
