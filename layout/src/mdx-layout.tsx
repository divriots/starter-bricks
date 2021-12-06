import * as React from 'react';
import {
  CssLayout,
  getInitialColorScheme,
} from '@divriots/dockit-react/mdx-layout-css';
import { Playground } from '@divriots/dockit-react/playground';
import { createTheme } from '~/theme';
import { ThemeProvider, PaletteMode } from '@mui/material';
import { Box } from '~/box';
import { Logo } from './Logo';
import './layout.css';

export const MdxLayout = (props) => {
  const [mode, setMode] = React.useState<PaletteMode>(
    getInitialColorScheme() as PaletteMode
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssLayout
        components={{ Playground }}
        onSwitch={setMode}
        logo={
          <Box
            sx={{
              width: 120,
              color: ({ palette }) =>
                `primary.${mode === 'dark' ? 'light' : 'dark'}`,
            }}
          >
            <Logo />
          </Box>
        }
        {...props}
      />
    </ThemeProvider>
  );
};
