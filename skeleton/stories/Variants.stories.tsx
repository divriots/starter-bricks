import * as React from 'react';
import { Skeleton } from '~/skeleton';
import { Stack } from '~/stack';

function Variants_() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
  );
}

export const Variants = () => <Variants_ />;
