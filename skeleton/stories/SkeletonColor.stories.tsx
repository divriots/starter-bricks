import * as React from 'react';
import { Skeleton } from '~/skeleton';
import { Box } from '~/box';

function SkeletonColor_() {
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

export const SkeletonColor = () => <SkeletonColor_ />;
