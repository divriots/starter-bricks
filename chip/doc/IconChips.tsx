import * as React from 'react';
import { Chip } from '~/chip';

import { Stack } from '@mui/material';
import { Face as FaceIcon } from '@mui/icons-material';

export default function IconChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<FaceIcon />} label="With Icon" />
      <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
    </Stack>
  );
}
