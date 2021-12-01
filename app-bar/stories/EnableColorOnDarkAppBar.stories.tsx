import * as React from 'react';
import { AppBar } from '~/app-bar';
import { Stack } from '~/stack';
import { Toolbar } from '@mui/material';
import { Typography } from '~/typography';
import { IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material';

function appBarLabel(label: string) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function EnableColorOnDarkAppBar_() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" enableColorOnDark>
          {appBarLabel('enableColorOnDark')}
        </AppBar>
        <AppBar position="static" color="primary">
          {appBarLabel('default')}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}

export const EnableColorOnDarkAppBar = () => <EnableColorOnDarkAppBar_ />;
