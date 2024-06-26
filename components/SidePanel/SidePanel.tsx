import { Title, Text, SegmentedControl, Input } from '@mantine/core';
import styles from './SidePanel.module.css';

export default function SidePanel() {
  return (
    <div className={styles.sidePanel}>
      <div className={styles.sidePanelHeader}>
        <Title order={5}>Add to Study Plan</Title>
      </div>
      <div className={styles.sidePanelContent}>
        <SegmentedControl data={['Activity', 'Time Off']} w="100%" mb={16} />
        <Input placeholder="Search" mb={16} />
        <Text size="sm">Can you see something like this</Text>
      </div>
    </div>
  );
}
