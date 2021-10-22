import * as React from 'react';
import { Chip } from '~/chip';
import { Stack } from '@mui/material';

export default function SizesChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Small" size="small" />
      <Chip label="Small" size="small" variant="outlined" />
    </Stack>
  );
}
