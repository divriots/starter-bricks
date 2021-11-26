import * as React from 'react';
import { Chip } from '~/chip';
import { Stack } from '~/stack';

function BasicChips_() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
    </Stack>
  );
}

export const BasicChips = () => <BasicChips_ />;
