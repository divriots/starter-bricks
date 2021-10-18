import * as React from 'react';
import { Chip } from '@mui/material';
import { Stack } from '@mui/material';

export default function BasicChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
    </Stack>
  );
}
