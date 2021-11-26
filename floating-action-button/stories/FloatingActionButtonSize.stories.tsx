import * as React from 'react';
import { Box } from '~/box';
import { Fab } from '~/floating-action-button';
import { Add as AddIcon } from '@mui/icons-material';

function FloatingActionButtonSize_() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab size="medium" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
}

export const FloatingActionButtonSize = () => <FloatingActionButtonSize_ />;
