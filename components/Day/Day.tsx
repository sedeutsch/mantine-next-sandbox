import React from 'react';
import styles from './Day.module.css';

interface DayProps {
  dayNumber: string;
}

export const Day: React.FC<DayProps> = ({ dayNumber }) => (
  <div className={styles.day}>
    <div className={styles.dayNumber}>{dayNumber}</div>
  </div>
);
