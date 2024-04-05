import { MantineProvider, Container } from '@mantine/core';
import SidePanel from '../components/SidePanel';
import Calendar from '../components/Calendar';
import TopBar from '../components/TopBar';
import { theme } from './theme';
import './styles.css';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <div className="app">
        <div className="content">
          <TopBar />
          <Container px={32} size="90rem">
            <Calendar />
          </Container>
        </div>
        <SidePanel />
      </div>
    </MantineProvider>
  );
}
