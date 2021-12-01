import * as React from 'react';
import { Chip } from '~/chip';
import { Stack } from '~/stack';

function ClickableLinkChips_() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Clickable Link" component="a" href="#basic-chip" clickable />
      <Chip
        label="Clickable Link"
        component="a"
        href="#basic-chip"
        variant="outlined"
        clickable
      />
    </Stack>
  );
}

export const ClickableLinkChips = () => <ClickableLinkChips_ />;
