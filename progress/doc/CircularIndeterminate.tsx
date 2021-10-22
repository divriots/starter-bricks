import * as React from 'react';
import { CircularProgress } from '~/progress';
import { Box } from '~/box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
