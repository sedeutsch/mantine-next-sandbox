import { MantineProvider } from '@mantine/core';
import SidePanel from '../components/SidePanel';
import Calendar from '../components/Calendar';
import TopBar from '../components/TopBar';

export default function App() {
  return (
    <MantineProvider>
      <TopBar />
      <Calendar />
      <SidePanel />
    </MantineProvider>
  );
}
