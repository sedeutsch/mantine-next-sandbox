import { MantineProvider, Container } from '@mantine/core';
import SidePanel from '../components/SidePanel';
import Calendar from '../components/Calendar';
import TopBar from '../components/TopBar';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <TopBar />
      <Container px={32} size="90rem">
        <Calendar />
      </Container>
      <SidePanel />
    </MantineProvider>
  );
}
