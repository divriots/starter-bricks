import * as React from 'react';
import { Chip } from '~/chip';
import { Stack } from '~/stack';
import { Face as FaceIcon } from '@mui/icons-material';

function IconChips_() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<FaceIcon />} label="With Icon" />
      <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
    </Stack>
  );
}

export const IconChips = () => <IconChips_ />;
