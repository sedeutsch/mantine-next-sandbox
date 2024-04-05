import { useState } from 'react';
import { MantineProvider, Flex, Stack } from '@mantine/core';
import SidePanel from '../components/SidePanel';
import Calendar from '../components/Calendar';
import TopBar from '../components/TopBar';
import { theme } from './theme';

export default function App() {
  // const [isOpen, setIsOpen] = useState(true);
  // onClick={() => setIsOpen(!isOpen)}
  // style={{ width: isOpen ? '320px' : '0px' }}

  return (
    <MantineProvider theme={theme}>
      <Flex>
        <Stack w="100%" gap="xl">
          <TopBar />
          <Calendar />
        </Stack>
        <SidePanel />
      </Flex>
    </MantineProvider>
  );
}
