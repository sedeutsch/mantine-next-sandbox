import { createTheme } from '@mantine/core';

export const theme = createTheme({
  fontFamily: '"Source Sans 3", sans-serif',
  primaryColor: 'blue',
  headings: {
    fontFamily: '"Source Sans 3", sans-serif',
    fontWeight: '600',
    sizes: {
      h1: { fontSize: '34px' },
      h2: { fontSize: '28px' },
      h3: { fontSize: '22px' },
      h4: { fontSize: '18px' },
      h5: { fontSize: '16px' },
      h6: { fontSize: '14px' },
    },
  },
});
