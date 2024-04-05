import { Button, Title, SegmentedControl } from '@mantine/core';
import Day from '../Day';
import Assignments from '../Assignments';
import styles from './Calendar.module.css';

export default function Calendar() {
  return (
    <div className={styles.calendar}>
      <div className={styles.calendarHeader}>
        <Title order={3}>April 2024</Title>
        <SegmentedControl data={['Week', 'Month', 'Year']} />
        <Button size="sm" radius="md">
          Add
        </Button>
      </div>
      <div className={styles.calendarRows}>
        <div className={styles.calendarWeek}>
          <div className={styles.calendarDayOfWeek}>Sun</div>
          <div className={styles.calendarDayOfWeek}>Mon</div>
          <div className={styles.calendarDayOfWeek}>Tue</div>
          <div className={styles.calendarDayOfWeek}>Wed</div>
          <div className={styles.calendarDayOfWeek}>Thu</div>
          <div className={styles.calendarDayOfWeek}>Fri</div>
          <div className={styles.calendarDayOfWeek}>Sat</div>
        </div>
        <div className={styles.calendarRow}>
          <Day dayNumber="29"></Day>
          <Day dayNumber="30"></Day>
          <Day dayNumber="31"></Day>
          <Day dayNumber="1"></Day>
          <Day dayNumber="2">
            <Assignments title="Tackling Science Questions" />
            <Assignments title="Consciousness" />
            <Assignments title="Nucleophilic Substitution" />
          </Day>
          <Day dayNumber="3"></Day>
          <Day dayNumber="4">
            <Assignments title="Nucleophilic Substitution" />
          </Day>
        </div>
        <div className={styles.calendarRow}>
          <Day dayNumber="5"></Day>
          <Day dayNumber="6">
            <Assignments title="Tackling Science Questions" />
            <Assignments title="Nucleophilic Substitution" />
          </Day>
          <Day dayNumber="7"></Day>
          <Day dayNumber="8">
            <Assignments title="Nucleophilic Substitution" />
          </Day>
          <Day dayNumber="9">
            <Assignments title="Consciousness" />
            <Assignments title="Nucleophilic Substitution" />
          </Day>
          <Day dayNumber="10">
            <Assignments title="Tackling Science Questions" />
          </Day>
          <Day dayNumber="11"></Day>
        </div>
        <div className={styles.calendarRow}>
          <Day dayNumber="12">
            <Assignments title="Tackling Science Questions" />
          </Day>
          <Day dayNumber="13"></Day>
          <Day dayNumber="14">
            <Assignments title="Tackling Science Questions" />
            <Assignments title="Nucleophilic Substitution" />
          </Day>
          <Day dayNumber="15">
            <Assignments title="Tackling Science Questions" />
            <Assignments title="Tackling Science Questions" />
            <Assignments title="Nucleophilic Substitution" />
          </Day>
          <Day dayNumber="16">
            <Assignments title="Nucleophilic Substitution" />
          </Day>
          <Day dayNumber="17">
            <Assignments title="Tackling Science Questions" />
            <Assignments title="Tackling Science Questions" />
          </Day>
          <Day dayNumber="18"></Day>
        </div>
        <div className={styles.calendarRow}>
          <Day dayNumber="19"></Day>
          <Day dayNumber="20"></Day>
          <Day dayNumber="21"></Day>
          <Day dayNumber="22"></Day>
          <Day dayNumber="23"></Day>
          <Day dayNumber="24"></Day>
          <Day dayNumber="25"></Day>
        </div>
      </div>
    </div>
  );
}
