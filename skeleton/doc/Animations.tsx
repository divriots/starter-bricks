import * as React from 'react';
import { Box } from '~/box';
import { Skeleton } from '~/skeleton';

export default function Animations() {
  return (
    <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
}
