import * as React from 'react';
import { Box } from '~/box';
import { Fab } from '~/floating-action-button';
import { Add as AddIcon } from '@mui/icons-material';
import { Edit as EditIcon } from '@mui/icons-material';
import { Favorite as FavoriteIcon } from '@mui/icons-material';
import { Navigation as NavigationIcon } from '@mui/icons-material';

function FloatingActionButtons_() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </Box>
  );
}

export const FloatingActionButtons = () => <FloatingActionButtons_ />;
