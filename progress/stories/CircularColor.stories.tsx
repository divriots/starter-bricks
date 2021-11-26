import * as React from 'react';
import { Stack } from '~/stack';
import { CircularProgress } from '~/progress';

function CircularColor_() {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  );
}

export const CircularColor = () => <CircularColor_ />;
