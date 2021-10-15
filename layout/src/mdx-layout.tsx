import * as React from 'react';
import {
  CssLayout,
  getInitialColorScheme,
} from '@divriots/dockit-react/mdx-layout-css';
import { Playground } from '@divriots/dockit-react/playground';
import { createTheme } from '~/theme';
import { ThemeProvider, PaletteMode } from '@mui/material';
import { Logo } from './Logo';

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
          <div style={{ width: '50px', height: '50px' }}>
            <Logo />
          </div>
        }
        {...props}
      />
    </ThemeProvider>
  );
};
