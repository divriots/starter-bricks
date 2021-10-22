import * as React from 'react';
import { Skeleton } from '~/skeleton';
import { Box } from '@mui/material';

export default function SkeletonColor() {
  return (
    <Box
      sx={{
        bgcolor: '#121212',
        p: 8,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Skeleton
        sx={{ bgcolor: 'grey.900' }}
        variant="rectangular"
        width={210}
        height={118}
      />
    </Box>
  );
}
