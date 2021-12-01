import * as React from 'react';
import { CircularProgress } from '~/progress';
import { Box } from '~/box';

function CircularIndeterminate_() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}

export const CircularIndeterminate = () => <CircularIndeterminate_ />;
