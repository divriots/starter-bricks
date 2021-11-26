import * as React from 'react';
import { Chip } from '~/chip';
import { Stack } from '~/stack';

function SizesChips_() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Small" size="small" />
      <Chip label="Small" size="small" variant="outlined" />
    </Stack>
  );
}

export const SizesChips = () => <SizesChips_ />;
