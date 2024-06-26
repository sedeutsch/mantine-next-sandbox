import React from 'react';
import styles from './Day.module.css';

interface DayProps {
  dayNumber?: string;
  children?: React.ReactNode;
}

export const Day: React.FC<DayProps> = ({ dayNumber, children }) => {
  return (
    <div className={styles.day}>
      <div className={styles.dayNumber}>{dayNumber}</div>
      <div className={styles.assignments}>{children}</div>
    </div>
  );
};
