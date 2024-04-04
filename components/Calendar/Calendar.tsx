import { Button } from '@mantine/core';
import Day from '../Day';
import styles from './Calendar.module.css';

export const Calendar = () => (
  <div className={styles.calendar}>
    <div className={styles.calendarHeader}>
      <h3>April 2024</h3>
      <Button size="sm" radius="md">
        Add
      </Button>
    </div>
    <div className={styles.calendarRows}>
      <div className={styles.calendarWeek}>Sun Mon Tue Wed Thu Fri Sat</div>
      <div className={styles.calendarRow}>
        <Day dayNumber="29" />
        <Day dayNumber="30" />
        <Day dayNumber="31" />
        <Day dayNumber="1" />
        <Day dayNumber="2" />
        <Day dayNumber="3" />
        <Day dayNumber="4" />
      </div>
      <div className={styles.calendarRow}>
        <Day dayNumber="5" />
        <Day dayNumber="6" />
        <Day dayNumber="7" />
        <Day dayNumber="8" />
        <Day dayNumber="9" />
        <Day dayNumber="10" />
        <Day dayNumber="11" />
      </div>
      <div className={styles.calendarRow}>
        <Day dayNumber="12" />
        <Day dayNumber="13" />
        <Day dayNumber="14" />
        <Day dayNumber="15" />
        <Day dayNumber="16" />
        <Day dayNumber="17" />
        <Day dayNumber="18" />
      </div>
      <div className={styles.calendarRow}>
        <Day dayNumber="19" />
        <Day dayNumber="20" />
        <Day dayNumber="21" />
        <Day dayNumber="22" />
        <Day dayNumber="23" />
        <Day dayNumber="24" />
        <Day dayNumber="25" />
      </div>
    </div>
  </div>
);
