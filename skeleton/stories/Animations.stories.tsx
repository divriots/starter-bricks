import * as React from 'react';
import { Box } from '~/box';
import { Skeleton } from '~/skeleton';

function Animations_() {
  return (
    <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
}

export const Animations = () => <Animations_ />;
