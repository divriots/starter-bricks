import * as React from 'react';
import { Box } from '@mui/material';
import { Paper } from '~/paper';

export default function Variants() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper variant="outlined" />
      <Paper variant="outlined" square />
    </Box>
  );
}
