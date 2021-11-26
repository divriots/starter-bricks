import * as React from 'react';
import { Stack } from '~/stack';
import { LinearProgress } from '~/progress';

function LinearColor_() {
  return (
    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </Stack>
  );
}

export const LinearColor = () => <LinearColor_ />;
