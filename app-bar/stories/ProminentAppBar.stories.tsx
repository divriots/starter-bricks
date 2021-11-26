import * as React from 'react';
import { styled } from '@mui/material';
import { AppBar } from '~/app-bar';
import { Box } from '~/box';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import { Typography } from '~/typography';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Search as SearchIcon } from '@mui/icons-material';
import { MoreVert as MoreIcon } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

function ProminentAppBar_() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
          >
            MUI
          </Typography>
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export const ProminentAppBar = () => <ProminentAppBar_ />;
