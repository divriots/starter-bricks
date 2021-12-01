import * as React from 'react';
import { Box } from '~/box';
import { Fab } from '~/floating-action-button';
import { Navigation as NavigationIcon } from '@mui/icons-material';

function FloatingActionButtonExtendedSize_() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab variant="extended" size="small" color="primary" aria-label="add">
        <NavigationIcon sx={{ mr: 1 }} />
        Extended
      </Fab>
      <Fab variant="extended" size="medium" color="primary" aria-label="add">
        <NavigationIcon sx={{ mr: 1 }} />
        Extended
      </Fab>
      <Fab variant="extended" color="primary" aria-label="add">
        <NavigationIcon sx={{ mr: 1 }} />
        Extended
      </Fab>
    </Box>
  );
}

export const FloatingActionButtonExtendedSize = () => (
  <FloatingActionButtonExtendedSize_ />
);
