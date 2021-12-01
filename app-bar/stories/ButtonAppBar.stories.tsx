import * as React from 'react';
import { AppBar } from '~/app-bar';
import { Box } from '~/box';
import { Toolbar } from '@mui/material';
import { Typography } from '~/typography';
import { Button } from '~/button';
import { IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

function ButtonAppBar_() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export const ButtonAppBar = () => <ButtonAppBar_ />;
