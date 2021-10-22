import * as React from 'react';
import { Box } from '@mui/material';
import { LinearProgress } from '~/progress';

export default function LinearIndeterminate() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
}
