import * as React from 'react';
import { Box } from '~/box';
import { LinearProgress } from '~/progress';

function LinearIndeterminate_() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
}

export const LinearIndeterminate = () => <LinearIndeterminate_ />;
